import { a as createComponent, e as addAttribute, b as renderTemplate, l as defineScriptVars, c as createAstro, r as renderComponent, F as Fragment, u as unescapeHTML, s as spreadAttributes, n as renderHead, d as renderSlot } from './astro/server_Q924hkwF.mjs';
import 'kleur/colors';
/* empty css                           */
import { f as getAsset, U as UI, e as getCanonical, I as I18N, S as SITE, M as METADATA, h as ANALYTICS } from './permalinks_BCPgzee8.mjs';
import 'clsx';
import merge from 'lodash.merge';
import { escape } from 'html-escaper';
import { a as adaptOpenGraphImages } from './images_IHdNJDlY.mjs';

const $$CommonMeta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="sitemap"${addAttribute(getAsset("/sitemap-index.xml"), "href")}>`;
}, "/Users/liwu/Projects/websites/personal-24/src/components/common/CommonMeta.astro", void 0);

const favIcon = "/_astro/favicon.CR7Geze9.ico";

const favIconSvg = new Proxy({"src":"/_astro/favicon.DLiLMeiw.svg","width":95,"height":95,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/favicons/favicon.svg";
							}
							
							return target[name];
						}
					});

const appleTouchIcon = new Proxy({"src":"/_astro/apple-touch-icon.CiUMq7jR.png","width":180,"height":180,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/liwu/Projects/websites/personal-24/src/assets/favicons/apple-touch-icon.png";
							}
							
							return target[name];
						}
					});

const $$Favicons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<link rel="shortcut icon"${addAttribute(favIcon, "href")}><link rel="icon" type="image/svg+xml"${addAttribute(favIconSvg.src, "href")}><link rel="mask-icon"${addAttribute(favIconSvg.src, "href")} color="#8D46E7"><link rel="apple-touch-icon" sizes="180x180"${addAttribute(appleTouchIcon.src, "href")}>`;
}, "/Users/liwu/Projects/websites/personal-24/src/components/Favicons.astro", void 0);

const $$CustomStyles = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<style is:global>
  :root {
    --aw-font-sans: 'Outfit Variable';
    --aw-font-serif: var(--aw-font-sans);
    --aw-font-heading: var(--aw-font-sans);

    --aw-color-primary: rgb(216 145 33);
    --aw-color-secondary: rgb(216 145 33);
    --aw-color-accent: rgb(228 221 210);

    --aw-color-text-heading: rgb(22 22 22);
    --aw-color-text-default: rgb(22 22 22);
    --aw-color-text-muted: rgb(30 30 30 / 70%);
    --aw-color-bg-page: rgb(239 239 239);

    /* destructive */
    --aw-color-destructive: rgb(255 0 0);

    /* card */
    --aw-color-card-bg: rgb(224 224 224);

    --aw-color-bg-page-dark: rgb(23 23 23);

    ::selection {
      background-color: lavender;
    }
  }

  .dark {
    --aw-font-sans: 'Outfit Variable';
    --aw-font-serif: var(--aw-font-sans);
    --aw-font-heading: var(--aw-font-sans);

    --aw-color-primary: rgb(255 219 163);
    --aw-color-secondary: rgb(216 145 33);
    --aw-color-accent: rgba(255, 219, 163, 0.09);

    --aw-color-text-heading: rgb(248 248 248);
    --aw-color-text-default: rgb(236 236 236);
    --aw-color-text-muted: rgb(255 255 255 / 55%);
    --aw-color-bg-page: var(--aw-color-bg-page-dark);

    /* destructive */
    --aw-color-destructive: rgb(255 0 0);

    /* card */
    --aw-color-card-bg: rgb(30 30 30);

    ::selection {
      background-color: black;
      color: snow;
    }
  }
