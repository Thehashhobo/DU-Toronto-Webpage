import WhyDu from "@/components/home/WhyDu";
import AnimatedCard from "@/components/home/AnimatedCard";
import IntroAnimation from "@/components/home/IntroAnimation";
import Image from "next/image";
import { Metadata } from "next";
import React, { Suspense } from "react";
import { executives } from "@/data/executives";

const MemberGridWithModal = React.lazy(() => import("@/components/home/MemberGridWithModal"));

export const metadata: Metadata = {
  title: "Delta Upsilon Toronto — World's Oldest Non-Secret Fraternity",
  description:
    "Delta Upsilon Toronto Chapter - Building Better Men Since 1899. Discover brotherhood, leadership, and lifelong connections.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Delta Upsilon Toronto - Building Better Men Since 1899",
    description:
      "Join Canada's oldest non-secret fraternity at University of Toronto. Discover brotherhood, leadership and our historic chapter house at 182 St George St.",
    url: "/",
    images: [{ url: "/images/Coat of Arms.webp", width: 300, height: 351, alt: "Delta Upsilon Toronto Chapter Coat of Arms" }],
  },
};

const animatedCards = [
  {
    title: "About Us",
    description: "Learn more about our fraternity, our values, and our commitment to excellence.",
    image: "/images/about.webp",
    width: 4016,
    height: 3016,
    link: "/about",
  },
  {
    title: "Membership",
    description: "We are always looking for new members who share our values and strive for excellence.",
    image: "/images/pin.webp",
    width: 3000,
    height: 2250,
    link: "/membership#faq",
  },
  {
    title: "Alumni",
    description: "Build brotherly connections that will last a lifetime.",
    image: "/images/alumni.webp",
    width: 2290,
    height: 2994,
    link: "/alumni",
  },
  {
    title: "Our House",
    description: "Live in a home that is more than just a place to stay.",
    image: "/images/H1.webp",
    width: 1024,
    height: 768,
    link: "/house",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* ── Intro splash (once per session) ─────────── */}
      <IntroAnimation />

      {/* ── Hero ────────────────────────────────────── */}
      <section className="relative w-full h-[75vh] md:h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="H1.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/70" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          {/* Eyebrow with flanking lines */}
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="hidden sm:block h-px w-10 bg-[#edc058]/40" />
            <span
              className="eyebrow text-[#edc058]/80 tracking-[0.25em] text-xs"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)" }}
            >
              Canada&apos;s Oldest Non-Secret Fraternity
            </span>
            <div className="hidden sm:block h-px w-10 bg-[#edc058]/40" />
          </div>

          {/* Title */}
          <h1 className="text-white text-center" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.95), 0 4px 24px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.5)" }}>
            <span className="font-[family-name:var(--font-Germ)] block text-3xl md:text-4xl xl:text-5xl text-white/80 font-normal tracking-wide">
              Delta Upsilon
            </span>
            {/* Decorative diamond separator */}
            <div className="flex items-center justify-center gap-3 my-2.5">
              <div className="h-px w-16 bg-[#edc058]/30" />
              <div className="w-1.5 h-1.5 bg-[#edc058]/55 rotate-45 flex-shrink-0" />
              <div className="h-px w-16 bg-[#edc058]/30" />
            </div>
            <span className="font-[family-name:var(--font-Roboto)] block text-5xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight">
              Toronto Chapter
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="font-[family-name:var(--font-Cabin)] text-[#edc058] text-lg md:text-xl mt-5 tracking-wide"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)" }}
          >
            Building Better Men Since 1899
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/about" className="btn-outline">
              Discover Our Story
            </a>
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ── About blurb (cream) ──────────────────────── */}
      <section className="bg-[#f8f7f0] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text */}
          <div className="flex-1 order-2 md:order-1 border-l-2 border-[#edc058]/25 pl-6">
            <p className="eyebrow text-[#0F52BA]/70 mb-3">About Our Chapter</p>
            <h2 className="font-[family-name:var(--font-Roboto)] text-3xl md:text-4xl xl:text-5xl font-black text-[#1a1a2e] leading-tight mb-5">
              Not your typical fraternity.
            </h2>
            <p className="font-[family-name:var(--font-Cabin)] text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Our non-secret heritage and dedication to creating a modern fraternity experience help
              us in{" "}
              <span className="text-[#edc058] font-bold">Building Better Men</span>.
              Fraternity membership is one of the most valuable extra-curricular experiences a
              student can have.
            </p>
            <a href="/about" className="btn-outline-dark">
              Learn More
            </a>
          </div>

          {/* Coat of Arms */}
          <div className="flex-shrink-0 order-1 md:order-2">
            <Image
              width={300}
              height={351}
              src="/images/Coat of Arms.webp"
              alt="Delta Upsilon Coat of Arms"
              className="h-44 md:h-56 w-auto drop-shadow-[0_8px_40px_rgba(237,192,88,0.22)] hover:drop-shadow-[0_12px_48px_rgba(237,192,88,0.35)] transition-all duration-500"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* ── Explore cards (dark navy) ────────────────── */}
      <section className="bg-[#0c1a2e] pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow text-[#edc058]/60 mb-3">Explore</p>
          <h2 className="font-[family-name:var(--font-Roboto)] text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
            Everything DU Toronto
          </h2>
          <div className="h-px w-20 bg-gradient-to-r from-[#edc058]/70 to-transparent mb-10" />
          <div className="flex flex-row gap-5 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#edc058]/20 xl:grid xl:grid-cols-4 xl:overflow-x-visible">
            {animatedCards.map((card, idx) => (
              <AnimatedCard key={card.title + idx} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Four Founding Principles (dark navy, WhyDu handles bg) ── */}
      <WhyDu />

      {/* ── Executive Team (cream) ──────────────────── */}
      <section className="bg-[#f8f7f0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow text-[#0F52BA]/70 mb-3">Our Leadership</p>
          <h2 className="font-[family-name:var(--font-Roboto)] text-3xl md:text-4xl font-black text-[#1a1a2e] mb-3 uppercase tracking-tight">
            <span className="text-[#edc058]">Own Your Journey</span>{" "}
            with those who elevate you
          </h2>
          <div className="h-px w-16 bg-gradient-to-r from-[#edc058]/60 to-transparent mb-4" />
          <p className="font-[family-name:var(--font-Cabin)] text-gray-500 mb-10 max-w-xl">
            Meet the executive team leading Delta Upsilon Toronto. Click any card to learn more.
          </p>

          <Suspense fallback={<div className="text-gray-400 text-sm">Loading members…</div>}>
            <MemberGridWithModal members={executives} />
          </Suspense>
        </div>
      </section>

    </main>
  );
}
