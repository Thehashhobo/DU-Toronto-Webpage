"use client";
import { useRef, useState } from "react";

export default function AlumniSignupForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const MAILCHIMP_URL =
    "https://gmail.us21.list-manage.com/subscribe/post?u=c737f8f42138ba60d17fcf3e3&id=ec9a310e85";
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwiSz95PD6USxGz7FO_6dv8m7-4KyzOGARDDgqBGhlAbvp-YAfBN_xugULKks5MW7wnLw/exec";

  const sendToGoogleSheets = async (formData: FormData) => {
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, { method: "POST", body: formData });
      const result = await response.json();
      return result.success;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = formRef.current;
    if (!form) { setIsSubmitting(false); return; }

    const formData = new FormData(form);
    await sendToGoogleSheets(formData);

    const iframe = document.createElement("iframe");
    iframe.name = "hidden_iframe";
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    form.target = "hidden_iframe";
    form.submit();

    setTimeout(() => {
      setShowPopup(true);
      setIsSubmitting(false);
      document.body.removeChild(iframe);
      form.reset();
    }, 1200);
  };

  const inputClass =
    "w-full bg-[#0c1a2e] border border-white/10 focus:border-[#edc058] outline-none px-4 py-3 text-white placeholder-gray-500 font-[family-name:var(--font-Cabin)] text-sm transition-colors duration-200";

  return (
    <div className="w-full flex flex-col items-center px-4">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action={MAILCHIMP_URL}
        method="POST"
        className="flex flex-col gap-4 w-full max-w-lg"
        target="hidden_iframe"
      >
        <div className="flex gap-4">
          <input type="text" name="MERGE1" required placeholder="First Name" className={inputClass} />
          <input type="text" name="MERGE2" required placeholder="Last Name" className={inputClass} />
        </div>
        <input type="email" name="MERGE0" required placeholder="Email address *" className={inputClass} />
        <input type="tel" name="MERGE4" placeholder="Phone Number" className={inputClass} />
        <input type="text" name="MERGE6" placeholder="Brother Name (optional)" className={inputClass} />
        <input type="url" name="MERGE11" placeholder="LinkedIn Profile (optional)" className={inputClass} />

        {/* Mailchimp bot field */}
        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
          <input type="text" name="b_c737f8f42138ba60d17fcf3e3_ec9a310e85" tabIndex={-1} />
        </div>

        <button type="submit" className="btn-primary mt-2 self-center px-10">
          {isSubmitting ? "Submitting…" : "Sign Up"}
        </button>
      </form>

      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-[#0c1a2e] border border-[#edc058]/30 text-white p-8 shadow-2xl flex flex-col items-center max-w-xs text-center">
            <span className="text-4xl mb-4">🎉</span>
            <p className="font-[family-name:var(--font-Cabin)] mb-4">
              Thank you for signing up!<br />
              You&apos;ve been added to our alumni mailing list.
            </p>
            <button
              className="btn-primary mt-2 text-sm"
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
