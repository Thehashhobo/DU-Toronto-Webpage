"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";

interface AnimatedCardProps {
  title: string;
  description: string;
  image: string;
  width?: number;
  height?: number;
  link: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title,
  description,
  image,
  width,
  height,
  link,
}) => {
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isDesktop) { setInView(true); return; }
    const node = cardRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.unobserve(node);
  }, [isDesktop]);

  const overlayStyle = useSpring({
    opacity: hovered ? 0.85 : 0.52,
    config: { tension: 140, friction: 20 },
  });

  const descStyle = useSpring({
    opacity: hovered ? 1 : 0,
    transform: hovered ? "translateY(0px)" : "translateY(16px)",
    config: { tension: 140, friction: 20 },
  });

  const titleStyle = useSpring({
    transform: hovered ? "translateY(120%)" : "translateY(200%)",
    config: { tension: 140, friction: 20 },
  });

  return (
    <Link href={link} className="items-center mx-auto flex-shrink-0">
      <div
        ref={cardRef}
        className={`relative min-w-[16rem] w-64 md:w-72 h-96 md:h-[420px] overflow-hidden shadow-xl cursor-pointer flex-shrink-0
          ${inView ? (isDesktop ? "animate-fade-in-scale" : "") : "opacity-0"}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Background image */}
        <Image
          src={image}
          width={width || 800}
          height={height || 600}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 scale-100 hover:scale-105"
        />

        {/* Darkening overlay */}
        <animated.div
          style={overlayStyle}
          className="absolute inset-0 bg-[#0c1a2e] pointer-events-none"
        />

        {/* Gold bottom border that appears on hover */}
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#edc058] transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`} />

        {/* Title */}
        <animated.div
          style={titleStyle}
          className="flex justify-center items-center w-full absolute top-0 left-0 right-0 z-10 h-16"
        >
          <h2 className="font-[family-name:var(--font-Roboto)] text-3xl font-black text-[#edc058] text-center uppercase tracking-wide"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
          >
            {title}
          </h2>
        </animated.div>

        {/* Description on hover */}
        <animated.div
          style={descStyle}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6"
        >
          <p className="text-base text-white text-center font-[family-name:var(--font-Cabin)] font-medium leading-relaxed">
            {description}
          </p>
          <span className="mt-5 text-[#edc058] text-xs uppercase tracking-widest font-bold border-b border-[#edc058] pb-0.5">
            Explore →
          </span>
        </animated.div>
      </div>
    </Link>
  );
};

export default AnimatedCard;
