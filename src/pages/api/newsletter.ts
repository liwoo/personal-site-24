import type { APIRoute } from 'astro';
import { verifyToken } from '~/utils/recaptcha';
import { signupToNewsletter } from '~/utils/email';
import { NEWSLETTER_RECAPTCHA_ACTION } from '~/utils/newsletter';

export const prerender = false;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const categoryPattern = /^[a-z0-9][a-z0-9 -]*$/;

const json = (body: Record<string, string>, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const POST: APIRoute = async ({ request }) => {
  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > 8_192) return json({ message: 'Request is too large.' }, 413);

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ message: 'Request body must be valid JSON.' }, 400);
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const category = typeof body.category === 'string' ? body.category.trim().toLowerCase() : undefined;

  if (!emailPattern.test(email) || email.length > 254) {
    return json({ message: 'Please provide a valid email address.' }, 400);
  }
  if (name.length > 100) return json({ message: 'Name is too long.' }, 400);
  if (category && (category.length > 50 || !categoryPattern.test(category))) {
    return json({ message: 'Invalid newsletter category.' }, 400);
  }

  // This must be unconditional: callers can invoke this route without loading
  // the form, so client-side CAPTCHA alone is not a security boundary.
  const recaptchaResponse = await verifyToken(body.token, {
    expectedAction: NEWSLETTER_RECAPTCHA_ACTION,
  });

  if (!recaptchaResponse.ok) return recaptchaResponse;

  try {
    await signupToNewsletter(email, name || 'Subscriber', category);
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return json({ message: 'An error occurred. Please try again later.' }, 500);
  }

  return json({ message: 'Successfully subscribed! Check your email for confirmation.' }, 200);
};
