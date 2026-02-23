import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderSlot } from './astro/server_Q924hkwF.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from './PageLayout_BH3lS_82.mjs';
/* empty css                           */

const $$Astro = createAstro("https://chienda.com");
const $$MarkdownLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownLayout;
  const { frontmatter } = Astro2.props;
  const metadata = {
    title: frontmatter?.title
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata, "data-astro-cid-xsct23v3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-4 py-16 sm:px-6 mx-auto lg:px-8 lg:py-20 max-w-4xl" data-astro-cid-xsct23v3> <h1 class="markdown-title font-bold font-heading text-4xl md:text-5xl leading-tighter tracking-tighter" data-astro-cid-xsct23v3>${frontmatter.title}</h1> <div class="markdown-content mx-auto prose prose-lg max-w-4xl dark:prose-invert dark:prose-headings:text-slate-300 prose-md prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-img:rounded-md prose-img:shadow-lg mt-8" data-astro-cid-xsct23v3> ${renderSlot($$result2, $$slots["default"])} </div> </section> ` })}  `;
}, "/Users/liwu/Projects/websites/personal-24/src/layouts/MarkdownLayout.astro", void 0);

export { $$MarkdownLayout as $ };
