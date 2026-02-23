import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate } from './astro/server_Q924hkwF.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Icon_DUhVTlro.mjs';
import { g as getPermalink } from './permalinks_vW2eIjM2.mjs';
import { $ as $$Button } from './Button_PaYpGhrc.mjs';

const $$Astro = createAstro("https://chienda.com");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { prevUrl, nextUrl, prevText = "Newer posts", nextText = "Older posts" } = Astro2.props;
  return renderTemplate`${(prevUrl || nextUrl) && renderTemplate`${maybeRenderHead()}<div class="container flex" id="pagination"><div class="flex flex-row mx-auto container justify-between my-8 lg:my-12">${renderComponent($$result, "Button", $$Button, { "variant": "secondary", "class": `md:px-3 px-3 mr-2 ${!prevUrl ? "invisible" : ""}`, "href": getPermalink(prevUrl) }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "w-6 h-6" })}<p class="ml-2">${prevText}</p>` })}${renderComponent($$result, "Button", $$Button, { "variant": "secondary", "class": `md:px-3 px-3 ${!nextUrl ? "invisible" : ""}`, "href": getPermalink(nextUrl) }, { "default": ($$result2) => renderTemplate`<span class="mr-2">${nextText}</span>${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-right", "class": "w-6 h-6" })}` })}</div></div>`}`;
}, "/Users/liwu/Projects/websites/personal-24/src/components/blog/Pagination.astro", void 0);

export { $$Pagination as $ };
