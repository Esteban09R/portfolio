"use server";
import { Resend } from "resend";
import { PRIVATE_PROFILE } from "@/constants/private-profile";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const fromEmail = PRIVATE_PROFILE.fromEmail;

  try {
    const { data, error } = await resend.emails.send({
      from: `Contacto <${fromEmail}>`,
      to: [email],
      subject: `Hola ${name}, he recibido tu mensaje`,
      replyTo: fromEmail,
      html: `
        <div style="background-color: #180e0d; color: #f0dedc; font-family: sans-serif; padding: 40px; border-radius: 20px; max-width: 600px; margin: auto; border: 1px solid rgba(231, 60, 41, 0.1);">
          <h1 style="color: #e73c29; font-size: 24px; margin-bottom: 20px;">Hola ${name},</h1>
          <p style="font-size: 16px; line-height: 1.6; opacity: 0.9;">
            Gracias por ponerte en contacto conmigo. He recibido tu mensaje correctamente y te responderé lo antes posible.
          </p>
          <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 12px; margin: 30px 0; border-left: 4px solid #e73c29;">
            <p style="margin: 0; font-style: italic; opacity: 0.8;">"${message}"</p>
          </div>
          <p style="font-size: 14px; opacity: 0.6; margin-top: 40px;">
            Atentamente,<br />
            <strong>Esteban Rolón</strong><br />
            <a href="https://portfolio.reidan.dev" style="color: #e73c29; text-decoration: none;">portfolio.reidan.dev</a>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Submission error:", err);
    return { success: false, error: err };
  }
}
