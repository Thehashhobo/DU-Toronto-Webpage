"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";

interface AlumniCardProps {
  name: string;
  description: string;
  image: string;
  link?: string;
  width: number;
  height: number;
}

const AlumniCard: React.FC<AlumniCardProps> = ({ name, description, image, width, height }) => {
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  const nameStyle = useSpring({
    transform: hovered ? "translateY(0%)" : "translateY(100%)",
    config: { tension: 140, friction: 20 },
  });

  return (
    <div
      ref={cardRef}
      className={`relative flex min-w-[15rem] w-60 md:w-72 h-[380px] md:h-[440px] items-end overflow-hidden shadow-xl cursor-pointer flex-shrink-0
        ${inView ? "animate-fade-in-scale" : "opacity-0"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        width={width}
        height={height}
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
        style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
      />

      {/* Always-visible subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Name / description slide up */}
      <animated.div
        style={nameStyle}
        className="relative z-10 w-full bg-[#0c1a2e]/90 px-4 py-3 border-t-2 border-[#edc058]"
      >
        <h2 className="font-[family-name:var(--font-Roboto)] text-xl font-bold text-[#edc058]">
          {name}
        </h2>
        <p className="text-sm text-gray-300 font-[family-name:var(--font-Cabin)] mt-0.5">
          {description}
        </p>
      </animated.div>
    </div>
  );
};

export default AlumniCard;