</style>`;
}, "/Users/liwu/Projects/websites/personal-24/src/components/CustomStyles.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$ApplyColorMode = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<script>(function(){", "\n  function applyTheme(theme) {\n    if (theme === 'dark') {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n    const matches = document.querySelectorAll('[data-aw-toggle-color-scheme] > input');\n\n    if (matches && matches.length) {\n      matches.forEach((elem) => {\n        elem.checked = theme !== 'dark';\n      });\n    }\n  }\n\n  if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {\n    applyTheme(defaultTheme.replace(':only', ''));\n  } else if (\n    localStorage.theme === 'dark' ||\n    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n  ) {\n    applyTheme('dark');\n  } else {\n    applyTheme('light');\n  }\n})();<\/script>"])), defineScriptVars({ defaultTheme: UI.theme || "system" }));
}, "/Users/liwu/Projects/websites/personal-24/src/components/common/ApplyColorMode.astro", void 0);

const createMetaTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<meta ${attrs}>`;
};
const createLinkTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<link ${attrs}>`;
};
const createOpenGraphTag = (property, content) => {
  return createMetaTag({ property: `og:${property}`, content });
};
const buildOpenGraphMediaTags = (mediaType, media) => {
  let tags = "";
  const addTag = (tag) => {
    tags += tag + "\n";
  };
  media.forEach((medium) => {
    addTag(createOpenGraphTag(mediaType, medium.url));
    if (medium.alt) {
      addTag(createOpenGraphTag(`${mediaType}:alt`, medium.alt));
    }
    if (medium.secureUrl) {
      addTag(createOpenGraphTag(`${mediaType}:secure_url`, medium.secureUrl));
    }
    if (medium.type) {
      addTag(createOpenGraphTag(`${mediaType}:type`, medium.type));
    }
    if (medium.width) {
      addTag(createOpenGraphTag(`${mediaType}:width`, medium.width.toString()));
    }
    if (medium.height) {
      addTag(
        createOpenGraphTag(`${mediaType}:height`, medium.height.toString())
      );
    }
  });
  return tags;
};
const buildTags = (config) => {
  let tagsToRender = "";
  const addTag = (tag) => {
    tagsToRender += tag + "\n";
  };
  if (config.title) {
    const formattedTitle = config.titleTemplate ? config.titleTemplate.replace("%s", config.title) : config.title;
    addTag(`<title>${escape(formattedTitle)}</title>`);
  }
  if (config.description) {
    addTag(createMetaTag({ name: "description", content: config.description }));
  }
  let robotsContent = [];
  if (typeof config.noindex !== "undefined") {
    robotsContent.push(config.noindex ? "noindex" : "index");
  }
  if (typeof config.nofollow !== "undefined") {
    robotsContent.push(config.nofollow ? "nofollow" : "follow");
  }
  if (config.robotsProps) {
    const {
      nosnippet,
      maxSnippet,
      maxImagePreview,
      noarchive,
      unavailableAfter,
      noimageindex,
      notranslate
    } = config.robotsProps;
    if (nosnippet) robotsContent.push("nosnippet");
    if (typeof maxSnippet === "number") robotsContent.push(`max-snippet:${maxSnippet}`);
    if (maxImagePreview)
      robotsContent.push(`max-image-preview:${maxImagePreview}`);
    if (noarchive) robotsContent.push("noarchive");
    if (unavailableAfter)
      robotsContent.push(`unavailable_after:${unavailableAfter}`);
    if (noimageindex) robotsContent.push("noimageindex");
    if (notranslate) robotsContent.push("notranslate");
  }
  if (robotsContent.length > 0) {
    addTag(createMetaTag({ name: "robots", content: robotsContent.join(",") }));
  }
  if (config.canonical) {
    addTag(createLinkTag({ rel: "canonical", href: config.canonical }));
  }
  if (config.mobileAlternate) {
    addTag(
      createLinkTag({
        rel: "alternate",
        media: config.mobileAlternate.media,
        href: config.mobileAlternate.href
      })
    );
  }
  if (config.languageAlternates && config.languageAlternates.length > 0) {
    config.languageAlternates.forEach((languageAlternate) => {
      addTag(
        createLinkTag({
          rel: "alternate",
          hreflang: languageAlternate.hreflang,
          href: languageAlternate.href
        })
      );
    });
  }
  if (config.openGraph) {
    const title = config.openGraph?.title || config.title;
    if (title) {
      addTag(createOpenGraphTag("title", title));
    }
    const description = config.openGraph?.description || config.description;
    if (description) {
      addTag(createOpenGraphTag("description", description));
    }
    if (config.openGraph.url) {
      addTag(createOpenGraphTag("url", config.openGraph.url));
    }
    if (config.openGraph.type) {
      addTag(createOpenGraphTag("type", config.openGraph.type));
    }
    if (config.openGraph.images && config.openGraph.images.length) {
      addTag(buildOpenGraphMediaTags("image", config.openGraph.images));
    }
    if (config.openGraph.videos && config.openGraph.videos.length) {
      addTag(buildOpenGraphMediaTags("video", config.openGraph.videos));
    }
    if (config.openGraph.locale) {
      addTag(createOpenGraphTag("locale", config.openGraph.locale));
    }
    if (config.openGraph.site_name) {
      addTag(createOpenGraphTag("site_name", config.openGraph.site_name));
    }
    if (config.openGraph.profile) {
      if (config.openGraph.profile.firstName) {
        addTag(
          createOpenGraphTag(
            "profile:first_name",
            config.openGraph.profile.firstName
          )
        );
      }
      if (config.openGraph.profile.lastName) {
        addTag(
          createOpenGraphTag(
            "profile:last_name",
            config.openGraph.profile.lastName
          )
        );
      }
      if (config.openGraph.profile.username) {
        addTag(
          createOpenGraphTag(
            "profile:username",
            config.openGraph.profile.username
          )
        );
      }
      if (config.openGraph.profile.gender) {
        addTag(
          createOpenGraphTag("profile:gender", config.openGraph.profile.gender)
        );
      }
    }
    if (config.openGraph.book) {
      if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
        config.openGraph.book.authors.forEach((author) => {
          addTag(createOpenGraphTag("book:author", author));
        });
      }
      if (config.openGraph.book.isbn) {
        addTag(createOpenGraphTag("book:isbn", config.openGraph.book.isbn));
      }
      if (config.openGraph.book.releaseDate) {
        addTag(
          createOpenGraphTag(
            "book:release_date",
            config.openGraph.book.releaseDate
          )
        );
      }
      if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
        config.openGraph.book.tags.forEach((tag) => {
          addTag(createOpenGraphTag("book:tag", tag));
        });
      }
    }
    if (config.openGraph.article) {
      if (config.openGraph.article.publishedTime) {
        addTag(
          createOpenGraphTag(
            "article:published_time",
            config.openGraph.article.publishedTime
          )
        );
      }
      if (config.openGraph.article.modifiedTime) {
        addTag(
          createOpenGraphTag(
            "article:modified_time",
            config.openGraph.article.modifiedTime
          )
        );
      }
      if (config.openGraph.article.expirationTime) {
        addTag(
          createOpenGraphTag(
            "article:expiration_time",
            config.openGraph.article.expirationTime
          )
        );
      }
      if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
        config.openGraph.article.authors.forEach((author) => {
          addTag(createOpenGraphTag("article:author", author));
        });
      }
      if (config.openGraph.article.section) {
        addTag(
          createOpenGraphTag(
            "article:section",
            config.openGraph.article.section
          )
        );
      }
      if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
        config.openGraph.article.tags.forEach((tag) => {
          addTag(createOpenGraphTag("article:tag", tag));
        });
      }
    }
    if (config.openGraph.video) {
      if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
        config.openGraph.video.actors.forEach((actor) => {
          addTag(createOpenGraphTag("video:actor", actor.profile));
          if (actor.role) {
            addTag(createOpenGraphTag("video:actor:role", actor.role));
          }
        });
      }
      if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
        config.openGraph.video.directors.forEach((director) => {
          addTag(createOpenGraphTag("video:director", director));
        });
      }
      if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
        config.openGraph.video.writers.forEach((writer) => {
          addTag(createOpenGraphTag("video:writer", writer));
        });
      }
      if (config.openGraph.video.duration) {
        addTag(
          createOpenGraphTag(
            "video:duration",
            config.openGraph.video.duration.toString()
          )
        );
      }
      if (config.openGraph.video.releaseDate) {
        addTag(
          createOpenGraphTag(
            "video:release_date",
            config.openGraph.video.releaseDate
          )
        );
      }
      if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
        config.openGraph.video.tags.forEach((tag) => {
          addTag(createOpenGraphTag("video:tag", tag));
        });
      }
      if (config.openGraph.video.series) {
        addTag(
          createOpenGraphTag("video:series", config.openGraph.video.series)
        );
      }
    }
  }
  if (config.facebook && config.facebook.appId) {
    addTag(
      createMetaTag({ property: "fb:app_id", content: config.facebook.appId })
    );
  }
  if (config.twitter) {
    if (config.twitter.cardType) {
      addTag(
        createMetaTag({
          name: "twitter:card",
          content: config.twitter.cardType
        })
      );
    }
    if (config.twitter.site) {
      addTag(
        createMetaTag({ name: "twitter:site", content: config.twitter.site })
      );
    }
    if (config.twitter.handle) {
      addTag(
        createMetaTag({
          name: "twitter:creator",
          content: config.twitter.handle
        })
      );
    }
  }
  if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
    config.additionalMetaTags.forEach((metaTag) => {
      const attributes = {
        content: metaTag.content
      };
      if ("name" in metaTag && metaTag.name) {
        attributes.name = metaTag.name;
      } else if ("property" in metaTag && metaTag.property) {
        attributes.property = metaTag.property;
      } else if ("httpEquiv" in metaTag && metaTag.httpEquiv) {
        attributes["http-equiv"] = metaTag.httpEquiv;
      }
      addTag(createMetaTag(attributes));
    });
  }
  if (config.additionalLinkTags && config.additionalLinkTags.length > 0) {
    config.additionalLinkTags.forEach((linkTag) => {
      const attributes = {
        rel: linkTag.rel,
        href: linkTag.href
      };
      if (linkTag.sizes) {
        attributes.sizes = linkTag.sizes;
      }
      if (linkTag.media) {
        attributes.media = linkTag.media;
      }
      if (linkTag.type) {
        attributes.type = linkTag.type;
      }
      if (linkTag.color) {
        attributes.color = linkTag.color;
      }
      if (linkTag.as) {
        attributes.as = linkTag.as;
      }
      if (linkTag.crossOrigin) {
        attributes.crossorigin = linkTag.crossOrigin;
      }
      addTag(createLinkTag(attributes));
    });
  }
  return tagsToRender.trim();
};

const $$Astro$4 = createAstro("https://chienda.com");
const $$AstroSeo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AstroSeo;
  const {
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(buildTags({
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  }))}` })}`;
}, "/Users/liwu/Projects/websites/personal-24/node_modules/.pnpm/@astrolib+seo@1.0.0-beta.8_astro@4.16.19_@types+node@24.7.1_rollup@4.52.4_typescript@5.9.3_/node_modules/@astrolib/seo/src/AstroSeo.astro", void 0);

const $$Astro$3 = createAstro("https://chienda.com");
const $$Metadata = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Metadata;
  const {
    title,
    ignoreTitleTemplate = false,
    canonical = String(getCanonical(String(Astro2.url.pathname))),
    robots = {},
    description,
    openGraph = {},
    twitter = {}
  } = Astro2.props;
  const seoProps = merge(
    {
      title: "",
      titleTemplate: "%s",
      canonical,
      noindex: true,
      nofollow: true,
      description: void 0,
      openGraph: {
        url: canonical,
        site_name: SITE?.name,
        images: [],
        locale: I18N?.language || "en",
        type: "website"
      },
      twitter: {
        cardType: openGraph?.images?.length ? "summary_large_image" : "summary"
      }
    },
    {
      title: METADATA?.title?.default,
      titleTemplate: METADATA?.title?.template,
      noindex: typeof METADATA?.robots?.index !== "undefined" ? !METADATA.robots.index : void 0,
      nofollow: typeof METADATA?.robots?.follow !== "undefined" ? !METADATA.robots.follow : void 0,
      description: METADATA?.description,
      openGraph: METADATA?.openGraph,
      twitter: METADATA?.twitter
    },
    {
      title,
      titleTemplate: ignoreTitleTemplate ? "%s" : void 0,
      canonical,
      noindex: typeof robots?.index !== "undefined" ? !robots.index : void 0,
      nofollow: typeof robots?.follow !== "undefined" ? !robots.follow : void 0,
      description,
      openGraph: { url: canonical, ...openGraph },
      twitter
    }
  );
  return renderTemplate`${renderComponent($$result, "AstroSeo", $$AstroSeo, { ...{ ...seoProps, openGraph: await adaptOpenGraphImages(seoProps?.openGraph, Astro2.site) } })}`;
}, "/Users/liwu/Projects/websites/personal-24/src/components/common/Metadata.astro", void 0);

const $$SiteVerification = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${SITE.googleSiteVerificationId && renderTemplate`<meta name="google-site-verification"${addAttribute(SITE.googleSiteVerificationId, "content")}>`}`;
}, "/Users/liwu/Projects/websites/personal-24/src/components/common/SiteVerification.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://chienda.com");
const $$GoogleAnalytics = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GoogleAnalytics;
  const { id = "GA_MEASUREMENT_ID", partytown = false } = Astro2.props;
  const attrs = partytown ? { type: "text/partytown" } : {};
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script async", "", "><\/script><script", ">(function(){", '\n  window.dataLayer = window.dataLayer || [];\n  function gtag() {\n    window.dataLayer.push(arguments);\n  }\n  gtag("js", new Date());\n  gtag("config", id);\n})();<\/script>'])), addAttribute(`https://www.googletagmanager.com/gtag/js?id=${id}`, "src"), spreadAttributes(attrs), spreadAttributes(attrs), defineScriptVars({ id }));
}, "/Users/liwu/Projects/websites/personal-24/node_modules/.pnpm/@astrolib+analytics@0.5.0_astro@4.16.19_@types+node@24.7.1_rollup@4.52.4_typescript@5.9.3_/node_modules/@astrolib/analytics/src/GoogleAnalytics.astro", void 0);

