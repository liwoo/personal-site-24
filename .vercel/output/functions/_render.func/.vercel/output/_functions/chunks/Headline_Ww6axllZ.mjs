import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, u as unescapeHTML, b as renderTemplate } from './astro/server_Q924hkwF.mjs';
import 'kleur/colors';
import 'clsx';
import { twMerge } from 'tailwind-merge';
/* empty css                         */

const $$Astro = createAstro("https://chienda.com");
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Headline;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    classes = {}
  } = Astro2.props;
  const {
    container: containerClass = "max-w-3xl",
    title: titleClass = "text-3xl md:text-4xl ",
    subtitle: subtitleClass = "md:text-xl"
  } = classes;
  return renderTemplate`${(title || subtitle || tagline) && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge("mb-8 md:mx-auto md:mb-12 text-center headline-container", containerClass), "class")} data-astro-cid-kizetxg7>${tagline && renderTemplate`<p class="headline-tagline text-base font-bold tracking-wide uppercase" data-astro-cid-kizetxg7>${unescapeHTML(tagline)}</p>`}${title && renderTemplate`<h2${addAttribute(twMerge("headline-title font-bold leading-tighter tracking-tighter font-heading text-heading", titleClass), "class")} data-astro-cid-kizetxg7>${unescapeHTML(title)}</h2>`}${subtitle && renderTemplate`<p${addAttribute(twMerge("headline-subtitle mt-4 text-muted", subtitleClass), "class")} data-astro-cid-kizetxg7>${unescapeHTML(subtitle)}</p>`}</div>`}`;
}, "/Users/liwu/Projects/websites/personal-24/src/components/ui/Headline.astro", void 0);

export { $$Headline as $ };
