import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Q924hkwF.mjs';
import 'kleur/colors';
import { t as techStack, $ as $$Skill } from '../../chunks/stack_DoaawsVw.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://chienda.com");
const partial = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const data = await Astro2.request.formData();
  const c = data.get("stack");
  return renderTemplate`${maybeRenderHead()}<div> ${techStack.filter((stack) => stack.category.toLocaleLowerCase() == c.toLocaleLowerCase()).sort((a, b) => b.experience - a.experience).map((stack) => renderTemplate`${renderComponent($$result, "Skill", $$Skill, { "title": stack.title, "level": stack.experience / 8 * 100 })}`)} </div>`;
}, "/Users/liwu/Projects/websites/personal-24/src/pages/projects/stack/index.astro", void 0);

const $$file = "/Users/liwu/Projects/websites/personal-24/src/pages/projects/stack/index.astro";
const $$url = "/projects/stack";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    partial,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
