import {convertDataToHtml, sendEmail} from "~/utils/email.ts";

export async function POST({request}) {
  const data = await request.json();

  const recaptchaURL = 'https://www.google.com/recaptcha/api/siteverify';
  const requestHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  const requestBody = new URLSearchParams({
    secret: import.meta.env.RECAPTCHA_SERVER_KEY,   
    response: data.token         
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

  if (score > 0.8) {
    const html = convertDataToHtml(data.data);
    await sendEmail("Personal Website Feedback Form", html)
    return new Response(JSON.stringify({message: "success"}), {status: 200});
  }
  else {
    console.error({score})
    return new Response(JSON.stringify({message: "error"}), {status: 403});
  }
}
