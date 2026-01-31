import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate } from './astro/server_Q924hkwF.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Icon_DUhVTlro.mjs';
import { I as I18N, a as getBlogPermalink } from './permalinks_BCPgzee8.mjs';
import { $ as $$Button } from './Button_PaYpGhrc.mjs';
/* empty css                          */

const $$Astro = createAstro("https://chienda.com");
const $$ToBlogLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ToBlogLink;
  const { textDirection } = I18N;
  const { link, text = "Back to Articles" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="blog-link-container" data-astro-cid-bntzjvbe> ${renderComponent($$result, "Button", $$Button, { "variant": "subtle", "class": "px-3 md:px-3", "href": link ?? getBlogPermalink(), "data-astro-cid-bntzjvbe": true }, { "default": ($$result2) => renderTemplate`${textDirection === "rtl" ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:arrow-right", "class": "w-5 h-5 mr-1 -ml-1.5 rtl:-mr-1.5 rtl:ml-1", "data-astro-cid-bntzjvbe": true })}` : renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:arrow-left", "class": "w-5 h-5 mr-1 -ml-1.5 rtl:-mr-1.5 rtl:ml-1", "data-astro-cid-bntzjvbe": true })}`}${text}` })} </div>  `;
}, "/Users/liwu/Projects/websites/personal-24/src/components/blog/ToBlogLink.astro", void 0);

export { $$ToBlogLink as $ };
