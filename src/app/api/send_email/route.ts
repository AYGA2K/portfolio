import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req: any) {
  const body = await req.json();
  // Send email using nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
      user: "apikey",
      pass: process.env.KEY,
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });
  const mailOptions = {
    from: "garouatayoub@gmail.com",
    to: "garouatayoub@gmail.com",
    subject: body.subject,
    html: body.message,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  return NextResponse.json({
    status: 200,
  });
}
