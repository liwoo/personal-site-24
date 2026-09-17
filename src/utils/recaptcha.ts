type VerifyTokenOptions = {
  expectedAction?: string;
};

type RecaptchaVerification = {
  success?: boolean;
  score?: number;
  action?: string;
  hostname?: string;
  ['error-codes']?: string[];
};

const jsonResponse = (body: Record<string, unknown>, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

function allowedHostnames(): Set<string> {
  const configured = import.meta.env.RECAPTCHA_ALLOWED_HOSTNAMES;
  const hosts = configured
    ? configured.split(',')
    : ['chienda.com', 'www.chienda.com'];

  if (import.meta.env.DEV) hosts.push('localhost', '127.0.0.1');

  return new Set(hosts.map((host) => host.trim().toLowerCase()).filter(Boolean));
}

/** Verifies one reCAPTCHA v3 token without logging its sensitive value. */
export async function verifyToken(token: unknown, options: VerifyTokenOptions = {}): Promise<Response> {
  if (typeof token !== 'string' || token.trim().length === 0) {
    return jsonResponse({ message: 'reCAPTCHA token is required.' }, 403);
  }

  const secret = import.meta.env.RECAPTCHA_SERVER_KEY;
  if (!secret) {
    console.error('reCAPTCHA server key is not configured.');
    return jsonResponse({ message: 'Verification is temporarily unavailable.' }, 503);
  }

  let response: Response;
  try {
    response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token.trim() }).toString(),
    });
  } catch (error) {
    console.error('reCAPTCHA verification request failed:', error);
    return jsonResponse({ message: 'Verification is temporarily unavailable.' }, 503);
  }

  let result: RecaptchaVerification;
  try {
    result = (await response.json()) as RecaptchaVerification;
  } catch {
    console.error('reCAPTCHA returned an invalid response.');
    return jsonResponse({ message: 'Verification is temporarily unavailable.' }, 503);
  }

  if (!response.ok) {
    console.error('reCAPTCHA API error:', response.status);
    return jsonResponse({ message: 'Verification is temporarily unavailable.' }, 503);
  }

  if (!result.success) {
    console.warn('reCAPTCHA verification rejected a token:', result['error-codes']);
    return jsonResponse({ message: 'reCAPTCHA verification failed.' }, 403);
  }

  if (typeof result.score !== 'number' || result.score < 0.8) {
    console.warn('reCAPTCHA score below threshold:', result.score);
    return jsonResponse({ message: 'Verification failed.' }, 403);
  }

  if (options.expectedAction && result.action !== options.expectedAction) {
    console.warn('reCAPTCHA action did not match the protected operation:', result.action);
    return jsonResponse({ message: 'Verification failed.' }, 403);
  }

  const hostname = result.hostname?.toLowerCase();
  if (!hostname || !allowedHostnames().has(hostname)) {
    console.warn('reCAPTCHA token came from an unapproved hostname:', hostname);
    return jsonResponse({ message: 'Verification failed.' }, 403);
  }

  return jsonResponse({ message: 'success' }, 200);
}
