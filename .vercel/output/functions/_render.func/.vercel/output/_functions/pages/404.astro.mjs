import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_Q924hkwF.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Bpf2hwDM.mjs';
import { c as getHomePermalink } from '../chunks/permalinks_BCPgzee8.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = `Error 404`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": { title } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex items-center h-full p-16"> <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8"> <div class="max-w-md text-center"> <h2 class="mb-8 font-bold text-9xl"> <span class="sr-only">Error</span> <span class="text-primary">404</span> </h2> <p class="text-3xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p> <p class="mt-4 mb-8 text-lg text-muted dark:text-slate-400">
But dont worry, you can find plenty of other things on our homepage.
</p> <a rel="noopener noreferrer"${addAttribute(getHomePermalink(), "href")} class="btn ml-4">Back to homepage</a> </div> </div> </section> ` })}`;
}, "/Users/liwu/Projects/websites/personal-24/src/pages/404.astro", void 0);

const $$file = "/Users/liwu/Projects/websites/personal-24/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
