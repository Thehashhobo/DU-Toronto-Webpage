"use client";
import React, { useEffect, useRef, useState } from "react";

const quickFacts = [
  { label: "Chartered", value: "December 4, 1899" },
  { label: "Motto", value: 'Δικαια Υποθηκη — "Justice Our Foundation"' },
  { label: "Location", value: "182 St. George St" },
  { label: "Colors", value: "Old Gold & Sapphire Blue" },
  { label: "Mascot", value: "Mallard Duck" },
  { label: "Headquarters", value: "8705 Founders Road, Indianapolis, IN, USA" },
  { label: "Mission", value: "Building Better Men" },
  { label: "Prime Minister's of Canada", value: "1" },
];

const QuickFactsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(quickFacts.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          quickFacts.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }, index * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#f8f7f0] py-16">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <p className="eyebrow text-[#0F52BA]/60 mb-3">At a Glance</p>
        <h2 className="font-[family-name:var(--font-Roboto)] text-3xl md:text-4xl font-black text-[#1a1a2e] uppercase tracking-tight mb-10">
          Quick Facts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quickFacts.map(({ label, value }, index) => (
            <div
              key={label}
              className={`flex gap-4 items-start transition-all duration-700 ease-out ${
                visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {/* Gold accent bar */}
              <div className="w-1 flex-shrink-0 bg-[#edc058] self-stretch mt-0.5" />
              <div>
                <span className="font-[family-name:var(--font-Roboto)] font-bold text-[#1a1a2e] text-base">
                  {label}
                </span>
                <p className="font-[family-name:var(--font-Cabin)] text-gray-500 text-sm mt-0.5">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFactsSection;
