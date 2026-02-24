"use client";
import { useState } from "react";
import { faqs } from "@/data/faqs";

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-white/10 transition-colors duration-200 ${isOpen ? "border-[#edc058]/30" : ""}`}>
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-expanded={isOpen}
        className="cursor-pointer w-full flex items-center justify-between gap-4 py-5 text-left focus:outline-none"
      >
        <span className="font-[family-name:var(--font-Cabin)] font-semibold text-white text-sm md:text-base leading-snug">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-[#edc058]/50 flex items-center justify-center text-[#edc058] text-sm font-bold transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-[family-name:var(--font-Cabin)] text-sm text-gray-300 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="w-full bg-[#0c1a2e] py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <p className="eyebrow text-[#edc058]/60 mb-3">Got Questions?</p>
          <h2 className="font-[family-name:var(--font-Roboto)] text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Two-column accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.question + i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
