#!/usr/bin/env node
/**
 * Ref-level commit gate, run by .githooks/reference-transaction and
 * .githooks/pre-push. It catches new commits however they were made
 * (`git commit`, reset onto a stash commit, `am`, fast-forward from a clone,
 * fast-import, update-ref...), which a check on `git commit` alone can't.
 *
 *   ref-gate.mjs ref-tx     stdin: "<old> <new> <ref>" per line (prepared state)
 *   ref-gate.mjs pre-push   stdin: "<local ref> <local sha> <remote ref> <remote sha>"
 *
 * "New" commits are reachable from the incoming tips but not from any existing
 * local branch, remote-tracking ref or HEAD. Those were checked when they arrived.
 *
 *   - Every new commit gets the secret scan, whatever ref it's heading for
 *     (branches, HEAD, remote-tracking refs, tags), so nothing joins the trusted
 *     set unscanned.
 *   - New commits on HEAD or a branch, made from Claude Code (CLAUDECODE=1),
 *     also need both reviewer sign-offs on their tree. The only exceptions are
 *     a clean merge (tree == `git merge-tree` result) and an exact copy of an
 *     existing commit (rebase / cherry-pick; verbatim patch-id incl. binary).
 *   - pre-push: from Claude Code, every pushed commit must already be on a
 *     local branch, remote-tracking ref or HEAD.
 * Exit 1 aborts the ref update (or the push).
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Look at the real objects. `git replace` would otherwise show the gate a decoy
// while push and checkout use the original.
process.env.GIT_NO_REPLACE_OBJECTS = '1';

const REVIEWERS = ['ui-engineer', 'security-reviewer'];
const ZERO = /^0+$/;
const CLAUDE = !!process.env.CLAUDECODE;
const mode = process.argv[2];

const git = (args, input) =>
  execFileSync('git', args, { encoding: 'utf8', input, maxBuffer: 1 << 28, stdio: ['pipe', 'pipe', 'pipe'] }).trim();
const tryGit = (args) => {
  try {
    return git(args);
  } catch {
    return null;
  }
};
const fail = (msg) => {
  process.stderr.write(`commit-gate: ${msg}\n`);
  process.exit(1);
};

const root = git(['rev-parse', '--show-toplevel']);
const scanner = resolve(dirname(fileURLToPath(import.meta.url)), 'secret-scan.mjs');

// Peel tags to what they point at; return the commit, or null for tree/blob tags.
const toCommit = (sha) => {
  const peeled = tryGit(['rev-parse', '--verify', '-q', `${sha}^{}`]);
  if (!peeled) return { commit: null, kind: 'missing' };
  const kind = tryGit(['cat-file', '-t', peeled]);
  return { commit: kind === 'commit' ? peeled : null, kind };
};

const signTips = new Set(); // heading for HEAD / a branch: scan + sign-off
const scanTips = new Set(); // heading for remote-tracking refs / tags: scan only
for (const line of readFileSync(0, 'utf8').split('\n').filter(Boolean)) {
  const f = line.split(' ');
  let sha, ref;
  if (mode === 'ref-tx') [, sha, ref] = f;
  else if (mode === 'pre-push') [ref, sha] = f;
  else fail(`unknown mode ${mode}`);
  if (ref?.startsWith('refs/replace/')) {
    if (mode === 'ref-tx' && !ZERO.test(sha ?? '')) fail(`refusing ${ref}: replace refs would show the gate a different object than git pushes.`);
    if (mode === 'pre-push') fail(`refusing to push ${ref}.`);
  }
  if (!sha || ZERO.test(sha)) continue; // deletion

  const isBranch = ref === 'HEAD' || ref.startsWith('refs/heads/');
  const isOther = ref.startsWith('refs/remotes/') || ref.startsWith('refs/tags/');
  if (mode === 'ref-tx' && !isBranch && !isOther) continue; // stash, notes, ORIG_HEAD...

  const { commit, kind } = toCommit(sha);
  if (!commit) {
    if (CLAUDE && kind !== 'missing') fail(`refusing ${ref} -> a ${kind} object from Claude Code; tags must point at reviewed commits.`);
    continue;
  }
  if (mode === 'pre-push' || isBranch) signTips.add(commit);
  else scanTips.add(commit);
}
if (!signTips.size && !scanTips.size) process.exit(0);

const known = ['--branches', '--remotes'];
if (tryGit(['rev-parse', '--verify', '-q', 'HEAD'])) known.push('HEAD');
const newFrom = (tips) => (tips.size ? git(['rev-list', '--reverse', ...tips, '--not', ...known]).split('\n').filter(Boolean) : []);

const needSign = new Set(newFrom(signTips));
const fresh = [...new Set([...needSign, ...newFrom(scanTips)])];
if (!fresh.length) process.exit(0);

if (mode === 'pre-push' && CLAUDE) {
  fail(
    `refusing to push ${fresh.length} commit(s) that aren't on any local branch ` +
      `(e.g. ${fresh[0].slice(0, 8)}). Commits pushed from Claude Code must go through a gated local branch.`,
  );
}

// 1. Secret scan every new commit.
for (const c of fresh) {
  try {
    execFileSync(process.execPath, [scanner, '--commit', c], { cwd: root, stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8' });
  } catch (e) {
    fail(`secret scan failed for new commit ${c.slice(0, 8)}.\n${e.stdout ?? ''}${e.stderr ?? ''}`);
  }
}
if (!CLAUDE || !needSign.size) process.exit(0);

// 2. Sign-offs for new branch commits made from Claude Code.
const patchIds = (revArgs) => {
  const log = git(['log', '--no-merges', '-p', '--binary', '--full-index', '--no-color', '--no-textconv', '--no-ext-diff', '--format=commit %H', ...revArgs]);
  const out = log ? git(['patch-id', '--verbatim'], log + '\n') : '';
  return new Set(out.split('\n').filter(Boolean).map((l) => l.split(' ')[0]));
};
let knownPatchIds = null;
const isExactCopy = (c) => {
  if (!knownPatchIds) {
    const parents = fresh.flatMap((f) => (tryGit(['rev-parse', `${f}^@`]) ?? '').split('\n').filter(Boolean));
    knownPatchIds = patchIds(['--max-count=2000', ...known, '--not', ...parents]);
  }
  return [...patchIds(['-1', c])].some((p) => knownPatchIds.has(p));
};

const signedTrees = REVIEWERS.map((r) => {
  const f = resolve(root, '.claude/reviews', r);
  return existsSync(f) ? readFileSync(f, 'utf8').split(' ')[0] : null;
});

for (const c of fresh) {
  if (!needSign.has(c)) continue;
  const parents = git(['rev-list', '--parents', '-n', '1', c]).split(' ').slice(1);
  const tree = git(['rev-parse', `${c}^{tree}`]);
  if (signedTrees.every((t) => t === tree)) continue;
  if (parents.length === 2 && tryGit(['merge-tree', '--write-tree', parents[0], parents[1]])?.split('\n')[0] === tree) continue;
  if (parents.length === 1 && isExactCopy(c)) continue;
  fail(
    `new commit ${c.slice(0, 8)} (tree ${tree.slice(0, 8)}) has no sign-off from both reviewers. ` +
      `Commits from Claude Code need ui-engineer and security-reviewer to approve that exact tree ` +
      `(stage it, run both agents, then 'git commit').`,
  );
}

process.exit(0);
