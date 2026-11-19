---
name: site-ui
description: The design system for chienda.com (Astro + Tailwind), distilled from the Nov 2026 homepage polish (glass surfaces, terminal labels, Book me modal, impact strip, lean copy with "See more"). Use when building, changing or reviewing any page, widget, component, style or user-facing copy in this repo, and when the ui-engineer agent reviews a staged diff before commit.
---

# chienda.com UI system

The reference implementation is the homepage: `src/pages/index.astro` and the widgets it uses (`HomeHero`, `HomeImpact`, `HomeFlagship`, `HomeArticles`, `NewsletterInline`), plus `BookMeDialog` (mounted in `src/layouts/PageLayout.astro`) and `CookieConsent` (`src/components/common/`, mounted in `src/layouts/Layout.astro`). When in doubt, open those files and copy the pattern. Don't invent a new one.

The overall feel: a terminal-flavoured, monospace portfolio with frosted glass surfaces over a warm amber palette. Dense and quiet. Numbers and links over paragraphs.

## Tokens (never hardcode around them)

Defined as CSS variables in `src/components/CustomStyles.astro`. Most are mapped as colours in `tailwind.config.cjs` (`primary`, `secondary`, `accent`, `default`, `muted`, `destructive`, `card`); `bg-page` and `text-muted` are hand-written utilities in `src/assets/styles/tailwind.css`.

| Use | Class | Light / dark |
|---|---|---|
| Accent, links on hover, focus | `text-primary` / `border-primary` / `bg-primary` | amber `rgb(216 145 33)` / pale amber `rgb(255 219 163)` |
| Secondary links, prices | `text-secondary` | amber in both |
| Headings | `text-heading` (see warning below) | near-black / near-white |
| Body | `text-default` | |
| Supporting text | `text-muted` | 70% / 55% |
| Page bg | `bg-page` | |

- **`text-heading` currently produces no CSS.** There's no `heading` colour in `tailwind.config.cjs`, so headings inherit `text-default` (identical in light mode, slightly dimmer in dark). Keep using it for consistency with existing headings, but don't rely on it to override a parent colour. Making it real (`heading: 'var(--aw-color-text-heading)'` in the config) is a separate UI change that needs dark-mode screenshots.
- Font is Space Mono everywhere (`--aw-font-sans`, heading and serif alias it). Don't add fonts.
- **Radius is globally 2px.** `tailwind.config.cjs` maps every `rounded-*` (including `rounded-xl` and `rounded-full`) to 2px. Writing `rounded-xl` is fine and conventional here, but it won't make a pill. Raw CSS radii (like `.book-opt`'s `0.6rem`) are the rare exception; don't spread them.
- The only raw colour allowed outside tokens is the amber tint for hovers and highlights: `rgb(216 145 33 / 0.06–0.55)`. Neutral borders use `border-gray-500/25` or `rgb(128 128 128 / 0.22)`.
- Every colour decision needs a `dark:` counterpart or must come from a token. Check both modes.

## Surfaces

- **`.glass`** is the card surface (frosted, translucent, inset highlight). Use it for cards, lists, modals, bars, chips. Defined in `src/assets/styles/tailwind.css`.
- **`.glass-sheen`** adds the slow diagonal highlight. Use it on 1 hero-level surface per viewport (hero card, flagship cover, newsletter, CTA block, modal, consent bar). Not on every list item: it's motion, and too much of it gets noisy. It already respects `prefers-reduced-motion`.
- Lists of items go inside one glass container with `divide-y divide-gray-500/15`, rows with hover `rgb(216 145 33 / 0.06)`. See `HomeArticles`.
- Small facts and metrics are glass chips: `<li class="glass px-3 py-1">12M citizens</li>`.

## Typography and section anatomy

Sections follow this anatomy (vertical padding varies by section):

```astro
<section class="container py-16 lg:py-24">           <!-- or container-lg for reading width -->
  <p class="terminal-label">writing</p>                <!-- renders as "// WRITING" in amber -->
  <h2 class="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-heading">Title</h2>
  ...
</section>
```

- `terminal-label` is the eyebrow on every section and modal. Lowercase snake_case source text (`book_me`, `flagship`, `hire`).
- Small meta text: `text-xs uppercase tracking-widest text-muted` (or `tracking-[0.2em]`).
- Dates and numbers: `tabular-nums`.
- Containers: `container` (max-w-7xl), `container-lg` (60rem, for lists and reading), `container-article` (prose).

## Buttons and links

