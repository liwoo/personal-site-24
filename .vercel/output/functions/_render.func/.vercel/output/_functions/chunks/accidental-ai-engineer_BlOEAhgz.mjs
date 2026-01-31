import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Q924hkwF.mjs';
import './astro/assets-service_BFh1IzDj.mjs';
import { $ as $$Image } from './_astro_assets_OE4NbHqS.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, Tooltip, Line } from 'recharts';
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, d as CardFooter } from './card_ComalXOt.mjs';
import { TrendingUp } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import 'clsx';

const chartData = [
  { month: "2014-10", value: 7 },
  { month: "2014-11", value: 7 },
  { month: "2014-12", value: 7 },
  { month: "2015-01", value: 8 },
  { month: "2015-02", value: 7 },
  { month: "2015-03", value: 7 },
  { month: "2015-04", value: 7 },
  { month: "2015-05", value: 8 },
  { month: "2015-06", value: 7 },
  { month: "2015-07", value: 7 },
  { month: "2015-08", value: 7 },
  { month: "2015-09", value: 7 },
  { month: "2015-10", value: 7 },
  { month: "2015-11", value: 7 },
  { month: "2015-12", value: 7 },
  { month: "2016-01", value: 7 },
  { month: "2016-02", value: 7 },
  { month: "2016-03", value: 8 },
  { month: "2016-04", value: 7 },
  { month: "2016-05", value: 7 },
  { month: "2016-06", value: 7 },
  { month: "2016-07", value: 7 },
  { month: "2016-08", value: 7 },
  { month: "2016-09", value: 8 },
  { month: "2016-10", value: 8 },
  { month: "2016-11", value: 3 },
  { month: "2016-12", value: 3 },
  { month: "2017-01", value: 3 },
  { month: "2017-02", value: 3 },
  { month: "2017-03", value: 3 },
  { month: "2017-04", value: 3 },
  { month: "2017-05", value: 3 },
  { month: "2017-06", value: 3 },
  { month: "2017-07", value: 3 },
  { month: "2017-08", value: 4 },
  { month: "2017-09", value: 4 },
  { month: "2017-10", value: 4 },
  { month: "2017-11", value: 5 },
  { month: "2017-12", value: 4 },
  { month: "2018-01", value: 5 },
  { month: "2018-02", value: 5 },
  { month: "2018-03", value: 7 },
  { month: "2018-04", value: 6 },
  { month: "2018-05", value: 7 },
  { month: "2018-06", value: 6 },
  { month: "2018-07", value: 6 },
  { month: "2018-08", value: 6 },
  { month: "2018-09", value: 7 },
  { month: "2018-10", value: 7 },
  { month: "2018-11", value: 8 },
  { month: "2018-12", value: 8 },
  { month: "2019-01", value: 8 },
  { month: "2019-02", value: 8 },
  { month: "2019-03", value: 8 },
  { month: "2019-04", value: 8 },
  { month: "2019-05", value: 8 },
  { month: "2019-06", value: 9 },
  { month: "2019-07", value: 9 },
  { month: "2019-08", value: 8 },
  { month: "2019-09", value: 7 },
  { month: "2019-10", value: 8 },
  { month: "2019-11", value: 8 },
  { month: "2019-12", value: 7 },
  { month: "2020-01", value: 7 },
  { month: "2020-02", value: 8 },
  { month: "2020-03", value: 8 },
  { month: "2020-04", value: 8 },
  { month: "2020-05", value: 8 },
  { month: "2020-06", value: 8 },
  { month: "2020-07", value: 7 },
  { month: "2020-08", value: 7 },
  { month: "2020-09", value: 7 },
  { month: "2020-10", value: 7 },
  { month: "2020-11", value: 7 },
  { month: "2020-12", value: 8 },
  { month: "2021-01", value: 7 },
  { month: "2021-02", value: 8 },
  { month: "2021-03", value: 8 },
  { month: "2021-04", value: 8 },
  { month: "2021-05", value: 8 },
  { month: "2021-06", value: 8 },
  { month: "2021-07", value: 8 },
  { month: "2021-08", value: 8 },
  { month: "2021-09", value: 8 },
  { month: "2021-10", value: 9 },
  { month: "2021-11", value: 10 },
  { month: "2021-12", value: 10 },
  { month: "2022-01", value: 10 },
  { month: "2022-02", value: 11 },
  { month: "2022-03", value: 12 },
  { month: "2022-04", value: 11 },
  { month: "2022-05", value: 12 },
  { month: "2022-06", value: 13 },
  { month: "2022-07", value: 12 },
  { month: "2022-08", value: 14 },
  { month: "2022-09", value: 15 },
  { month: "2022-10", value: 16 },
  { month: "2022-11", value: 16 },
  { month: "2022-12", value: 27 },
  { month: "2023-01", value: 27 },
  { month: "2023-02", value: 33 },
  { month: "2023-03", value: 38 },
  { month: "2023-04", value: 49 },
  { month: "2023-05", value: 57 },
  { month: "2023-06", value: 59 },
  { month: "2023-07", value: 58 },
  { month: "2023-08", value: 54 },
  { month: "2023-09", value: 53 },
  { month: "2023-10", value: 64 },
  { month: "2023-11", value: 67 },
  { month: "2023-12", value: 65 },
  { month: "2024-01", value: 70 },
  { month: "2024-02", value: 72 },
  { month: "2024-03", value: 75 },
  { month: "2024-04", value: 76 },
  { month: "2024-05", value: 77 },
  { month: "2024-06", value: 75 },
  { month: "2024-07", value: 70 },
  { month: "2024-08", value: 78 },
  { month: "2024-09", value: 88 },
  { month: "2024-10", value: 98 },
  { month: "2024-11", value: 100 }
];
const GoogleTrendsChart = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)"
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)"
  });
  const interval = isMobile ? 36 : isTablet ? 24 : 12;
  return /* @__PURE__ */ jsxs(Card, { className: "[--chart-1:var(--primary)]", children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Google Trends - Interest Over Time" }) }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "h-[300px] w-full", children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(LineChart, { data: chartData, margin: { top: 5, right: 30, left: 20, bottom: 5 }, children: [
      /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3", opacity: 0.1 }),
      /* @__PURE__ */ jsx(
        XAxis,
        {
          dataKey: "month",
          tickLine: false,
          axisLine: false,
          tickMargin: 10,
          interval,
          tickFormatter: (value) => value.slice(0, 4)
        }
      ),
      /* @__PURE__ */ jsx(
        Tooltip,
        {
          contentStyle: {
            backgroundColor: "hsl(var(--background))",
            border: "1px solid hsl(var(--border))"
          },
          labelStyle: {
            color: "hsl(var(--foreground))"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Line,
        {
          type: "monotone",
          dataKey: "value",
          stroke: "currentColor",
          strokeWidth: 2,
          dot: false,
          activeDot: { r: 6, fill: "hsl(var(--primary))" }
        }
      )
    ] }) }) }) }),
    /* @__PURE__ */ jsxs(CardFooter, { className: "flex-col items-start gap-2 text-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 font-medium leading-none", children: [
        "Trending up over time ",
        /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "leading-none text-muted-foreground", children: 'Showing interest in "Artificial Intelligence" from Google Trends from the time I first started working in AI' })
    ] })
  ] });
};

