#!/usr/bin/env node
/**
 * PreToolUse(Bash) guard. Exit 2 blocks the command; stderr goes to Claude.
 *
 * The commit gate lives in git hooks (.githooks/), which see the exact commits
 * being made no matter how the command was written:
 *   prepare-commit-msg      `git commit`: secret scan + sign-offs (+ no amend)
 *   reference-transaction   every branch/HEAD update: new commits need scan + sign-offs
 *   pre-push                nothing reaches the remote unless it's on a gated branch
 * This guard only stops what would switch those hooks off, and checks they're installed:
 *   - changing core.hooksPath (other than to .githooks)
 *   - injecting config: `-c include.path=` / includeIf / GIT_CONFIG_* / --config-env
 *   - `git push --no-verify` (also abbreviated), send-pack / http-push (skip pre-push)
 *   - writing refs/remotes or refs/tags by hand (the ref gate trusts remote-tracking
 *     refs), fetching into refs/remotes or refs/heads from anywhere but origin, and
 *     `git replace` (shows tools a decoy object while push uses the real one)
 *
 * Matching uses the command text with quotes and backslashes removed, so
 * "core.hooksPath" or hooks''Path can't hide. It only looks at git config-ish
 * contexts, so grepping docs or writing commit messages about these words is fine.
 * Obfuscation via variables, interpreters or editing .git/config directly is out
 * of scope: the reviewers are the backstop for that.
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const PROJECT = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const HOOKS = ['prepare-commit-msg', 'reference-transaction', 'pre-push'];
const block = (msg) => {
  process.stderr.write(`commit-gate: ${msg}\n`);
  process.exit(2);
};

let cmd = '';
try {
  cmd = JSON.parse(readFileSync(0, 'utf8')).tool_input?.command ?? '';
} catch {
  process.exit(0); // not a Bash tool call we can read; the git hooks still apply
}

const norm = cmd.replace(/\\\n/g, '').replace(/['"\\]/g, '');
if (!/git/i.test(norm)) process.exit(0);

// Split into simple commands so a rule only sees one command's words.
for (const segment of norm.split(/&&|\|\||[;|&\n()]/)) {
  const s = segment.trim();

  // Config injection that could point git at other hooks.
  if (/(^|\s)GIT_CONFIG_(COUNT|PARAMETERS|KEY_\d+|VALUE_\d+|GLOBAL|SYSTEM)=/.test(s) || /^\s*export\s+GIT_CONFIG_/.test(s))
    block('GIT_CONFIG_* overrides could switch off the commit gate in .githooks/. Drop them.');
  if (!/\bgit\b/.test(s)) continue;
  if (/\s--config-env[=\s]/.test(s)) block("'--config-env' could switch off the commit gate in .githooks/.");
  if (/\s-c\s+\S*(hooksPath|include)/i.test(s)) block("'git -c core.hooksPath=' / 'include.path=' would switch off the commit gate in .githooks/.");

  const config = s.match(/\bgit\b.*?\bconfig\b(.*)$/);
  if (config) {
    const rest = config[1];
    if (/\binclude(If\.[^\s]*)?\.path\b|\bincludeIf\b/i.test(rest)) block("don't add git config includes: they could switch off the commit gate.");
    if (/hooksPath/i.test(rest)) {
      const reading = /--get(-all|-regexp)?\b|--list\b|(^|\s)-l\b|^\s*(--(local|global|worktree)\s+)?core\.hooksPath\s*$/i.test(rest);
      const settingOurs = /core\.hooksPath\s+\.githooks\s*$/i.test(rest);
      if (!reading && !settingOurs) block("don't change core.hooksPath: it would switch off the commit gate in .githooks/.");
    }
  }

  // --no-veri, --no-verif and --no-verify all mean --no-verify to git. (push -n is --dry-run, which is fine.)
  if (/\bgit\b.*\bpush\b.*\s--no-veri\w*/.test(s))
    block("don't push with --no-verify: the pre-push hook keeps unreviewed commits off the remote.");
  if (/\bgit\b.*\b(send-pack|http-push|receive-pack)\b/.test(s))
    block("use 'git push': send-pack / http-push skip the pre-push hook.");
  // Remote-tracking refs and tags count as "already checked" for the ref gate.
  if (/\bgit\b.*\breplace\b/.test(s) && /\bgit\b(\s+-\S+(\s+[^-]\S*)?)*\s+replace\b/.test(s))
    block("don't use git replace: it makes the secret scan see a different object than git pushes.");
  if (/\bgit\b.*\bupdate-ref\b.*\brefs\/(remotes|tags|replace)\//.test(s))
    block("don't write remote-tracking refs or tags with update-ref; use git fetch / git tag.");
  if (/\bgit\b.*\bfetch\b.*:\+?refs\/(remotes|heads)\//.test(s) && !/\bgit\b.*\bfetch\b\s+(-\S+\s+)*origin\b/.test(s))
    block("only fetch into remote-tracking refs from origin.");

  // A real `git ... commit` (not pre-commit, commit-msg, commit-tree...) needs the hooks installed.
  if (/\bgit\b.*(?<![-\w.])commit(?![-\w])/.test(s)) {
    let hooksPath = '';
    try {
      hooksPath = execFileSync('git', ['-C', PROJECT, 'config', 'core.hooksPath'], { encoding: 'utf8' }).trim();
    } catch {}
    const missing = HOOKS.filter((h) => {
      const f = resolve(PROJECT, '.githooks', h);
      return !existsSync(f) || (statSync(f).mode & 0o111) === 0;
    });
    if (hooksPath !== '.githooks' || missing.length) {
      block(
        `the commit gate isn't installed (core.hooksPath=${hooksPath || '<unset>'}${missing.length ? `, not executable: ${missing.join(', ')}` : ''}). ` +
          "Run 'git config core.hooksPath .githooks' (or 'pnpm install') and chmod +x .githooks/*.",
      );
    }
  }
}

process.exit(0);
