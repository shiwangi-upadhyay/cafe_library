import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {formType, email, subject, message, name, contact, bookType, price, location } = await req.json();

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service (Gmail, SMTP, etc.)
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    let mailOptions;

    if(formType  === "contact"){
      mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Your email
        subject: `Contact Form: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };
    } else if (formType === "listBook") {
      // List Book Form Email
      mailOptions = {
        from: email, // Sender email
        to: "process.env.EMAIL_USER", // Admin email
        subject: "New Book Listing Submission",
        text: `
          New book listing submission:
          Name: ${name}
          Contact: ${contact}
          Book Type: ${bookType}
          ${bookType === "Sell" ? `Price: ${price}` : ""}
          Location: ${location}
        `,
      };
    } else {
      return new Response(JSON.stringify({ error: "Invalid form type" }), {
        status: 400,
      });
    }

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