const frontmatter = {
  "publishDate": "2024-11-03T00:00:00.000Z",
  "title": "How I Accidentally became an AI Engineer",
  "excerpt": "Imagine being an AI Engineer and not knowing it! In this post, I share my my experience building LLM-based applications, and how I got here in the first place.",
  "image": "https://minio-api.dartsmw.com/chienda.com/ai-engineering-irembo.png",
  "commentLink": "https://x.com/liwucodes/status/1854814709943288178?s=46",
  "category": "General",
  "draft": false,
  "tags": ["career", "ai"],
  "metadata": {
    "canonical": "https://chienda.com/accidental-ai-engineer"
  },
  "readingTime": 5
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "rediscovering-ais-soul",
    "text": "Rediscovering AI\u2019s Soul"
  }, {
    "depth": 2,
    "slug": "the-unexpected-detour-that-changed-everything",
    "text": "The Unexpected Detour That Changed Everything"
  }, {
    "depth": 2,
    "slug": "from-language-to-legacy",
    "text": "From Language to Legacy"
  }, {
    "depth": 2,
    "slug": "crafting-tomorrows-technology-with-yesterdays-wisdom",
    "text": "Crafting Tomorrow\u2019s Technology with Yesterday\u2019s Wisdom"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    hr: "hr",
    img: "img",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "The buzzing sound of mottos fill up the otherwise neat Kigali streets as I keenly observe from inside the office. Another curious soul wanders in, seemingly puzzled as to what I\u2019m working on. And just as I begin forming an explanation, I pause, realizing how different my answer is going to be today compared to just a few months ago."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "The journey that brought me here is a testament to how rapidly our field evolves \u2013 and how the most meaningful careers often emerge from unexpected turns."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "rediscovering-ais-soul",
      children: "Rediscovering AI\u2019s Soul"
    }), "\n", createVNode(_components.p, {
      children: ["But what ", createVNode(_components.em, {
        children: "is"
      }), " an AI Engineer, really? Not long ago, I would have launched into a well-rehearsed spiel about ", createVNode(_components.a, {
        href: "https://www.ibm.com/topics/machine-learning",
        children: "machine learning"
      }), ", ", createVNode(_components.a, {
        href: "https://www.sciencedirect.com/topics/computer-science/deep-neural-network",
        children: "deep nueral networks"
      }), ", and data science in general. These were the technologies that seemed to define AI for the ", createVNode(_components.a, {
        href: "https://thenextweb.com/news/2010-2019-the-rise-of-deep-learning",
        children: "past decade"
      }), ". But as I peered closer into its origin, I discovered something fascinating: AI\u2019s ", createVNode(_components.a, {
        href: "https://www.adservio.fr/post/what-are-the-components-of-ai",
        children: "true essence"
      }), " extends far beyond prediction and inference."]
    }), "\n", createVNode(_components.p, {
      children: ["While the last decade spotlighted the mathematical brilliance of machine learning, it somewhat overshadowed AI\u2019s other vital dimensions: the ", createVNode(_components.a, {
        href: "https://www.javatpoint.com/knowledge-representation-in-ai",
        children: "deep domain knowledge of expert systems"
      }), ", the nuanced decision-making of ", createVNode(_components.a, {
        href: "https://www.cs.cmu.edu/~motionplanning/papers/sbp_papers/integrated1/woodridge_intelligent_agents.pdf",
        children: "autonomous agents"
      }), ", and most importantly, the art of ", createVNode(_components.a, {
        href: "https://www.expert.ai/blog/natural-language-understanding-different-nlp/",
        children: "natural human interaction"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "https://cdn.infodiagram.com/c/67a62b/ai-development-timeline.png",
        alt: "Evolution of Artifical Intelligence"
      }), "\nCredit: infoDiagram"]
    }), "\n", createVNode(_components.p, {
      children: ["When ", createVNode(_components.a, {
        href: "https://openai.com/index/chatgpt/",
        children: "ChatGPT was announced"
      }), " just over 2 years ago, suddenly the sci-fi dreams that first drew many of us to technology seemed within reach: computers that could truly converse, understand context, and perhaps even ", createVNode(_components.a, {
        href: "https://www.imdb.com/title/tt1798709/",
        children: "fall in love"
      }), " :) Not only would AI make its much anticipated grand entrance onto the mainstream, so would new specializations for working with the models that powered it. Specializations like the AI Engineer."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "And so today, I\u2019m quick to make the marked distinction between AI Engineering (that is applying AI to Software Engineering) and ML Engineering or Research Engineering - the latter two being more focused on the development and deployment of machine learning models."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "the-unexpected-detour-that-changed-everything",
      children: "The Unexpected Detour That Changed Everything"
    }), "\n", createVNode(_components.p, {
      children: ["My journey into AI actually started way back in 2014, though I didn\u2019t know it at the time. Imagine me, a fresh IT graduate from ", createVNode(_components.a, {
        href: "https://www.mubas.ac.mw/",
        children: "Poly"
      }), ", having just landed my dream job as a software engineer at a top Bank. Then, boom, I receive an email saying the MEng scholarship I applied for has been awarded \u{1F389}."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["The only problem: I don\u2019t know what to specialize in! \u201CWhy not explore NLP for Chewa?\u201D ", createVNode(_components.a, {
          href: "https://www.linkedin.com/in/edmond-kachale/",
          children: "Edmond"
        }), " asks, referring to our native language ", createVNode(_components.a, {
          href: "https://translateswift.com/languages/chichewa/",
          children: "spoken across Malawi and Zambia"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["What I didn\u2019t know then is that my mentor wasn\u2019t simply referring to an academic pursuit. He was hinting towards the ", createVNode(_components.a, {
        href: "https://www.unesco.org/en/articles/digital-future-indigenous-languages-insights-partnerships-forum",
        children: "preservation of an entire culture"
      }), "."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Languages like mine, by virtue of being under-resourced, face digital extinction in this increasingly connected world."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Armed with more enthusiasm than expertise, I dove into the challenge of creating a text-to-speech system for Chewa."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://minio-api.dartsmw.com/chienda.com/chewa-ipa.jpg",
        alt: "My attempt at building a Chewa IPA"
      })
    }), "\n", createVNode(_components.p, {
      children: "Looking back, I smile at our \u201Crudimentary\u201D approach \u2013 statistical models and hidden Markov chains that seemed cutting-edge at the time. Working with limited computing power (at that time) and an almost non-existent corpus, I spent countless hours recording speech samples, creating transcriptions, and wrestling with the fundamental challenge of encoding a language that didn\u2019t even have a standardized phonetic alphabet."
    }), "\n", createVNode(GoogleTrendsChart, {
      "client:load": true,
      "client:component-path": "/Users/liwu/Projects/websites/personal-24/src/components/ui/ai-google-trends.jsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "from-language-to-legacy",
      children: "From Language to Legacy"
    }), "\n", createVNode(_components.p, {
      children: ["The path from that initial research to my current role wasn\u2019t linear. Each position I held \u2013 from the ", createVNode(_components.a, {
        href: "health-interoperability-in-malawi",
        children: "Ministry of Health\u2019s digital initiatives"
      }), " to serving one million farmers at One Acre Fund \u2013 added another piece to the puzzle. But it was an intriguing job posting at Irembo that finally brought everything into focus."]
    }), "\n", createVNode(_components.p, {
      children: "Irembo\u2019s pitch was audacious: to leverage AI and voice technology to serve Rwanda\u2019s 14+ million citizens, many of whom live in areas where smartphones and internet access are luxuries. They weren\u2019t just building another chatbot \u2013 they were reimagining how technology could serve people on their own terms, through their own languages."
    }), "\n", createVNode(_components.h2, {
      id: "crafting-tomorrows-technology-with-yesterdays-wisdom",
      children: "Crafting Tomorrow\u2019s Technology with Yesterday\u2019s Wisdom"
    }), "\n", createVNode(_components.p, {
      children: ["Today, as I lead AI initiatives at Irembo, we\u2019re building something that goes beyond traditional eGovernment Platforms. ", createVNode(_components.a, {
        href: "https://www.linkedin.com/posts/mphilbert_govtech-digitaltransformation-rwanda-activity-7257463052625723392-UKNB?utm_source=share&utm_medium=member_ios",
        children: "We\u2019re creating systems that can converse fluently in Kinyarwanda"
      }), ", handle complex service requests autonomously, and bridge the digital divide through simple voice calls."]
    }), "\n", createVNode(_components.p, {
      children: "What excites me most is how we\u2019re merging cutting-edge technology with Africa\u2019s rich oral traditions. In many ways, we\u2019re returning to AI\u2019s original promise: technology that adapts to humans, not the other way around. We\u2019re proving that the future of technology doesn\u2019t have to mean abandoning cultural heritage \u2013 instead, it can help preserve and amplify it."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://minio-api.dartsmw.com/chienda.com/irembo-agents.png",
        alt: "Irembo Agents serving Citizens using IremboAI"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Every morning, as I walk into our office in Kigali, I\u2019m reminded that becoming an AI Engineer wasn\u2019t just about learning new technologies \u2013 it was about finding a way to serve my community through technology. In the end, that\u2019s what being an ", createVNode(_components.a, {
        href: "https://roadmap.sh/ai-engineer",
        children: "AI Engineer in 2024"
      }), " means to me: using the power of artificial intelligence not just to predict or compute, but to preserve, protect, and empower."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["Want to dive deeper into this journey? My research thesis on Chewa text-to-speech synthesis is available upon request. Connect with me on X or via ", createVNode(_components.a, {
          href: "mailto:jeremiah@chienda.com",
          children: "email"
        }), " to learn more."]
      })
    }), "\n", createVNode(_components.hr, {})]
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
const url = "src/content/post/accidental-ai-engineer.mdx";
const file = "/Users/liwu/Projects/websites/personal-24/src/content/post/accidental-ai-engineer.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/liwu/Projects/websites/personal-24/src/content/post/accidental-ai-engineer.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
