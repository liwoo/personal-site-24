import {verifyToken} from "~/utils/recaptcha.ts";

async function signupToNewsletter(email: string, name: string, category?: string) {
  const sendgridAPIKey = import.meta.env.SENDGRID_KEY;
  const marketingContacts = "https://api.sendgrid.com/v3/marketing/contacts";
  const listId = import.meta.env.SENDGRID_CONTACT_LIST;
  const categoryId = import.meta.env.SENDGRID_CONTACT_CATEGORY;
  
  const contactData = {
    list_ids: [listId],
    contacts: [
      {
        email: email,
        first_name: name,
      }
    ]
  };
  
  if (category) {
    contactData.contacts[0]["custom_fields"] = {
      [categoryId]: category ?? "all"
    };
  }
  
  const response = await fetch(marketingContacts, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${sendgridAPIKey}`
    },
    body: JSON.stringify(contactData)
  });
  
  const responseData = await response.json();
  
  if (response.status < 200 || response.status > 299) {
    console.error({responseData: JSON.stringify(responseData)});
    throw new Error("Could not signup to newsletter");
  }
}
  

export async function POST({request}) {
  const data = await request.json();
  
  const token = data.token;
  const response = await verifyToken(token);
  
  if (response.status >= 200 && response.status < 300) {
    // signup!
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
