/**
 * Dot-matrix block banner for Dev Mode headers.
 *
 * Renders a word as a grid of rounded rectangle "pixels" (a segmented/LED block
 * font) rather than `#` text — see the reference. Output is an HTML grid of
 * on/off cells (`.aj-bpx`), styled in DevModeSkin.astro.
 */

const escAttr = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// 5-row uppercase block font ('#' = on). Glyph widths vary; each glyph's rows
// are equal width, and a 1-cell gap is inserted between glyphs.
const FONT: Record<string, string[]> = {
  A: [' ## ', '#  #', '####', '#  #', '#  #'],
  B: ['### ', '#  #', '### ', '#  #', '### '],
  C: [' ###', '#   ', '#   ', '#   ', ' ###'],
  D: ['### ', '#  #', '#  #', '#  #', '### '],
  E: ['####', '#   ', '### ', '#   ', '####'],
  F: ['####', '#   ', '### ', '#   ', '#   '],
  G: [' ###', '#   ', '# ##', '#  #', ' ###'],
  H: ['#  #', '#  #', '####', '#  #', '#  #'],
  I: ['###', ' # ', ' # ', ' # ', '###'],
  J: ['  ##', '   #', '   #', '#  #', ' ## '],
  K: ['#  #', '# # ', '##  ', '# # ', '#  #'],
  L: ['#   ', '#   ', '#   ', '#   ', '####'],
  M: ['#   #', '## ##', '# # #', '#   #', '#   #'],
  N: ['#  #', '## #', '# ##', '#  #', '#  #'],
  O: [' ## ', '#  #', '#  #', '#  #', ' ## '],
  P: ['### ', '#  #', '### ', '#   ', '#   '],
  Q: [' ## ', '#  #', '# # ', '#  #', ' ###'],
  R: ['### ', '#  #', '### ', '# # ', '#  #'],
  S: [' ###', '#   ', ' ## ', '   #', '### '],
  T: ['###', ' # ', ' # ', ' # ', ' # '],
  U: ['#  #', '#  #', '#  #', '#  #', ' ## '],
  V: ['#  #', '#  #', '#  #', ' ## ', ' ## '],
  W: ['#   #', '#   #', '# # #', '## ##', '#   #'],
  X: ['#   #', ' # # ', '  #  ', ' # # ', '#   #'],
  Y: ['#   #', ' # # ', '  #  ', '  #  ', '  #  '],
  Z: ['####', '   #', ' ## ', '#   ', '####'],
  '0': [' ## ', '#  #', '#  #', '#  #', ' ## '],
  '1': [' # ', '## ', ' # ', ' # ', '###'],
  '2': ['### ', '   #', ' ## ', '#   ', '####'],
  '3': ['###', '   #', ' ## ', '   #', '###'],
  '4': ['#  #', '#  #', '####', '   #', '   #'],
  '5': ['####', '#   ', '### ', '   #', '### '],
  '6': [' ###', '#   ', '### ', '#  #', ' ## '],
  '7': ['####', '   #', '  # ', ' #  ', ' #  '],
  '8': [' ## ', '#  #', ' ## ', '#  #', ' ## '],
  '9': [' ## ', '#  #', ' ###', '   #', ' ## '],
  ' ': ['  ', '  ', '  ', '  ', '  '],
};

export function renderBlockBanner(text: string): string {
  const rows = ['', '', '', '', ''];
  for (const ch of text.toUpperCase()) {
    const g = FONT[ch] || FONT[' '];
    for (let r = 0; r < 5; r++) rows[r] += g[r] + ' ';
  }
  const grid = rows
    .map(
      (row) =>
        `<div class="aj-brow">` +
        Array.from(row)
          .map((c) => `<span class="aj-bpx${c === '#' ? ' on' : ''}"></span>`)
          .join('') +
        `</div>`
    )
    .join('');
  return `<div class="aj-banner" role="img" aria-label="${escAttr(text)}">${grid}</div>`;
}
