import { v as verifyToken, s as signupToNewsletter } from '../chunks/email_NR5aQnK6.mjs';
export { renderers } from '../renderers.mjs';

async function POST({ request }) {
  const data = await request.json();
  const token = data.token;
  const response = await verifyToken(token);
  if (response.status >= 200 && response.status < 300) {
    const email = data.email;
    const category = data.category;
    const name = data.name;
    try {
      await signupToNewsletter(email, name, category);
    } catch (e) {
      return new Response(JSON.stringify({ message: e.message }), { status: 500 });
    }
  }
  return response;
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
