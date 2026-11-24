import type { APIRoute } from 'astro';
import { convertDataToHtml, sendEmail } from '~/utils/email';
import { verifyToken } from '~/utils/recaptcha';
import { CONTACT_LIMITS, CONTACT_RECAPTCHA_ACTION } from '~/utils/contact';

export const prerender = false;

const SUBJECT = 'Personal Website Feedback Form';

const json = (body: Record<string, string>, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' &&
  value !== null &&
  !Array.isArray(value) &&
  Object.getPrototypeOf(value) === Object.prototype;

/** Returns the form fields if every key and value is a string within the limits, else null. */
function validFields(data: unknown): Record<string, string> | null {
  if (!isPlainObject(data)) return null;
  const entries = Object.entries(data);
  if (entries.length === 0 || entries.length > CONTACT_LIMITS.fields) return null;

  for (const [key, value] of entries) {
    if (key.length === 0 || key.length > CONTACT_LIMITS.keyChars) return null;
    if (typeof value !== 'string' || value.length > CONTACT_LIMITS.valueChars) return null;
  }
  return data as Record<string, string>;
}

export const POST: APIRoute = async ({ request }) => {
  const declaredLength = Number(request.headers.get('content-length') ?? 0);
  if (declaredLength > CONTACT_LIMITS.bodyBytes) return json({ message: 'Message is too long.' }, 413);

  // content-length can be missing or wrong, so measure what actually arrived.
  const raw = await request.text();
  if (new TextEncoder().encode(raw).length > CONTACT_LIMITS.bodyBytes) {
    return json({ message: 'Message is too long.' }, 413);
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ message: 'Request body must be valid JSON.' }, 400);
  }
  if (!isPlainObject(body)) return json({ message: 'Invalid request.' }, 400);

  const fields = validFields(body.data);
  if (!fields) return json({ message: 'Some fields are missing or too long.' }, 400);

  // Unconditional: the route can be called without loading the form.
  const recaptchaResponse = await verifyToken(body.token, { expectedAction: CONTACT_RECAPTCHA_ACTION });
  if (!recaptchaResponse.ok) return recaptchaResponse;

  try {
    await sendEmail(SUBJECT, convertDataToHtml(fields));
  } catch (error) {
    console.error('Contact form email failed:', error);
    return json({ message: 'Could not send your message. Please try again later.' }, 500);
  }

  return json({ message: 'Message sent.' }, 200);
};
