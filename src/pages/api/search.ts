import type { APIRoute } from 'astro';
import { findPostsByQuery } from '~/utils/blog';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  const query = data.query;
  if (!query) {
    return new Response(
      JSON.stringify({
        message: 'Missing query',
      }),
      { status: 400 }
    );
  }
  const allPosts = await findPostsByQuery(query);
  const total = allPosts.length;
  const posts = allPosts.slice(0, 4);
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      posts,
      total,
    }),
    { status: 200 }
  );
};
