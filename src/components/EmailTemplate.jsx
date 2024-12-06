import React from "react";

export const EmailTemplate = ({ name, email, message }) => (
  <div>
    <h1 className="font-bold py-6 text-2xl tracking-tight">
      Contact Form Submission
    </h1>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Message:</strong> {message}
    </p>
  </div>
);
