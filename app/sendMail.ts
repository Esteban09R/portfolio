"use server";
import { Resend } from "resend";
import { PRIVATE_PROFILE } from "@/constants/private-profile";

export async function sendEmail(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is missing in production environment");
    return {
      success: false,
      error: "RESEND_API_KEY is missing in production environment (check Secrets)",
    };
  }

  const resend = new Resend(apiKey);
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const ownerEmail = PRIVATE_PROFILE.email;
  const fromEmail = PRIVATE_PROFILE.fromEmail;

  if (!ownerEmail || !fromEmail) {
    console.error("Email configuration missing (EMAIL or FROM_EMAIL)");
    return { success: false, error: `Email config missing. ownerEmail: ${!!ownerEmail}, fromEmail: ${!!fromEmail}` };
  }

  try {
    // 1. Send notification to the owner (Esteban)
    // This is the most important part!
    const { error: ownerError } = await resend.emails.send({
      from: `Contacto Portfolio <${fromEmail}>`,
      to: [ownerEmail],
      subject: `Nuevo mensaje de ${name}`,
      replyTo: email,
      html: `
        <div style="background-color: #180e0d; color: #f0dedc; font-family: sans-serif; padding: 40px; border-radius: 20px; max-width: 600px; margin: auto; border: 1px solid rgba(231, 60, 41, 0.1);">
          <h1 style="color: #e73c29; font-size: 24px; margin-bottom: 20px;">Nuevo mensaje de contacto</h1>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 12px; margin: 30px 0; border-left: 4px solid #e73c29;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    if (ownerError) {
      console.error("Resend owner notification error:", ownerError);
      return { success: false, error: `Failed to deliver message: ${ownerError.message || JSON.stringify(ownerError)}` };
    }

    // 2. Send confirmation to the user (optional, might fail if domain not verified)
    try {
      await resend.emails.send({
        from: `Esteban Rolón <${fromEmail}>`,
        to: [email],
        subject: `Hola ${name}, he recibido tu mensaje`,
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
    } catch (confError) {
      // We don't return error here because the owner already got the notification
      console.warn("User confirmation email failed:", confError);
    }

    return { success: true };
  } catch (err: any) {
    console.error("Submission error:", err);
    // Return only serializable data
    return {
      success: false,
      error: `Exception: ${typeof err === "string" ? err : err.message || "Unknown error"}`,
    };
  }
}
