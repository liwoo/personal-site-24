import { Resend } from 'resend';

async function verifyToken(token) {
  const recaptchaURL = "https://www.google.com/recaptcha/api/siteverify";
  const requestHeaders = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const requestBody = new URLSearchParams({
    secret: "6Lfc03YpAAAAAIlhNNGZ7rZS6I8j4NLXXUgl3--M",
    response: token
  });
  const response = await fetch(recaptchaURL, {
    method: "POST",
    headers: requestHeaders,
    body: requestBody.toString()
  });
  const responseData = await response.json();
  console.log("reCAPTCHA response:", responseData);
  if (response.status < 200 || response.status > 299) {
    console.error("reCAPTCHA API error:", responseData);
    return new Response(JSON.stringify(responseData), { status: response.status });
  }
  if (!responseData.success) {
    console.error("reCAPTCHA verification failed:", responseData["error-codes"]);
    return new Response(JSON.stringify({ message: "reCAPTCHA verification failed", errors: responseData["error-codes"] }), { status: 403 });
  }
  const score = responseData.score;
  if (!score && score !== 0) {
    console.error("No score from reCAPTCHA:", responseData);
    return new Response(JSON.stringify({ message: "No score from reCAPTCHA", data: responseData }), { status: 403 });
  }
  if (score < 0.8) {
    console.error(`reCAPTCHA score too low: ${score}`);
    return new Response(JSON.stringify({ message: "Verification failed", score }), { status: 403 });
  } else {
    console.log(`reCAPTCHA verification successful with score: ${score}`);
    return new Response(JSON.stringify({ message: "success" }), { status: 200 });
  }
}

const resend = new Resend("re_VMy4bnbm_P7Fsfq2CgzBDM8K4YM7bpQHo");
const defaultTo = "jeremiah@chienda.com";
const defaultFrom = "jeremiah@chienda.com";
async function sendEmail(subject, html, to = defaultTo, from = defaultFrom) {
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
    console.error("Failed to send email:", error);
    throw new Error(`Resend API Error: ${error.message || "Unknown error"}`);
  }
}
function convertDataToHtml(data) {
  let html = '<ul style="list-style-type: none; padding: 0;">';
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      html += `<li><strong>${key}:</strong> ${data[key]}</li>`;
    }
  }
  html += "</ul>";
  return html;
}
async function sendConfirmationEmail(email, name, category) {
  const from = "jeremiah@chienda.com";
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1>Welcome, ${name}!</h1>
      <p>Thank you for signing up for our newsletter.</p>
      <p>You're now subscribed to updates in the <strong>${category ? category.toUpperCase() : "All"}</strong> category.</p>
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
    console.error("Failed to send confirmation email:", error);
    throw new Error(`Failed to send confirmation email: ${error.message || "Unknown error"}`);
  }
}
async function signupToNewsletter(email, name, category) {
  const resendApiKey = "re_VMy4bnbm_P7Fsfq2CgzBDM8K4YM7bpQHo";
  const audienceId = "a27b9506-724c-471b-9b64-6464db7fc66c";
  try {
    if (audienceId) {
      const response = await fetch("https://api.resend.com/audiences/" + audienceId + "/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          email,
          first_name: name,
          unsubscribed: false,
          data: category ? { category } : void 0
        })
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Resend Audience API Error:", errorData);
        console.warn(`Could not add ${email} to Resend audience, but will still send confirmation`);
      } else {
        console.log(`Successfully added ${email} to Resend audience`);
      }
    }
    await sendConfirmationEmail(email, name, category);
    return { success: true, email, name };
  } catch (error) {
    console.error("Failed to signup to newsletter:", error);
    throw error;
  }
}

export { sendEmail as a, convertDataToHtml as c, signupToNewsletter as s, verifyToken as v };
