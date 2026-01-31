import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Q924hkwF.mjs';
import './astro/assets-service_BFh1IzDj.mjs';
import { $ as $$Image } from './_astro_assets_OE4NbHqS.mjs';
import { M as Mermaid } from './Mermaid_qpJhsvU5.mjs';
import 'clsx';

const frontmatter = {
  "publishDate": "2025-08-22T00:00:00.000Z",
  "title": "Code Apps - Microsoft Just Made Power Platform Actually Powerful for Real Developers",
  "excerpt": "I recently started work with a Microsoft shop, and now that I'm in, I realize how many boring enterprise organizations run on Microsoft. Here's why Code Apps at Build 2025 changes everything for developers targeting enterprise contracts.",
  "image": "https://minio-api.dartsmw.com/chienda.com/power-platforms.jpg",
  "commentLink": "https://x.com/liwucodes/status/1977738984542412908?s=46",
  "category": "Technology",
  "draft": false,
  "tags": ["microsoft", "enterprise", "career"],
  "canonical": "https://chienda.com/code-apps-power-platform",
  "readingTime": 7
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-wake-up-call",
    "text": "The Wake-Up Call"
  }, {
    "depth": 2,
    "slug": "my-journey-a-quick-flashback",
    "text": "My Journey (A Quick Flashback)"
  }, {
    "depth": 2,
    "slug": "what-even-is-power-platform",
    "text": "What Even Is Power Platform?"
  }, {
    "depth": 3,
    "slug": "power-automate",
    "text": "Power Automate"
  }, {
    "depth": 3,
    "slug": "power-desktop",
    "text": "Power Desktop"
  }, {
    "depth": 3,
    "slug": "power-bi",
    "text": "Power BI"
  }, {
    "depth": 3,
    "slug": "power-apps",
    "text": "Power Apps"
  }, {
    "depth": 2,
    "slug": "citizen-developers-yes-thats-a-thing",
    "text": "Citizen Developers (Yes, That\u2019s a Thing)"
  }, {
    "depth": 2,
    "slug": "the-two-ways-to-build-power-apps-before-code-apps",
    "text": "The Two Ways to Build Power Apps (Before Code Apps)"
  }, {
    "depth": 3,
    "slug": "model-driven-apps",
    "text": "Model-Driven Apps"
  }, {
    "depth": 3,
    "slug": "canvas-apps",
    "text": "Canvas Apps"
  }, {
    "depth": 2,
    "slug": "code-apps-where-this-all-comes-together",
    "text": "Code Apps: Where This All Comes Together"
  }, {
    "depth": 2,
    "slug": "what-you-actually-get",
    "text": "What You Actually Get"
  }, {
    "depth": 2,
    "slug": "why-this-matters-for-you",
    "text": "Why This Matters for You"
  }, {
    "depth": 2,
    "slug": "your-action-plan",
    "text": "Your Action Plan"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "the-wake-up-call",
      children: "The Wake-Up Call"
    }), "\n", createVNode(_components.p, {
      children: "I recently started work with a Microsoft shop. And now that I\u2019m in, I realize how many other organizations \u2013 the boring, enterprise kind \u2013 run entirely on Microsoft."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Microsoft Shop"
        }), ": An organization that standardizes on Microsoft technologies across their entire tech stack. Everything from Office 365 for productivity, Azure AD for authentication, SharePoint for document management, to Power Platform for custom applications. They rely on Microsoft\u2019s ecosystem for support, compliance, and certified consultants."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Rightly so."
    }), "\n", createVNode(_components.p, {
      children: "They\u2019re not tech companies. They want to outsource as much tech as possible to someone reputable. Someone they can call when things break. Someone who provides certified consultants and contractors."
    }), "\n", createVNode(_components.p, {
      children: "Healthcare companies, supermarkets, governments, non-profits \u2013 they all rely religiously on Microsoft technologies. For better or worse."
    }), "\n", createVNode(_components.h2, {
      id: "my-journey-a-quick-flashback",
      children: "My Journey (A Quick Flashback)"
    }), "\n", createVNode(_components.p, {
      children: ["The first role I ever landed as a software engineer was with a bank. Back then, we were called ", createVNode(_components.strong, {
        children: "System Developers"
      }), ". And we used .NET for everything."]
    }), "\n", createVNode(_components.p, {
      children: "That was many years ago. Too many to mention here."
    }), "\n", createVNode(_components.p, {
      children: ["Back then, everything ran on local computers. Windows folders. Daily files. I remember running Visual Basic scripts that would scrape those folders, and push data for consumption in ", createVNode(_components.a, {
        href: "https://www.sap.com/products/data-cloud/crystal-reports.html",
        children: "Crystal Reports"
      }), ". I didn\u2019t understand half of it. But it felt impressive."]
    }), "\n", createVNode(_components.p, {
      children: ["Fast forward to today. Everything\u2019s changed. Thanks to ", createVNode(_components.a, {
        href: "https://www.office.com/",
        children: "Office 365"
      }), ", there\u2019s now this thing called ", createVNode(_components.a, {
        href: "https://www.microsoft.com/en-gb/power-platform",
        children: "Power Platform"
      }), ". And many other technologies between them."]
    }), "\n", createVNode(_components.h2, {
      id: "what-even-is-power-platform",
      children: "What Even Is Power Platform?"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "I\u2019d seen Power Platform and its connectors in many places. But I dismissed it. One of those Microsoft things that real developers don\u2019t bother with, right? Something for people with low skills. Or so I thought."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "You see the certifications: Power Platform; Power Apps. You scroll right past them on LinkedIn. Who needs that when you\u2019re building real software?"
    }), "\n", createVNode(_components.p, {
      children: "Turns out, I was wrong. Dead wrong."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Power Platform"
      }), " is where Microsoft\u2019s enterprise technologies come together. And it\u2019s more powerful than I ever gave it credit for."]
    }), "\n", createVNode(_components.h3, {
      id: "power-automate",
      children: "Power Automate"
    }), "\n", createVNode(_components.p, {
      children: ["Think workflow automation in a secure environment. Like Apache Airflow, maybe. Or ", createVNode(_components.a, {
        href: "https://zapier.com",
        children: "Zapier"
      }), ". Or ", createVNode(_components.a, {
        href: "https://n8n.io",
        children: "n8n"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["I used to use an old Apache platform for this stuff. Can\u2019t remember the name. We eventually moved away from it because it was ancient. I tried introducing more Kubernetes-native solutions. ", createVNode(_components.a, {
        href: "https://airflow.apache.org/",
        children: "Airflow"
      }), ". ", createVNode(_components.a, {
        href: "https://knative.dev/docs/#problems-knative-solves",
        children: "KNative"
      }), ". ", createVNode(_components.a, {
        href: "https://www.openfaas.com/",
        children: "OpenFaaS"
      }), ". You get the idea."]
    }), "\n", createVNode(_components.p, {
      children: "Power Automate does all of this. Serverless functions. API triggers. The whole nine yards."
    }), "\n", createVNode(_components.h3, {
      id: "power-desktop",
      children: "Power Desktop"
    }), "\n", createVNode(_components.p, {
      children: "I haven\u2019t fully wrapped my head around this one yet. So if you know what it does, drop a comment. I could research it, but I\u2019m lazy."
    }), "\n", createVNode(_components.p, {
      children: "I\u2019ve heard people mention web scraping with Power Desktop. Not sure if that\u2019s the full picture. Maybe it works with Power Automate. Anyway."
    }), "\n", createVNode(_components.h3, {
      id: "power-bi",
      children: "Power BI"
    }), "\n", createVNode(_components.p, {
      children: ["The dashboards thing. Like ", createVNode(_components.a, {
        href: "https://www.tableau.com",
        children: "Tableau"
      }), ", but Microsoft. Not what we\u2019re here to talk about today."]
    }), "\n", createVNode(_components.h3, {
      id: "power-apps",
      children: "Power Apps"
    }), "\n", createVNode(_components.p, {
      children: "This is what matters. The low-code/no-code solution for building small, independent applications for employees in your typical Microsoft shop."
    }), "\n", createVNode(_components.p, {
      children: "These apps run on desktop. On web. Power Apps even has a mobile launcher. So if you\u2019re out and about, you can launch a Power App that a citizen developer on your team built."
    }), "\n", createVNode(Mermaid, {
      "client:load": true,
      chart: `
graph TB
  A[Power Platform] --> B[Power Apps]
  A --> C[Power Automate]
  A --> D[Authentication]
  A --> E[Storage]
  B --> F[Model-Driven Apps]
  B --> G[Canvas Apps]
  B --> H[Code Apps]
  E --> I[SharePoint]
  E --> J[DataVerse]
  E --> K[SQL Server]
  C --> L[Email Workflows]
  C --> M[Document Processing]
  C --> N[Approvals and Triggers]
`,
      "client:component-path": "~/components/Mermaid",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "citizen-developers-yes-thats-a-thing",
      children: "Citizen Developers (Yes, That\u2019s a Thing)"
    }), "\n", createVNode(_components.p, {
      children: "Another term I discovered in Microsoft shops. Citizen developers."
    }), "\n", createVNode(_components.p, {
      children: "These are people who understand the business but aren\u2019t developers. They know the processes inside and out. They want to solve specific problems using that knowledge."
    }), "\n", createVNode(_components.p, {
      children: "Typical use cases:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Employee Survey"
      }), "\n", createVNode(_components.li, {
        children: "Reserving the company car"
      }), "\n", createVNode(_components.li, {
        children: "Booking a meeting room"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "That last one is actually Perfect Power App territory coming to think of it. At my previous organization, we used Google Calendar for room bookings. You\u2019d create an Event. Select a room, find it\u2019s taken, try another. Not intuitive."
    }), "\n", createVNode(_components.p, {
      children: "A Power App solves this. Launch it. See all rooms. Check availability. Book it."
    }), "\n", createVNode(_components.p, {
      children: "The beauty of all of this is that Power Platform kicks in automatically. All employees are magically available to you. User management. Roles. Authentication. You just focus on the domain-specific modeling."
    }), "\n", createVNode(_components.p, {
      children: "The data can live in Excel sheets (please don\u2019t), SharePoint lists, or SQL Server. But Microsoft introduced something better."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro",
        children: createVNode(_components.strong, {
          children: "Dataverse"
        })
      }), ". Their operational database built specifically for Power Apps. Most SQL Servers in these companies handle data warehousing anyway. Mostly read operations. So Dataverse fills the gap."]
    }), "\n", createVNode(_components.h2, {
      id: "the-two-ways-to-build-power-apps-before-code-apps",
      children: "The Two Ways to Build Power Apps (Before Code Apps)"
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s say you\u2019re building a room booking application. You\u2019d create your schema in Data Verse. Different rooms. Different buildings. Capacity. Available days. Time slots. All that."
    }), "\n", createVNode(_components.p, {
      children: "Power Apps handles authentication automatically. Users log in with their Microsoft accounts. Boom. Done."
    }), "\n", createVNode(_components.h3, {
      id: "model-driven-apps",
      children: "Model-Driven Apps"
    }), "\n", createVNode(_components.p, {
      children: "Launch your Power App without writing a single line of code. This is called a model-driven application."
    }), "\n", createVNode(_components.p, {
      children: "Users book rooms. Data sits in Dataverse. Life goes on."
    }), "\n", createVNode(_components.p, {
      children: "Simple. But limited."
    }), "\n", createVNode(_components.h3, {
      id: "canvas-apps",
      children: "Canvas Apps"
    }), "\n", createVNode(_components.p, {
      children: "Then came the inevitable problem. People needed more customization. More complicated applications. Because whatever starts with no-code eventually needs more power."
    }), "\n", createVNode(_components.p, {
      children: ["Enter ", createVNode(_components.strong, {
        children: "canvas apps"
      }), ". The low-code solution to model-driven apps."]
    }), "\n", createVNode(_components.p, {
      children: ["You start with a blank slate. Drag-and-drop components. If you want to write code, you can use ", createVNode(_components.a, {
        href: "https://learn.microsoft.com/en-us/power-platform/power-fx/overview",
        children: "Power Fx"
      }), ". Think Excel formulas, but for apps."]
    }), "\n", createVNode(_components.p, {
      children: "Canvas apps introduced a pro-code components recently. You build one and release it in your company\u2019s Widget Library Grab a widget. Drop it on your page. It will handle events, bind components together, that sort of thing."
    }), "\n", createVNode(_components.p, {
      children: "You connect your data sources. Wire up your automations with Power Automate. Build complex workflows. Make it look exactly (or so they say) how your designer envisioned."
    }), "\n", createVNode(_components.p, {
      children: "That\u2019s canvas apps. Better than model-driven. But still not what real developers want."
    }), "\n", createVNode(_components.p, {
      children: "And that\u2019s where things get interesting."
    }), "\n", createVNode(_components.h2, {
      id: "code-apps-where-this-all-comes-together",
      children: "Code Apps: Where This All Comes Together"
    }), "\n", createVNode(_components.p, {
      children: "The crux. The announcement that changed everything."
    }), "\n", createVNode(_components.p, {
      children: ["At Microsoft Build 2025, Microsoft introduced ", createVNode(_components.a, {
        href: "https://learn.microsoft.com/en-us/power-apps/developer/code-apps/overview",
        children: createVNode(_components.strong, {
          children: "Code Apps"
        })
      }), ". A new way to write Power Apps using pro-code instead of no-code or low-code."]
    }), "\n", createVNode(_components.p, {
      children: ["Developers can write applications in ", createVNode(_components.a, {
        href: "https://react.dev",
        children: "React"
      }), ". In ", createVNode(_components.a, {
        href: "https://vuejs.org",
        children: "Vue"
      }), ". In whatever JavaScript framework they prefer. And still leverage the full Microsoft enterprise platform."]
    }), "\n", createVNode(_components.p, {
      children: "Think about it. Databases. Hosting. Automations. All provided."
    }), "\n", createVNode(_components.p, {
      children: ["You just bring the UI. Everything you\u2019ve learned (or unlearned) from ", createVNode(_components.a, {
        href: "https://tailwindcss.com",
        children: "Tailwind CSS"
      }), ", React, state management \u2013 you can use it all. Rich user experiences without pre-baked widgets. Without the limitations of model-driven apps."]
    }), "\n", createVNode(_components.p, {
      children: ["Code Apps gives you complete freedom. Customization. Styling. You can use ", createVNode(_components.a, {
        href: "https://fluent2.microsoft.design",
        children: "Fluent UI"
      }), " for that Windows look if you want."]
    }), "\n", createVNode(_components.p, {
      children: "The beauty of all of this is that you get all this power without sacrificing the speed and productivity of traditional Power Apps."
    }), "\n", createVNode(Mermaid, {
      "client:load": true,
      chart: `
graph LR
  A[Your React App] --> B[Power Apps Runtime]
  B --> C[Azure AD Auth]
  B --> D[Dataverse API]
  B --> E[Power Automate]
  C --> F[Roles and Permissions]
  D --> G[Strongly Typed Services]
  E --> H[Email and Workflows]
  I[Microsoft Handles] --> J[Deployment and Hosting]
  I --> K[Monitoring and Logs]
  I --> C
  I --> D
  I --> E
`,
      "client:component-path": "~/components/Mermaid",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "what-you-actually-get",
      children: "What You Actually Get"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Authentication"
      }), " out of the box. You piggyback on ", createVNode(_components.a, {
        href: "https://azure.microsoft.com/en-us/products/active-directory",
        children: "Azure AD"
      }), ". Roles and scopes provided by the authentication provider. Hide or show parts of your application based on permissions."]
    }), "\n", createVNode(_components.p, {
      children: "Easy."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Database support"
      }), " without the deployment headaches. No more provisioning servers. No more database hosting nightmares. You get access to Dataverse, SQL Server, whatever data sources your Power Platform supports."]
    }), "\n", createVNode(_components.p, {
      children: "Hopefully not Excel. Maybe not SharePoint either."
    }), "\n", createVNode(_components.p, {
      children: ["What makes this powerful for developers is the strongly-typed services. The data gets abstracted away. You just get a ", createVNode(_components.a, {
        href: "https://www.typescriptlang.org",
        children: "TypeScript"
      }), " service you can interact with, and Power Apps automatically handles all the data source interactions behind the scenes."]
    }), "\n", createVNode(_components.p, {
      children: "For complicated workflows, Power Automate steps in. HTTP requests. OpenAI calls. Whatever you need. Et cetera, et cetera."
    }), "\n", createVNode(_components.h2, {
      id: "why-this-matters-for-you",
      children: "Why This Matters for You"
    }), "\n", createVNode(_components.p, {
      children: "I\u2019m bullish on this for 2025. For anyone working in enterprise environments."
    }), "\n", createVNode(_components.p, {
      children: "Banks use Microsoft stacks. Non-profits. Governments. The UN. World Bank. They all run on this."
    }), "\n", createVNode(_components.p, {
      children: "If you\u2019re looking to land a role there or win a contract, you need to pay attention to Code Apps. Watch how this unfolds."
    }), "\n", createVNode(_components.p, {
      children: "You don\u2019t want to come into these organizations and start re-inventing the wheel. They are already stuck with Microsoft. You bringing in Kubernetes, Kafka and Golang will most likely end in tears!"
    }), "\n", createVNode(_components.p, {
      children: "That\u2019s where CodeApps comes in to allow us to immediately create value while leveraging our hard-earned coding skills."
    }), "\n", createVNode(_components.h2, {
      id: "your-action-plan",
      children: "Your Action Plan"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Month 1-2: Get Your Foot in the Door"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Get ", createVNode(_components.a, {
          href: "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-fundamentals/",
          children: "PL-900 certification"
        }), " (Power Platform Fundamentals)"]
      }), "\n", createVNode(_components.li, {
        children: ["Set up a free ", createVNode(_components.a, {
          href: "https://powerapps.microsoft.com/en-us/developerplan/",
          children: "Power Apps developer environment"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Learn ", createVNode(_components.a, {
          href: "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/",
          children: "Dataverse"
        }), " basics"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Simple. Achievable."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Month 3-4: Build Your Portfolio"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Deep dive into ", createVNode(_components.a, {
          href: "https://learn.microsoft.com/en-us/power-apps/developer/component-framework/code-components-best-practices",
          children: "Code Apps documentation"
        })]
      }), "\n", createVNode(_components.li, {
        children: "Build 2-3 projects combining React + Power Apps"
      }), "\n", createVNode(_components.li, {
        children: ["Get ", createVNode(_components.a, {
          href: "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-app-maker/",
          children: "PL-100 certification"
        }), " (App Maker)"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Show your work. Prove your skills."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Month 5-6: Win the Contracts"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Update LinkedIn: \u201CMicrosoft-certified Power Platform Developer | React/TypeScript\u201D"
      }), "\n", createVNode(_components.li, {
        children: "Target RFPs from UN agencies, World Bank, government projects"
      }), "\n", createVNode(_components.li, {
        children: ["Network with ", createVNode(_components.a, {
          href: "https://partner.microsoft.com",
          children: "Microsoft partners"
        }), " in your region"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This is where it pays off."
    }), "\n", createVNode(_components.p, {
      children: ["Remember my article about the ", createVNode(_components.a, {
        href: "/the-telala-effect",
        children: "Telala Effect"
      }), ", about how we lose government tenders because we lack professional processes? This is the solution. Right here."]
    }), "\n", createVNode(_components.p, {
      children: "Get certified. Get your foot through the door. Then do damage with your React and TypeScript skills once you\u2019re inside."
    }), "\n", createVNode(_components.p, {
      children: "The opportunity is there. The door is open."
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
const url = "src/content/post/the-power-platform-awakening.mdx";
const file = "/Users/liwu/Projects/websites/personal-24/src/content/post/the-power-platform-awakening.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/liwu/Projects/websites/personal-24/src/content/post/the-power-platform-awakening.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
