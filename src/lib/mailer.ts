import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "mail.orgnlfake.agency",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // STARTTLS on port 587
  auth: {
    user: process.env.SMTP_USER || "mailadmin",
    pass: process.env.SMTP_PASS || "Orgnlfake2026",
  },
  tls: {
    rejectUnauthorized: false, // Accept self-signed certs during initial setup
  },
});

interface SendMailOptions {
  from?: string;
  to: string | string[];
  replyTo?: string;
  subject: string;
  html: string;
}

export async function sendMail({ from, to, replyTo, subject, html }: SendMailOptions) {
  const defaultFrom = `ORGNLFAKE <${process.env.SMTP_FROM || "admin@orgnlfake.agency"}>`;

  try {
    const info = await transporter.sendMail({
      from: from || defaultFrom,
      to: Array.isArray(to) ? to.join(", ") : to,
      ...(replyTo && { replyTo }),
      subject,
      html,
    });
    console.log("Email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}
