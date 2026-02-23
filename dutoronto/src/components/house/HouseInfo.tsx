"use client";
import { useState } from "react";
import { houseInfoItems } from "@/data/houseInfo";

export default function HouseInfo() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="flex flex-col flex-1 md:ml-8 py-4">
      <p className="eyebrow text-[#0F52BA]/60 mb-2">Our Home</p>
      <h2 className="font-[family-name:var(--font-Roboto)] text-2xl md:text-3xl xl:text-4xl font-black text-[#edc058] mb-6">
        182 St. George St
      </h2>

      {houseInfoItems.map((section, index) => (
        <div key={index} className="border-b border-gray-200 last:border-b-0">
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between gap-4 py-4 text-left focus:outline-none group"
          >
            <span className={`font-[family-name:var(--font-Roboto)] font-bold text-base md:text-lg transition-colors ${openIndex === index ? "text-[#0F52BA]" : "text-[#1a1a2e] group-hover:text-[#0F52BA]"}`}>
              {section.title}
            </span>
            <span className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-sm font-bold transition-all duration-300 ${
              openIndex === index
                ? "border-[#0F52BA] text-[#0F52BA] rotate-45"
                : "border-gray-300 text-gray-400 group-hover:border-[#0F52BA] group-hover:text-[#0F52BA]"
            }`}>
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-60 opacity-100 pb-4" : "max-h-0 opacity-0"
            }`}
          >
            <p className="font-[family-name:var(--font-Cabin)] text-sm md:text-base text-gray-600 leading-relaxed">
              {section.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
