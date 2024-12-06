"use client";

// components/ContactForm.js
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        alert("Thanks for reaching out!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center flex-col w-full"
    >
      <h2 className="font-bold text-2xl text-slate-400 py-4 w-full">
        Leave me a message
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className="flex items-center justify-center gap-5 flex-col p-4">
          <div className="w-full">
            <label htmlFor="name" className="sr-only">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="p-2 w-full rounded-lg"
              name="name"
              placeholder="Enter your name..."
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="sr-only">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="p-2 w-full rounded-lg"
              name="email"
              placeholder="Enter your email..."
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center md:justify-start p-4">
          <label htmlFor="message" className="sr-only">
            Message:
          </label>
          <textarea
            id="message"
            className="border border-slate-400 p-4 rounded-lg bg-slate-100 w-full text-black"
            rows={5}
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            className="px-4 py-2 bg-slate-400 rounded-lg hover:bg-slate-100 hover:text-black font-bold"
            type="submit"
            title="submit"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
