import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isCoreRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_BFh1IzDj.mjs';
import { a as createComponent, i as renderUniqueStylesheet, j as renderScriptElement, k as createHeadAndContent, r as renderComponent, b as renderTemplate, u as unescapeHTML } from './astro/server_Q924hkwF.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';
import { A as APP_BLOG, d as cleanSlug, P as POST_PERMALINK_PATTERN, t as trimSlash, C as CATEGORY_BASE, T as TAG_BASE, B as BLOG_BASE } from './permalinks_BCPgzee8.mjs';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isCoreRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_RECAPTCHA_KEY": "6Lfc03YpAAAAAAxYZObQWCJGY9sVJBcvdc-gsutE", "SITE": "https://chienda.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, {})?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/48-hours-of-pure-innovation.mdx": () => import('./48-hours-of-pure-innovation_DPzsH_1K.mjs'),"/src/content/post/6-accessibility-hacks.md": () => import('./6-accessibility-hacks_BqxrIR0i.mjs'),"/src/content/post/7-javascript-alternatives-2021.md": () => import('./7-javascript-alternatives-2021_H_43i96h.mjs'),"/src/content/post/accidental-ai-engineer.mdx": () => import('./accidental-ai-engineer_DY_GuWAG.mjs'),"/src/content/post/ai-agents-use-cases.mdx": () => import('./ai-agents-use-cases_CYEQDI6J.mjs'),"/src/content/post/algorithm-within-e1s1.mdx": () => import('./algorithm-within-e1s1_CxD2je2n.mjs'),"/src/content/post/astrowind-template-in-depth.mdx": () => import('./astrowind-template-in-depth_DKS_hiJr.mjs'),"/src/content/post/evs-in-malawi.md": () => import('./evs-in-malawi_CEIPvjsH.mjs'),"/src/content/post/get-started-website-with-astro-tailwind-css.md": () => import('./get-started-website-with-astro-tailwind-css_Byo-xTyS.mjs'),"/src/content/post/health-interoperability-in-malawi.md": () => import('./health-interoperability-in-malawi_g19qDZVH.mjs'),"/src/content/post/how-to-customize-astrowind-to-your-brand.md": () => import('./how-to-customize-astrowind-to-your-brand_Moxc1SID.mjs'),"/src/content/post/landing.md": () => import('./landing_BSOb65Kq.mjs'),"/src/content/post/learn-code-in-2021.md": () => import('./learn-code-in-2021_B2zoVHsl.mjs'),"/src/content/post/markdown-elements-demo-post.mdx": () => import('./markdown-elements-demo-post_BLIYPOvs.mjs'),"/src/content/post/maui-vs-flutter-2024.mdx": () => import('./maui-vs-flutter-2024_oaAPBa4s.mjs'),"/src/content/post/nosql-data-modelling.md": () => import('./nosql-data-modelling_B23HB-if.mjs'),"/src/content/post/rag-is-all-you-need-2.mdx": () => import('./rag-is-all-you-need-2_DqWecU_g.mjs'),"/src/content/post/rag-is-all-you-need.mdx": () => import('./rag-is-all-you-need_C-Urrycn.mjs'),"/src/content/post/ssr-vs-csr.md": () => import('./ssr-vs-csr_4PKxvogI.mjs'),"/src/content/post/stop-undercharging.md": () => import('./stop-undercharging_Bi4_lao0.mjs'),"/src/content/post/the-day-the-dollar-die.md": () => import('./the-day-the-dollar-die_BYiKKw5Q.mjs'),"/src/content/post/the-machine-minder.md": () => import('./the-machine-minder_CjMQVoUF.mjs'),"/src/content/post/the-new-electricity.mdx": () => import('./the-new-electricity_1NeswRej.mjs'),"/src/content/post/the-power-platform-awakening.mdx": () => import('./the-power-platform-awakening_CDkB2CcX.mjs'),"/src/content/post/the-telala-effect.mdx": () => import('./the-telala-effect_yi8bFkYd.mjs'),"/src/content/post/top-5-tech-2021.md": () => import('./top-5-tech-2021_DhwpjKUm.mjs'),"/src/content/post/useful-resources-to-create-websites.md": () => import('./useful-resources-to-create-websites_D9Vx5BBL.mjs'),"/src/content/post/whats-your-game-mode.mdx": () => import('./whats-your-game-mode_D5BDgOWu.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"post":{"type":"content","entries":{"48-hours-of-pure-innovation":"/src/content/post/48-hours-of-pure-innovation.mdx","accidental-ai-engineer":"/src/content/post/accidental-ai-engineer.mdx","algorithm-within-e1s1":"/src/content/post/algorithm-within-e1s1.mdx","astrowind-template-in-depth":"/src/content/post/astrowind-template-in-depth.mdx","ai-agents-use-cases":"/src/content/post/ai-agents-use-cases.mdx","evs-in-malawi":"/src/content/post/evs-in-malawi.md","7-javascript-alternatives-2021":"/src/content/post/7-javascript-alternatives-2021.md","get-started-website-with-astro-tailwind-css":"/src/content/post/get-started-website-with-astro-tailwind-css.md","health-interoperability-in-malawi":"/src/content/post/health-interoperability-in-malawi.md","6-accessibility-hacks":"/src/content/post/6-accessibility-hacks.md","how-to-customize-astrowind-to-your-brand":"/src/content/post/how-to-customize-astrowind-to-your-brand.md","landing":"/src/content/post/landing.md","maui-vs-flutter-2024":"/src/content/post/maui-vs-flutter-2024.mdx","learn-code-in-2021":"/src/content/post/learn-code-in-2021.md","markdown-elements-demo-post":"/src/content/post/markdown-elements-demo-post.mdx","nosql-data-modelling":"/src/content/post/nosql-data-modelling.md","rag-is-all-you-need-2":"/src/content/post/rag-is-all-you-need-2.mdx","rag-is-all-you-need":"/src/content/post/rag-is-all-you-need.mdx","ssr-vs-csr":"/src/content/post/ssr-vs-csr.md","stop-undercharging":"/src/content/post/stop-undercharging.md","the-day-the-dollar-die":"/src/content/post/the-day-the-dollar-die.md","the-machine-minder":"/src/content/post/the-machine-minder.md","the-new-electricity":"/src/content/post/the-new-electricity.mdx","the-power-platform-awakening":"/src/content/post/the-power-platform-awakening.mdx","the-telala-effect":"/src/content/post/the-telala-effect.mdx","top-5-tech-2021":"/src/content/post/top-5-tech-2021.md","whats-your-game-mode":"/src/content/post/whats-your-game-mode.mdx","useful-resources-to-create-websites":"/src/content/post/useful-resources-to-create-websites.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/48-hours-of-pure-innovation.mdx": () => import('./48-hours-of-pure-innovation_4H24Qcks.mjs'),"/src/content/post/6-accessibility-hacks.md": () => import('./6-accessibility-hacks_D7oOy973.mjs'),"/src/content/post/7-javascript-alternatives-2021.md": () => import('./7-javascript-alternatives-2021_Dnm2wlAQ.mjs'),"/src/content/post/accidental-ai-engineer.mdx": () => import('./accidental-ai-engineer_CtdzILEq.mjs'),"/src/content/post/ai-agents-use-cases.mdx": () => import('./ai-agents-use-cases_BBWDwcDf.mjs'),"/src/content/post/algorithm-within-e1s1.mdx": () => import('./algorithm-within-e1s1_Cl_Xq1ME.mjs'),"/src/content/post/astrowind-template-in-depth.mdx": () => import('./astrowind-template-in-depth_tZQUb8ra.mjs'),"/src/content/post/evs-in-malawi.md": () => import('./evs-in-malawi_CNxtcdHe.mjs'),"/src/content/post/get-started-website-with-astro-tailwind-css.md": () => import('./get-started-website-with-astro-tailwind-css_CpuRulqc.mjs'),"/src/content/post/health-interoperability-in-malawi.md": () => import('./health-interoperability-in-malawi_zcustHUe.mjs'),"/src/content/post/how-to-customize-astrowind-to-your-brand.md": () => import('./how-to-customize-astrowind-to-your-brand_BtrP36Li.mjs'),"/src/content/post/landing.md": () => import('./landing_CBCqPcjS.mjs'),"/src/content/post/learn-code-in-2021.md": () => import('./learn-code-in-2021_3064DuG8.mjs'),"/src/content/post/markdown-elements-demo-post.mdx": () => import('./markdown-elements-demo-post_p-5uAibv.mjs'),"/src/content/post/maui-vs-flutter-2024.mdx": () => import('./maui-vs-flutter-2024_DumdlB4h.mjs'),"/src/content/post/nosql-data-modelling.md": () => import('./nosql-data-modelling_B_wlcTz-.mjs'),"/src/content/post/rag-is-all-you-need-2.mdx": () => import('./rag-is-all-you-need-2_BCJQdBKv.mjs'),"/src/content/post/rag-is-all-you-need.mdx": () => import('./rag-is-all-you-need_C5UBwoS6.mjs'),"/src/content/post/ssr-vs-csr.md": () => import('./ssr-vs-csr_OQ4KBU8G.mjs'),"/src/content/post/stop-undercharging.md": () => import('./stop-undercharging_BsR9GBFc.mjs'),"/src/content/post/the-day-the-dollar-die.md": () => import('./the-day-the-dollar-die_BejBHwEt.mjs'),"/src/content/post/the-machine-minder.md": () => import('./the-machine-minder_CSif4LOU.mjs'),"/src/content/post/the-new-electricity.mdx": () => import('./the-new-electricity_CsaCxMCY.mjs'),"/src/content/post/the-power-platform-awakening.mdx": () => import('./the-power-platform-awakening_D4e53jBa.mjs'),"/src/content/post/the-telala-effect.mdx": () => import('./the-telala-effect_Dovf_Ryl.mjs'),"/src/content/post/top-5-tech-2021.md": () => import('./top-5-tech-2021_9QGm-4e3.mjs'),"/src/content/post/useful-resources-to-create-websites.md": () => import('./useful-resources-to-create-websites_KFSJ9c4Q.mjs'),"/src/content/post/whats-your-game-mode.mdx": () => import('./whats-your-game-mode_Bxzbq--g.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const generatePermalink = async ({
  id,
  slug,
  publishDate,
  category
}) => {
  const year = String(publishDate.getFullYear()).padStart(4, "0");
  const month = String(publishDate.getMonth() + 1).padStart(2, "0");
  const day = String(publishDate.getDate()).padStart(2, "0");
  const hour = String(publishDate.getHours()).padStart(2, "0");
  const minute = String(publishDate.getMinutes()).padStart(2, "0");
  const second = String(publishDate.getSeconds()).padStart(2, "0");
  const permalink = POST_PERMALINK_PATTERN.replace("%slug%", slug).replace("%id%", id).replace("%category%", category || "").replace("%year%", year).replace("%month%", month).replace("%day%", day).replace("%hour%", hour).replace("%minute%", minute).replace("%second%", second);
  return permalink.split("/").map((el) => trimSlash(el)).filter((el) => !!el).join("/");
};
const getNormalizedPost = async (post) => {
  const { id, slug: rawSlug = "", data } = post;
  const { Content, remarkPluginFrontmatter } = await post.render();
  const {
    publishDate: rawPublishDate = /* @__PURE__ */ new Date(),
    updateDate: rawUpdateDate,
    title,
    excerpt,
    image,
    tags: rawTags = [],
    category: rawCategory,
    author,
    draft = false,
    commentLink,
    metadata = {}
  } = data;
  const slug = cleanSlug(rawSlug);
  const publishDate = new Date(rawPublishDate);
  const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : void 0;
  const category = rawCategory ? cleanSlug(rawCategory) : void 0;
  const tags = rawTags.map((tag) => cleanSlug(tag));
  return {
    id,
    slug,
    permalink: await generatePermalink({ id, slug, publishDate, category }),
    publishDate,
    updateDate,
    title,
    excerpt,
    image,
    category,
    tags,
    author,
    commentLink,
    draft,
    metadata,
    Content,
    // or 'content' in case you consume from API
    readingTime: remarkPluginFrontmatter?.readingTime
  };
};
const load = async function() {
  const posts = await getCollection("post");
  const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post));
  const results = (await Promise.all(normalizedPosts)).sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf()).filter((post) => !post.draft);
  return results;
};
let _posts;
const isBlogEnabled = APP_BLOG.isEnabled;
const isBlogListRouteEnabled = APP_BLOG.list.isEnabled;
const isBlogPostRouteEnabled = APP_BLOG.post.isEnabled;
const isBlogCategoryRouteEnabled = APP_BLOG.category.isEnabled;
const isBlogTagRouteEnabled = APP_BLOG.tag.isEnabled;
const blogListRobots = APP_BLOG.list.robots;
const blogPostRobots = APP_BLOG.post.robots;
const blogCategoryRobots = APP_BLOG.category.robots;
const blogTagRobots = APP_BLOG.tag.robots;
const blogPostsPerPage = APP_BLOG?.postsPerPage;
const fetchPosts = async () => {
  if (!_posts) {
    _posts = await load();
  }
  return _posts;
};
const getPostsLength = async () => {
  const posts = await fetchPosts();
  return posts.length;
};
const getPostsFromTags = async (tags) => {
  const posts = await fetchPosts();
  const found = posts.filter((post) => {
    return post.tags?.some((tag) => tags.includes(tag));
  });
  return found.slice(0, 3);
};
const findPostsByQuery = async (query) => {
  if (!query) return [];
  const posts = await fetchPosts();
  const filtered = posts.filter((post) => {
    return post.title.toLowerCase().includes(query.toLowerCase()) || post.excerpt?.toLowerCase().includes(query.toLowerCase()) || post.tags?.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));
  });
  return filtered.slice(0, 5);
};
const findPostsByCategory = async (category) => {
  if (!category) return [];
  const posts = await fetchPosts();
  const filtered = posts.filter((post) => {
    return post.category?.toLowerCase() === category.toLowerCase();
  });
  return filtered.slice(0, 10);
};
const findLatestPosts = async ({
  count,
  offset = 0
}) => {
  const _count = count || 4;
  const posts = await fetchPosts();
  return posts ? posts.slice(offset, offset + _count) : [];
};
const getStaticPathsBlogList = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogListRouteEnabled) return [];
  return paginate(await fetchPosts(), {
    params: { blog: BLOG_BASE || void 0 },
    pageSize: blogPostsPerPage
  });
};
const getStaticPathsBlogPost = async () => {
  if (!isBlogEnabled || !isBlogPostRouteEnabled) return [];
  return (await fetchPosts()).flatMap((post) => ({
    params: {
      blog: post.permalink
    },
    props: { post }
  }));
};
const getStaticPathsBlogCategory = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogCategoryRouteEnabled) return [];
  const posts = await fetchPosts();
  const categories = /* @__PURE__ */ new Set();
  posts.map((post) => {
    typeof post.category === "string" && categories.add(post.category.toLowerCase());
  });
  return Array.from(categories).flatMap(
    (category) => paginate(
      posts.filter((post) => typeof post.category === "string" && category === post.category.toLowerCase()),
      {
        params: { category, blog: CATEGORY_BASE || void 0 },
        pageSize: blogPostsPerPage,
        props: { category }
      }
    )
  );
};
const getStaticPathsBlogTag = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogTagRouteEnabled) return [];
  const posts = await fetchPosts();
  const tags = /* @__PURE__ */ new Set();
  posts.map((post) => {
    Array.isArray(post.tags) && post.tags.map((tag) => tags.add(tag.toLowerCase()));
  });
  return Array.from(tags).flatMap(
    (tag) => paginate(
      posts.filter((post) => Array.isArray(post.tags) && post.tags.find((elem) => elem.toLowerCase() === tag)),
      {
        params: { tag, blog: TAG_BASE },
        pageSize: blogPostsPerPage,
        props: { tag }
      }
    )
  );
};

export { findPostsByQuery as a, findPostsByCategory as b, findLatestPosts as c, blogCategoryRobots as d, getStaticPathsBlogCategory as e, fetchPosts as f, getPostsLength as g, blogTagRobots as h, getStaticPathsBlogTag as i, blogListRobots as j, getStaticPathsBlogList as k, getPostsFromTags as l, blogPostRobots as m, getStaticPathsBlogPost as n };
