/**
 * Minimal, theme-aware Markdown → HTML for Dev Mode's article rendering.
 *
 * Converts a post's raw markdown/MDX body into richly styled HTML that matches
 * the editorial terminal theme — headings, bold/italic, inline code, links,
 * lists, blockquotes, code blocks and framed images — instead of the flat
 * paragraphs a plain strip would produce. Output classes are `.aj-*` (styled in
 * DevModeSkin.astro). Only tags this module emits are ever produced; all source
 * text is escaped, so raw HTML in the markdown is neutralised.
 */

const esc = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = (s: string): string => esc(s).replace(/"/g, '&quot;');
const fileName = (s: string): string => (s.split('/').pop() || 'asset').split('?')[0];

const link = (url: string, text: string): string => {
  const ext = /^https?:/.test(url) ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `<a class="aj-link" href="${escAttr(url)}"${ext}>${esc(text)}</a>`;
};
const figure = (src: string, alt: string): string =>
  `<span class="aj-figure"><img src="${escAttr(src)}" alt="${escAttr(alt)}" loading="lazy" />` +
  `<span class="aj-img-cap">src: "${esc(fileName(src))}"</span></span>`;

/** Inline markup on a raw (unescaped) span of text. */
function inline(text: string): string {
  const tokens: string[] = [];
  const stash = (html: string): string => {
    tokens.push(html);
    return `\uE000${tokens.length - 1}\uE001`;
  };
  // Images and links become protected tokens before escaping.
  text = text.replace(/!\[([^\]]*)\]\(([^)\s]+)[^)]*\)/g, (_m, alt, src) => stash(figure(src, alt)));
  text = text.replace(/\[([^\]]+)\]\(([^)\s]+)[^)]*\)/g, (_m, t, u) => stash(link(u, t)));
  text = esc(text);
  text = text
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="aj-b">$1</strong>')
    .replace(/__([^_]+)__/g, '<strong class="aj-b">$1</strong>')
    .replace(/(^|[^*])\*([^*\s][^*]*?)\*/g, '$1<em>$2</em>')
    .replace(/`([^`]+)`/g, '<code class="aj-ic">$1</code>');
  return text.replace(/\uE000(\d+)\uE001/g, (_m, n) => tokens[Number(n)]);
}

export function mdToRichHtml(md: string | undefined, maxBlocks = 500): string {
  if (!md) return '';
  const src = md
    .replace(/<!--[\s\S]*?-->/g, '') // html comments
    .replace(/<script[\s\S]*?<\/script>/gi, '') // embed scripts
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<blockquote[^>]*class="[^"]*twitter-tweet[^"]*"[\s\S]*?<\/blockquote>/gi, '') // tweet embeds
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, '') // iframe embeds
    .replace(/^\s*import\s.*$/gm, '') // mdx imports
    .replace(/^\s*export\s.*$/gm, '') // mdx exports
    .replace(/<\/?[A-Z][A-Za-z0-9]*(\s[^>]*)?\/?>/g, ''); // JSX components
  const lines = src.split('\n');
  const out: string[] = [];
  let listBuf: string[] = [];
  const flushList = () => {
    if (listBuf.length) {
      out.push('<ul class="aj-ul">' + listBuf.map((li) => `<li>${inline(li)}</li>`).join('') + '</ul>');
      listBuf = [];
    }
  };

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (/^\s*```/.test(line)) {
      flushList();
      const buf: string[] = [];
      i++;
      while (i < lines.length && !/^\s*```/.test(lines[i])) buf.push(lines[i++]);
      i++;
      out.push(`<pre class="aj-pre"><code>${esc(buf.join('\n'))}</code></pre>`);
      continue;
    }
    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) {
      flushList();
      const lvl = h[1].length;
      out.push(
        `<div class="aj-h aj-h${lvl}"><span class="aj-h-mark">${'#'.repeat(lvl)}</span> ${inline(h[2].trim())}</div>`
      );
      i++;
      continue;
    }
    if (/^\s*>\s?/.test(line)) {
      flushList();
      const buf: string[] = [];
      while (i < lines.length && /^\s*>\s?/.test(lines[i])) buf.push(lines[i++].replace(/^\s*>\s?/, ''));
      out.push(`<blockquote class="aj-quote">${inline(buf.join(' '))}</blockquote>`);
      continue;
    }
    const li = line.match(/^\s*[-*+]\s+(.*)$/) || line.match(/^\s*\d+\.\s+(.*)$/);
    if (li) {
      listBuf.push(li[1]);
      i++;
      continue;
    }
    if (/^\s*$/.test(line)) {
      flushList();
      i++;
      continue;
    }
    if (/^!\[([^\]]*)\]\(([^)]+)\)\s*$/.test(line)) {
      flushList();
      out.push(`<div class="aj-figure-block">${inline(line.trim())}</div>`);
      i++;
      continue;
    }
    // Paragraph — gather until a blank line or a new block starts.
    flushList();
    const buf = [line];
    i++;
    while (i < lines.length && !/^\s*$|^#{1,4}\s|^\s*[-*+]\s|^\s*>\s|^\s*```/.test(lines[i])) buf.push(lines[i++]);
    const text = buf.join(' ').trim();
    if (text) out.push(`<p class="aj-p">${inline(text)}</p>`);
  }
  flushList();
  return out.slice(0, maxBlocks).join('');
}
