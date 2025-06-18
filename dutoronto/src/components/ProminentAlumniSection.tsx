"use client";
import React, { useRef, useEffect, use } from "react";
import AlumniCard from "./AlumniCards";

interface AlumniCardData {
  name: string;
  width?: number;
  height?: number;
  description: string;
  image: any;
  link: string;
}

interface ProminentAlumniSectionProps {
  alumniCards: AlumniCardData[];
}

const ProminentAlumniSection: React.FC<ProminentAlumniSectionProps> = ({ alumniCards }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Horizontal scroll on wheel for desktop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      if (window.innerWidth >= 768) { // Only on md and up
        event.preventDefault();
        container.scrollLeft += event.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="flex flex-col w-full mx-auto my-5 mt-16">
      <h1 className="font-[family-name:var(--font-Cabin)] text-5xl font-bold mb-4 text-center bg-primary border-t-[12] border-b-[12] border-secondary py-4">
        Prominent Alumni
      </h1>
      <h2 className="font-[family-name:var(--font-Cabin)] text-secondary opacity-90 mx-auto w-[90%] md:w-[80%] text-xl md:text-2xl text-center font-bold">
        We shape men who shape the world. Delta Upsilon proudly celebrates the achievements of our brothers who have made meaningful impacts in their careers and communities.
      </h2>
      <div
        ref={scrollContainerRef}
        className="flex flex-row w-[90%] mx-auto text-[color:var(--textColor)] gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400"
      >
        {alumniCards.map((card, idx) => (
          <AlumniCard
            key={card.name + idx}
            name={card.name}
            width={card.width || 300}
            height={card.height || 400}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ProminentAlumniSection;