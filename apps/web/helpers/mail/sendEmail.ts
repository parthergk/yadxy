import { transporter } from "./transporter";
import { registerEmailTemplate } from "./templates/register.template";
import { forgotPasswordEmailTemplate } from "./templates/forgotPassword.template";

type EmailType = "register" | "forgot-password";

interface SendEmailParams {
  type: EmailType;
  email: string;
  url: string;
}

export async function sendEmail({
  type,
  email,
  url,
}: SendEmailParams): Promise<{
  success: boolean;
  message?: string;
  error?: string;
  status: number;
}> {
  try {
    let template;

    if (type === "register") {
      template = registerEmailTemplate(email, url);
    }

    if (type === "forgot-password") {
      template = forgotPasswordEmailTemplate(email, url);
    }

    if (!template) {
      return {
        success: false,
        error: "Invalid email type",
        status: 400,
      };
    }

    await transporter.sendMail({
      from: process.env.BREVO_FROM,
      to: email,
      subject: template.subject,
      html: template.html,
    });

    return {
      success: true,
      message: "Email sent successfully",
      status: 201,
    };
  } catch (error) {
    console.error("Email error:", error);
    return {
      success: false,
      error: "Failed to send email",
      status: 500,
    };
  }
}
