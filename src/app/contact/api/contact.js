// src/app/contact/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your receiving email
      subject: `Contact form submission from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
