// // src/app/contact/api/contact.js
// import { NextResponse } from "next/server";
// import { Resend } from "resend";
// import { EmailTemplate } from "@/components/EmailTemplate";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export const POST = async (req) => {
//   const { name, email, message } = await req.json();

//   try {
//     const data = await resend.emails.send({
//       from: `Robbie <robertncube694@gmail.com>`,
//       to: "robertncube694@gmail.com", // Your email
//       subject: "New Contact Form Submission",
//       react: EmailTemplate({ name, email, message }), // Pass form data to the email template
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// };
