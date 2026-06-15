import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, phone, email, collection, message } = await request.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Phone Number are required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.NOTIFICATION_EMAIL;

    if (!apiKey || !toEmail) {
      console.error("Missing Resend configuration: RESEND_API_KEY or NOTIFICATION_EMAIL is not set.");
      return NextResponse.json(
        { error: "Server email configuration is missing." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const emailContent = `
      <h2>New Customer Inquiry - Sri Lakshmi Jewellers</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone Number:</strong> ${phone}</p>
      <p><strong>Email Address:</strong> ${email || "Not Provided"}</p>
      <p><strong>Interested Collection:</strong> ${collection}</p>
      <p><strong>Message / Special Request:</strong></p>
      <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 10px; border-radius: 4px;">${message || "No message provided."}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: "Sri Lakshmi Jewellers <onboarding@resend.dev>", // default sender for Resend free/sandbox accounts, can be updated with custom domain
      to: toEmail,
      subject: `New Inquiry from ${name} - ${collection}`,
      html: emailContent,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Inquiry sent successfully!", id: data?.id },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Inquiry API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
