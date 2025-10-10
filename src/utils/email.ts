import { Resend } from 'resend';

// Initialize Resend client
const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Default email configuration
const defaultTo = "jeremiah@chienda.com";
const defaultFrom = import.meta.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

// Send email via Resend
export async function sendEmail(
  subject: string,
  html: string,
  to: string = defaultTo,
  from: string = defaultFrom
) {
  if (!import.meta.env.RESEND_API_KEY) {
    throw new Error('Resend API key is not configured');
  }

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html
    });

    if (error) {
      throw error;
    }

    console.log(`Email sent successfully to ${to} with subject: ${subject}`);
    return data;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error(`Resend API Error: ${error.message || 'Unknown error'}`);
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
  const from = import.meta.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  if (!import.meta.env.RESEND_API_KEY) {
    throw new Error('Resend API key is not configured');
  }

  // Build welcome email HTML
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1>Welcome, ${name}!</h1>
      <p>Thank you for signing up for our newsletter.</p>
      <p>You're now subscribed to updates in the <strong>${category ? category.toUpperCase() : 'All'}</strong> category.</p>
      <p>We're excited to keep you informed with our latest content!</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
      <p style="color: #666; font-size: 14px;">If you have any questions, feel free to reach out.</p>
    </div>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: email,
      subject: `Welcome to our newsletter, ${name}!`,
      html
    });

    if (error) {
      throw error;
    }

    console.log(`Confirmation email sent to ${email}`);
    return data;
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    throw new Error(`Failed to send confirmation email: ${error.message || 'Unknown error'}`);
  }
}

export async function signupToNewsletter(email: string, name: string, category?: string) {
  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const audienceId = import.meta.env.RESEND_AUDIENCE_ID;

  if (!resendApiKey) {
    throw new Error('Resend API key is not configured');
  }

  try {
    // Add contact to Resend audience if audience ID is configured
    if (audienceId) {
      const response = await fetch('https://api.resend.com/audiences/' + audienceId + '/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          email,
          first_name: name,
          unsubscribed: false,
          data: category ? { category } : undefined
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Resend Audience API Error:', errorData);
        // Don't throw here - still send confirmation email even if audience add fails
        console.warn(`Could not add ${email} to Resend audience, but will still send confirmation`);
      } else {
        console.log(`Successfully added ${email} to Resend audience`);
      }
    }

    // Send confirmation email
    await sendConfirmationEmail(email, name, category);

    return { success: true, email, name };
  } catch (error) {
    console.error('Failed to signup to newsletter:', error);
    throw error;
  }
}
