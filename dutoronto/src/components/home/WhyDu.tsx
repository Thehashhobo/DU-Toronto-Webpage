import React from "react";
import Image from "next/image";
import { principles } from "@/data/principles";

const ROMAN = ['I', 'II', 'III', 'IV'] as const;

const WhyDu: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-[#0c1a2e]">
      {/* Heading */}
      <div className="flex items-center justify-center gap-4 mb-3">
        <div className="h-px w-10 bg-[#edc058]/30" />
        <p className="eyebrow text-[#edc058]/60">Our Foundation</p>
        <div className="h-px w-10 bg-[#edc058]/30" />
      </div>
      <h2 className="font-[family-name:var(--font-Germ)] text-3xl md:text-4xl xl:text-5xl text-center text-[#edc058] mb-4">
        Delta Upsilon&apos;s Four Founding Principles
      </h2>
      {/* Gold accent rule under heading */}
      <div className="h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-[#edc058]/40 to-transparent mb-14" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
        {principles.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center group relative">
            {/* Roman numeral watermark */}
            <span
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-Roboto)] font-black text-[6rem] leading-none select-none pointer-events-none text-[#edc058] opacity-[0.12] group-hover:opacity-[0.22] transition-opacity duration-500"
              aria-hidden="true"
            >
              {ROMAN[index]}
            </span>

            {/* Icon ring */}
            <div className="relative z-10 w-20 h-20 mb-4 rounded-full border border-[#edc058]/40 group-hover:border-[#edc058] p-4 bg-[#0c1a2e] flex items-center justify-center transition-all duration-500 shadow-lg shadow-black/30 group-hover:shadow-[0_0_28px_rgba(237,192,88,0.12)]">
              <Image
                src={item.icon}
                width={48}
                height={48}
                alt={item.title}
                className="w-10 h-10 brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Expanding gold divider */}
            <div className="h-px w-6 bg-[#edc058]/30 group-hover:w-12 group-hover:bg-[#edc058]/70 transition-all duration-500 ease-out mb-3" />

            <p className="font-[family-name:var(--font-Cabin)] text-[0.65rem] text-[#edc058]/50 uppercase tracking-[0.2em] mb-1">
              {item.prefix}
            </p>
            <h3 className="font-[family-name:var(--font-Roboto)] text-xl md:text-2xl font-bold text-white group-hover:text-[#edc058] transition-colors duration-300">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyDu;
