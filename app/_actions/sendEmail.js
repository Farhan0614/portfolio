"use server";

import { Resend } from "resend";
import { personalInfo } from "../_data/portfolioData";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return { error: "All fields are required." };
  }

  try {
    await resend.emails.send({
      // Resend allows you to use this specific email for testing on the free tier
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: personalInfo.email, // This sends to the email in your data file
      subject: `New Portfolio Message from ${name}`,
      reply_to: email, // This allows you to hit "Reply" in your inbox!
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Failed to send email. Please try again later." };
  }
}
