"use client";
import { useRef, useState } from "react";

export default function AlumniSignupForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  // Mailchimp form action URL
  const MAILCHIMP_URL =
    "https://gmail.us21.list-manage.com/subscribe/post?u=c737f8f42138ba60d17fcf3e3&id=ec9a310e85";
  // Handles form submission via hidden iframe to avoid redirect
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    
    if (!form) {
      console.log("Form ref is null!");
      return;
    }

    // Extract and log the form data
    const formData = new FormData(form);
    const requestBody: Record<string, string> = {};

    formData.forEach((value, key) => {
      requestBody[key] = value.toString();
    });

    console.log("Request body:", requestBody);

    // Create a hidden iframe for submission
    const iframe = document.createElement("iframe");
    iframe.name = "hidden_iframe";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    form.target = "hidden_iframe";
    form.submit();
    console.log("Form submitted:", form);
    console.log("response", );

    setTimeout(() => {
      setShowPopup(true);
      document.body.removeChild(iframe);
      form.reset();
    }, 1200); // Wait for Mailchimp to process (adjust if needed)
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action={MAILCHIMP_URL}
        method="POST"
        className="flex flex-col gap-4 w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg"
        target="hidden_iframe"
      >
        <input
          type="text"
          name="MERGE1" 
          required
          placeholder="First Name"
          className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          name="MERGE2" 
          required
          placeholder="Last Name"
          className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          name="MERGE0" 
          required
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="tel"
          name="MERGE4" 
          placeholder="Phone Number"
          className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          name="MERGE6" 
          placeholder="Brother Name (optional)"
          className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
        type="url"
        name="MERGE11" 
        placeholder="LinkedIn Profile (optional)"
        className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        
        {/* Mailchimp bot field */}
        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
          <input type="text" name="b_c737f8f42138ba60d17fcf3e3_ec9a310e85" tabIndex={-1} />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-primary text-white rounded-md font-bold hover:bg-primary/90 transition"
        >
          Sign Up
        </button>
      </form>
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white rounded-xl p-8 shadow-lg flex flex-col items-center max-w-xs">
            <span className="text-3xl mb-2">🎉</span>
            <p className="mb-4 text-center">
              Thank you for signing up!<br />
              You&apos;ve been added to our alumni mailing list.
            </p>
            <button
              className="mt-2 px-6 py-2 bg-primary text-white rounded-md font-bold hover:bg-primary/90 transition"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}