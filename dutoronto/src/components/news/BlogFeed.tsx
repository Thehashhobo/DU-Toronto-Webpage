"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { blogPosts } from "@/data/news";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Wraps a child and fades it up when it enters the viewport. */
function RevealOnScroll({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("reveal-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="reveal-item">
      {children}
    </div>
  );
}

export default function BlogFeed() {
  return (
    <div className="flex flex-col gap-10">
      {blogPosts.map((post, i) => (
        <RevealOnScroll key={post.id} delay={i * 60}>
          <article className="bg-white border border-gray-100 shadow-sm overflow-hidden group">

            {/* Optional image */}
            {post.image && (
              <div className="w-full h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt ?? post.title}
                  width={post.imageWidth ?? 1200}
                  height={post.imageHeight ?? 630}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            )}

            {/* Body */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="eyebrow text-[#0F52BA]/70">{post.tag}</span>
                <span className="text-gray-300">·</span>
                <time
                  dateTime={post.date}
                  className="font-[family-name:var(--font-Cabin)] text-xs text-gray-400"
                >
                  {formatDate(post.date)}
                </time>
              </div>

              <h2 className="font-[family-name:var(--font-Roboto)] text-xl md:text-2xl font-black text-[#1a1a2e] leading-snug mb-3 uppercase tracking-tight">
                {post.title}
              </h2>

              <p className="font-[family-name:var(--font-Cabin)] text-gray-600 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Gold bottom accent */}
            <div className="h-[3px] w-0 bg-[#edc058] group-hover:w-full transition-all duration-500" />
          </article>
        </RevealOnScroll>
      ))}
    </div>
  );
}
