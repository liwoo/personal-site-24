---
name: site-security
description: Security review for chienda.com (Astro on Vercel, Resend email, reCAPTCHA). Catches leaked secrets, committed build output and env files, email endpoints that can be abused, client-exposed env vars, and risky dependency changes. Use before every commit (the security-reviewer agent runs this), when touching API routes, env vars, email, auth, build config or dependencies, or when asked to audit the repo or its git history for leaks.
---

# chienda.com security review

## Why this is strict

In Nov 2026 a Resend API key and the reCAPTCHA server secret leaked from this public repo. They weren't in the source. They were in **committed Vercel build output** (`.vercel/output/.../chunks/email_*.mjs`, commit `474d98b`), which bundles env values into plain JS. The Resend key was then used to send about 60,000 phishing emails across 5 domains. The code had already moved to env vars, but the old commits still held the keys.

So the rules: secrets never touch git, build output never touches git, and **a secret that was ever committed is burned**. Deleting it from the code doesn't help. It must be revoked and rotated.

## Step 1: run the scanner (always)

```bash
node scripts/secret-scan.mjs            # staged diff: run this for every commit review
node scripts/secret-scan.mjs --tree     # whole tracked tree: run if .gitignore, build config or deps changed
node scripts/secret-scan.mjs --history  # all of git history: for audits (~40s)
```

Any finding is blocking. The scanner masks values, so never print a full secret in your report either.

## Step 2: read the staged diff against this checklist

`git diff --cached --stat`, then `git diff --cached` (read the full diff for anything under `src/pages`, `src/utils`, config files, `package.json`, `.gitignore`).

### Secrets and env (blocking)
- No literal keys, tokens, passwords, or connection strings with credentials, in any file type (code, markdown, JSON, YAML, CI workflows, test fixtures).
- Server secrets are read with `import.meta.env.X` in server code only (`src/pages/**/*.ts` API routes, `src/utils/*` used by them, frontmatter of SSR pages).
- **`PUBLIC_*` vars ship to the browser.** A secret must never get a `PUBLIC_` prefix. The only PUBLIC var that's fine is the reCAPTCHA site key.
- Non-PUBLIC `import.meta.env` inside client code (React components with `client:*`, `<script>` tags in `.astro`) is a bug at best and a leak at worst. Flag it.
- `.env.example` holds placeholders only (`REPLACE_ME`).
- No `.env*` files other than `.env.example`, no `.vercel/`, `dist/`, `.output/`, key or certificate files staged.
- `.gitignore` must keep ignoring `.env`, `.env.*` (except `.env.example`), `.vercel`, `dist`. Any loosening blocks.

### Email endpoints: don't become an open relay (blocking)
Files: `src/utils/email.ts`, `src/pages/submit-contact.ts`, `src/pages/signup-form.ts`, `src/pages/api/newsletter.ts`, and any new route that sends mail.
- The caller must never control `to`, `from`, `reply_to` or `subject` freely. A route where the request picks the recipient is a spam cannon on chienda.com's sending reputation. Recipients are fixed (contact form goes to the owner), or the address is the subscriber's own and the content is a fixed template.
- reCAPTCHA is verified server-side, unconditionally, with the expected action (see `src/utils/recaptcha.ts` and `api/newsletter.ts`). Client-side checks don't count.
- Inputs are validated and size-capped (body length, email regex, name length), and every user value interpolated into email HTML goes through `escapeHtml`, with header-bound values through `headerText`.
- Errors returned to the client are generic. Don't echo `e.message` from providers.
- New API routes set `export const prerender = false`.

### Client-side (blocking unless noted)
- `set:html`, `innerHTML` and `dangerouslySetInnerHTML` only with static, trusted strings. Never user, query-string or CMS input.
- External links with `target="_blank"` carry `rel="noopener noreferrer"`.
- New third-party scripts or embeds load only after cookie consent (`cookie-consent` event / `window.__cookieConsent === 'all'`), and are named in the report (non-blocking, but always mention).
- No secrets, internal URLs or personal data (other people's emails or phones) in `public/` or page content.

### Dependencies and build (blocking if suspicious)
- New packages: check the name is the real package (typosquats like `reactt`, `resend-sdk`), it's maintained, and it doesn't need a `postinstall`. Say what each new dependency is for.
- `pnpm-lock.yaml` changes with no matching `package.json` change need an explanation.
- `astro.config.mjs`, `vercel.json` and `.github/workflows/*`: no secrets inline (use Vercel env or GitHub secrets), no weakened headers, no `pull_request_target` with checkout of PR code.

### Logging and privacy (mention, block if egregious)
- Don't log full request bodies, tokens or API responses with keys. Logging a subscriber's email on success is existing behaviour in `email.ts`; don't add more of it.

## Step 3: report

```
VERDICT: APPROVE | REQUEST CHANGES
Scanner: clean | N findings
Blocking:
  - file:line  what's wrong  ->  the fix
Notes:
  - non-blocking observations
Rotate:
  - any secret that reached a commit (even an unpushed one) must be revoked and rotated, with where to do it
```

Only on APPROVE, sign off on the exact staged tree:

```bash
.claude/hooks/approve.sh security-reviewer "<one-line verdict>"
```

If anything was a real secret, the report must say **rotate it**. Removing it from the diff is never enough, because unpushed commits, the reflog and build caches still hold it.
