import { getRssString } from '@astrojs/rss';
import { A as APP_BLOG, S as SITE, M as METADATA, g as getPermalink } from '../chunks/permalinks_vW2eIjM2.mjs';
import { f as fetchPosts } from '../chunks/blog_BHuyx2VL.mjs';
export { renderers } from '../renderers.mjs';

const GET = async () => {
  if (!APP_BLOG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  const posts = await fetchPosts();
  const rss = await getRssString({
    title: `${SITE.name}’s Blog`,
    description: METADATA?.description || "",
    site: "https://chienda.com",
    items: posts.map((post) => ({
      link: getPermalink(post.permalink, "post"),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate
    })),
    trailingSlash: SITE.trailingSlash
  });
  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
