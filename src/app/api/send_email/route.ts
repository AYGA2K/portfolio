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
    from: body.email,
    to: "garouatayoub@gmail.com",
    subject: body.subject,
    html: `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    background-color: #f5f5f5;
                }
                .email-container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #fff;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                .sender {
                    font-weight: bold;
                }
                .message {
                    margin-top: 10px;
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <p class="sender">Sender: ${body.email}</p>
                <p class="message">Message: ${body.message}</p>
            </div>
        </body>
        </html>
    `,
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
