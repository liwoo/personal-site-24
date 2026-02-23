import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderTemplate, r as renderComponent } from '../../chunks/astro/server_Q924hkwF.mjs';
import 'kleur/colors';
import { L as ListItem } from '../../chunks/ListItem_Bv3lpb9x.mjs';
import { $ as $$Pagination } from '../../chunks/Pagination_B-yqc8lR.mjs';
import { a as findPostsByQuery, b as findPostsByCategory, g as getPostsLength, c as findLatestPosts } from '../../chunks/blog_BHuyx2VL.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://chienda.com");
const partial = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const params = Astro2.url.searchParams;
  const q = params.get("q");
  const c = params.get("c");
  let posts = [];
  let postCount = 6;
  const isSearch = q !== null && q !== "";
  const isCategory = c !== null && c !== "";
  if (isSearch) {
    postCount = 5;
    posts = await findPostsByQuery(q);
  } else if (isCategory) {
    posts = await findPostsByCategory(c);
  } else {
    postCount = await getPostsLength();
    posts = await findLatestPosts({ count: postCount, offset: 0 });
  }
  return renderTemplate`${isSearch && posts.length > 0 && renderTemplate`${maybeRenderHead()}<div>
Search Results for <span class="text-default italic">"${q}"</span>${" - "}(${posts.length})
</div>`}${isCategory && posts.length > 0 && renderTemplate`<div>
Latest from Category: <span class="text-default font-bold">${c.toLocaleUpperCase()}</span></div>`}${posts.length > 0 ? renderTemplate`<div class="flex flex-col">${posts.map((post) => renderTemplate`${renderComponent($$result, "ListItem", ListItem, { "post": post, "extended": true })}`)}</div>` : renderTemplate`<div class="flex flex-col justify-center items-center my-8 gap-y-2"><p class="text-6xl">📭</p><p class="text-lg text-muted">
No results found for ${isCategory ? c.toLocaleUpperCase() : `Search Results :"${q}"`}</p></div>`}${postCount > 6 && renderTemplate`${renderComponent($$result, "Pagination", $$Pagination, { "nextUrl": "/blog/2" })}`}`;
}, "/Users/liwu/Projects/websites/personal-24/src/pages/[...blog]/search/index.astro", void 0);

const $$file = "/Users/liwu/Projects/websites/personal-24/src/pages/[...blog]/search/index.astro";
const $$url = "/[...blog]/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  partial,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
