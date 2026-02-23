"use client";
import { useRef, useEffect, useState } from "react";
import { historyMilestones } from "@/data/history";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

export default function History() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (!isDesktop) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };
    container.addEventListener("wheel", handleWheel);
    return () => container.removeEventListener("wheel", handleWheel);
  }, [isDesktop]);

  return (
    <div
      ref={isDesktop ? scrollContainerRef : null}
      className="flex md:overflow-x-auto w-full mx-auto pb-4 scrollbar-thin scrollbar-thumb-[#edc058]/30 items-start"
    >
      <ol className="items-start md:flex gap-0">
        {historyMilestones.map((milestone, index) => (
          <li key={index} className={`relative mb-8 md:mb-0 w-[75vw] ${milestone.desktopWidth} flex-shrink-0`}>
            {/* Timeline connector */}
            <div className="items-center hidden md:flex">
              <div className="z-10 flex items-center justify-center w-5 h-5 bg-[#edc058] rounded-full flex-shrink-0 shadow-md shadow-[#edc058]/30">
                <div className="w-2 h-2 bg-[#0c1a2e] rounded-full" />
              </div>
              <div className="flex-1 h-px bg-[#edc058]/25" />
            </div>

            {/* Mobile dot */}
            <div className="flex md:hidden items-center gap-3 mb-3">
              <div className="w-4 h-4 bg-[#edc058] rounded-full flex-shrink-0" />
              <div className="flex-1 h-px bg-[#edc058]/25" />
            </div>

            {/* Content */}
            <div className="mt-4 pr-6">
              <time className="block text-[#edc058] font-[family-name:var(--font-Roboto)] text-2xl md:text-3xl font-black mb-1">
                {milestone.date}
              </time>
              <h3 className="font-[family-name:var(--font-Roboto)] text-base md:text-lg font-bold text-white mb-2">
                {milestone.title}
              </h3>
              <p className="text-sm text-gray-400 font-[family-name:var(--font-Cabin)] leading-relaxed whitespace-normal break-words">
                {milestone.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