- Use `~/components/ui/Button.astro` with `variant="primary" | "secondary" | "tertiary" | "subtle" | "link"` (default `secondary`) and `class="rounded-md"`, or the `.btn-primary` / `.btn-secondary` / `.btn-link` classes in React.
- **Button labels are snake_case with capitals: `Book_me`, `Find_out_More`, `Let's_Talk`.** That's the terminal voice. Plain sentence links use `.btn-link` (uppercase, tracked, auto `→`).
- 1 primary action per block, at most 1 secondary next to it.
- External links: `target="_blank" rel="noopener noreferrer"`, always.

## Interaction patterns

- **Modals are native `<dialog class="glass-dialog glass glass-sheen rounded-xl">`.** Open them with a delegated click on a `data-*` attribute (see `BookMeDialog`: `data-open-book-me`). Every trigger must also carry a real `href` so it works with JS off. Backdrop click and an `aria-label="Close"` button close it. Use `aria-labelledby` on the dialog.
- **Progressive disclosure:** keep copy to a title and one line. Anything longer goes in `<details class="see-more"><summary><span class="see-more-label">See</span></summary>…</details>`.
- **View transitions:** the site uses Astro client routing. Any `<script>` that binds DOM must re-run on `astro:page-load` and guard against double binding (`dataset.bound`). Inline scripts that register global listeners need a `window.__xBound` guard (see `CookieConsent`).
- **Scroll reveal:** wrap below-the-fold home sections in `<div class="scroll-fade-in">` (already wired in `index.astro`).
- **Optional third-party scripts** (analytics, embeds) wait for consent: check `window.__cookieConsent === 'all'` or listen for the `cookie-consent` event.
- React islands only when there's real state (forms, search). Hydrate with `client:visible` unless it's above the fold. Static content stays `.astro`.

## Content and data

- Lists of things (booking options, projects, stats, nav) live in `src/data/` and get imported. Don't hardcode repeated items in markup. `HomeImpact`'s `stats` array is the small-scale version of the same idea.
- **Dev Mode parity:** pages pass a `dev` object to the layout (JSON view of the page, see `index.astro`). If you add or change a meaningful home section, update the `dev` object so the JSON view tells the same story.
- Page order on home: hero (typewriter card + `Find_out_More` / `Book_me`) → impact strip → newsletter inline → flagship → about → writing → hire CTA. Newsletter goes right after the hero on home and posts.
- Copy is short, specific, first-person, with numbers as digits ("12M citizens", "10+ years"). For anything longer than a label, follow the `voice-dna` skill.

## Accessibility (blocking in review)

- Every input has a `<label>` (use `sr-only` if visually hidden). Icon-only buttons have `aria-label`.
- Decorative layers get `aria-hidden="true"` and `pointer-events-none`.
- Images have real `alt`, `width`/`height`, and `loading="lazy"` below the fold.
- Status messages use `aria-live="polite"`.
- Motion respects `prefers-reduced-motion`.
- Focus is visible (`focus-visible:` / `focus:ring-*`), and keyboard users can open and close every dialog.

## Verifying a UI change

1. `pnpm build` must pass.
2. Run `pnpm dev`, then screenshot the changed pages in 4 combinations: mobile and desktop, light and dark. Save them to `.context/`:
   ```bash
   npx playwright screenshot --viewport-size=390,844 --color-scheme=dark  --full-page http://localhost:4321/ .context/ui-mobile-dark.png
   npx playwright screenshot --viewport-size=1440,900 --color-scheme=light --full-page http://localhost:4321/ .context/ui-desktop-light.png
   ```
3. Look at the screenshots. Check glass contrast in light mode (text over the hero video is the usual failure), spacing rhythm against neighbouring sections, and that nothing overflows at 390px.

## Review checklist (for pre-commit review)

Block the commit (REQUEST CHANGES) for:
- Hardcoded colours or fonts that bypass tokens, or missing dark-mode handling.
- A new surface style when `.glass` fits, or a new modal or disclosure pattern when the existing ones fit.
- Accessibility failures from the list above.
- Scripts that break under view transitions (no `astro:page-load` rebinding or double-binding guard).
- Triggers without a no-JS `href` fallback; external links without `rel="noopener noreferrer"`.
- Build failure.

Mention without blocking:
- Copy that's long where a `see-more` would do, or button labels that drop the snake_case convention.
- `glass-sheen` overuse, Dev Mode `dev` object drift, data that should move to `src/data/`.

If the staged diff has no user-facing changes (no `src/components`, `src/pages`, `src/layouts`, `src/assets/styles`, `src/data`, `public`, `tailwind.config.cjs`), say so and approve.
