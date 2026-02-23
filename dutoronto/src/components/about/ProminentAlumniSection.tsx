"use client";
import React, { useRef, useEffect } from "react";
import AlumniCard from "./AlumniCards";

interface AlumniCardData {
  name: string;
  width?: number;
  height?: number;
  description: string;
  image: string;
  link?: string;
}

interface ProminentAlumniSectionProps {
  alumniCards: AlumniCardData[];
}

const ProminentAlumniSection: React.FC<ProminentAlumniSectionProps> = ({ alumniCards }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const handleWheel = (event: WheelEvent) => {
      if (window.innerWidth >= 768) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
      }
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="w-full bg-[#0c1a2e] py-16 mt-6">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="eyebrow text-[#edc058]/60 mb-3">Legacy</p>
        <h2 className="font-[family-name:var(--font-Roboto)] text-3xl md:text-4xl font-black text-white mb-3">
          Prominent Alumni
        </h2>
        <p className="font-[family-name:var(--font-Cabin)] text-gray-400 max-w-2xl text-base">
          We shape men who shape the world. Delta Upsilon proudly celebrates the achievements of brothers who have made meaningful impacts in their careers and communities.
        </p>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollContainerRef}
        className="flex flex-row px-6 gap-5 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-600 max-w-7xl mx-auto"
      >
        {alumniCards.map((card, idx) => (
          <AlumniCard
            key={card.name + idx}
            name={card.name}
            width={card.width || 300}
            height={card.height || 400}
            description={card.description}
            image={card.image}
            link={card.link || ""}
          />
        ))}
      </div>
    </section>
  );
};

export default ProminentAlumniSection;
