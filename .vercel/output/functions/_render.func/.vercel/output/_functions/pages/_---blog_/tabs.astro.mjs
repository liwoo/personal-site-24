import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Q924hkwF.mjs';
import 'kleur/colors';
import { $ as $$Tabs } from '../../chunks/Tabs_FjeRn9oU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://chienda.com");
const partial = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const data = await Astro2.request.formData();
  const activeTab = data.get("activeTab");
  const swapTarget = data.get("swapTarget");
  const tabs = data.get("tabs");
  return renderTemplate`${activeTab && swapTarget && tabs && renderTemplate`${renderComponent($$result, "Tabs", $$Tabs, { "activeTab": activeTab, "swapTarget": swapTarget, "tabs": JSON.parse(tabs) })}`}`;
}, "/Users/liwu/Projects/websites/personal-24/src/pages/[...blog]/tabs/index.astro", void 0);

const $$file = "/Users/liwu/Projects/websites/personal-24/src/pages/[...blog]/tabs/index.astro";
const $$url = "/[...blog]/tabs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    partial,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
