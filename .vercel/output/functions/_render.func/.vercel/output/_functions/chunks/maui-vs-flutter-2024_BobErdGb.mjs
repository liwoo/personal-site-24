import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Q924hkwF.mjs';
import './astro/assets-service_BFh1IzDj.mjs';
import { $ as $$Image } from './_astro_assets_OE4NbHqS.mjs';
import 'clsx';

const frontmatter = {
  "publishDate": "2024-01-06T00:00:00.000Z",
  "title": "MAUI vs Flutter 2024 - Is it time to switch?",
  "excerpt": "TL;DR MAUI is still the 3rd best cross platform mobile technology I've worked with, but if writing C# means as much to you as it does to me, then  you might consider giving it a try this year.  I explain why.",
  "image": "https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1651&q=80",
  "draft": true,
  "category": "Tech",
  "tags": ["maui", "flutter", "mobile"],
  "metadata": {
    "canonical": "https://chienda.com/astrowind-template-in-depth"
  },
  "readingTime": 3
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "what-matters-to-the-bosses",
    "text": "What Matters to the Bosses"
  }, {
    "depth": 3,
    "slug": "1-ecosystem-maturity",
    "text": "1. Ecosystem Maturity"
  }, {
    "depth": 3,
    "slug": "2-hireability",
    "text": "2. Hireability"
  }, {
    "depth": 3,
    "slug": "3-performance",
    "text": "3. Performance"
  }, {
    "depth": 2,
    "slug": "what-matters-to-me",
    "text": "What Matters to Me"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "My first contact with Xamarin was back in 2017. I had just completed my graduate studies, and was buoyed for the rest of my coding career.  I had decided to focus on C# and the .NET ecosystem."
    }), "\n", createVNode(_components.p, {
      children: "Around the same time, I was working on my first startup called Tiyeni, which I was building using React Native.  My experience with React Native was undewhelming in 2017, although I realize the community has come a long way since then."
    }), "\n", createVNode(_components.p, {
      children: "Granted, Xamarin was no unicorn either, so eventually I settled on Flutter as the Google team seemed to tackle most of the issues I was frusrated with while building cross-platform Apps."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Disclaimer"
      })
    }), "\n", createVNode(_components.p, {
      children: "I am still a C# fanboy to date and have been keenly watching Microsoft\u2019s journey from Xamarin to Xamari.Forms, to now .NET MAUI.  I really want them to do well."
    }), "\n", createVNode(_components.p, {
      children: "And as much as I\u2019m happy with Flutter, one of my goals this year is to master as few languages as possible as and become more specialized. Dart is an enjoyable language (so is Swift); but its versatility really sucks!."
    }), "\n", createVNode(_components.p, {
      children: "So recently, I decided to give MAUI another try, for the first time in 7 years!  Here\u2019s my take."
    }), "\n", createVNode(_components.h2, {
      id: "what-matters-to-the-bosses",
      children: "What Matters to the Bosses"
    }), "\n", createVNode(_components.p, {
      children: "Choosing a cross-platform technology is not just a personal decision.  Usually, you\u2019ll be working in a company where such decisions can have long-lasting ramifications down the line.  And even if you\u2019re a freelancer, you\u2019ll have to think about continuity of your project if your client decides to maintain it themselves."
    }), "\n", createVNode(_components.h3, {
      id: "1-ecosystem-maturity",
      children: "1. Ecosystem Maturity"
    }), "\n", createVNode(_components.p, {
      children: "The first question your boss will ask is: who else is using it. As annoying as such thinking can be, its valid.  React Native, for instance, has an impressive showcase.  It\u2019s an easy sell.  Kotlin Multiplatform, on the other hand, is a different story."
    }), "\n", createVNode(_components.p, {
      children: "But popularity isn\u2019t the only thing to think about here.  You have to consider how well your framework plays with 3rd party tools for analytics, crashlitics, deployment, acceptance testing, etc."
    }), "\n", createVNode(_components.p, {
      children: "Flutter clearly takes this round.  Being a Google baby, its seamless integration with Firebase will get you very far very quikly.  Other Google tools like AdSense and In-App Purschases make it a mature choice for production Apps compared to MAUI."
    }), "\n", createVNode(_components.p, {
      children: "On top of that, the community has grown tremendously over the last few years, and Google themselves do a great job building and maintaining plugins, as well as curating high quality 3rd party plugins that will help you solve pretty much any challenge you will encounter."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Flutter 1 : 0 MAUI"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-hireability",
      children: "2. Hireability"
    }), "\n", createVNode(_components.p, {
      children: "The next question you will probably get is: how easy is it to hire a C# developer?  This one is a bit more tricky.  Even though Dart has been around for 10 years as a language, it really only came to prominence after the announcement of Flutter."
    }), "\n", createVNode(_components.p, {
      children: "C#, on the other hand, is a very popular business solutions language that has been around for more than 20 years and is used by some of the most talented developers around."
    }), "\n", createVNode(_components.p, {
      children: "So if its just a dog fight between C# and Dart, you are more likely to find higher quality C# developers more easily.  But if you\u2019re specifically looking at people with Xamarin/MAUI exeprience vs Flutter experience, my hunch tells me that its probably going to be more even."
    }), "\n", createVNode(_components.p, {
      children: "But since we are data-driven people, lets see what the numbers say about this:"
    }), "\n", createVNode(_components.h3, {
      id: "3-performance",
      children: "3. Performance"
    }), "\n", createVNode(_components.h2, {
      id: "what-matters-to-me",
      children: "What Matters to Me"
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/post/maui-vs-flutter-2024.mdx";
const file = "/Users/liwu/Projects/websites/personal-24/src/content/post/maui-vs-flutter-2024.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/liwu/Projects/websites/personal-24/src/content/post/maui-vs-flutter-2024.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
