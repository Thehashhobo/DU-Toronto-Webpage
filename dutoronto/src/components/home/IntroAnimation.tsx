"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Full-screen intro splash shown once per session on the home page.
 *
 * Timeline:
 *  0ms      — Overlay appears, coat of arms fades + scales in
 *  1800ms   — Exit begins: logo fades out, two curtains split apart
 *  2800ms   — Component unmounts
 */
export default function IntroAnimation() {
  const [show, setShow] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Only show once per browser session
    if (sessionStorage.getItem("du-intro")) return;

    setShow(true);
    document.body.style.overflow = "hidden";

    const tExit = setTimeout(() => setExiting(true), 1800);
    const tDone = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("du-intro", "1");
    }, 2800);

    return () => {
      clearTimeout(tExit);
      clearTimeout(tDone);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <>
      {/* ── Coat of arms + text — sits above both curtains ─────── */}
      <div
        className="fixed inset-0 z-[102] flex flex-col items-center justify-center pointer-events-none"
        style={{
          opacity: exiting ? 0 : 1,
          transitionProperty: "opacity",
          transitionDuration: exiting ? "250ms" : "600ms",
          transitionTimingFunction: "ease-out",
          transitionDelay: "0ms",
        }}
      >
        {/* Coat of arms */}
        <div
          style={{
            transform: exiting ? "scale(0.92)" : "scale(1)",
            opacity: exiting ? 0 : 1,
            animation: !exiting ? "fade-in-scale 0.7s ease-out forwards" : undefined,
            transition: exiting ? "transform 250ms ease-in, opacity 250ms ease-in" : undefined,
          }}
        >
          <Image
            src="/images/Coat of Arms.webp"
            width={300}
            height={351}
            alt="Delta Upsilon Toronto"
            className="w-28 md:w-40 h-auto drop-shadow-[0_8px_32px_rgba(237,192,88,0.25)]"
            priority
          />
        </div>

        {/* Gold rule */}
        <div
          className="bg-[#edc058] h-[2px] mt-5"
          style={{
            width: exiting ? 0 : "4rem",
            transition: "width 600ms ease-out 400ms",
            opacity: 0.85,
          }}
        />

        {/* Wordmark */}
        <p
          className="font-[family-name:var(--font-Cabin)] text-white/50 text-[10px] tracking-[0.45em] uppercase mt-3"
          style={{
            opacity: exiting ? 0 : 1,
            transitionProperty: "opacity",
            transitionDuration: "250ms",
            transitionTimingFunction: "ease-out",
            transitionDelay: exiting ? "0ms" : "600ms",
            animation: !exiting ? "slide-up 0.5s ease-out 400ms both" : undefined,
          }}
        >
          Delta Upsilon Toronto
        </p>
      </div>

      {/* ── Top curtain ──────────────────────────────────────────── */}
      <div
        className="fixed top-0 left-0 right-0 bg-[#0c1a2e] z-[101]"
        style={{
          height: "51%",
          transform: exiting ? "translateY(-100%)" : "translateY(0)",
          transition: exiting
            ? "transform 850ms cubic-bezier(0.76, 0, 0.24, 1) 200ms"
            : "none",
        }}
      />

      {/* ── Bottom curtain ───────────────────────────────────────── */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-[#0c1a2e] z-[101]"
        style={{
          height: "51%",
          transform: exiting ? "translateY(100%)" : "translateY(0)",
          transition: exiting
            ? "transform 850ms cubic-bezier(0.76, 0, 0.24, 1) 200ms"
            : "none",
        }}
      />
    </>
  );
}
