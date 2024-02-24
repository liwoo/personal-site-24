import sgMail from '@sendgrid/mail';

// Set your SendGrid API key
sgMail.setApiKey(import.meta.env.SENDGRID_KEY);

// Define your email details
const to = "jeremiah@chienda.com";
const from = import.meta.env.VERIFIED_SENDGRID_SENDER

// Async function to send the email
export async function sendEmail(subject: string, html: string) {
  try {
    await sgMail.send({
      to,
      from,
      subject,
      html
    });
    console.log(`Email with subject ${subject} sent successfully!`);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
}

export function convertDataToHtml(data: Record<string, string>): string {
  let html = '<ul style="list-style-type: none; padding: 0;">';

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      html += `<li><strong>${key}:</strong> ${data[key]}</li>`;
    }
  }

  html += '</ul>';
  return html;
}


export async function sendConfirmationEmail(email: string, name: string, category?: string) {
  const templateId = import.meta.env.SENDGRID_WELCOME_TEMPLATE_ID;
  const dynamicTemplateData = {
    name,
    category: category ? category.toUpperCase() : "All"
  };
  
  const msg = {
    to: email,
    from: import.meta.env.VERIFIED_SENDGRID_SENDER,
    templateId,
    dynamicTemplateData
  };
  
  try {
    await sgMail.send(msg);
    console.log(`Confirmation email sent to ${email}`);
  } catch (error) {
    console.error(error);
  }
}

export async function signupToNewsletter(email: string, name: string, category?: string) {
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

  await sendConfirmationEmail(email, name, category);
}
