import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, r as renderComponent, u as unescapeHTML, F as Fragment } from './astro/server_Q924hkwF.mjs';
import 'kleur/colors';
import { a as $$Image } from './Logo_xxZU-W3W.mjs';
import { $ as $$Button } from './Button_PaYpGhrc.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro("https://chienda.com");
const $$HeroGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeroGrid;
  return renderTemplate`${maybeRenderHead()}<div class="hero-grid-container" data-astro-cid-dxravqlg> <div class="grid md:hidden grid-cols-6 grid-rows-4 gap-2 -scale-x-100" data-astro-cid-dxravqlg> ${Array.from({ length: 24 }).map((_, i) => renderTemplate`<div${addAttribute(`sq-${i + 1}`, "data-square")} class="about-squared h-8 w-8 bg-primary opacity-[0.03] rounded-xl hover:opacity-20 transition-all ease-in-out duration-75" data-astro-cid-dxravqlg></div>`)} </div> <div class="hidden md:grid lg:hidden grid-cols-8 grid-rows-4 gap-4 -scale-x-100" data-astro-cid-dxravqlg> ${Array.from({ length: 45 }).map((_, i) => renderTemplate`<div${addAttribute(`sq-${i + 1}`, "data-square")} class="about-squared h-8 w-8 bg-primary opacity-[0.02] rounded-xl hover:opacity-10 transition-all ease-in-out duration-75" data-astro-cid-dxravqlg></div>`)} </div> <div class="hidden lg:grid xl:hidden grid-cols-10 grid-rows-8 gap-4 -scale-x-100" data-astro-cid-dxravqlg> ${Array.from({ length: 66 }).map((_, i) => renderTemplate`<div${addAttribute(`sq-${i + 1}`, "data-square")} class="about-squared h-10 w-10 bg-primary opacity-[0.04] rounded-xl hover:opacity-10 transition-all ease-in-out duration-75" data-astro-cid-dxravqlg></div>`)} </div> <div class="hidden xl:grid grid-cols-12 grid-rows-8 gap-4 -scale-x-100" data-astro-cid-dxravqlg> ${Array.from({ length: 78 }).map((_, i) => renderTemplate`<div${addAttribute(`sq-${i + 1}`, "data-square")} class="about-squared h-12 w-12 bg-primary opacity-[0.02] rounded-xl hover:opacity-10 transition-all ease-in-out duration-75" data-astro-cid-dxravqlg></div>`)} </div> </div>  `;
}, "/Users/liwu/Projects/websites/personal-24/src/components/ui/HeroGrid.astro", void 0);

const $$Astro = createAstro("https://chienda.com");
const $$Hero2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    actions = await Astro2.slots.render("actions"),
    image = await Astro2.slots.render("image")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative not-prose" data-astro-cid-3w6r54vr> <div class="absolute z-10 inset-y-0 flex flex-col w-full md:w-1/3 lg:w-1/2 right-0" aria-hidden="true" data-astro-cid-3w6r54vr> ${renderComponent($$result, "HeroGrid", $$HeroGrid, { "data-astro-cid-3w6r54vr": true })} </div> <div class="relative container" data-astro-cid-3w6r54vr> <div class="pt-28 lg:pt-52 lg:flex lg:items-center lg:gap-8" data-astro-cid-3w6r54vr> <div class="hero2-content basis-2/3 lg:text-left pb-10 md:pb-16 mx-auto" data-astro-cid-3w6r54vr> ${tagline && renderTemplate`<p class="hero2-tagline text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase" data-astro-cid-3w6r54vr>${unescapeHTML(tagline)}</p>`} ${title && renderTemplate`<h1 class="hero2-title text-4xl md:text-5xl font-semibold mb-4 font-heading text-default" data-astro-cid-3w6r54vr>${unescapeHTML(title)}</h1>`} <div class="max-w-3xl lg:max-w-none" data-astro-cid-3w6r54vr> ${subtitle && renderTemplate`<p class="hero2-subtitle text-lg text-muted" data-astro-cid-3w6r54vr>${unescapeHTML(subtitle)}</p>`} ${actions && renderTemplate`<div class="hero2-actions max-w-xs sm:max-w-md m-auto mt-6 flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl" data-astro-cid-3w6r54vr> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto" data-astro-cid-3w6r54vr> ${renderComponent($$result, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0", "data-astro-cid-3w6r54vr": true })} </div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> ${content && renderTemplate`<p class="hero2-content-extra text-primary z-10 relative" data-astro-cid-3w6r54vr>${unescapeHTML(content)}</p>`} </div> <div class="hero2-image basis-1/2" data-astro-cid-3w6r54vr> ${image && renderTemplate`<div class="relative m-auto max-w-5xl" data-astro-cid-3w6r54vr> ${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mx-auto rounded-md w-full", "widths": [400, 768, 1024, 2040], "sizes": "(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px", "loading": "eager", "width": 600, "height": 600, ...image, "data-astro-cid-3w6r54vr": true })}`} </div>`} </div> </div> </div> </section>  `;
}, "/Users/liwu/Projects/websites/personal-24/src/components/widgets/Hero2.astro", void 0);

export { $$Hero2 as $ };
