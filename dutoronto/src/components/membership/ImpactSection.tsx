"use client";
import React, { useEffect, useRef } from "react";

interface ImpactStat {
  value: string;
  description: string;
  isFullWidth?: boolean;
}

interface ImpactTabContent {
  id: string;
  label: string;
  description: string;
  stats: ImpactStat[];
}

const impactTabContents: ImpactTabContent[] = [
  {
    id: "lead",
    label: "Lead With Purpose",
    description:
      "At DU, leadership is not about titles — it's about action. Whether it's planning an event, mentoring a new member, or being President, we challenge each Brother to make a difference in any way they can. At our Chapter, leadership is a habit, not a hierarchy.",
    stats: [
      { value: "20+", description: "Presidents of Major Businesses" },
      { value: "7", description: "Nobel Prizes" },
    ],
  },
  {
    id: "edge",
    label: "Sharpen Your Edge",
    description:
      "College is your launchpad, and we help build momentum. Dedicated study hours and alumni networking to workshops on academic or financial literacy, we give the tools for you to grow in and out of the classroom. Brotherhood at DU means pushing each other to do better together.",
    stats: [
      { value: "3.62", description: "Chapter cGPA (24-25)" },
      { value: "20+", description: "Different specialists, majors, or minors represented" },
    ],
  },
  {
    id: "bonds",
    label: "Forge Lifelong Bonds",
    description:
      "Brotherhood at Delta Upsilon isn't when you get initiated — it begins the moment you walk in the door. From late-night conversations to international trips, the relationships built here are real, rooted, and enduring. We're not just a fraternity, we're a family for life.",
    stats: [
      { value: "1100+", description: "Total initiated Brothers at Toronto Chapter" },
      { value: "40+", description: "Active Brothers" },
    ],
  },
  {
    id: "good",
    label: "Be a Force for Good",
    description:
      "Every Brother is expected to serve. Not out of obligation, but out of conviction. Tutoring local students, organizing fundraisers, or cleaning up the neighbourhood, our impact is felt far beyond campus. At DU, doing good is who we are.",
    stats: [
      { value: "$100,000+", description: "Donated every year across all Chapters to Delta Upsilon's own Philanthropy (GSI)" },
      { value: "10+", description: "Average annual service hours per Brother at the Toronto Chapter" },
    ],
  },
];

const ImpactSection = () => {
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLButtonElement>(".tab-btn");
    const contents = document.querySelectorAll<HTMLElement>(".tab-content");
    const underline = underlineRef.current;
    let selectedButton: HTMLElement | null = null;

    const updateUnderline = (button: HTMLElement) => {
      selectedButton = button;
      if (underline) {
        underline.style.width = `${button.offsetWidth}px`;
        underline.style.left = `${button.offsetLeft}px`;
      }
    };

    const handleResize = () => {
      if (selectedButton && underline) {
        underline.style.width = `${selectedButton.offsetWidth}px`;
        underline.style.left = `${selectedButton.offsetLeft}px`;
      }
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => {
          btn.classList.remove("text-[#edc058]", "font-semibold");
          btn.setAttribute("aria-selected", "false");
        });
        contents.forEach((c) => c.classList.add("hidden"));
        document.getElementById(button.dataset.tab!)?.classList.remove("hidden");
        button.classList.add("text-[#edc058]", "font-semibold");
        button.setAttribute("aria-selected", "true");
        updateUnderline(button);
      });
    });

    window.addEventListener("resize", handleResize);
    setTimeout(() => {
      document.querySelector<HTMLButtonElement>(".tab-btn[data-tab='lead']")?.click();
    }, 0);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full bg-[#f8f7f0] py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Header */}
        <p className="eyebrow text-[#0F52BA]/60 mb-3">Why DU?</p>
        <h2 className="font-[family-name:var(--font-Roboto)] text-3xl md:text-4xl font-black text-[#1a1a2e] mb-3 uppercase tracking-tight">
          The DU Difference.
        </h2>
        <p className="font-[family-name:var(--font-Cabin)] text-gray-500 max-w-2xl mx-auto mb-10 text-base">
          Delta Upsilon&apos;s principles have shaped thoughtful leaders, prominent scholars, and driven students.
          Our impact is built on real actions that leave a lasting mark on campus and beyond.
        </p>

        {/* Tab nav */}
        <div className="relative border-b border-gray-200 mb-10">
          <div className="flex flex-wrap justify-center gap-1" role="tablist">
            {impactTabContents.map((tab) => (
              <button
                key={tab.id}
                className="cursor-pointer tab-btn pb-3 px-4 text-sm font-[family-name:var(--font-Cabin)] font-medium text-gray-500 hover:text-[#edc058] transition-colors whitespace-nowrap"
                data-tab={tab.id}
                role="tab"
                aria-selected="false"
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div ref={underlineRef} className="absolute bottom-0 h-0.5 bg-[#edc058] transition-all duration-300 ease-in-out" />
        </div>

        {/* Tab content */}
        <div className="w-full">
          {impactTabContents.map((tab) => (
            <div key={tab.id} className={`tab-content ${tab.id === "lead" ? "" : "hidden"}`} id={tab.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {/* Description box */}
                <div className="bg-[#0c1a2e] text-white p-5 md:col-span-2 text-left">
                  <p className="font-[family-name:var(--font-Cabin)] text-sm md:text-base leading-relaxed">
                    {tab.description}
                  </p>
                </div>
                {/* Stat boxes */}
                {tab.stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`bg-[#0c1a2e] text-white p-5 text-left ${stat.isFullWidth ? "md:col-span-2" : ""}`}
                  >
                    <h3 className="font-[family-name:var(--font-Roboto)] text-3xl md:text-4xl font-black text-[#edc058] mb-1">
                      {stat.value}
                    </h3>
                    <p className="font-[family-name:var(--font-Cabin)] text-sm text-gray-300">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
