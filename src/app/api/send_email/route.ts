import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req: any) {
  const body = await req.json();
  // Send email using nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: body.email,
    to: "garouatayoub@gmail.com",
    subject: body.subject,
    html: body.message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);

    return NextResponse.json({
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({
      status: 401,
    });
  }
}
