"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setStatus({ message: "", type: "" }); // Reset status on input
  };

  const validateForm = () => {
    let newErrors = { firstName: "", lastName: "", email: "" };
    if (!formData.firstName) newErrors.firstName = "Enter a first name.";
    if (!formData.lastName) newErrors.lastName = "Enter a last name.";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Enter a valid email address.";

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (form.current) {
      emailjs.sendForm("service_cvwwc8c", "template_jnu6jkn", form.current, "jWOxeHqPjgs3G2q-l")
        .then(() => {
          setStatus({ message: "Message sent successfully!", type: "success" });
          setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" }); // Reset form
        })
        .catch(() => {
          setStatus({ message: "Failed to send message. Please try again.", type: "error" });
        });
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="z-5 bg-white shadow-2xl mx-auto p-6 flex flex-col gap-4 mt-4 border-2 border-secondary"
    >
      <div className="flex gap-2 justify-between max-[600px]:flex-col max-[600px]:gap-0">
        <div className="flex flex-col flex-1">
          <label className="font-poppins font-bold mb-1">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mb-3 md:mb md:w-full w-[76vw] p-2 border-b-2 border-gray-300 outline-none transition-colors duration-300 focus:border-primary"
          />
          {errors.firstName && <span className="text-red-600 text-sm mt-1">{errors.firstName}</span>}
        </div>
        <div className="flex flex-col flex-1">
          <label className="font-poppins font-bold mb-1">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="z-15 w-full p-2 border-b-2 border-gray-300 outline-none transition-colors duration-300 focus:border-primary"
          />
          {errors.lastName && <span className="text-red-600 text-sm mt-1">{errors.lastName}</span>}
        </div>
      </div>

      <div className="flex flex-col">
        <label className="font-poppins font-bold mb-1">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border-b-2 border-gray-300 outline-none transition-colors duration-300 focus:border-primary"
        />
        {errors.email && <span className="text-red-600 text-sm mt-1">{errors.email}</span>}
      </div>

      <div className="flex flex-col">
        <label className="font-poppins font-bold mb-1">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 border-b-2 border-gray-300 outline-none transition-colors duration-300 focus:border-primary"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-poppins font-bold mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border-b-2 border-gray-300 outline-none transition-colors duration-300 focus:border-primary h-20 resize-none"
        ></textarea>
      </div>

      {status.message && (
        <p className={status.type === "success" ? "text-green-600 text-base" : "text-red-600 text-base"}>
          {status.message}
        </p>
      )}

      <div className="flex justify-center mt-5">
        <button
          type="submit"
          className="font-poppins text-lg font-bold text-black border-2 border-secondary px-6 py-2 bg-transparent transition-all duration-300 shadow-md hover:scale-105 hover:text-primary"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;