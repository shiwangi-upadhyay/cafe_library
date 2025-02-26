import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request) {
  const body = await request.body();
  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      // add senders gmail to the .env file as NODE_USER
      user: process.env.NODE_USER,
      // Create an app on your gmail and add generated pass to the .env file as NODE_PASS
      pass: process.env.NODE_PASS,
    },
  });
  const mailOptions = {
    from: { name: "Cafe Library", address: process.env.NODE_USER },
    to: "singhyash9009670@gmail.com",
    subject: `response`,
    // add your domain to .env file as DOMAIN
    html: `<p>${body} </p>`,
  };
  const mailResponse = await transport.sendMail(mailOptions);
  return NextResponse.json({ success: true, message: mailResponse });
}
