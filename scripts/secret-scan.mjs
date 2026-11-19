#!/usr/bin/env node
/**
 * Secret scanner. No dependencies, so the git hook and the Claude commit gate
 * can run it before `pnpm install`.
 *
 *   node scripts/secret-scan.mjs            # staged changes (default, used by hooks)
 *   node scripts/secret-scan.mjs --tree     # every tracked file at HEAD + staged
 *   node scripts/secret-scan.mjs --history  # every blob ever committed (slow)
 *   node scripts/secret-scan.mjs --commit <sha>  # what one commit adds (used by the ref hooks)
 *
 * Exits 1 on any finding. Keys are masked in output. To allow a known-safe
 * line (e.g. a documented example), add `secret-scan:allow` on that line.
 *
 * Why this exists: a Resend key reached a public repo through committed
 * `.vercel/output` build files and was used to send ~60k phishing emails.
 */
import { execFileSync } from 'node:child_process';

// Look at the real objects. `git replace` would otherwise show the gate a decoy
// while push and checkout use the original.
process.env.GIT_NO_REPLACE_OBJECTS = '1';

const argv = process.argv.slice(2);
const commitSha = argv.includes('--commit') ? argv[argv.indexOf('--commit') + 1] : null;
const mode = commitSha ? 'commit' : argv.includes('--history') ? 'history' : argv.includes('--tree') ? 'tree' : 'staged';

