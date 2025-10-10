import type { APIRoute } from 'astro';
import { verifyToken } from '~/utils/recaptcha';
import { signupToNewsletter } from '~/utils/email';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, name, token, category } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({
          message: 'Please provide a valid email address.',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Verify reCAPTCHA token
    if (token) {
      const recaptchaResponse = await verifyToken(token);

      if (recaptchaResponse.status < 200 || recaptchaResponse.status >= 300) {
        const errorData = await recaptchaResponse.json();
        return new Response(
          JSON.stringify({
            message: errorData.message || 'reCAPTCHA verification failed.',
          }),
          {
            status: recaptchaResponse.status,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
      }
    }

    // Sign up to newsletter using existing infrastructure
    await signupToNewsletter(email, name || 'Subscriber', category);

    return new Response(
      JSON.stringify({
        message: 'Successfully subscribed! Check your email for confirmation.',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return new Response(
      JSON.stringify({
        message: error.message || 'An error occurred. Please try again later.',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
