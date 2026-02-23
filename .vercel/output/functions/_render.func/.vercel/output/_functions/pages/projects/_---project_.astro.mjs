import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_Q924hkwF.mjs';
import 'kleur/colors';
import merge from 'lodash.merge';
import { a as $$Image } from '../../chunks/Logo_CUQhqpab.mjs';
import { $ as $$ToBlogLink } from '../../chunks/ToBlogLink_Z0fao-cb.mjs';
import { $ as $$Hero2 } from '../../chunks/Hero2_DsfkZWPO.mjs';
import { p as projects } from '../../chunks/projects_Cd3BDqIn.mjs';
import { $ as $$PageLayout } from '../../chunks/PageLayout_BH3lS_82.mjs';
import { $ as $$Button } from '../../chunks/Button_PaYpGhrc.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://chienda.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { project } = Astro2.params;
  const projectDetails = projects.find((p) => p.slug === project);
  const notFoundDetails = "Sorry, we could not find the project you are looking for.";
  const metadata = merge(
    {
      title: projectDetails.title,
      description: projectDetails.description,
      openGraph: {
        type: "project",
        images: [{ url: projectDetails.image.src }]
      }
    }
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero2", $$Hero2, {}, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`${projectDetails?.projectLink && renderTemplate`${renderComponent($$result4, "Button", $$Button, { "href": projectDetails.projectLink, "variant": "primary", "target": "_blank", "class": "mt-4" }, { "default": ($$result5) => renderTemplate`
View Live Project →
` })}`}` })}`, "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`${projectDetails?.subtitle ?? notFoundDetails}` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="z-10 relative"> ${renderComponent($$result4, "ToBlogLink", $$ToBlogLink, { "text": "Back to Projects", "link": "/projects" })} </div> ${projectDetails?.title ?? "Project Not Found"}` })}` })} <section class="py-8 lg:py-12 mx-auto"> <article> <header> ${projectDetails?.image ? renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": projectDetails.image.src, "class": "max-w-full lg:max-w-[900px] mx-auto mb-6 sm:rounded-md bg-gray-400 dark:bg-slate-700", "widths": [400, 900], "sizes": "(max-width: 900px) 400px, 900px", "alt": projectDetails.image.alt, "width": 900, "height": 506, "loading": "eager", "decoding": "async" })}` : renderTemplate`<div class="max-w-3xl mx-auto px-4 sm:px-6"> <div class="border-t dark:border-slate-700"></div> </div>`} </header> ${projectDetails && renderTemplate`<div class="my-8 w-full flex justify-center gap-4 flex-wrap"> ${projectDetails.projectLink && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "href": projectDetails.projectLink, "variant": "primary", "target": "_blank", "size": "lg" }, { "default": ($$result3) => renderTemplate`
🚀 View Live Project
` })}`} ${projectDetails.sourceLink && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "href": projectDetails.sourceLink, "variant": "secondary", "target": "_blank" }, { "default": ($$result3) => renderTemplate` <svg class="w-4 h-4 mr-2 inline" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path> </svg>
View Source Code
` })}`} </div>`} ${projectDetails ? renderTemplate`<div class="project-table container-article w-full my-4 table-auto border-separate border-spacing-y-12"> <div> <div> <h2 class="font-bold pr-4 md:w-1/4 mb-2">Duration:</h2> <h3 class="text-muted">${projectDetails?.duration}</h3> </div> <div> <h2 class="font-bold pr-4 md:w-1/4 mb-2">Role:</h2> <h3 class="text-muted">${projectDetails?.role}</h3> </div> <div> <h2 class="font-bold pr-4 md:w-1/4 mb-2">Stack:</h2> <div class="text-muted"> ${projectDetails?.stack?.map((stack) => renderTemplate`<span class="mr-4">${stack}</span>`)} </div> </div> <div> <h2 class="font-bold pr-4 md:w-1/4 mb-2">Project Description:</h2> <h3 class="text-muted md:w-3/4">${projectDetails?.description}</h3> </div> <div> <h2 class="font-bold pr-4 w-1/4 mb-2">Process:</h2> <div class="text-muted md:w-3/4"> ${projectDetails?.methods?.map((method, i) => renderTemplate`<div class="flex items-top gap-x-8 mb-4"> <div class="flex h-12 w-12 items-center justify-center bg-card rounded-full">${i + 1}</div> <div class="w-full"> <h3 class="mb-2 font-bold">${method.title}</h3> <p>${method.description}</p> </div> </div>`)} </div> </div> </div> </div>` : renderTemplate`<div class="max-w-3xl mx-auto px-4 sm:px-6"> <div class="border-t dark:border-slate-700"></div> <h5>Not Found</h5> </div>`} ${projectDetails && projectDetails.testimony && renderTemplate`<div class="container-lg"> <div class="relative p-8 bg-card mx-auto rounded-lg w-full md:w-2/3 lg:w-1/2"> <div class="flex gap-x-6"> <div> <div class="w-20 h-20 rounded-full"> ${renderComponent($$result2, "Image", $$Image, { "src": projectDetails.testimony.image?.src, "alt": projectDetails.testimony.image?.alt, "class": "rounded-full border-4 border-slate-200 dark:border-slate-700" })} </div> </div> <div> <h4 class="mb-2 font-bold">${projectDetails.testimony.name}</h4> <h5 class="text-muted">${projectDetails.testimony.job}</h5> <p class="text-primary">${projectDetails.testimony.company}</p> </div> </div> <div class="my-4 relative"> <p class="absolute text-8xl text-muted opacity-20">"</p> <p class="text-muted mt-2">${projectDetails.testimony.testimony}</p> </div> </div> </div>`} </article> </section> ` })}`;
}, "/Users/liwu/Projects/websites/personal-24/src/pages/projects/[...project]/index.astro", void 0);

const $$file = "/Users/liwu/Projects/websites/personal-24/src/pages/projects/[...project]/index.astro";
const $$url = "/projects/[...project]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
