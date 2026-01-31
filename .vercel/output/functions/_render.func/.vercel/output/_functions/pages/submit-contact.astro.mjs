import { v as verifyToken, c as convertDataToHtml, a as sendEmail } from '../chunks/email_NR5aQnK6.mjs';
export { renderers } from '../renderers.mjs';

async function POST({ request }) {
  const data = await request.json();
  const token = data.token;
  const response = await verifyToken(token);
  if (response.status >= 200 && response.status < 300) {
    try {
      const html = convertDataToHtml(data.data);
      await sendEmail("Personal Website Feedback Form", html);
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
