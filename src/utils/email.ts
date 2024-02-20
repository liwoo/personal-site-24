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
