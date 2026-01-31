import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Q924hkwF.mjs';
import './astro/assets-service_BFh1IzDj.mjs';
import { $ as $$Image } from './_astro_assets_OE4NbHqS.mjs';
import vector from './vector-space_MfPiMrQZ.mjs';
import pipeline from './rag-pipeline_D7hbM_9-.mjs';
import 'clsx';

const frontmatter = {
  "publishDate": "2024-09-11T00:00:00.000Z",
  "title": "RAG is all you need - Part 2",
  "excerpt": "Ever stared at your computer screen, wondering how the heck these AI models actually understand what we're saying? Like, how does ChatGPT know that when I say chair, it's more related to table than basketball? Well, buckle up, because we're about to dive into one of the coolest parts of modern AI engineering - vector search! \u{1F680}",
  "image": "https://minio-api.dartsmw.com/chienda.com/political-rag.png",
  "category": "Tech",
  "draft": false,
  "tags": ["rag", "llm", "embeddings", "ai"],
  "canonical": "https://chienda.com/rag-is-all-you-need-2",
  "readingTime": 7
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "understanding-vector-embeddings-in-practice",
    "text": "Understanding Vector Embeddings in Practice"
  }, {
    "depth": 2,
    "slug": "the-vector-database-game",
    "text": "The Vector Database Game"
  }, {
    "depth": 2,
    "slug": "building-the-pipeline",
    "text": "Building The Pipeline"
  }, {
    "depth": 2,
    "slug": "practical-implementation-tips",
    "text": "Practical Implementation Tips"
  }, {
    "depth": 4,
    "slug": "documents",
    "text": "documents"
  }, {
    "depth": 4,
    "slug": "document_chunks",
    "text": "document_chunks"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    em: "em",
    h2: "h2",
    h4: "h4",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["This is the second part of our \u201CRAG is all you need\u201D series, where we\u2019re exploring the nuts and bolts of Retrieval Augmented Generation. If you haven\u2019t checked out ", createVNode(_components.a, {
          href: "/rag-is-all-you-need",
          children: "Part 1"
        }), " where we covered the fundamentals of how LLMs work and why grounding them to some known truth is essential in modern AI engineering, definitely give that a read first!"]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "So last time we talked about why RAG is such a game-changer for AI applications, right? Like, it\u2019s literally becoming one of those must-have tools in every AI engineer\u2019s toolkit. Today though? We\u2019re gonna deep dive into something super cool - vector search. And trust me, once you get this, a lot of things about modern AI just click! \u{1F50D}"
    }), "\n", createVNode(_components.p, {
      children: "Let me start with something that\u2019s been bugging computer scientists for ages: how do we get computers to actually understand language the way we do? Here\u2019s a fun little exercise - think about these words:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "table \u{1F6CF}\uFE0F"
      }), "\n", createVNode(_components.li, {
        children: "flower \u{1F33A}"
      }), "\n", createVNode(_components.li, {
        children: "lamp \u{1FA94}"
      }), "\n", createVNode(_components.li, {
        children: "basketball \u{1F3C0}"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Now, if I throw in the word \u201Cchair\u201D and ask you which one\u2019s most related\u2026 you\u2019d probably say table, right?"
    }), "\n", createVNode(_components.p, {
      children: "But here\u2019s where it gets interesting! If I asked you why, you might start talking about how chairs and tables go together during meals, or how they\u2019re both made of wood. But wait - basketballs boards are made of wood too! And technically, you sit near lamps all the time\u2026 See how messy this gets? \u{1F605}"
    }), "\n", createVNode($$Image, {
      src: vector,
      alt: "Vector Illustration of embedded words",
      height: 400
    }), "\n", createVNode(_components.p, {
      children: ["NLP researchers have been cooking up better and better ways to handle these nuanced relationships. They started with pretty basic stuff like ", createVNode(_components.a, {
        href: "https://machinelearningmastery.com/gentle-introduction-bag-words-model/",
        children: "bag-of-words"
      }), " (kinda naive, if you ask me), but then ", createVNode(_components.a, {
        href: "https://www.techtarget.com/searchenterpriseai/definition/BERT-language-model",
        children: "BERT"
      }), " came along and\u2026 boom!\u{1F4A5}"]
    }), "\n", createVNode(_components.p, {
      children: "What BERT and similar models do is super clever - they map words into this dense vector space where relationships are represented by how words appear together in massive amounts of text. It\u2019s like they\u2019re creating this multidimensional map of language itself! And when I say multidimensional, I mean like\u2026 way more than the 2D diagram above. Think 512 dimensions or more!"
    }), "\n", createVNode(_components.p, {
      children: "Let me try and break it down like this: every word gets its own unique \u201Clocation\u201D in this space, and words that often show up together in similar contexts end up closer to each other. Modern language models like Claude and GPT have gotten perfect at this mapping!"
    }), "\n", createVNode(_components.h2, {
      id: "understanding-vector-embeddings-in-practice",
      children: "Understanding Vector Embeddings in Practice"
    }), "\n", createVNode(_components.p, {
      children: "When it comes to actually building AI applications (isn\u2019t that why we are all here \u{1F605}), we need to take our knowledge base - our ground truth - and convert it into these vector embeddings. This is where we begin to differentiate our AI Chatbot from the rest, the uniqueness and usefulness of the data you want to make available:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Company documentation"
      }), "\n", createVNode(_components.li, {
        children: "School syllabi"
      }), "\n", createVNode(_components.li, {
        children: "Performance reports"
      }), "\n", createVNode(_components.li, {
        children: "Pretty much any text you want your AI to understand!"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Today, there\u2019s several approaches you could take in creating these embeddings. Like, sure, you could use smaller models like BERT, and honestly? If you\u2019re just getting started or working on a smaller project, that\u2019s totally fine! You can do it absolutely free with these open-source BERT models."
    }), "\n", createVNode(_components.p, {
      children: "But in production, we usually reach for these high-dimension, high-accuracy embedding models. I\u2019m talking about models from OpenAI, for example. Why? Because they just handle those tricky, ambiguous language tasks so much better!"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " langchain.embeddings "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " OpenAIEmbeddings, HuggingFaceEmbeddings"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " langchain.text_splitter "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " RecursiveCharacterTextSplitter"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " os"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " typing "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " List, Dict"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EmbeddingGenerator"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    def"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " __init__"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self, model_type: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "str"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "openai"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '        """'
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "        Initialize our embedding generator with either OpenAI or a local BERT model"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '        """'
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " model_type "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "openai"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "            self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".embeddings "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " OpenAIEmbeddings()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        else"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "            # Using a smaller BERT model - great for testing!"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "            self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".embeddings "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " HuggingFaceEmbeddings("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "                model_name"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"sentence-transformers/all-MiniLM-L6-v2"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # This is where the magic happens with text splitting"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".text_splitter "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " RecursiveCharacterTextSplitter("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "            chunk_size"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "            chunk_overlap"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ",  "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# A bit of overlap helps maintain context"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "            length_function"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "len"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    async"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " generate_embeddings"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self, text: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "str"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") -> List[Dict]:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '        """'
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "        Take our text, split it into chunks, and generate embeddings"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '        """'
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # First, let's split our text into manageable chunks"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        chunks "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".text_splitter.split_text(text)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # Now generate embeddings for each chunk"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        embeddings "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " []"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        for"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " chunk "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "in"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " chunks:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            vector "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " await"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".embeddings.aembed_query(chunk)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            embeddings.append({"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '                "text"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": chunk,"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '                "vector"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": vector,"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '                "metadata"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '                    "length"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "len"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(chunk),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "                    # You might want to add more metadata here"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            })"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " embeddings"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Let's see it in action!"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "async"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " main"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "():"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    # Create our generator"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    generator "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " EmbeddingGenerator("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "model_type"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"openai"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    # Some sample text"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    text "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' """'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    Vector search is a fascinating technique in AI. "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    It allows us to find similar content by converting text into "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    high-dimensional vectors and comparing them using cosine similarity."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '    """'
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    # Generate those embeddings!"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    embeddings "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " await"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " generator.generate_embeddings(text)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    print"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "f"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Generated '
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "{len"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(embeddings)"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' embeddings!"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    print"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "f"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"First embedding vector size: '
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "{len"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(embeddings["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'vector'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "])"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "the-vector-database-game",
      children: "The Vector Database Game"
    }), "\n", createVNode(_components.p, {
      children: ["Okay, so you and I know all about Relational Database Management Systems (RDBMSs) right, but they\u2019re really built for storing stuff in rows and columns - very 2D thinking. Some databases get a bit fancier with graphs or nodes (looking at you, ", createVNode(_components.a, {
        href: "https://neo4j.com/",
        children: "Neo4j!"
      }), "), but vector databases? They\u2019re built different!"]
    }), "\n", createVNode(_components.p, {
      children: "These specialized databases can handle information in vector space that\u2019s super multidimensional. We\u2019re talking hundreds or even thousands of dimensions! And over the last few years, we\u2019ve seen some really cool options pop up:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://www.pinecone.io/",
          children: "Pinecone"
        }), " (built specifically for vector search)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://www.trychroma.com/",
          children: "Chroma"
        }), " (built specifically for vector search)"]
      }), "\n", createVNode(_components.li, {
        children: ["PostgreSQL with ", createVNode(_components.a, {
          href: "https://github.com/pgvector/pgvector",
          children: "pg_vector"
        }), " (for when you want to stick with the classics)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://redis.io/solutions/vector-database/",
          children: "Redis"
        }), " (my personal favorite because\u2026 performance! \u{1F680})"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://blueteam.ai/blog/vector-benchmarking/Zilliz_Test_Example.png",
        alt: "Benchmark of Vector Db Performance"
      })
    }), "\n", createVNode(_components.p, {
      children: ["You can run a comparison yourself ", createVNode(_components.a, {
        href: "https://github.com/zilliztech/VectorDBBench",
        children: "here"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "building-the-pipeline",
      children: "Building The Pipeline"
    }), "\n", createVNode(_components.p, {
      children: "So here\u2019s how the whole thing actually works in practice. When someone asks a question, we:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Store your ground truth in a vector database"
      }), "\n", createVNode(_components.li, {
        children: "Convert the user\u2019s question into an embedding"
      }), "\n", createVNode(_components.li, {
        children: "Use cosine similarity (which is actually a pretty simple algorithm) to find matches"
      }), "\n", createVNode(_components.li, {
        children: "Pull back maybe the top 10 most relevant chunks of information"
      }), "\n"]
    }), "\n", createVNode($$Image, {
      src: pipeline,
      alt: "RAG Pipeline illustration",
      height: 400
    }), "\n", createVNode(_components.p, {
      children: "Now, there\u2019s actually a whole science to storing these embeddings! It depends on stuff like:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Which LLM you\u2019re using"
      }), "\n", createVNode(_components.li, {
        children: "The context window size you\u2019re working with"
      }), "\n", createVNode(_components.li, {
        children: "How much data you can throw at it before things get wonky"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "But honestly, these newer models with their huge context windows? They\u2019ve made this SO much easier! You can throw a pretty big chunk of context at them, and they handle it like champs. No more worrying about degrading quality or hallucinations (well, mostly! \u{1F605})."
    }), "\n", createVNode(_components.h2, {
      id: "practical-implementation-tips",
      children: "Practical Implementation Tips"
    }), "\n", createVNode(_components.p, {
      children: "When you\u2019re actually implementing this, you want to:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Chunk your data into manageable sizes"
      }), "\n", createVNode(_components.li, {
        children: "Store references to your original documents"
      }), "\n", createVNode(_components.li, {
        children: "Fetch those reference docs when you get a match"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This way, when your LLM is answering questions, it\u2019s not just pulling from its training data - it\u2019s using actual, accurate information from your knowledge base!"
    }), "\n", createVNode(_components.p, {
      children: "Below is a representation of how you could your RAG data using Postgres"
    }), "\n", createVNode(_components.h4, {
      id: "documents",
      children: "documents"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
      style: {
        overflow: "auto"
      },
      children: createVNode(_components.table, {
        children: [createVNode(_components.thead, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.th, {
              children: "Column"
            }), createVNode(_components.th, {
              children: "Type"
            }), createVNode(_components.th, {
              children: "Description"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "id"
            }), createVNode(_components.td, {
              children: "UUID"
            }), createVNode(_components.td, {
              children: "Primary key - unique document identifier"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "title"
            }), createVNode(_components.td, {
              children: "TEXT"
            }), createVNode(_components.td, {
              children: "Document title/name"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "source_url"
            }), createVNode(_components.td, {
              children: "TEXT"
            }), createVNode(_components.td, {
              children: "Where this doc came from (optional)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "created_at"
            }), createVNode(_components.td, {
              children: "TIMESTAMP WITH TIMEZONE"
            }), createVNode(_components.td, {
              children: "When we first added this"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "updated_at"
            }), createVNode(_components.td, {
              children: "TIMESTAMP WITH TIMEZONE"
            }), createVNode(_components.td, {
              children: "Last time we touched this"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "document_chunks",
      children: "document_chunks"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
      style: {
        overflow: "auto"
      },
      children: createVNode(_components.table, {
        children: [createVNode(_components.thead, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.th, {
              children: "Column"
            }), createVNode(_components.th, {
              children: "Type"
            }), createVNode(_components.th, {
              children: "Description"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "id"
            }), createVNode(_components.td, {
              children: "UUID"
            }), createVNode(_components.td, {
              children: "Primary key - unique chunk identifier"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "document_id"
            }), createVNode(_components.td, {
              children: "UUID"
            }), createVNode(_components.td, {
              children: "Links back to our main document \u{1F517}"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "chunk_index"
            }), createVNode(_components.td, {
              children: "INTEGER"
            }), createVNode(_components.td, {
              children: "Helps us keep chunks in order (super important!)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "content"
            }), createVNode(_components.td, {
              children: "TEXT"
            }), createVNode(_components.td, {
              children: "The actual chunk of text"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "embedding"
            }), createVNode(_components.td, {
              children: "vector(1536)"
            }), createVNode(_components.td, {
              children: "Our fancy vector embedding - magic! \u2728"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "metadata"
            }), createVNode(_components.td, {
              children: "JSONB"
            }), createVNode(_components.td, {
              children: "Flexible metadata storage (love this!)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "tokens"
            }), createVNode(_components.td, {
              children: "INTEGER"
            }), createVNode(_components.td, {
              children: "Token count (helpful for context windows)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "chunk_size"
            }), createVNode(_components.td, {
              children: "INTEGER"
            }), createVNode(_components.td, {
              children: "Size of this chunk in chars"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "created_at"
            }), createVNode(_components.td, {
              children: "TIMESTAMP WITH TIMEZONE"
            }), createVNode(_components.td, {
              children: "When we created this chunk"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["You know what\u2019s cool about this setup? The ", createVNode(_components.code, {
        children: "metadata"
      }), " JSONB field is like this super flexible catch-all for whatever extra info you might need to track. This can become helpful for improving the relevance and accuracy of your search (more on that later on in the series). I usually stuff things in there like:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: '    "source_type"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"technical_doc"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: '    "department"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"engineering"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: '    "last_verified"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"2024-01-18"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: '    "confidence"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0.95"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: '    "page_number"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "42"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: '    "section"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"API Documentation"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: ["Next up, we\u2019ll roll up our sleeves and implement a real world RAG solution against the ", createVNode(_components.a, {
        href: "https://www.maneb.edu.mw/",
        children: "MANEB syllabus"
      }), " - which can be used later to create a context aware AI tutor for Malawian Students!"]
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
const url = "src/content/post/rag-is-all-you-need-2.mdx";
const file = "/Users/liwu/Projects/websites/personal-24/src/content/post/rag-is-all-you-need-2.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/liwu/Projects/websites/personal-24/src/content/post/rag-is-all-you-need-2.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
