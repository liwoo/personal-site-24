import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate } from './astro/server_Q924hkwF.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://chienda.com");
const $$Skill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Skill;
  const { title = "JavaScript", level = 75 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="my-8 flex items-center gap-x-8"> <h4 class="w-1/4 lg:w-1/6">${title}</h4> <div class="w-full relative h-8"> <div class="h-full w-full absolute rounded bg-primary opacity-20"></div> <div${addAttribute(`width: ${level}%;`, "style")} class="h-full absolute bg-primary" data-animation="animate-slide-left"></div> </div> </div>`;
}, "/Users/liwu/Projects/websites/personal-24/src/components/widgets/Skill.astro", void 0);

const techStack = [
  {
    title: "JavaScript",
    logo: "js",
    category: "Language",
    experience: 8
  },
  {
    title: "Python",
    logo: "js",
    category: "Language",
    experience: 2
  },
  {
    title: "React",
    logo: "react",
    category: "Framework",
    experience: 6
  },
  {
    title: "Next JS",
    logo: "next",
    category: "Other",
    experience: 3
  },
  {
    title: "Astro",
    logo: "astro",
    category: "Other",
    experience: 1
  },
  {
    title: "C#",
    logo: "csharp",
    category: "Language",
    experience: 4
  },
  {
    title: "Dart",
    logo: "dart",
    category: "Language",
    experience: 5
  },
  {
    title: ".NET",
    logo: "dotnet",
    category: "Framework",
    experience: 4
  },
  {
    title: "Flutter",
    logo: "flutter",
    category: "Framework",
    experience: 5
  },
  {
    title: "Remix JS",
    logo: "remix",
    category: "Framework",
    experience: 3
  },
  {
    title: "Go",
    logo: "golang",
    category: "Language",
    experience: 2
  },
  {
    title: "Rust",
    logo: "rust",
    category: "Other",
    experience: 1
  },
  {
    title: "Swift",
    logo: "swift",
    category: "Other",
    experience: 1
  },
  {
    title: "Docker",
    category: "Infrastructure",
    experience: 4
  },
  {
    title: "Kubernetes",
    category: "Infrastructure",
    experience: 3
  },
  {
    title: "Postgres",
    category: "Infrastructure",
    experience: 6
  },
  {
    title: "Azure",
    category: "Infrastructure",
    experience: 1
  },
  {
    title: "LangChain",
    category: "Framework",
    experience: 1
  },
  {
    title: "Firebase",
    category: "Infrastructure",
    experience: 4
  },
  {
    title: "Couchbase",
    category: "Other",
    experience: 2
  }
];

export { $$Skill as $, techStack as t };
