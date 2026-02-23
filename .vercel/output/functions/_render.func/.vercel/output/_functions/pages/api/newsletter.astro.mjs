import { v as verifyToken, s as signupToNewsletter } from '../../chunks/email_NR5aQnK6.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, name, token, category } = body;
    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({
          message: "Please provide a valid email address."
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    if (token) {
      const recaptchaResponse = await verifyToken(token);
      if (recaptchaResponse.status < 200 || recaptchaResponse.status >= 300) {
        const errorData = await recaptchaResponse.json();
        return new Response(
          JSON.stringify({
            message: errorData.message || "reCAPTCHA verification failed."
          }),
          {
            status: recaptchaResponse.status,
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
      }
    }
    await signupToNewsletter(email, name || "Subscriber", category);
    return new Response(
      JSON.stringify({
        message: "Successfully subscribed! Check your email for confirmation."
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return new Response(
      JSON.stringify({
        message: error.message || "An error occurred. Please try again later."
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
