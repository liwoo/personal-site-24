import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate } from './astro/server_Q924hkwF.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';

const $$Astro = createAstro("https://chienda.com");
const $$Tabs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tabs;
  const { tabs, activeTab, swapTarget } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-card rounded-lg p-1"> <div> <nav class="flex space-x-4 justify-around" aria-label="Tabs"> ${tabs.map((tab) => renderTemplate`<button${addAttribute(`width: ${1 / tabs.length * 100}%;`, "style")}${addAttribute(tab.action, "hx-get")}${addAttribute(swapTarget, "hx-target")} hx-trigger="click"${addAttribute(clsx(
    tab.label.toLowerCase() === activeTab.toLowerCase() ? "bg-page" : "",
    "py-2 text-sm font-medium text-center rounded-md text-muted hover:text-muted"
  ), "class")}> <form> <input type="hidden" name="activeTab"${addAttribute(tab.label, "value")}> <input type="hidden" name="swapTarget"${addAttribute(swapTarget, "value")}> <input type="hidden" name="tabs"${addAttribute(JSON.stringify(tabs), "value")}> <div hx-post="/blog/tabs" hx-trigger="click" hx-target="#blog-tabs"> ${tab.label} </div> </form> </button>`)} </nav> </div> </div>`;
}, "/Users/liwu/Projects/websites/personal-24/src/components/ui/Tabs.astro", void 0);

export { $$Tabs as $ };
