"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface CarouselProps {
  overlayTitle?: string;
  overlaySubtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

type Slide =
  | { kind: "video"; src: string; label: string; sublabel?: string }
  | {
      kind: "image";
      src: string;
      width: number;
      height: number;
      alt: string;
      label: string;
      sublabel?: string;
    };

const slides: Slide[] = [
  // {
  //   kind: "video",
  //   src: "/H1.mp4",
  //   label: "Our Chapter House",
  //   sublabel: "182 St. George Street",
  // },
  {
    kind: "image",
    src: "/images/carousel/c3.JPEG",
    width: 4016,
    height: 3016,
    alt: "Brotherhood at Delta Upsilon Toronto",
    label: "Brotherhood for Life",
    sublabel: "Bonds That Last Forever",
  },
  {
    kind: "image",
    src: "/images/carousel/c1.webp",
    width: 2000,
    height: 3250,
    alt: "Associate Member Class of Winter 2026",
    label: "Building our Future",
    sublabel: "Associate Member Class W26",
  },
  {
    kind: "image",
    src: "/images/carousel/c4.webp",
    width: 3000,
    height: 2250,
    alt: "John at a Rave",
    label: "Experience the Difference",
    sublabel: "Travel with your Brothers",
  },
  {
    kind: "image",
    src: "/images/carousel/c5.webp",
    width: 4061,
    height: 2098,
    alt: "Ritual Book in Preparation for Pinning",
    label: "Build Your Legacy",
    sublabel: "Canada's Oldest Non-Secret Fraternity",
  },
  {
    kind: "image",
    src: "/images/news/cntower.webp",
    width: 2000,
    height: 3250,
    alt: "Formals",
    label: "Celebrate your Brotherhood",
    sublabel: "Iconic Events at Toronto's Venues",
  },
  {
    kind: "video",
    src: "/images/carousel/boat.mov",
    label: "Lifelong Memories",
    sublabel: "Make unforgettable memories with your Brothers",
  }
];

const DURATION = 7000;

export default function Carousel({ overlayTitle, overlaySubtitle, ctaText, ctaLink }: CarouselProps = {}) {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Set slow-motion playback on all video elements
  useEffect(() => {
    videoRefs.current.forEach((v) => {
      if (v) {
        v.playbackRate = 0.4;
        v.play().catch(() => {});
      }
    });
  }, []);

  const advance = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(advance, DURATION);
  }, [advance]);

  // Start auto-advance on mount
  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  const handleManual = (index: number) => {
    setCurrent(index);
    startInterval();
  };

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden bg-black">

      {/* Slides — always mounted, cross-fade via opacity */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-[1]" : "opacity-0 z-0"
          }`}
        >
          {slide.kind === "video" ? (
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              src={slide.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={slide.src}
              width={slide.width}
              height={slide.height}
              alt={slide.alt}
              className="w-full h-full object-cover"
              priority={i === 0}
            />
          )}

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/65" />

          {/* Slide caption */}
          <div className="absolute bottom-16 left-6 md:left-12 z-[2]">
            {slide.sublabel && (
              <p className="eyebrow text-[#edc058]/80 mb-1">{slide.sublabel}</p>
            )}
            <h3 className="font-[family-name:var(--font-Roboto)] text-white text-3xl md:text-4xl font-black uppercase tracking-tight drop-shadow-lg">
              {slide.label}
            </h3>
          </div>
        </div>
      ))}

      {/* Centered page-level overlay (title / subtitle / CTA) */}
      {(overlayTitle || overlaySubtitle || ctaText) && (
        <div className="absolute inset-0 z-[3] flex flex-col items-center justify-center text-center px-4 pointer-events-none pt-16 md:pt-18 lg:pt-20">
          {/* Dark radial scrim so text is legible against any slide */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,0,0,0.55)_0%,transparent_100%)] pointer-events-none" />

          <div className="relative z-[3] flex flex-col items-center">
            {overlaySubtitle && (
              <p
                className="eyebrow text-[#edc058] tracking-[0.25em] mb-4 text-xs"
                style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)" }}
              >
                {overlaySubtitle}
              </p>
            )}
            {overlayTitle && (
              <h1
                className="font-[family-name:var(--font-Roboto)] text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6"
                style={{ textShadow: "0 2px 6px rgba(0,0,0,0.95), 0 4px 24px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.5)" }}
              >
                {overlayTitle}
              </h1>
            )}
            {ctaText && ctaLink && (
              <a href={ctaLink} className="btn-primary pointer-events-auto">
                {ctaText}
              </a>
            )}
          </div>
        </div>
      )}

      {/* Progress indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-[3]">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleManual(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`relative overflow-hidden transition-all duration-300 cursor-pointer ${
              i === current
                ? "w-12 h-[3px] bg-white/30"
                : "w-2 h-2 rounded-full bg-white/40 hover:bg-white/70"
            }`}
          >
            {i === current && (
              <span
                key={current}
                className="absolute inset-y-0 left-0 bg-[#edc058] progress-bar-fill"
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
