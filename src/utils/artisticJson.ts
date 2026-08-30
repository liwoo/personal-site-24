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

/** Render the entries of an object as an indented field block. */
function fields(obj: Record<string, Val>): string {
  const entries = Object.entries(obj).filter(present);
  return entries
    .map(([k, v], i) => {
      const comma = i < entries.length - 1 ? '<span class="aj-punc">,</span>' : '';
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
        const rest = Object.entries(obj).filter(([k, v]) => k !== titleKey && present(['', v]));
        const lines = rest
          .map(([k, v]) => {
            if (isStringArray(v))
              return `<div class="aj-line"><span class="aj-lk">${esc(k)}</span>: ${chips(v)}</div>`;
            return `<div class="aj-line"><span class="aj-lk">${esc(k)}</span>: ${fmt(v, k)}</div>`;
          })
          .join('');
        return (
          `<div class="aj-item"><div class="aj-item-tick"></div>` +
          `<div class="aj-brace-sm">{</div>` +
          `<div class="aj-item-body">` +
          (title !== undefined ? `<div class="aj-item-title">"${esc(title)}"</div>` : '') +
          lines +
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

  if (Array.isArray(value)) {
    const body = isStringArray(value) ? chips(value) : arrayItems(value);
    return (
      `<section class="aj-section aj-reveal" style="${style}">` +
      `<div class="aj-watermark">${esc(wm)}</div>` +
      `<div class="aj-exp-head"><span class="aj-exp-key">"${esc(key)}"</span><span class="aj-colon"> :</span> <span class="aj-bracket">[</span></div>` +
      `<div class="aj-indent aj-array">${body}</div>` +
      `<div class="aj-exp-close"><span class="aj-bracket">]</span>${comma}</div>` +
      `</section>`
    );
  }

  if (value && typeof value === 'object') {
    return (
      `<section class="aj-section aj-reveal" style="${style}">` +
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
    `<section class="aj-section aj-reveal" style="${style}">` +
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
