"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";

interface AnimatedCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Detect desktop screens
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // IntersectionObserver to detect when the card is in view
  useEffect(() => {
    if (!isDesktop) {
      setInView(true); // Always show on mobile
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [isDesktop]);

  // Overlay animation (background darkens on hover)
  const overlayStyle = useSpring({
    opacity: hovered ? 0.8 : 0.5,
    config: { tension: 120, friction: 18 },
  });

  // Description animation (fade in and slide up)
  const descStyle = useSpring({
    opacity: hovered ? 1 : 0,
    transform: hovered ? "translateY(0px)" : "translateY(20px)",
    config: { tension: 120, friction: 18 },
  });

  // Title animation (move to top on hover)
  const titleStyle = useSpring({
    transform: hovered ? "translateY(150%)" : "translateY(220%)",
    config: { tension: 120, friction: 18 },
  });

  return (
    <Link href={link} className="items-center mx-auto">
      <div
        ref={cardRef}
        className={`relative min-w-[18rem] w-72 md:w-80 h-110 overflow-hidden shadow-xl 
          cursor-pointer bg-white transition items-center mt-6 border-1 
          border-secondary flex-shrink-0 
          ${inView
            ? isDesktop
              ? "animate-fade-in-scale"
              : ""
            : "opacity-0"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Card background image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay for darkening background on hover */}
        <animated.div
          style={overlayStyle}
          className="absolute inset-0 bg-gray-900 pointer-events-none"
        />

        {/* Title (moves to top on hover) */}
        <animated.div
          style={titleStyle}
          className="flex justify-center items-center w-full absolute top-0 left-0 right-0 z-10 h-16"
        >
          <h2
            className="font-[family-name:var(--font-Roboto)] text-4xl font-bold text-primary text-center"
            style={{ textShadow: "2px 4px 2px #000000" }}
          >
            {title}
          </h2>
        </animated.div>

        {/* Description (only visible on hover, fades in) */}
        <animated.div
          style={descStyle}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6"
        >
          <p className="text-lg text-white text-center font-semibold px-8">
            {description}
          </p>
        </animated.div>
      </div>
    </Link>
  );
};

export default AnimatedCard;