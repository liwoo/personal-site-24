export async function verifyToken(token: string): Promise<Response> {
  const recaptchaURL = 'https://www.google.com/recaptcha/api/siteverify';
  const requestHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  const requestBody = new URLSearchParams({
    secret: import.meta.env.RECAPTCHA_SERVER_KEY,
    response: token
  });

  const response = await fetch(recaptchaURL, {
    method: "POST",
    headers: requestHeaders,
    body: requestBody.toString()
  });

  const responseData = await response.json();
  console.log('reCAPTCHA response:', responseData);

  if (response.status < 200 || response.status > 299) {
    console.error('reCAPTCHA API error:', responseData);
    return new Response(JSON.stringify(responseData), {status: response.status});
  }

  if (!responseData.success) {
    console.error('reCAPTCHA verification failed:', responseData['error-codes']);
    return new Response(JSON.stringify({message: "reCAPTCHA verification failed", errors: responseData['error-codes']}), {status: 403});
  }

  const score = responseData.score;

  if (!score && score !== 0) {
    console.error('No score from reCAPTCHA:', responseData);
    return new Response(JSON.stringify({message: "No score from reCAPTCHA", data: responseData}), {status: 403});
  }

  if (score < 0.8) {
    console.error(`reCAPTCHA score too low: ${score}`);
    return new Response(JSON.stringify({message: "Verification failed", score}), {status: 403});
  } else {
    console.log(`reCAPTCHA verification successful with score: ${score}`);
    return new Response(JSON.stringify({message: "success"}), {status: 200});
  }
}
