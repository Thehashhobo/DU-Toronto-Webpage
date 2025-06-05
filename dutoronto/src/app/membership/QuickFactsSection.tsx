"use client";
import React, { useEffect, useRef, useState } from "react";

const quickFacts = [
    { label: "Chartered", value: "December 4, 1899" },
    { label: "Motto", value: 'Δικαια Υποθηκη - "Justice Our Foundation"' },
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
              }, index * 150); // stagger delay
            });
  
            observer.disconnect(); // only run once
          }
        },
        { threshold: 0.2 }
      );
  
      if (ref.current) observer.observe(ref.current);
  
      return () => observer.disconnect();
    }, []);
  
    return (
      <section className="relative w-full bg-white py-12 flex justify-center items-center">
        <div ref={ref} className="max-w-4xl w-full px-4">
          <h2 className="text-left text-3xl md:text-4xl font-bold text-[color:var(--color-primary)] uppercase mb-8">
            Quick Facts
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16 text-gray-800 text-left">
            {quickFacts.map(({ label, value }, index) => (
              <div
                key={label}
                className={`transition-all duration-700 ease-out transform ${
                  visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                } flex flex-col space-y-1 relative pl-4 border-l border-[color:var(--color-primary)]`}
              >
                <span className="text-lg font-semibold">{label}</span>
                <span className="text-base text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default QuickFactsSection;