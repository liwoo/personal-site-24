/**
 * Artistic JSON renderer for Dev Mode.
 *
 * Turns a plain data object into a hand-composed *editorial* JSON layout —
 * giant display keys, indented field blocks with left rules, tick-marked array
 * objects, chips for string arrays, and creatively framed images. This is the
 * deliberate opposite of `JSON.stringify`: it reads like a designed document,
 * not a code dump. Output is an HTML string rendered via `set:html` in
 * `DevDoc.astro`; styling lives in `DevModeSkin.astro` (`.aj-*` classes).
 */

const esc = (s: unknown): string =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const isImage = (s: string): boolean => /\.(png|jpe?g|webp|gif|svg|avif)(\?|$)/i.test(s);
const isLink = (s: string): boolean => /^(https?:\/\/|\/|mailto:)/.test(s);
const isExternal = (s: string): boolean => /^https?:\/\//.test(s);

const fileName = (s: string): string => (s.split('/').pop() || 'asset').split('?')[0];

const TITLE_KEYS = ['title', 'name', 'label', 'alias', 'company'];

type Val = unknown;

/** Format a scalar value into a styled span / link / image figure. */
function fmt(value: Val, keyHint?: string): string {
  if (value === null || value === undefined) return '<span class="aj-null">null</span>';
  if (typeof value === 'boolean') return `<span class="aj-bool">${value}</span>`;
  if (typeof value === 'number') return `<span class="aj-num">${value}</span>`;
  const s = String(value);
  if (isImage(s)) {
    return (
      `<span class="aj-figure"><img src="${esc(s)}" alt="${esc(keyHint || 'asset')}" loading="lazy" />` +
      `<span class="aj-img-cap">src: "${esc(fileName(s))}"</span></span>`
    );
  }
  if (isLink(s)) {
    const attrs = isExternal(s) ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<a class="aj-link" href="${esc(s)}"${attrs}>"${esc(s)}"</a>`;
  }
  return `<span class="aj-str">"${esc(s)}"</span>`;
}

const isStringArray = (v: Val): v is string[] =>
  Array.isArray(v) && v.every((x) => typeof x === 'string' || typeof x === 'number');

function chips(items: Array<string | number>): string {
  return `<div class="aj-chips">${items.map((i) => `<span class="aj-chip">${esc(i)}</span>`).join('')}</div>`;
}

const present = ([, v]: [string, Val]): boolean => v !== null && v !== undefined;

/* ---------------------------------------------------------------------------
 * Typed nodes — special renditions the Dev Mode theme reaches for:
 * terminal inputs, `[[ PRESS HERE ]]` buttons, typewriter text and logo walls.
 * A value opts in by being an object with a string `__type`.
 * ------------------------------------------------------------------------- */
interface Typed {
  __type: string;
  [k: string]: unknown;
}
const isTyped = (v: Val): v is Typed =>
  !!v && typeof v === 'object' && !Array.isArray(v) && typeof (v as Typed).__type === 'string';

/** A `[[ LABEL ]]` terminal button (also used as a form submit). */
function termButton(label: string, href?: string, submit = false): string {
  const inner = `<span class="aj-btn-br">[[</span><span class="aj-btn-label">${esc(label)}</span><span class="aj-btn-br">]]</span>`;
  if (submit) return `<button type="submit" class="aj-btn">${inner}</button>`;
  const attrs = href && isExternal(href) ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `<a class="aj-btn" href="${esc(href || '#')}"${attrs}>${inner}</a>`;
}

/** Wrap content with a click-to-copy affordance (copies the body's text). */
function copyable(innerHtml: string, label: string): string {
  return (
    `<div class="aj-copyable">` +
    `<button type="button" class="aj-copy" data-aj-copy-text aria-label="Copy ${esc(label)}">` +
    `<span class="aj-copy-i">⧉</span> copy</button>` +
    `<div class="aj-copy-body">${innerHtml}</div>` +
    `</div>`
  );
}

/** A terminal input: `>_ placeholder ▊` with a blinking caret. */
function termInput(f: Record<string, unknown>): string {
  const name = esc(f.name ?? 'field');
  const type = esc(f.type ?? 'text');
  const ph = esc(f.placeholder ?? f.label ?? '');
  const req = f.required ? ' required' : '';
  const tag =
    type === 'textarea'
      ? `<textarea name="${name}" rows="3" placeholder="${ph}"${req}></textarea>`
      : `<input type="${type}" name="${name}" placeholder="${ph}"${req} autocomplete="off" />`;
  return (
    `<label class="aj-input">` +
    (f.label ? `<span class="aj-input-label">${esc(f.label)}</span>` : '') +
    `<span class="aj-input-line"><span class="aj-prompt">&gt;_</span>${tag}<span class="aj-caret"></span></span>` +
    `</label>`
  );
}

function renderTyped(node: Typed): string {
  switch (node.__type) {
    case 'typewriter':
      return `<span class="aj-type" data-text="${esc(node.value)}">${esc(node.value)}</span>`;
    case 'cta':
      return termButton(String(node.label ?? 'PRESS HERE'), node.href as string | undefined);
    case 'prose': {
      const paras = Array.isArray(node.paragraphs) ? (node.paragraphs as string[]) : [];
      const body = paras
        .map((p, i) => `<p class="aj-p"><span class="aj-p-mark">${i === 0 ? '“' : '│'}</span>${esc(p)}</p>`)
        .join('');
      return copyable(`<div class="aj-prose">${body}</div>`, 'bio');
    }
    case 'richtext':
      // Pre-rendered themed HTML (from richMarkdown.ts) — already escaped there.
      return copyable(`<div class="aj-article">${String(node.html ?? '')}</div>`, 'article');
    case 'share': {
      const url = String(node.url ?? '');
      const text = String(node.text ?? '');
      const nets = Array.isArray(node.networks)
        ? (node.networks as string[])
        : ['twitter', 'linkedin', 'whatsapp', 'mail'];
      const labels: Record<string, string> = {
        twitter: 'Share on X',
        linkedin: 'LinkedIn',
        whatsapp: 'WhatsApp',
        facebook: 'Facebook',
        mail: 'Email',
      };
      const shareBtn = (n: string) =>
        `<button type="button" class="aj-btn aj-share-btn" data-aw-social-share="${esc(n)}" data-aw-url="${esc(url)}" data-aw-text="${esc(text)}">` +
        `<span class="aj-btn-br">[[</span><span class="aj-btn-label">${esc(labels[n] ?? n)}</span><span class="aj-btn-br">]]</span></button>`;
      const copyBtn =
        `<button type="button" class="aj-btn aj-share-btn" data-aj-copy="${esc(url)}">` +
        `<span class="aj-btn-br">[[</span><span class="aj-btn-label">Copy Link</span><span class="aj-btn-br">]]</span></button>`;
      return `<div class="aj-share">${nets.map(shareBtn).join('')}${copyBtn}</div>`;
    }
    case 'form': {
      const flds = Array.isArray(node.fields) ? (node.fields as Array<Record<string, unknown>>) : [];
      const label = String(node.submit ?? 'SUBMIT');
      // Functional form: submits via fetch to `endpoint` (handled in BasicScripts).
      if (typeof node.endpoint === 'string') {
        const cat = node.category ? ` data-aj-category="${esc(node.category)}"` : '';
        const success = ` data-aj-success="${esc(node.success ?? 'Done.')}"`;
        return (
          `<form class="aj-form" data-aj-endpoint="${esc(node.endpoint)}"${cat}${success}>` +
          flds.map(termInput).join('') +
          termButton(label, undefined, true) +
          `<div class="aj-form-status" role="status" aria-live="polite"></div>` +
          `</form>`
        );
      }
      // If a submitHref is given (e.g. a mailto:), the inputs are a themed
      // rendition and the button is a real link.
      if (typeof node.submitHref === 'string') {
        return (
          `<div class="aj-form">` +
          flds.map(termInput).join('') +
          termButton(label, node.submitHref as string) +
          `</div>`
        );
      }
      const action = node.action ? ` action="${esc(node.action)}"` : '';
      const method = ` method="${esc(node.method ?? 'post')}"`;
      return `<form class="aj-form"${action}${method}>` + flds.map(termInput).join('') + termButton(label, undefined, true) + `</form>`;
    }
    case 'logos': {
      const items = Array.isArray(node.items) ? (node.items as Array<Record<string, unknown>>) : [];
      const tiles = items
        .map((it) => {
          const label = esc(it.label ?? '');
          const src = typeof it.src === 'string' ? it.src : '';
          if (src && isImage(src)) {
            return `<span class="aj-logo"><img src="${esc(src)}" alt="${label}" loading="lazy" /><span class="aj-logo-cap">${label}</span></span>`;
          }
          return `<span class="aj-logo aj-logo--mono"><span class="aj-logo-mark">${label.slice(0, 2).toUpperCase()}</span><span class="aj-logo-cap">${label}</span></span>`;
        })
        .join('');
      return `<div class="aj-logos">${tiles}</div>`;
    }
    default:
      return '';
  }
}

/** Render the entries of an object as an indented field block. */
function fields(obj: Record<string, Val>): string {
  const entries = Object.entries(obj).filter(present);
  return entries
    .map(([k, v], i) => {
      const comma = i < entries.length - 1 ? '<span class="aj-punc">,</span>' : '';
      if (isTyped(v)) {
        return `<p class="aj-field"><span class="aj-k">"${esc(k)}"</span><span class="aj-punc">:</span> ${renderTyped(v)}${comma}</p>`;
      }
      if (isStringArray(v)) {
        return `<div class="aj-field aj-field--chips"><span class="aj-k">"${esc(k)}"</span><span class="aj-punc">: [</span>${chips(v)}<span class="aj-punc">]</span>${comma}</div>`;
      }
      if (v && typeof v === 'object' && !Array.isArray(v)) {
        return (
          `<div class="aj-field"><span class="aj-k">"${esc(k)}"</span><span class="aj-punc">: {</span></div>` +
          `<div class="aj-subfields">${fields(v as Record<string, Val>)}</div>` +
          `<div class="aj-field"><span class="aj-punc">}</span>${comma}</div>`
        );
      }
      if (Array.isArray(v)) {
        return (
          `<div class="aj-field"><span class="aj-k">"${esc(k)}"</span><span class="aj-punc">: [</span></div>` +
          `<div class="aj-subfields">${arrayItems(v)}</div>` +
          `<div class="aj-field"><span class="aj-punc">]</span>${comma}</div>`
        );
      }
      return `<p class="aj-field"><span class="aj-k">"${esc(k)}"</span><span class="aj-punc">:</span> ${fmt(v, k)}${comma}</p>`;
    })
    .join('');
}

/** Render array items — objects get a tick + brace + title; scalars get a line. */
function arrayItems(arr: Val[]): string {
  return arr
    .map((item, i) => {
      const comma = i < arr.length - 1 ? '<span class="aj-punc">,</span>' : '';
      if (item && typeof item === 'object' && !Array.isArray(item)) {
        const obj = item as Record<string, Val>;
        const titleKey = TITLE_KEYS.find((k) => typeof obj[k] === 'string');
        const title = titleKey ? obj[titleKey] : undefined;
        // An inset `logo` (image) sits beside the title; `more` (string[]) is a
        // hover/tap-revealed detail block pulled from the CV.
        const logo = typeof obj.logo === 'string' ? (obj.logo as string) : undefined;
        const moreArr = Array.isArray(obj.more) ? (obj.more as string[]).filter(Boolean) : [];
        const rest = Object.entries(obj).filter(
          ([k, v]) => k !== titleKey && k !== 'logo' && k !== 'more' && present(['', v])
        );
        const lines = rest
          .map(([k, v]) => {
            if (isTyped(v))
              return `<div class="aj-line"><span class="aj-lk">${esc(k)}</span>: ${renderTyped(v)}</div>`;
            if (isStringArray(v))
              return `<div class="aj-line"><span class="aj-lk">${esc(k)}</span>: ${chips(v)}</div>`;
            return `<div class="aj-line"><span class="aj-lk">${esc(k)}</span>: ${fmt(v, k)}</div>`;
          })
          .join('');
        const insetLogo = logo
          ? `<span class="aj-item-logo"><img src="${esc(logo)}" alt="${esc(String(title ?? 'logo'))}" loading="lazy" /></span>`
          : '';
        const moreBlock = moreArr.length
          ? `<div class="aj-more-hint" role="button" tabindex="0" aria-expanded="false"><span class="aj-more-i">+</span> more from cv</div>` +
            `<div class="aj-item-more">${moreArr.map((m) => `<div class="aj-more-line">${esc(m)}</div>`).join('')}</div>`
          : '';
        return (
          `<div class="aj-item${moreArr.length ? ' aj-item--expandable' : ''}"><div class="aj-item-tick"></div>` +
          `<div class="aj-brace-sm">{</div>` +
          `<div class="aj-item-body">` +
          `<div class="aj-item-head">${insetLogo}` +
          (title !== undefined ? `<div class="aj-item-title">"${esc(title)}"</div>` : '') +
          `</div>` +
          lines +
          moreBlock +
          `</div>` +
          `<div class="aj-brace-sm">}${comma}</div></div>`
        );
      }
      return `<div class="aj-item aj-item--scalar">${fmt(item)}${comma}</div>`;
    })
    .join('');
}

/** Render a single top-level section (one key of the root object). */
function section(key: string, value: Val, index: number, last: boolean): string {
  const wm = key.replace(/[-_]/g, ' ').toUpperCase();
  const comma = last ? '' : '<span class="aj-punc">,</span>';
  const style = `--i:${index}`;
  const anchor = `sec-${key.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`;

  // Typed sections (forms, CTAs, logo walls) render as beautified terminal cards.
  if (isTyped(value)) {
    return (
      `<section id="${anchor}" data-aj-key="${esc(key)}" class="aj-section aj-card aj-reveal" style="${style}">` +
      `<div class="aj-card-wm">${esc(wm)}</div>` +
      `<div class="aj-eyebrow">${esc(key)}</div>` +
      `<div class="aj-card-body">${renderTyped(value)}</div>` +
      `</section>`
    );
  }

  if (Array.isArray(value)) {
    const body = isStringArray(value) ? chips(value) : arrayItems(value);
    return (
      `<section id="${anchor}" data-aj-key="${esc(key)}" class="aj-section aj-reveal" style="${style}">` +
      `<div class="aj-watermark">${esc(wm)}</div>` +
      `<div class="aj-exp-head"><span class="aj-exp-key">"${esc(key)}"</span><span class="aj-colon"> :</span> <span class="aj-bracket">[</span></div>` +
      `<div class="aj-indent aj-array">${body}</div>` +
      `<div class="aj-exp-close"><span class="aj-bracket">]</span>${comma}</div>` +
      `</section>`
    );
  }

  if (value && typeof value === 'object') {
    return (
      `<section id="${anchor}" data-aj-key="${esc(key)}" class="aj-section aj-reveal" style="${style}">` +
      `<div class="aj-watermark">${esc(wm)}</div>` +
      `<div class="aj-brace">{</div>` +
      `<div class="aj-indent">` +
      `<span class="aj-key-display">"${esc(key)}"<span class="aj-colon"> :</span></span>` +
      `<div class="aj-fields">${fields(value as Record<string, Val>)}</div>` +
      `</div>` +
      `<div class="aj-brace">}${comma}</div>` +
      `</section>`
    );
  }

  // Scalar top-level entry
  return (
    `<section id="${anchor}" data-aj-key="${esc(key)}" class="aj-section aj-reveal" style="${style}">` +
    `<p class="aj-field aj-field--top"><span class="aj-k">"${esc(key)}"</span><span class="aj-punc">:</span> ${fmt(value, key)}${comma}</p>` +
    `</section>`
  );
}

/** Render the whole data object as an artistic JSON document body. */
export function renderArtisticJson(data: Record<string, Val>): string {
  const entries = Object.entries(data).filter(present);
  const sections = entries
    .map(([k, v], i) => section(k, v, i, i === entries.length - 1))
    .join('');
  return (
    `<div class="aj-brace aj-root-open">{</div>` +
    `<div class="aj-body">${sections}</div>` +
    `<div class="aj-brace aj-root-close">}</div>`
  );
}

interface FooterLink {
  text?: string;
  href?: string;
  ariaLabel?: string;
}
interface FooterData {
  links?: Array<{ title?: string; links?: FooterLink[] }>;
  secondaryLinks?: FooterLink[];
  socialLinks?: FooterLink[];
  footNote?: string;
}

const footLink = (l: FooterLink, label?: string): string => {
  const href = l.href ?? '#';
  const attrs = isExternal(href) ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `<a class="aj-link" href="${esc(href)}"${attrs}>${esc(label ?? l.text ?? l.ariaLabel ?? href)}</a>`;
};

/** The footer, rendered as a beautified terminal card (see the reference mock). */
export function renderFooterCard(footer: FooterData, avatar?: string): string {
  const avatarFig = avatar ? `<div class="aj-footer-avatar">${fmt(avatar, 'portrait')}</div>` : '';
  const cols = (footer.links ?? [])
    .map(
      (group) =>
        `<div class="aj-fcol"><div class="aj-fcol-title">"${esc(group.title ?? '')}"</div><ul class="aj-flist">` +
        (group.links ?? []).map((l) => `<li>${footLink(l)}</li>`).join('') +
        `</ul></div>`
    )
    .join('');
  const socials = (footer.socialLinks ?? [])
    .map((s) => `<span class="aj-fsocial">${footLink(s, s.ariaLabel)}</span>`)
    .join('');
  const secondary = (footer.secondaryLinks ?? []).map((l) => footLink(l)).join('<span class="aj-punc"> · </span>');
  const note = esc((footer.footNote ?? '').trim());
  return (
    `<footer class="aj-card aj-footer aj-reveal">` +
    `<div class="aj-card-wm">EOF</div>` +
    `<div class="aj-eyebrow">footer</div>` +
    `<div class="aj-footer-top">${avatarFig}<div class="aj-fgrid">${cols}</div></div>` +
    `<div class="aj-frow"><span class="aj-lk">social</span><span class="aj-punc">: [</span>${socials}<span class="aj-punc">]</span></div>` +
    (secondary ? `<div class="aj-frow aj-fsecondary">${secondary}</div>` : '') +
    (note ? `<div class="aj-fnote">// ${note}</div>` : '') +
    `</footer>`
  );
}
