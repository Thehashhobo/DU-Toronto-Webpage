/**
 * @file This file contains the QuickFactsSection component for the Delta Upsilon Toronto website.
 * It displays a list of quick facts about the fraternity in a visually appealing manner.
 */

"use client"; // This file uses React hooks, so it must be a client component

import React, { useEffect, useRef, useState } from "react";

/**
 * @inteface QuickFact
 * @description Defines structure for a single quick fact item.
 * @property {string} label - The title of the quick fact.
 * @property {string} value - The fact.
 */
interface QuickFact {
  label: string;
  value: string;
}

/**
 * @constant quickFacts
 * @description An array of quick facts.
 * Data is displayed in quick facts section.
 * @type {QuickFact[]}
 */
const quickFacts: QuickFact[] = [
  { label: "Chartered", value: "December 4, 1899" },
  { label: "Motto", value: 'Δικαια Υποθηκη - "Justice Our Foundation"' },
  { label: "Location", value: "182 St. George St" },
  { label: "Colors", value: "Old Gold & Sapphire Blue" },
  { label: "Mascot", value: "Mallard Duck" },
  { label: "Headquarters", value: "8705 Founders Road, Indianapolis, IN, USA" },
  { label: "Mission", value: "Building Better Men" },
  { label: "Prime Minister's of Canada", value: "1" },
];

/**
 * @function QuickFactsSection
 * @description Represents the QuickFactsSection component that displays a grid of quick facts.
 * It uses an Intersection Observer to animate the appearance of each fact as it comes into view.
 * @returns {JSX.Element} The rendered QuickFactsSection component.
 */
const QuickFactsSection = () => {
  /**
   * @constant ref
   * @description A reference to the section element that will be observed for visibility.
   */
  const ref = useRef<HTMLDivElement>(null);

  /**
   * @property {boolean[]} visibleItems - State to track which quick facts are visible.
   * @property {function} setVisibleItems - Function to update the visibility state of quick facts.
   */
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(quickFacts.length).fill(false));

  /**
   * @hook useEffect
   * @description Sets up an Intersection Observer to detect when the QuickFactsSection comes into view.
   * When the section is visible, it animates the appearance of each quick fact with a staggered delay.
   * Observer disconnects after first visibility.
   */
  useEffect(() => {
    /**
     * @constant observer
     * @description An Intersection Observer that watches the section element.
     * It triggers animations for each quick fact when the section is in view.
     * Observers ref.current element and updates visibility state of quick facts.
     */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          quickFacts.forEach((_, index) => {
            // Stagger the visibility of each item
            setTimeout(() => {
              setVisibleItems((prev) => {
                const updated = [...prev];
                updated[index] = true; // Set the item to visible
                return updated;
              });
            }, index * 150); // Stagger delay
          });

          observer.disconnect(); // Disconnect observer after first visibility
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    // Start looking, shall we?
    if (ref.current) observer.observe(ref.current);

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-white py-12 flex justify-center items-center">
      {/* Section container with max width and padding */}
      {/* The ref is attached to the container to observe its visibility */}
      <div ref={ref} className="max-w-4xl w-full px-4">
        <h2 className="text-left text-3xl md:text-4xl font-bold text-[color:var(--color-primary)] uppercase mb-8">
          Quick Facts
        </h2>

        {/* Grid container for the quick facts .
         * 1 column on small screens, 2 columns on larger screens.
         */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16 text-gray-800 text-left">
          {quickFacts.map(({ label, value }, index) => (
            /**
             * Each individual quick fact item.
             */
            <div
              key={label}
              className={`transition-all duration-700 ease-out transform ${
                visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              } flex flex-col space-y-1 relative pl-4 border-l border-[color:var(--color-primary)]`}
            >
              <span className="text-lg font-semibold">{label}</span>
              <span className="text-base text-gray-600">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * @exports QuickFactsSection
 * @description Exports the QuickFactsSection component.
 */
export default QuickFactsSection;