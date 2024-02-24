import {convertDataToHtml, sendEmail} from "~/utils/email.ts";
import {verifyToken} from "~/utils/recaptcha.ts";

export async function POST({request}) {
  const data = await request.json();

  const token = data.token;
  const response = await verifyToken(token);

  if (response.status >= 200 && response.status < 300) {
    try {
      const html = convertDataToHtml(data.data);
      await sendEmail("Personal Website Feedback Form", html)
    } catch (e) {
      return new Response(JSON.stringify({message: e.message}), {status: 500});
    }
  }
  return response;
}
