// api/send-email.ts

import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  console.log(req.method)
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }
  console.log("here")
  const { email, subject, message } = req.body;

  console.log(email)
  // Send email using nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "onlineayga@gmail.com",
      pass: "fdclxibwhaprqkem",
    },
  });

  const mailOptions = {
    from: email,
    to: "garouatayoub@gmail.com",
    subject: subject,
    html: "<p>sddd</p>",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    res.status(200).json({ success: true }); // Return a JSON response
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Email sending failed" }); // Return a JSON response
  }
}

