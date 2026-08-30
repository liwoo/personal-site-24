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

const figureWithCaption = (src: string, alt: string, caption: string): string =>
  `<div class="aj-figure-block">${figure(src, alt)}${caption ? `<div class="aj-figcap">${esc(caption)}</div>` : ''}</div>`;

const LANG_LABELS: Record<string, string> = {
  py: 'Python', python: 'Python', js: 'JavaScript', javascript: 'JavaScript', ts: 'TypeScript',
  typescript: 'TypeScript', jsx: 'JSX', tsx: 'TSX', json: 'JSON', bash: 'Bash', sh: 'Shell',
  shell: 'Shell', zsh: 'Shell', sql: 'SQL', html: 'HTML', css: 'CSS', yaml: 'YAML', yml: 'YAML',
  rust: 'Rust', go: 'Go', java: 'Java', csharp: 'C#', cs: 'C#', cpp: 'C++', c: 'C', ruby: 'Ruby',
  php: 'PHP', swift: 'Swift', kotlin: 'Kotlin', dart: 'Dart', toml: 'TOML', dockerfile: 'Dockerfile',
  graphql: 'GraphQL', text: 'Output', plaintext: 'Output',
};

// Lightweight, language-agnostic syntax highlighter for Dev Mode code blocks.
function highlightCode(raw: string): string {
  return esc(raw).replace(
    /(\/\*[\s\S]*?\*\/|\/\/[^\n]*|#[^\n]*)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|(\b\d+(?:\.\d+)?\b)|(\b(?:true|false|null|None|True|False|nil)\b)|(\b(?:const|let|var|function|func|def|return|if|else|elif|for|while|import|from|export|class|struct|interface|type|enum|async|await|new|public|private|protected|static|void|string|bool|boolean|fn|pub|use|mod|match|package|switch|case|break|continue|lambda|print|echo|require|module|namespace)\b)|([{}[\]()])/g,
    (m, com, str, num, lit, kw, punc) => {
      if (com) return `<span class="tk-com">${com}</span>`;
      if (str) return `<span class="tk-str">${str}</span>`;
      if (num) return `<span class="tk-num">${num}</span>`;
      if (lit) return `<span class="tk-lit">${lit}</span>`;
      if (kw) return `<span class="tk-kw">${kw}</span>`;
      if (punc) return `<span class="tk-punc">${punc}</span>`;
      return m;
    }
  );
}

const decode = (s: string): string =>
  s
    .replace(/&#39;|&rsquo;|&lsquo;/g, "'")
    .replace(/&quot;|&ldquo;|&rdquo;/g, '"')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&hellip;/g, '…')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#\d+;/g, ' ');

export interface TweetData {
  text: string;
  author?: string;
  handle?: string;
  url?: string;
  date?: string;
}

/** A featured/embedded tweet, rendered as a themed terminal card. */
export function renderTweetCard(t: TweetData): string {
  const url = t.url ? escAttr(t.url.split('?')[0]) : '';
  const meta = [t.date ? esc(t.date) : '']
    .filter(Boolean)
    .join('');
  const linkHtml = url
    ? `<a class="aj-tweet-link" href="${url}" target="_blank" rel="noopener noreferrer">view on X ↗${meta ? ' · ' + meta : ''}</a>`
    : '';
  return (
    `<div class="aj-tweet">` +
    `<div class="aj-tweet-head"><span class="aj-tweet-x">𝕏</span>` +
    (t.author ? `<span class="aj-tweet-author">${esc(t.author)}</span>` : '') +
    (t.handle ? `<span class="aj-tweet-handle">@${esc(t.handle)}</span>` : '') +
    `</div>` +
    `<div class="aj-tweet-text">${esc(t.text || '')}</div>` +
    linkHtml +
    `</div>`
  );
}

/** Extract tweet fields from a `<blockquote class="twitter-tweet">` embed. */
function parseTweet(block: string): TweetData {
  const pMatch = block.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  let text = pMatch ? pMatch[1] : '';
  text = decode(
    text
      .replace(/<br\s*\/?>(\s*<br\s*\/?>)?/gi, ' ')
      .replace(/<[^>]+>/g, '')
      .replace(/\{[^}]*\}/g, ' ')
  )
    .replace(/\s+/g, ' ')
    .trim();
  const am = block.match(/&mdash;\s*([^(<]+?)\s*\(@([A-Za-z0-9_]+)\)/);
  const anchors = Array.from(block.matchAll(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi));
  let url: string | undefined;
  let date: string | undefined;
  for (const a of anchors) {
    if (/twitter\.com\/[^/]+\/status\//.test(a[1]) || /x\.com\/[^/]+\/status\//.test(a[1])) {
      url = a[1];
      date = a[2].replace(/<[^>]+>/g, '').trim();
    }
  }
  return { text, author: am?.[1].trim(), handle: am?.[2].trim(), url, date };
}

/** Inline markup on a raw (unescaped) span of text. */
function inline(text: string): string {
  const tokens: string[] = [];
  const stash = (html: string): string => {
    tokens.push(html);
    return `\uE000${tokens.length - 1}\uE001`;
  };
  // Strip MDX inline expressions like {' '} or {variable} (never in code — code
  // blocks bypass inline()).
  text = text.replace(/\{[^{}]*\}/g, '');
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
  // Tweets and figures become themed blocks (extracted before other cleaning so
  // their markup survives), referenced by @@TWEET<n>@@ / @@IMG<n>@@ markers.
  const tweets: string[] = [];
  const images: string[] = [];
  const attr = (tag: string, name: string): string | undefined =>
    tag.match(new RegExp(`\\b${name}\\s*=\\s*"([^"]*)"`, 'i'))?.[1];
  const stripTags = (s: string): string =>
    s.replace(/<[^>]+>/g, '').replace(/\{[^}]*\}/g, '').replace(/&[a-z]+;|&#\d+;/gi, ' ').replace(/\s+/g, ' ').trim();

  const src = md
    .replace(/<!--[\s\S]*?-->/g, '') // html comments
    .replace(/<blockquote[^>]*class="[^"]*twitter-tweet[^"]*"[\s\S]*?<\/blockquote>/gi, (m) => {
      tweets.push(renderTweetCard(parseTweet(m)));
      return `\n@@TWEET${tweets.length - 1}@@\n`;
    })
    // <figure> with an <img>/<Image> and optional <figcaption>
    .replace(/<figure\b[^>]*>([\s\S]*?)<\/figure>/gi, (_m, inner) => {
      const imgTag = inner.match(/<(?:img|Image)\b[^>]*>/i)?.[0] ?? '';
      const s = attr(imgTag, 'src');
      const capM = inner.match(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/i);
      const caption = capM ? stripTags(capM[1]) : '';
      if (s) images.push(figureWithCaption(s, attr(imgTag, 'alt') || caption || 'image', caption));
      else if (caption) images.push(`<div class="aj-figcap aj-figcap--solo">${caption}</div>`);
      else return '';
      return `\n@@IMG${images.length - 1}@@\n`;
    })
    // Standalone <img>/<Image> with a string src
    .replace(/<(?:img|Image)\b[^>]*\bsrc\s*=\s*"([^"]+)"[^>]*>/gi, (m, s) => {
      images.push(figureWithCaption(s, attr(m, 'alt') || 'image', ''));
      return `\n@@IMG${images.length - 1}@@\n`;
    })
    .replace(/<script[\s\S]*?<\/script>/gi, '') // embed scripts
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, '') // iframe embeds
    .replace(/^\s*import\s.*$/gm, '') // mdx imports
    .replace(/^\s*export\s.*$/gm, '') // mdx exports
    .replace(/<\/?[A-Z][A-Za-z0-9]*(\s[^>]*)?\/?>/g, ''); // remaining JSX components
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

    const tw = line.match(/^\s*@@TWEET(\d+)@@\s*$/);
    if (tw) {
      flushList();
      out.push(tweets[Number(tw[1])] ?? '');
      i++;
      continue;
    }
    const im = line.match(/^\s*@@IMG(\d+)@@\s*$/);
    if (im) {
      flushList();
      out.push(images[Number(im[1])] ?? '');
      i++;
      continue;
    }
    const fence = line.match(/^\s*```\s*([A-Za-z0-9+#-]*)/);
    if (fence) {
      flushList();
      const lang = (fence[1] || '').toLowerCase();
      const label = LANG_LABELS[lang] || (lang ? lang.toUpperCase() : 'Code');
      const buf: string[] = [];
      i++;
      while (i < lines.length && !/^\s*```/.test(lines[i])) buf.push(lines[i++]);
      i++;
      // Shareable, syntax-highlighted code block (copy + share handled in BasicScripts).
      out.push(
        `<div class="aj-codeblock" data-language="${esc(lang || 'code')}">` +
          `<div class="aj-codebar"><span class="aj-code-lang">&gt; ${esc(label)}_</span>` +
          `<span class="aj-code-actions">` +
          `<button type="button" class="aj-code-btn aj-code-copy" data-aj-copy-text aria-label="Copy code">copy</button>` +
          `<button type="button" class="aj-code-btn aj-code-share" data-aj-code-share aria-label="Share snippet">share</button>` +
          `</span></div>` +
          `<div class="aj-copy-body"><pre class="aj-pre"><code>${highlightCode(buf.join('\n'))}</code></pre></div>` +
          `</div>`
      );
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
    while (
      i < lines.length &&
      !/^\s*$|^#{1,4}\s|^\s*[-*+]\s|^\s*>\s|^\s*```|^\s*@@TWEET\d+@@|^\s*@@IMG\d+@@/.test(lines[i])
    )
      buf.push(lines[i++]);
    const text = buf.join(' ').trim();
    if (text) out.push(`<p class="aj-p">${inline(text)}</p>`);
  }
  flushList();
  return out.slice(0, maxBlocks).join('');
}