const $$Analytics = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${ANALYTICS?.vendors?.googleAnalytics?.id ? renderTemplate`${renderComponent($$result, "GoogleAnalytics", $$GoogleAnalytics, { "id": String(ANALYTICS.vendors.googleAnalytics.id), "partytown": ANALYTICS?.vendors?.googleAnalytics?.partytown })}` : null}`;
}, "/Users/liwu/Projects/websites/personal-24/src/components/common/Analytics.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$BasicScripts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<script>(function(){", "\n  if (window.basic_script) {\n    return;\n  }\n\n  window.basic_script = true;\n\n  function applyTheme(theme) {\n    toggleCompanyLogo(theme);\n    toggleTweetCard();\n    if (theme === 'dark') {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n  }\n  \n  function animateHeroGrid() {\n    //eg data-square=\"sq-1\"\n    const squares = document.querySelectorAll('[data-square]');\n    //\n    // squares.forEach((square) => {\n    //   // const currentOpacity = square.classList.add('opacity-100');\n    //   const timePeriod = Math.floor(Math.random() * 1500) + 500;\n    //   console.log({currentOpacity});\n    // \n    // })\n    //\n    //randomly flick the opacity of 20 square within 2 seconds\n    // setInterval(() => {\n    //   const randomSquares = Array.from({ length: 20 }, () => squares[Math.floor(Math.random() * squares.length)]);\n    //   randomSquares.forEach((square) => {\n    //     const currentOpacity = square.style.opacity;\n    //     square.style.opacity = 100;\n    //     setTimeout(() => {\n    //       square.style.opacity = currentOpacity;\n    //     }, 500);\n    //   });\n    // }, 2000);\n  }\n\n  //toggle animation classes on view\n  function toggleAnimationOnView() {\n    const observer = new IntersectionObserver((entries) => {\n      entries.forEach((entry) => {\n        const shouldReset = entry.target.dataset.reset;\n\n        if (entry.isIntersecting) {\n          const animation = entry.target.dataset.animation;\n          entry.target.classList.add(animation);\n        }\n\n        if (entry.isIntersecting && !shouldReset) {\n          observer.unobserve(entry.target);\n        }\n\n        if (!entry.isIntersecting && shouldReset) {\n          const animation = entry.target.dataset.animation;\n          entry.target.classList.remove(animation);\n        }\n      });\n    });\n\n    //select all with data-animation\n    document.querySelectorAll('[data-animation]').forEach((elem) => {\n      observer.observe(elem);\n    });\n  }\n\n  function toggleTweetCard() {\n    const html = document.querySelector('html');\n    const tweetCards = document.querySelectorAll('.tweets');\n\n    const ovserver = new MutationObserver((mutations) => {\n      //listen to html class changes\n      mutations.forEach((mutation) => {\n        if (mutation.attributeName === 'class') {\n          tweetCards.forEach((tweetCard) => {\n            // tweetCard.classList.toggle('hidden', true);\n            if (html.classList.contains('dark') && tweetCard.classList.contains('dark')) {\n              tweetCard.classList.toggle('hidden', false);\n            } else if (!html.classList.contains('dark') && tweetCard.classList.contains('light')) {\n              tweetCard.classList.toggle('hidden', false);\n            } else {\n              tweetCard.classList.toggle('hidden', true);\n            }\n          });\n        }\n      });\n    });\n\n    ovserver.observe(html, {\n      attributes: true,\n    });\n  }\n\n  function toggleCompanyLogo(theme) {\n    const companyLogo = document.querySelectorAll('[data-img-type]');\n\n    if (theme === 'dark') {\n      for (let i = 0; i < companyLogo.length; i++) {\n        companyLogo[i].src = companyLogo[i].src = companyLogo[i].dataset.imgLight;\n      }\n    } else {\n      for (let i = 0; i < companyLogo.length; i++) {\n        companyLogo[i].src = companyLogo[i].src = companyLogo[i].dataset.imgDark;\n      }\n    }\n  }\n\n  const initTheme = function () {\n    if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {\n      applyTheme(defaultTheme.replace(':only', ''));\n    } else if (\n      localStorage.theme === 'dark' ||\n      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n    ) {\n      applyTheme('dark');\n    } else {\n      applyTheme('light');\n    }\n  };\n  initTheme();\n\n  function attachEvent(selector, event, fn) {\n    const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;\n    if (matches && matches.length) {\n      matches.forEach((elem) => {\n        elem.addEventListener(event, (e) => fn(e, elem), false);\n      });\n    }\n  }\n\n  const onLoad = function () {\n    animateHeroGrid();\n    toggleAnimationOnView();\n    let lastKnownScrollPosition = window.scrollY;\n    let ticking = true;\n\n    const searchBlog = document.getElementById('search-blog');\n    if (searchBlog) {\n      searchBlog.addEventListener('keyup', () => {\n        const searchValue = searchBlog.value.toLowerCase();\n        const url = new URL(window.location.href);\n        if (searchValue === '') {\n          url.searchParams.delete('q');\n        } else {\n          url.searchParams.set('q', searchValue);\n        }\n        window.history.replaceState({}, '', url);\n        //toggle visibility of #server-posts\n        const serverPosts = document.getElementById('server-posts');\n        if (serverPosts) {\n          serverPosts.classList.toggle('hidden', searchValue !== '');\n        }\n\n        const pagination = document.getElementById('pagination');\n        if (pagination) {\n          pagination.classList.toggle('hidden', searchValue !== '');\n        }\n\n        const clientPosts = document.getElementById('client-posts');\n        if (clientPosts) {\n          clientPosts.classList.toggle('hidden', searchValue === '');\n        }\n      });\n    }\n\n    attachEvent('#header nav', 'click', function () {\n      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n      document.body.classList.remove('overflow-hidden');\n      document.getElementById('header')?.classList.remove('h-screen');\n      document.getElementById('header')?.classList.remove('expanded');\n      document.getElementById('header')?.classList.remove('bg-page');\n      document.querySelector('#header nav')?.classList.add('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-menu]', 'click', function (_, elem) {\n      elem.classList.toggle('expanded');\n      document.body.classList.toggle('overflow-hidden');\n      document.getElementById('header')?.classList.toggle('expanded');\n      document.getElementById('header')?.classList.toggle('bg-page');\n      document.querySelector('#header nav')?.classList.toggle('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.toggle('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-color-scheme]', 'click', function () {\n      if (defaultTheme.endsWith(':only')) {\n        return;\n      }\n      document.documentElement.classList.toggle('dark');\n      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';\n      toggleCompanyLogo(localStorage.theme);\n    });\n\n    attachEvent('[data-aw-social-share]', 'click', function (_, elem) {\n      const network = elem.getAttribute('data-aw-social-share');\n      const url = encodeURIComponent(elem.getAttribute('data-aw-url'));\n      const text = encodeURIComponent(elem.getAttribute('data-aw-text'));\n\n      let href;\n      switch (network) {\n        case 'facebook':\n          href = `https://www.facebook.com/sharer.php?u=${url}`;\n          break;\n        case 'twitter':\n          href = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;\n          break;\n        case 'linkedin':\n          href = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;\n          break;\n        case 'whatsapp':\n          href = `https://wa.me/?text=${text}%20${url}`;\n          break;\n        case 'mail':\n          href = `mailto:?subject=%22${text}%22&body=${text}%20${url}`;\n          break;\n\n        default:\n          return;\n      }\n\n      //attach an input change event\n      attachEvent('input', 'change', function (e) {\n        console.log(e.target);\n        const input = e.target;\n        if (input.value) {\n          href += `&${input.name}=${encodeURIComponent(input.value)}`;\n        }\n      });\n\n      const newlink = document.createElement('a');\n      newlink.target = '_blank';\n      newlink.href = href;\n      newlink.click();\n    });\n\n    function appyHeaderStylesOnScroll() {\n      const header = document.querySelector('#header[data-aw-sticky-header]');\n      if (!header) {\n        ticking = false;\n        return;\n      }\n      if (lastKnownScrollPosition > 60 && !header.classList.contains('scroll')) {\n        header.classList.add('scroll');\n      } else if (lastKnownScrollPosition <= 60 && header.classList.contains('scroll')) {\n        header.classList.remove('scroll');\n      }\n      ticking = false;\n    }\n    appyHeaderStylesOnScroll();\n\n    attachEvent([document], 'scroll', function () {\n      lastKnownScrollPosition = window.scrollY;\n\n      if (!ticking) {\n        window.requestAnimationFrame(() => {\n          appyHeaderStylesOnScroll();\n        });\n        ticking = true;\n      }\n    });\n  };\n\n  const onPageShow = function () {\n    document.documentElement.classList.add('motion-safe:scroll-smooth');\n    const elem = document.querySelector('[data-aw-toggle-menu]');\n    if (elem) {\n      elem.classList.remove('expanded');\n    }\n    document.body.classList.remove('overflow-hidden');\n    document.getElementById('header')?.classList.remove('h-screen');\n    document.getElementById('header')?.classList.remove('expanded');\n    document.querySelector('#header nav')?.classList.add('hidden');\n  };\n\n  window.onload = onLoad;\n  window.onpageshow = onPageShow;\n\n  document.addEventListener('astro:after-swap', () => {\n    initTheme();\n    animateHeroGrid();\n    onLoad();\n    onPageShow();\n  });\n})();<\/script>"], ["<script>(function(){", "\n  if (window.basic_script) {\n    return;\n  }\n\n  window.basic_script = true;\n\n  function applyTheme(theme) {\n    toggleCompanyLogo(theme);\n    toggleTweetCard();\n    if (theme === 'dark') {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n  }\n  \n  function animateHeroGrid() {\n    //eg data-square=\"sq-1\"\n    const squares = document.querySelectorAll('[data-square]');\n    //\n    // squares.forEach((square) => {\n    //   // const currentOpacity = square.classList.add('opacity-100');\n    //   const timePeriod = Math.floor(Math.random() * 1500) + 500;\n    //   console.log({currentOpacity});\n    // \n    // })\n    //\n    //randomly flick the opacity of 20 square within 2 seconds\n    // setInterval(() => {\n    //   const randomSquares = Array.from({ length: 20 }, () => squares[Math.floor(Math.random() * squares.length)]);\n    //   randomSquares.forEach((square) => {\n    //     const currentOpacity = square.style.opacity;\n    //     square.style.opacity = 100;\n    //     setTimeout(() => {\n    //       square.style.opacity = currentOpacity;\n    //     }, 500);\n    //   });\n    // }, 2000);\n  }\n\n  //toggle animation classes on view\n  function toggleAnimationOnView() {\n    const observer = new IntersectionObserver((entries) => {\n      entries.forEach((entry) => {\n        const shouldReset = entry.target.dataset.reset;\n\n        if (entry.isIntersecting) {\n          const animation = entry.target.dataset.animation;\n          entry.target.classList.add(animation);\n        }\n\n        if (entry.isIntersecting && !shouldReset) {\n          observer.unobserve(entry.target);\n        }\n\n        if (!entry.isIntersecting && shouldReset) {\n          const animation = entry.target.dataset.animation;\n          entry.target.classList.remove(animation);\n        }\n      });\n    });\n\n    //select all with data-animation\n    document.querySelectorAll('[data-animation]').forEach((elem) => {\n      observer.observe(elem);\n    });\n  }\n\n  function toggleTweetCard() {\n    const html = document.querySelector('html');\n    const tweetCards = document.querySelectorAll('.tweets');\n\n    const ovserver = new MutationObserver((mutations) => {\n      //listen to html class changes\n      mutations.forEach((mutation) => {\n        if (mutation.attributeName === 'class') {\n          tweetCards.forEach((tweetCard) => {\n            // tweetCard.classList.toggle('hidden', true);\n            if (html.classList.contains('dark') && tweetCard.classList.contains('dark')) {\n              tweetCard.classList.toggle('hidden', false);\n            } else if (!html.classList.contains('dark') && tweetCard.classList.contains('light')) {\n              tweetCard.classList.toggle('hidden', false);\n            } else {\n              tweetCard.classList.toggle('hidden', true);\n            }\n          });\n        }\n      });\n    });\n\n    ovserver.observe(html, {\n      attributes: true,\n    });\n  }\n\n  function toggleCompanyLogo(theme) {\n    const companyLogo = document.querySelectorAll('[data-img-type]');\n\n    if (theme === 'dark') {\n      for (let i = 0; i < companyLogo.length; i++) {\n        companyLogo[i].src = companyLogo[i].src = companyLogo[i].dataset.imgLight;\n      }\n    } else {\n      for (let i = 0; i < companyLogo.length; i++) {\n        companyLogo[i].src = companyLogo[i].src = companyLogo[i].dataset.imgDark;\n      }\n    }\n  }\n\n  const initTheme = function () {\n    if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {\n      applyTheme(defaultTheme.replace(':only', ''));\n    } else if (\n      localStorage.theme === 'dark' ||\n      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n    ) {\n      applyTheme('dark');\n    } else {\n      applyTheme('light');\n    }\n  };\n  initTheme();\n\n  function attachEvent(selector, event, fn) {\n    const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;\n    if (matches && matches.length) {\n      matches.forEach((elem) => {\n        elem.addEventListener(event, (e) => fn(e, elem), false);\n      });\n    }\n  }\n\n  const onLoad = function () {\n    animateHeroGrid();\n    toggleAnimationOnView();\n    let lastKnownScrollPosition = window.scrollY;\n    let ticking = true;\n\n    const searchBlog = document.getElementById('search-blog');\n    if (searchBlog) {\n      searchBlog.addEventListener('keyup', () => {\n        const searchValue = searchBlog.value.toLowerCase();\n        const url = new URL(window.location.href);\n        if (searchValue === '') {\n          url.searchParams.delete('q');\n        } else {\n          url.searchParams.set('q', searchValue);\n        }\n        window.history.replaceState({}, '', url);\n        //toggle visibility of #server-posts\n        const serverPosts = document.getElementById('server-posts');\n        if (serverPosts) {\n          serverPosts.classList.toggle('hidden', searchValue !== '');\n        }\n\n        const pagination = document.getElementById('pagination');\n        if (pagination) {\n          pagination.classList.toggle('hidden', searchValue !== '');\n        }\n\n        const clientPosts = document.getElementById('client-posts');\n        if (clientPosts) {\n          clientPosts.classList.toggle('hidden', searchValue === '');\n        }\n      });\n    }\n\n    attachEvent('#header nav', 'click', function () {\n      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n      document.body.classList.remove('overflow-hidden');\n      document.getElementById('header')?.classList.remove('h-screen');\n      document.getElementById('header')?.classList.remove('expanded');\n      document.getElementById('header')?.classList.remove('bg-page');\n      document.querySelector('#header nav')?.classList.add('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-menu]', 'click', function (_, elem) {\n      elem.classList.toggle('expanded');\n      document.body.classList.toggle('overflow-hidden');\n      document.getElementById('header')?.classList.toggle('expanded');\n      document.getElementById('header')?.classList.toggle('bg-page');\n      document.querySelector('#header nav')?.classList.toggle('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.toggle('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-color-scheme]', 'click', function () {\n      if (defaultTheme.endsWith(':only')) {\n        return;\n      }\n      document.documentElement.classList.toggle('dark');\n      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';\n      toggleCompanyLogo(localStorage.theme);\n    });\n\n    attachEvent('[data-aw-social-share]', 'click', function (_, elem) {\n      const network = elem.getAttribute('data-aw-social-share');\n      const url = encodeURIComponent(elem.getAttribute('data-aw-url'));\n      const text = encodeURIComponent(elem.getAttribute('data-aw-text'));\n\n      let href;\n      switch (network) {\n        case 'facebook':\n          href = \\`https://www.facebook.com/sharer.php?u=\\${url}\\`;\n          break;\n        case 'twitter':\n          href = \\`https://twitter.com/intent/tweet?url=\\${url}&text=\\${text}\\`;\n          break;\n        case 'linkedin':\n          href = \\`https://www.linkedin.com/shareArticle?mini=true&url=\\${url}&title=\\${text}\\`;\n          break;\n        case 'whatsapp':\n          href = \\`https://wa.me/?text=\\${text}%20\\${url}\\`;\n          break;\n        case 'mail':\n          href = \\`mailto:?subject=%22\\${text}%22&body=\\${text}%20\\${url}\\`;\n          break;\n\n        default:\n          return;\n      }\n\n      //attach an input change event\n      attachEvent('input', 'change', function (e) {\n        console.log(e.target);\n        const input = e.target;\n        if (input.value) {\n          href += \\`&\\${input.name}=\\${encodeURIComponent(input.value)}\\`;\n        }\n      });\n\n      const newlink = document.createElement('a');\n      newlink.target = '_blank';\n      newlink.href = href;\n      newlink.click();\n    });\n\n    function appyHeaderStylesOnScroll() {\n      const header = document.querySelector('#header[data-aw-sticky-header]');\n      if (!header) {\n        ticking = false;\n        return;\n      }\n      if (lastKnownScrollPosition > 60 && !header.classList.contains('scroll')) {\n        header.classList.add('scroll');\n      } else if (lastKnownScrollPosition <= 60 && header.classList.contains('scroll')) {\n        header.classList.remove('scroll');\n      }\n      ticking = false;\n    }\n    appyHeaderStylesOnScroll();\n\n    attachEvent([document], 'scroll', function () {\n      lastKnownScrollPosition = window.scrollY;\n\n      if (!ticking) {\n        window.requestAnimationFrame(() => {\n          appyHeaderStylesOnScroll();\n        });\n        ticking = true;\n      }\n    });\n  };\n\n  const onPageShow = function () {\n    document.documentElement.classList.add('motion-safe:scroll-smooth');\n    const elem = document.querySelector('[data-aw-toggle-menu]');\n    if (elem) {\n      elem.classList.remove('expanded');\n    }\n    document.body.classList.remove('overflow-hidden');\n    document.getElementById('header')?.classList.remove('h-screen');\n    document.getElementById('header')?.classList.remove('expanded');\n    document.querySelector('#header nav')?.classList.add('hidden');\n  };\n\n  window.onload = onLoad;\n  window.onpageshow = onPageShow;\n\n  document.addEventListener('astro:after-swap', () => {\n    initTheme();\n    animateHeroGrid();\n    onLoad();\n    onPageShow();\n  });\n})();<\/script>"])), defineScriptVars({ defaultTheme: UI.theme }));
}, "/Users/liwu/Projects/websites/personal-24/src/components/common/BasicScripts.astro", void 0);

const $$Astro$1 = createAstro("https://chienda.com");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/liwu/Projects/websites/personal-24/node_modules/.pnpm/astro@4.16.19_@types+node@24.7.1_rollup@4.52.4_typescript@5.9.3/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro("https://chienda.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { metadata = {} } = Astro2.props;
  const { language, textDirection } = I18N;
  return renderTemplate`<html${addAttribute(language, "lang")}${addAttribute(textDirection, "dir")} class="2xl:text-[20px]"> <head>${renderComponent($$result, "CommonMeta", $$CommonMeta, {})}${renderComponent($$result, "Favicons", $$Favicons, {})}${renderComponent($$result, "CustomStyles", $$CustomStyles, {})}${renderComponent($$result, "ApplyColorMode", $$ApplyColorMode, {})}${renderComponent($$result, "Metadata", $$Metadata, { ...metadata })}${renderComponent($$result, "SiteVerification", $$SiteVerification, {})}${renderComponent($$result, "Analytics", $$Analytics, {})}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "swap" })}${renderHead()}</head> <body class="antialiased text-default bg-page tracking-tight"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "BasicScripts", $$BasicScripts, {})}  </body> </html>`;
}, "/Users/liwu/Projects/websites/personal-24/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
