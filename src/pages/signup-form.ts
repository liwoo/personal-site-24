import {verifyToken} from "~/utils/recaptcha.ts";
import {signupToNewsletter} from "~/utils/email.ts";


  

export async function POST({request}) {
  const data = await request.json();
  
  const token = data.token;
  const response = await verifyToken(token);
  
  if (response.status >= 200 && response.status < 300) {
    const email = data.email;
    const category = data.category;
    const name = data.name;
    try {
      await signupToNewsletter(email, name, category);
    } catch (e) {
      return new Response(JSON.stringify({message: e.message}), {status: 500});
    }
  } 
  
  return response;
}
