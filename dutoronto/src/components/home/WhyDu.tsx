import React from "react";
import Image from "next/image";
import { principles } from "@/data/principles";

const WhyDu: React.FC = () => {
  return (
    <section className="w-full py-16 px-6 bg-[#0c1a2e]">
      {/* Heading */}
      <p className="eyebrow text-center text-[#edc058]/60 mb-3">Our Foundation</p>
      <h2 className="font-[family-name:var(--font-Germ)] text-3xl md:text-4xl xl:text-5xl text-center text-[#edc058] mb-12">
        Delta Upsilon&apos;s Four Founding Principles
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {principles.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center group">
            {/* Icon ring */}
            <div className="w-20 h-20 mb-5 rounded-full border-2 border-[#edc058]/50 group-hover:border-[#edc058] p-4 bg-[#0c1a2e] flex items-center justify-center transition-all duration-300 shadow-lg shadow-black/30">
              <Image
                src={item.icon}
                width={48}
                height={48}
                alt={item.title}
                className="w-10 h-10 brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="font-[family-name:var(--font-Cabin)] text-xs text-gray-400 uppercase tracking-widest mb-1">
              {item.prefix}
            </p>
            <h3 className="font-[family-name:var(--font-Roboto)] text-xl md:text-2xl font-bold text-white">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyDu;
