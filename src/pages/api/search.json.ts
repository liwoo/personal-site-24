import type { APIRoute } from 'astro';
import { findPostsByCategory, findPostsByQuery } from '~/utils/blog';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  const query = data.query;
  const postType = data.postType;
  if (!query || !postType) {
    return new Response(
      JSON.stringify({
        message: 'Missing query',
      }),
      { status: 400 }
    );
  }
  const allPosts = postType === 'Search' ? await findPostsByQuery(query) : await findPostsByCategory(query);
  const total = allPosts.length;
  const posts = allPosts.slice(0, 5);
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      posts,
      total,
    }),
    { status: 200 }
  );
};
