export function forgotPasswordEmailTemplate(
  email: string,
  resetUrl: string
) {
  return {
    subject: "Reset Your Password - Yadxy",
    html: `
<div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: auto; background: #ffffff; padding: 32px; border-radius: 12px; border: 1px solid #f2f2f2; color: #1a1a1a;">

  <!-- Logo / Title -->
  <div style="text-align: center; margin-bottom: 24px;">
    <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #F97216;">Yadxy</h1>
  </div>

  <!-- Greeting -->
  <h2 style="margin: 0 0 16px 0; font-size: 22px; font-weight: 600;">
    Hi ${email.split("@")[0]},
  </h2>

  <!-- Main Message -->
  <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
    We received a request to reset your <strong>Yadxy</strong> account password.
  </p>

  <p style="margin: 0 0 24px 0;">
    Click the button below to reset your password:
  </p>

  <!-- Button -->
  <div style="text-align: center; margin: 32px 0;">
    <a href="${resetUrl}"
       style="
         background: #F97216;
         color: #ffffff;
         padding: 12px 28px;
         border-radius: 6px;
         font-size: 16px;
         font-weight: 600;
         text-decoration: none;
         display: inline-block;">
      Reset Password
    </a>
  </div>

  <!-- Info -->
  <p style="margin: 0 0 24px 0;">
    This link expires in <strong>15 minutes</strong>.  
    If you didn’t request this, you can safely ignore this email.
  </p>

  <!-- Footer -->
  <p style="margin: 0 0 8px 0;">
    Keeping your account secure is our priority.
  </p>

  <p style="margin: 0 0 32px 0;">
    Warm regards,<br><strong>The Yadxy Team</strong>
  </p>

  <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;" />

  <p style="font-size: 12px; color: #888;">
    This email was sent to ${email}.  
    If you need help, reach out:
    <a href="mailto:team@yadxy.com" style="color: #F97216;">
      team@yadxy.com
    </a>
  </p>

</div>
`,
  };
}
