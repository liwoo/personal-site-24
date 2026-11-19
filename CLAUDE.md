# chienda.com

Jeremiah Chienda's personal site. Astro 7 + Tailwind + React islands, deployed on Vercel. Email via Resend, spam protection via reCAPTCHA. The repo is **public**.

## Software factory

Two specialist agents live in `.claude/agents/`, each backed by a skill in `.claude/skills/`:

| Agent | Skill | Owns |
|---|---|---|
| `ui-engineer` | `site-ui` | Pages, widgets, styles, copy. The design system comes from the Nov 2026 homepage polish. |
| `security-reviewer` | `site-security` | Secrets, env vars, email endpoints, dependencies, build and deploy config. |

Hand UI work to `ui-engineer`. Hand anything touching API routes, env vars, email, config or dependencies to `security-reviewer` for a look before you start.

## Commit protocol (enforced)

Every commit, whoever writes the change:

1. Stage the exact change: `git add <files>`. Never `git commit -a`.
2. Launch **both** `ui-engineer` and `security-reviewer` **in parallel**, in review mode, on the staged diff.
3. If either returns REQUEST CHANGES: fix, re-stage, and run **both** again. Sign-offs are tied to the staged tree hash, so any change voids them.
4. Commit only once both have run `.claude/hooks/approve.sh`. Never run `approve.sh` yourself on an agent's behalf.

How it's enforced:

The gate lives in git hooks (`.githooks/`). They see the exact commits being made, however the shell command was written, and `git commit --no-verify` doesn't skip them:

- **`prepare-commit-msg`**: every `git commit` gets a `scripts/secret-scan.mjs` pass. From Claude Code (`CLAUDECODE=1`), the tree being committed must also match both sign-offs, so `commit -a`, pathspecs, or a `git add` earlier in the same command fail unless the result is exactly what was reviewed. `--amend` is refused: make a new commit.
- **`reference-transaction`** (`scripts/ref-gate.mjs`) runs on every ref update: commit, reset, merge, rebase, cherry-pick, am, fetch, update-ref.
  - Every commit new to the repo gets the secret scan, whichever ref it's heading for: branches, remote-tracking refs or tags.
  - New commits on a branch or HEAD from Claude Code also need both sign-offs. Clean merges and exact copies of existing commits (rebase, cherry-pick) are exempt; conflict resolutions aren't.
- **`pre-push`**: from Claude Code, only commits already on a local branch, remote-tracking ref or HEAD can be pushed. Replace refs are never pushed.
- **Human commits** (no `CLAUDECODE`) get the secret scan only.

`.claude/hooks/commit-gate.sh` (Claude PreToolUse) blocks what would switch those hooks off:
- changing `core.hooksPath`;
- config injection (`-c include.path`, `GIT_CONFIG_*`, `--config-env`);
- `push --no-verify` (including abbreviations), `send-pack` and `http-push`;
- writing `refs/remotes`/`refs/tags` by hand, and fetching into `refs/remotes`/`refs/heads` from anywhere but origin;
- `git replace`. All gate scripts also run with `GIT_NO_REPLACE_OBJECTS=1`, and `refs/replace/*` updates are refused.

It also refuses `git commit` until the hooks are installed. `pnpm install` installs them (the `prepare` script sets `core.hooksPath=.githooks`). After any change to the gate, run `bash .claude/hooks/commit-gate.test.sh`. It uses throwaway repos, so it's safe to run anytime.

Known limits. The gate makes the protocol the easy path and stops accidental leaks; it isn't a sandbox against a deliberately hostile agent:
- **Hooks only exist where `.githooks/` does.** `core.hooksPath` is relative, so a worktree whose checkout lacks `.githooks/` (e.g. a branch from before this was merged) runs no hooks.
- **No server-side backstop yet.** A fresh clone has no hooks until `pnpm install`. GitHub secret scanning with push protection, plus a CI secret-scan job, would be the layer nothing local can bypass.
- **Honour-system pieces.** Anyone with shell access can write `.claude/reviews/*` or `.git/config`, unset `CLAUDECODE`, or delete the hooks.

## Hard rules

- Never commit secrets, `.env*` (except `.env.example`), or build output (`.vercel/`, `dist/`). A secret that reaches any commit is burned: revoke and rotate it, don't just delete it.
- Secrets are server-only `import.meta.env.X`. Never prefix a secret with `PUBLIC_`.
- Email routes never let the caller choose recipients, sender or subject.

## Commands

- `pnpm dev`, `pnpm build`, `pnpm lint:eslint`
- `pnpm secret-scan` (staged), `pnpm secret-scan:tree`, `pnpm secret-scan:history`
