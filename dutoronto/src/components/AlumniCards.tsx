"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";

interface AlumniCardProps {
  name: string;
  description: string;
  image: string;
  link: string;
  width: number;
  height: number;
}

const AlumniCard: React.FC<AlumniCardProps> = ({
  name,
  description,
  image,
  // link,
  width,
  height,
}) => {
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver to detect when the card is in view
  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the card is visible
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);


  // Title animation (move to top on hover)
  const titleStyle = useSpring({
    transform: hovered ? "translateY(0%)" : "translateY(100%)",
    config: { tension: 120, friction: 18 },
  });

  return (
    <div
      ref={cardRef}
      className={`relative flex min-w-[18rem] w-72 md:w-80 h-110 items-end overflow-hidden shadow-2xl cursor-pointer bg-white transition mx-auto mt-6 border-1 border-secondary flex-shrink-0 ${
        inView ? "animate-fade-in-scale" : "opacity-0"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card background image */}
       <Image
        width={width}
        height={height}
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />


      {/* Name (moves to top on hover) */}
      <animated.div
        style={titleStyle}
        className="flex flex-col justify-center items-center w-full z-10 bg-background p-2 border-t-3 border-t-secondary"
      >
        <h2
          className="font-[family-name:var(--font-Roboto)] text-3xl font-bold text-primary text-center "
        >
          {name}
        </h2>
        <p className="text-lg text-textColor text-center font-semibold px-8">
          {description}
        </p>
      </animated.div>

    </div>
  );
};

export default AlumniCard;