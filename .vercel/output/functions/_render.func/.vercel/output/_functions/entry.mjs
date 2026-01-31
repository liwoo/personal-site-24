import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BAaNOpo9.mjs';
import { manifest } from './manifest_CZ_q_ACn.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/newsletter.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/privacy.astro.mjs');
const _page6 = () => import('./pages/projects/stack.astro.mjs');
const _page7 = () => import('./pages/projects.astro.mjs');
const _page8 = () => import('./pages/projects/_---project_.astro.mjs');
const _page9 = () => import('./pages/rss.xml.astro.mjs');
const _page10 = () => import('./pages/search.json.astro.mjs');
const _page11 = () => import('./pages/signup-form.astro.mjs');
const _page12 = () => import('./pages/submit-contact.astro.mjs');
const _page13 = () => import('./pages/terms.astro.mjs');
const _page14 = () => import('./pages/using.astro.mjs');
const _page15 = () => import('./pages/_---blog_/search.astro.mjs');
const _page16 = () => import('./pages/_---blog_/tabs.astro.mjs');
const _page17 = () => import('./pages/_---blog_/_category_/_---page_.astro.mjs');
const _page18 = () => import('./pages/_---blog_/_tag_/_---page_.astro.mjs');
const _page19 = () => import('./pages/_---blog_/_---page_.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');
const _page21 = () => import('./pages/_---blog_.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.19_@types+node@24.7.1_rollup@4.52.4_typescript@5.9.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/newsletter.ts", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/privacy.md", _page5],
    ["src/pages/projects/stack/index.astro", _page6],
    ["src/pages/projects/index.astro", _page7],
    ["src/pages/projects/[...project]/index.astro", _page8],
    ["src/pages/rss.xml.ts", _page9],
    ["src/pages/search.json.ts", _page10],
    ["src/pages/signup-form.ts", _page11],
    ["src/pages/submit-contact.ts", _page12],
    ["src/pages/terms.md", _page13],
    ["src/pages/using.astro", _page14],
    ["src/pages/[...blog]/search/index.astro", _page15],
    ["src/pages/[...blog]/tabs/index.astro", _page16],
    ["src/pages/[...blog]/[category]/[...page].astro", _page17],
    ["src/pages/[...blog]/[tag]/[...page].astro", _page18],
    ["src/pages/[...blog]/[...page].astro", _page19],
    ["src/pages/index.astro", _page20],
    ["src/pages/[...blog]/index.astro", _page21]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "d2777390-2cf6-45ed-9b70-7544c265989b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
