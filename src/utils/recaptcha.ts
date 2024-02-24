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

  if (response.status < 200 || response.status > 299) {
    console.log({responseData});
    return new Response(JSON.stringify(responseData), {status: response.status});
  }

  const score = responseData.score;

  if (!score) {
    console.error({message: "Could not find a Score from Recaptach"})
    return new Response(JSON.stringify(responseData), {status: 403});
  }
  
  if (score < 0.8) {
    console.error({score})
    return new Response(JSON.stringify({message: "error"}), {status: 403});
  } else {
    return new Response(JSON.stringify({message: "success"}), {status: 200});
  }
}