// Provider keys with a recognisable shape. Keep these specific: false positives
// train people to bypass the gate.
const PATTERNS = [
  ['Resend API key', /\bre_[A-Za-z0-9]{8}_[A-Za-z0-9]{20,}\b/],
  ['AWS access key', /\b(AKIA|ASIA)[0-9A-Z]{16}\b/],
  ['Google API key', /\bAIza[0-9A-Za-z_-]{35}(?![A-Za-z0-9_-])/],
  ['GitHub token', /\b(ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{36,}\b|\bgithub_pat_[A-Za-z0-9_]{60,}\b/],
  ['Anthropic key', /\bsk-ant-[A-Za-z0-9_-]{30,}/],
  ['OpenAI key', /\bsk-(proj-|svcacct-)?[A-Za-z0-9_-]{32,}\b/],
  ['Stripe secret key', /\b(sk|rk)_live_[A-Za-z0-9]{20,}\b/],
  ['SendGrid key', /\bSG\.[A-Za-z0-9_-]{22}\.[A-Za-z0-9_-]{43}\b/],
  ['Slack token', /\bxox[abprs]-[A-Za-z0-9-]{10,}/],
  // Site keys share this shape. Both belong in env vars (PUBLIC_RECAPTCHA_KEY / RECAPTCHA_SERVER_KEY).
  ['reCAPTCHA key', /\b6L[A-Za-z0-9_-]{38}(?![A-Za-z0-9_-])/],
  ['Vercel token', /\bvercel_[A-Za-z0-9]{24,}\b/],
  ['npm token', /\bnpm_[A-Za-z0-9]{36}\b/],
  ['Google OAuth client secret', /\bGOCSPX-[A-Za-z0-9_-]{28}(?![A-Za-z0-9_-])/],
  ['Secret in query string', /(?:[?&]|&amp;)(secret|api[_-]?key|token|access[_-]?token|client[_-]?secret)=[A-Za-z0-9_\-.]{20,}/i],
  ['Cloudflare API token', /\b(CF|CLOUDFLARE)_API_TOKEN\s*[:=]\s*['"]?[A-Za-z0-9_-]{40}\b/],
  ['Private key block', /-----BEGIN ([A-Z]+ )?PRIVATE KEY-----/],
  ['JWT', /\beyJ[A-Za-z0-9_-]{10,}\.eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/],
  ['Credential in URL', /\b[a-z][a-z0-9+.-]*:\/\/[^\s:/@'"]+:[^\s@/'"]{6,}@[^\s'"]+/i],
  // Generic `SECRET = "literal"` assignments. Requires a long literal with
  // letters and digits so `apiKey = import.meta.env.X` and placeholders pass.
  [
    'Hardcoded secret assignment',
    /\b[A-Za-z_]*(api[_-]?key|secret|token|passw(or)?d|private[_-]?key|auth)[A-Za-z_]*\s*[:=]\s*['"`](?=[^'"`]*\d)(?=[^'"`]*[A-Za-z])[A-Za-z0-9_\-+/=.]{20,}['"`]/i,
  ],
];

const PLACEHOLDER = /REPLACE_ME|your[_-]?(api[_-]?)?key|example|xxxxx|<[^>]+>|\.\.\.|changeme|dummy|placeholder/i;

// Files that must never be committed, whatever they contain.
const FORBIDDEN_PATHS = [
  [/(^|\/)\.env(\.(?!example$)[^/]*)?$/, 'env file (only .env.example may be committed)'],
  [/(^|\/)\.vercel\//, 'Vercel build output (bundles env values into JS)'],
  [/(^|\/)(dist|\.output|\.netlify)\//, 'build output'],
  [/\.(pem|key|p12|pfx|keystore|jks)$/, 'key/certificate file'],
  [/(^|\/)id_(rsa|ed25519|ecdsa)$/, 'SSH private key'],
  [/(^|\/)(credentials|service-account)[^/]*\.json$/, 'credentials file'],
];

const git = (args, opts = {}) =>
  execFileSync('git', ['-c', 'core.quotePath=false', ...args], { encoding: 'utf8', maxBuffer: 1 << 30, stdio: ['ignore', 'pipe', 'pipe'], ...opts });

const mask = (s) => (s.length <= 12 ? s.slice(0, 4) + '…' : s.slice(0, 10) + '…' + s.slice(-2));

const findings = [];

function scanLine(file, lineNo, line, where = '') {
  if (line.includes('secret-scan:allow')) return;
  for (const [name, re] of PATTERNS) {
    // Every match on the line, so one exempt match can't hide a real one next to it.
    for (const m of line.matchAll(new RegExp(re.source, re.flags.replace('g', '') + 'g'))) {
      if (name === 'Hardcoded secret assignment' && PLACEHOLDER.test(m[0])) continue;
      if (name === 'Credential in URL' && PLACEHOLDER.test(m[0])) continue;
      // Firebase/GCS public download links (`?alt=media&token=<uuid>`) are meant to be shared.
      if (
        name === 'Secret in query string' &&
        /token=[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(m[0]) &&
        /alt=media$/i.test(line.slice(0, m.index))
      )
        continue;
      findings.push({ file, lineNo, name, sample: mask(m[0]), where });
      break; // one finding per pattern per line is enough
    }
  }
}

function checkPath(file, where = '') {
  for (const [re, why] of FORBIDDEN_PATHS) {
    if (re.test(file)) findings.push({ file, lineNo: 0, name: `Forbidden file: ${why}`, sample: '', where });
  }
}

if (mode === 'staged' || mode === 'commit') {
  // Staged: index vs HEAD. Commit: the commit vs its first parent (or the empty tree for a root commit).
  let range = ['--cached'];
  if (mode === 'commit') {
    let parent = '4b825dc642cb6eb9a060e54bf8d69288fbee4904'; // empty tree
    try {
      parent = git(['rev-parse', '--verify', '-q', `${commitSha}^`]).trim() || parent;
    } catch {}
    range = [parent, commitSha];
  }
  const files = git(['diff', ...range, '--name-only', '-z', '--diff-filter=ACMRT']).split('\0').filter(Boolean);
  files.forEach((f) => checkPath(f));
  // -U0: only added lines, with hunk headers for line numbers.
  const diff = git(['diff', ...range, '-U0', '--no-color', '--no-textconv', '--diff-filter=ACMRT', '--no-ext-diff', '--text']);
  let file = null;
  let lineNo = 0;
  let inHeader = false; // `+++ ` only means a file header between `diff --git` and the first `@@`
  for (const raw of diff.split('\n')) {
    if (raw.startsWith('diff --git ')) {
      inHeader = true;
    } else if (inHeader && raw.startsWith('+++ ')) {
      file = raw.slice(4).replace(/^b\//, '');
    } else if (raw.startsWith('@@')) {
      inHeader = false;
      lineNo = Number(raw.match(/\+(\d+)/)?.[1] ?? 0);
    } else if (!inHeader && raw.startsWith('+') && file) {
      scanLine(file, lineNo, raw.slice(1));
      lineNo++;
    }
  }
} else if (mode === 'tree') {
  const files = git(['ls-files', '--cached', '-z']).split('\0').filter(Boolean);
  for (const f of files) {
    checkPath(f);
    let content;
    try {
      content = git(['show', `:${f}`]);
    } catch {
      continue;
    }
    if (content.includes('\0')) continue; // binary
    content.split('\n').forEach((l, i) => scanLine(f, i + 1, l));
  }
} else {
  // Every blob in history, deduplicated. Then map hits back to commits.
  const objects = git(['cat-file', '--batch-all-objects', '--batch-check=%(objecttype) %(objectname) %(objectsize)'])
    .split('\n')
    .filter((l) => l.startsWith('blob '))
    .map((l) => l.split(' '))
    .filter(([, , size]) => Number(size) < 5_000_000)
    .map(([, sha]) => sha);
  const seen = new Set();
  for (const sha of objects) {
    const content = git(['cat-file', 'blob', sha]);
    if (content.includes('\0')) continue;
    content.split('\n').forEach((l, i) => {
      const before = findings.length;
      scanLine(`blob ${sha.slice(0, 8)}`, i + 1, l);
      for (const f of findings.slice(before)) {
        const key = f.name + f.sample;
        if (seen.has(key)) {
          findings.splice(findings.indexOf(f), 1);
          continue;
        }
        seen.add(key);
        const m = PATTERNS.find(([n]) => n === f.name)?.[1];
        const literal = m ? l.match(m)?.[0] : null;
        if (literal) {
          const first = git(['log', '--all', '--reverse', '--format=%h %ad %s', '--date=short', '-S', literal]).split('\n')[0];
          const paths = git(['log', '--all', '-S', literal, '--name-only', '--format=']).split('\n').filter(Boolean);
          f.where = `first: ${first} | paths: ${[...new Set(paths)].slice(0, 3).join(', ')}`;
        }
      }
    });
  }
}

if (!findings.length) {
  console.log(`secret-scan (${mode}${commitSha ? ' ' + commitSha.slice(0, 8) : ''}): clean`);
  process.exit(0);
}

console.error(`\nsecret-scan (${mode}): ${findings.length} finding(s)\n`);
for (const f of findings) {
  const loc = f.lineNo ? `${f.file}:${f.lineNo}` : f.file;
  console.error(`  ✗ ${f.name}\n    ${loc}${f.sample ? `  ${f.sample}` : ''}${f.where ? `\n    ${f.where}` : ''}`);
}
console.error(
  '\nMove secrets to env vars (Vercel env / .env, never committed). If a real key was ever committed, ' +
    'treat it as leaked: revoke and rotate it, even after removing it from the code.\n' +
    'False positive? Add `secret-scan:allow` to that line.\n',
);
process.exit(1);
