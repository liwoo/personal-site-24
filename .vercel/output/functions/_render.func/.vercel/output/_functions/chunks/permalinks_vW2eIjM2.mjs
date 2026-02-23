import slugify from 'limax';
import merge from 'lodash.merge';

const site = {
	name: "Jeremiah Chienda",
	site: "https://chienda.com",
	base: "/",
	trailingSlash: false,
	googleSiteVerificationId: "orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M"
};
const metadata = {
	title: {
		"default": "Jeremiah Chienda — AI Engineer | Agents, RAG & LLM Systems",
		template: "%s — Jeremiah Chienda"
	},
	description: "Jeremiah Chienda is an AI Engineer building production agent systems, RAG pipelines, and LLM-powered products. Currently AI Engineering Lead at Irembo.",
	robots: {
		index: true,
		follow: true
	},
	openGraph: {
		site_name: "Jeremiah Chienda",
		images: [
			{
				url: "~/assets/images/default.png",
				width: 1200,
				height: 628
			}
		],
		type: "website"
	},
	twitter: {
		handle: "@li_woo",
		site: "@li_woo",
		cardType: "summary_large_image"
	}
};
const i18n = {
	language: "en",
	textDirection: "ltr"
};
const apps = {
	blog: {
		isEnabled: true,
		postsPerPage: 6,
		post: {
			isEnabled: true,
			permalink: "/%slug%",
			robots: {
				index: true,
				follow: true
			}
		},
		list: {
			isEnabled: true,
			pathname: "blog",
			robots: {
				index: true,
				follow: true
			}
		},
		category: {
			isEnabled: true,
			pathname: "category",
			robots: {
				index: true,
				follow: true
			}
		},
		tag: {
			isEnabled: true,
			pathname: "tag",
			robots: {
				index: false,
				follow: false
			}
		}
	}
};
const analytics = {
	vendors: {
		googleAnalytics: {
			id: null
		}
	}
};
const ui = {
	theme: "system",
	tokens: {
		"default": {
			fonts: {
				sans: "Raleway",
				serif: "var(--ph-font-sans)",
				heading: "var(--ph-font-sans)"
			},
			colors: {
				"default": "rgb(16 16 16)",
				heading: "rgb(0 0 0)",
				muted: "rgb(40 40 40)",
				bgPage: "rgb(255 255 255)",
				primary: "rgb(0 124 220)",
				secondary: "rgb(30 58 138)",
				accent: "rgb(109 40 217)",
				info: "rgb(119 182 234)",
				success: "rgb(54 211 153)",
				warning: "rgb(251 189 35)",
				error: "rgb(248 114 114)",
				link: "var(--ph-color-primary)",
				linkActive: "var(--ph-color-link)"
			}
		},
		dark: {
			fonts: {
			},
			colors: {
				"default": "rgb(23, 23, 23)",
				heading: "rgb(247, 248, 248)",
				muted: "rgb(200, 188, 208)",
				bgPage: "rgb(23 23 23)",
				primary: "rgb(29 78 216)",
				secondary: "rgb(30 58 138)",
				accent: "rgb(135 77 2267)",
				info: "rgb(58 191 248)",
				success: "rgb(54 211 153)",
				warning: "rgb(251 189 35)",
				error: "rgb(248 114 114)",
				link: "var(--ph-color-primary)",
				linkActive: "var(--ph-color-link)"
			}
		}
	}
};
const configPath = {
	site: site,
	metadata: metadata,
	i18n: i18n,
	apps: apps,
	analytics: analytics,
	ui: ui
};

