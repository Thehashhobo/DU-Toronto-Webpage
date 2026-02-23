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
  const [errors, setErrors] = useState({ firstName: "", lastName: "", email: "" });
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setStatus({ message: "", type: "" });
  };

  const validateForm = () => {
    const newErrors = { firstName: "", lastName: "", email: "" };
    if (!formData.firstName) newErrors.firstName = "Enter a first name.";
    if (!formData.lastName) newErrors.lastName = "Enter a last name.";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Enter a valid email address.";
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => e === "");
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (form.current) {
      emailjs
        .sendForm("service_mzsekqe", "template_wl8h6od", form.current, "aPixscVBLWvZUQf-6")
        .then(() => {
          setStatus({ message: "Message sent successfully!", type: "success" });
          setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
        })
        .catch(() => {
          setStatus({ message: "Failed to send. Please try again.", type: "error" });
        });
    }
  };

  const inputClass =
    "w-full bg-transparent border-b-2 border-gray-200 focus:border-[#edc058] outline-none py-2 text-[#1a1a2e] font-[family-name:var(--font-Cabin)] text-sm transition-colors duration-200 placeholder:text-gray-300";
  const labelClass =
    "font-[family-name:var(--font-Cabin)] font-bold text-xs uppercase tracking-wider text-gray-500 mb-1 block";

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full bg-white shadow-lg p-8 flex flex-col gap-6"
    >
      <h3 className="font-[family-name:var(--font-Roboto)] font-black text-xl text-[#1a1a2e] uppercase tracking-tight mb-2">
        Send a Message
      </h3>

      <div className="flex gap-4">
        <div className="flex flex-col flex-1">
          <label className={labelClass}>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            className={inputClass}
          />
          {errors.firstName && <span className="text-red-500 text-xs mt-1">{errors.firstName}</span>}
        </div>
        <div className="flex flex-col flex-1">
          <label className={labelClass}>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            className={inputClass}
          />
          {errors.lastName && <span className="text-red-500 text-xs mt-1">{errors.lastName}</span>}
        </div>
      </div>

      <div className="flex flex-col">
        <label className={labelClass}>Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className={inputClass}
        />
        {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
      </div>

      <div className="flex flex-col">
        <label className={labelClass}>Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col">
        <label className={labelClass}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          className={`${inputClass} h-24 resize-none`}
        />
      </div>

      {status.message && (
        <p className={`text-sm font-[family-name:var(--font-Cabin)] ${status.type === "success" ? "text-green-600" : "text-red-500"}`}>
          {status.message}
        </p>
      )}

      <button type="submit" className="btn-primary self-start mt-2">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
