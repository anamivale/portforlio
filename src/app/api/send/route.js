import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log("Email received:", { email, subject, message });

  // Check if environment variables are set
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
    console.log("Resend not configured. Email logged to console only.");
    return NextResponse.json({
      success: true,
      message: "Email logged to console (Resend not configured)"
    });
  }

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['muhembelev@gmail.com'],
      subject: `Portfolio Contact: ${subject}`,
      react: (
        <>
          <h1>Portfolio site</h1>
          <p><strong>From:</strong> {email}</p>
          <p><strong>Subject:</strong> {subject}</p>
          <p><strong>Message:</strong></p>
          <p>{message}</p>
        </>
      ),
    });
    console.log("✅ Email sent successfully:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ Email send error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