const config = configPath;
const DEFAULT_SITE_NAME = "Chienda";
const getSite = () => {
  const _default = {
    name: DEFAULT_SITE_NAME,
    site: void 0,
    base: "/",
    trailingSlash: false,
    googleSiteVerificationId: ""
  };
  return merge({}, _default, config?.site ?? {});
};
const getMetadata = () => {
  const siteConfig = getSite();
  const _default = {
    title: {
      default: siteConfig?.name || DEFAULT_SITE_NAME,
      template: "%s"
    },
    description: "",
    robots: {
      index: false,
      follow: false
    },
    openGraph: {
      type: "website"
    }
  };
  return merge({}, _default, config?.metadata ?? {});
};
const getI18N = () => {
  const _default = {
    language: "en",
    textDirection: "ltr"
  };
  const value = merge({}, _default, config?.i18n ?? {});
  return Object.assign(value, {
    dateFormatter: new Intl.DateTimeFormat(value.language, {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC"
    })
  });
};
const getAppBlog = () => {
  const _default = {
    isEnabled: false,
    postsPerPage: 6,
    post: {
      isEnabled: true,
      permalink: "/blog/%slug%",
      robots: {
        index: true,
        follow: true
      }
    },
    list: {
      isEnabled: true,
      pathname: "blog",
      robots: {
        index: true,
        follow: true
      }
    },
    category: {
      isEnabled: true,
      pathname: "category",
      robots: {
        index: true,
        follow: true
      }
    },
    tag: {
      isEnabled: true,
      pathname: "tag",
      robots: {
        index: false,
        follow: true
      }
    }
  };
  return merge({}, _default, config?.apps?.blog ?? {});
};
const getUI = () => {
  const _default = {
    theme: "system",
    classes: {},
    tokens: {}
  };
  return merge({}, _default, config?.ui ?? {});
};
const getAnalytics = () => {
  const _default = {
    vendors: {
      googleAnalytics: {
        id: void 0,
        partytown: true
      }
    }
  };
  return merge({}, _default, config?.analytics ?? {});
};
const SITE = getSite();
const I18N = getI18N();
const METADATA = getMetadata();
const APP_BLOG = getAppBlog();
const UI = getUI();
const ANALYTICS = getAnalytics();

const formatter = I18N?.dateFormatter || new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC"
});
const getFormattedDate = (date) => date ? formatter.format(date) : "";
const trim = (str = "", ch) => {
  let start = 0, end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};

const trimSlash = (s) => trim(trim(s, "/"));
const createPath = (...params) => {
  const paths = params.map((el) => trimSlash(el)).filter((el) => !!el).join("/");
  return "/" + paths + (SITE.trailingSlash && paths ? "/" : "");
};
const BASE_PATHNAME = SITE.base || "/";
const cleanSlug = (text = "") => trimSlash(text).split("/").map((slug) => slugify(slug)).join("/");
const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
const CATEGORY_BASE = cleanSlug(APP_BLOG?.category?.pathname);
const TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || "tag";
const POST_PERMALINK_PATTERN = trimSlash(APP_BLOG?.post?.permalink || `${BLOG_BASE}/%slug%`);
const getCanonical = (path = "") => {
  const url = String(new URL(path, SITE.site));
  if (SITE.trailingSlash == false && path && url.endsWith("/")) {
    return url.slice(0, -1);
  } else if (SITE.trailingSlash == true && path && !url.endsWith("/")) {
    return url + "/";
  }
  return url;
};
const getPermalink = (slug = "", type = "page") => {
  let permalink;
  switch (type) {
    case "category":
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;
    case "tag":
      permalink = createPath(TAG_BASE, trimSlash(slug));
      break;
    case "post":
      permalink = createPath(trimSlash(slug));
      break;
    case "page":
    default:
      permalink = createPath(slug);
      break;
  }
  return definitivePermalink(permalink);
};
const getHomePermalink = () => getPermalink("/");
const getBlogPermalink = () => getPermalink(BLOG_BASE);
const getAsset = (path) => "/" + [BASE_PATHNAME, path].map((el) => trimSlash(el)).filter((el) => !!el).join("/");
const definitivePermalink = (permalink) => createPath(BASE_PATHNAME, permalink);

export { APP_BLOG as A, BLOG_BASE as B, CATEGORY_BASE as C, I18N as I, METADATA as M, POST_PERMALINK_PATTERN as P, SITE as S, TAG_BASE as T, UI as U, getBlogPermalink as a, getFormattedDate as b, getHomePermalink as c, cleanSlug as d, getCanonical as e, getAsset as f, getPermalink as g, ANALYTICS as h, trimSlash as t };
