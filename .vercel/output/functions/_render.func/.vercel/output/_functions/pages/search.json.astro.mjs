import { a as findPostsByQuery, b as findPostsByCategory } from '../chunks/blog_BHuyx2VL.mjs';
export { renderers } from '../renderers.mjs';

const POST = async ({ request }) => {
  const data = await request.json();
  const query = data.query;
  const postType = data.postType;
  if (!query || !postType) {
    return new Response(
      JSON.stringify({
        message: "Missing query"
      }),
      { status: 400 }
    );
  }
  const allPosts = postType === "Search" ? await findPostsByQuery(query) : await findPostsByCategory(query);
  const total = allPosts.length;
  const posts = allPosts.slice(0, 5);
  return new Response(
    JSON.stringify({
      posts,
      total
    }),
    { status: 200 }
  );
};
const GET = async ({ request }) => {
  console.log(request);
  const queryParam = new URL(request.url).searchParams;
  const query = queryParam.get("query");
  const postType = queryParam.get("postType");
  if (!query || !postType) {
    return new Response(
      JSON.stringify({
        message: "Missing query"
      }),
      { status: 400 }
    );
  }
  const allPosts = postType === "Search" ? await findPostsByQuery(query) : await findPostsByCategory(query);
  const total = allPosts.length;
  const posts = allPosts.slice(0, 5);
  return new Response(
    JSON.stringify({
      posts,
      total
    }),
    { status: 200 }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
