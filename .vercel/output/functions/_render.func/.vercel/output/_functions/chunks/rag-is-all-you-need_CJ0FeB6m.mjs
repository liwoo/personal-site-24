import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Q924hkwF.mjs';
import './astro/assets-service_BFh1IzDj.mjs';
import { $ as $$Image } from './_astro_assets_OE4NbHqS.mjs';
import 'clsx';

const frontmatter = {
  "publishDate": "2024-05-09T00:00:00.000Z",
  "title": "RAG is all you need - Part 1",
  "excerpt": "Ever wondered how to get ChatGPT to accurately answer questions about your private information? Whether it's bank statements, passport records, or personal journals, large language models (LLMs) like ChatGPT typically can't help you with this specific data.",
  "image": "https://minio-api.dartsmw.com/chienda.com/political-rag.png",
  "category": "Tech",
  "draft": false,
  "tags": ["rag", "llm", "fine-tuning", "ai"],
  "metadata": {
    "canonical": "https://chienda.com/rag-is-all-you-need"
  },
  "readingTime": 9
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-african-politician",
    "text": "The African Politician"
  }, {
    "depth": 2,
    "slug": "bringing-it-all-together",
    "text": "Bringing it all Together"
  }, {
    "depth": 2,
    "slug": "a-better-politician",
    "text": "A Better Politician"
  }, {
    "depth": 2,
    "slug": "comparing-the-two-approaches",
    "text": "Comparing the Two Approaches"
  }, {
    "depth": 3,
    "slug": "enter-retrieval-augmented-generation",
    "text": "Enter Retrieval Augmented Generation"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "This is the first part of a series of articles on RAG. In this series, we\u2019ll explore the RAG framework and why I believe its all you need for LLM-based question answering systems in 95% of use cases. Feel free to skip over to other parts in the series for more techical breakdowns"
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "The other day I asked ChatGPT give me a breakdown of my Family Tree. To be fair, it actually gave me a helpful response:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "To give you a breakdown of your family tree, I\u2019ll need to gather some information from you. Here\u2019s a general structure of what\u2019s typically included in a family tree: \u2026"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["It\u2019s very clear from this response that ChatGPT doesn\u2019t have access to my personal information - ", createVNode(_components.a, {
        href: "https://openai.com/index/new-ways-to-manage-your-data-in-chatgpt/",
        children: "or does it"
      }), " \u{1F914}? But what if I wanted to ask about something more sensitive, like my bank statements or passport records? How would ChatGPT respond then?"]
    }), "\n", createVNode(_components.p, {
      children: ["These are the type of ", createVNode(_components.a, {
        href: "https://softblues.io/blog/top-llm-applications-in-business/",
        children: "use cases that most businesses will be interested in"
      }), ". They want to use the power of AI, or more precisely - large language models (LLMs) - to help them with natural language tasks that involve their private data. These tasks will typically include:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Answering questions about private data"
        }), ": For example, \u201CHow long does it take for my driver\u2019s license to expire in Malawi?\u201D"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Generating text based on private data"
        }), ": For example, \u201CWrite a summary of my last 3 bank statements.\u201D"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Searching for information in private data"
        }), ": For example, \u201CWhich Law Case in my records mentions \u2018defamation\u2019? between 2010 and 2015.\u201D"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Summarizing private data"
        }), ": For example, \u201CGive me a summary of my cabinet meeting notes from last year.\u201D"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Unlocking these use cases is highly valuable for businesses. It allows top executives to get insights from their data faster, and it enables customer service teams to provide better, more consistent and more available support. However, there\u2019s a big problem: LLMs like ChatGPT typically can\u2019t help you with this specific data."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "At best, they\u2019ll admit ignorance; at worst, they\u2019ll make something up that will not be grounded by truth."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "the-african-politician",
      children: "The African Politician"
    }), "\n", createVNode(_components.p, {
      children: "This is because at their core, LLMs are not thoughful, planning machines (although you can program them to be). They are naturally optimized to predict the next word in a sentence, and the next word after that. And not to understand the world or to reason about it. I liken them sometimes to African politicians who have mastered the art of saying a lot without saying anything at all!"
    }), "\n", createVNode("blockquote", {
      class: "twitter-tweet",
      children: [createVNode("p", {
        lang: "en",
        dir: "ltr",
        children: createVNode(_components.p, {
          children: "For real economic transformation the state needs to control & intervene in strategic sectors of economy"
        })
      }), createVNode(_components.p, {
        children: ["\u2014 Julius Sello Malema (@Julius_S_Malema) ", createVNode("a", {
          href: "https://twitter.com/Julius_S_Malema/status/6686188924567553?ref_src=twsrc%5Etfw",
          children: "November 22, 2010"
        })]
      })]
    }), "\n", createVNode("script", {
      async: true,
      src: "https://platform.twitter.com/widgets.js",
      charset: "utf-8"
    }), "\n", " ", "\n", createVNode(_components.p, {
      children: "Let\u2019s look at the above tweet for instance. At first glance, it seems like the politician has said something meaningful. But when you look closer, you realize that they\u2019ve said nothing at all."
    }), "\n", createVNode(_components.p, {
      children: "The political brain has for many years parameterized patterns of speech concerning politics and economics, and they\u2019ve learned to generate text that \u201Cmakes sense\u201D in these contexts. But usually, their responses are not grounded in hard facts or deep understanding of techincalities of the subject matter."
    }), "\n", createVNode(_components.p, {
      children: "LLMs are similar. They\u2019ve been trained on a lot of text data. In fact the commercially successfully ones have been trained on the entirety of publicaly available text data on the web. The architecture of these models allows them to build complex patterns that allow them to generate text that \u201Cmakes sense\u201D in a wide variety of contexts."
    }), "\n", createVNode(_components.h2, {
      id: "bringing-it-all-together",
      children: "Bringing it all Together"
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s pause and reflect on a few key words that I\u2019ve introduced without explicitly mentioning them:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Pre-trained Models"
        }), ": These are models that have been trained on a large corpus of text data. Also known as Foundation Models, they provide an excellent well rounded Language Model that can be adapted to a wide variety of Natural Language tasks."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Tranformer Architecture"
        }), ": This is the architecture that powers most of the pre-trained models that we have today. It\u2019s a deep learning model that uses self-attention mechanisms to learn contextual relationships between words in a sentence."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Parameters"
        }), ": These are the weights that the model learns during training. They are what makes the model \u201Csmart\u201D and able to generate text that \u201Cmakes sense\u201D. The more parameters a model has, the more complex patterns it can learn."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Tokens"
        }), ": These are the smallest unit of text that the model can understand. They are usually words or subwords, and they are what the model uses to generate text."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Context Window"
        }), ": This is the number of tokens that the model can be given in form of input or question. The model uses this context window to generate the next words that fulfill the task at hand."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Hallucination"
        }), ": This is when the model generates text that is not grounded in factual information. It\u2019s the model\u2019s way of convincing you that it knows what it\u2019s talking about, when in fact it doesn\u2019t."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Armed with this new knowledge, you should now be able to understand when a technical article says something like:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "The new Lama SuperSport model has 1.5 billion parameters, and it\u2019s based on a variation of the Tranformer Architecture. It has a context window of 1024 tokens, and it\u2019s been trained on a mixture of public and sports related proprietary data to reduce hallucination."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "a-better-politician",
      children: "A Better Politician"
    }), "\n", createVNode(_components.p, {
      children: "We all hope for a future where our politicians are at the very least deeply knowledgeable about the subjects they are talking about. But we also hope for a future where our AI models are deeply knowledgeable about the technicalities of the subjects they talk about. Obviously we demand more than just talk, but action as well. In our analogy, Tool Calling is the LLM\u2019s way of taking action based on the information it has. But that\u2019s a topic for another day."
    }), "\n", createVNode("blockquote", {
      class: "twitter-tweet",
      children: [createVNode("p", {
        lang: "en",
        dir: "ltr",
        children: [createVNode(_components.p, {
          children: "Russia\u2019s invasion on Ukraine has had serious economic consequences:"
        }), createVNode("br", {}), createVNode("br", {}), createVNode(_components.p, {
          children: ["\u{1F539}The Ruble sank to record lows ", createVNode("br", {}), "\n\u{1F538}Russian stocks collapsed by 45%"]
        }), createVNode("br", {}), createVNode(_components.p, {
          children: ["\u{1F539}Markets around the world also took a hit as oil prices went up\n", createVNode("a", {
            href: "https://twitter.com/hashtag/DambisaMoyo?src=hash&ref_src=twsrc%5Etfw",
            children: "#DambisaMoyo"
          }), " ", createVNode("a", {
            href: "https://t.co/ELIdcTNyYF",
            children: "pic.twitter.com/ELIdcTNyYF"
          })]
        })]
      }), createVNode(_components.p, {
        children: ["\u2014 Dambisa Moyo (@Dambisamoyo) ", createVNode("a", {
          href: "https://twitter.com/Dambisamoyo/status/1497511796386717700?ref_src=twsrc%5Etfw",
          children: "February 26, 2022"
        })]
      })]
    }), "\n", createVNode("script", {
      async: true,
      src: "https://platform.twitter.com/widgets.js",
      charset: "utf-8"
    }), "\n", createVNode(_components.p, {
      children: "Doesn\u2019t that just inspire a lot more confidence!"
    }), "\n", createVNode(_components.p, {
      children: "Obviously this is not a political article, far from it. I just felt the analogy would bring home some of the more technical concepts that I\u2019ve introduced in this article. It\u2019s clear that to achieve this level of accuracy with answering domain specific questions, we need to provide the model with domain specific data. And there are two popular ways to do this: Fine-tuning and Retrieval Augmented Generation."
    }), "\n", createVNode(_components.h2, {
      id: "comparing-the-two-approaches",
      children: "Comparing the Two Approaches"
    }), "\n", createVNode(_components.p, {
      children: "In the early days of LLMs, the industry seemed to converge on the idea that fine-tuning was the best way to adapt these models to new tasks. Fine-tuning involves taking a pre-trained model and training it on a smaller dataset that is specific to the task at hand. This allows the model to learn the patterns in the new data and adapt to the new task."
    }), "\n", createVNode(_components.p, {
      children: "It is like taking a politician who has been trained in general politics and economics, and then giving them a crash course in a specific area like health or education. They will be able to generate text that is more accurate and relevant to the new domain."
    }), "\n", createVNode(_components.p, {
      children: "However you can image that this approach has its limitations. For one, fine-tuning requires a lot of data. If you don\u2019t have enough data, the model will not be able to learn the patterns in the new domain. This is like giving a politician a crash course in a new domain, but only giving them a few hours to learn it. They will not be able to learn the patterns in the new domain and will not be able to generate very meaningul responses next time they are in press conference. In many ways, this can even be worse than giving a generic response, because we will be giving the illusion of knowledge where there is none."
    }), "\n", createVNode(_components.p, {
      children: "Secondly, the time and expertise required to fine-tune a model can be prohibitive. It requires a lot of computational resources and expertise to fine-tune a model. This is like having to hire a team of experts to train a politician in a new domain. It\u2019s not something that can be done quickly or easily. Besides, I don\u2019t think our politicians would be very happy about having to go through a crash course every time they need to answer questions from a new audience."
    }), "\n", createVNode(_components.h3, {
      id: "enter-retrieval-augmented-generation",
      children: "Enter Retrieval Augmented Generation"
    }), "\n", createVNode(_components.p, {
      children: "Over time, it became clear that Retrieval was a more efficient way to adapt LLMs to new knowledge. Retrieval Augmented Generation is like giving the LLM an external source of information that it can pull from everytime it needs to generate a response. This external source of information can be a database, a knowledge graph, but more often that not involves documents stored in a search index that can be queried for relevance and fed into the model\u2019s context window for generation."
    }), "\n", createVNode(_components.p, {
      children: "This is like giving our politician a team of experts that can communicate to him through an earpiece everytime he needs to answer a question. The politician can then use the information provided by the experts to generate a more accurate and relevant response in near real-time. Smart right?"
    }), "\n", createVNode(_components.p, {
      children: "Not only is this approach less computationally expensive, but it also allows the model to generate more accurate and relevant responses. This is because the model can pull from a large corpus of information that is specific to the task at hand. This is like giving the politician access to a team of experts that can provide him with the most up-to-date and relevant information on the subject."
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: ["In the ", createVNode(_components.a, {
        href: "/rag-is-all-you-need-2",
        children: "next part"
      }), " of this series, we will explore how to use Retrieval Augmented Generation to build a Question Answering System. We will also explore the most common RAG technique: Vector Search. This is a technique that uses a vector representation of the context and the question to retrieve the most relevant documents from a search index."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["Reach out to me on ", createVNode(_components.a, {
          href: "https://twitter.com/liwucodes",
          children: "X"
        }), " if you have any questions or comments. I would love to hear from you about this article or any other topic you would like me to write about."]
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
const url = "src/content/post/rag-is-all-you-need.mdx";
const file = "/Users/liwu/Projects/websites/personal-24/src/content/post/rag-is-all-you-need.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/liwu/Projects/websites/personal-24/src/content/post/rag-is-all-you-need.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
