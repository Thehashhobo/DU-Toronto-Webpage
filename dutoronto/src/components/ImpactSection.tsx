/**
 * @file Contains the ImpactSection component that displays the impact of Delta Upsilon.
 * 
 * Inspired by Adobe About page, see https://www.adobe.com/about-adobe.html.
 */

"use client"; // This file uses React hooks, so it must be a client component

import React, { useEffect, useRef } from "react";

/**
 * @interface ImpactStat
 * @description Defines the structure for a single statistical fact or number displayed in a tab.
 * @property {string} value - The numerical or quantitative value of the statistic (e.g., "20+", "3.62").
 * @property {string} description - A textual description explaining what the value represents.
 * @property {boolean} [isFullWidth] - Optional. If true, this stat item will span the full width of its grid column.
 */
interface ImpactStat {
  value: string;
  description: string;
  isFullWidth?: boolean; // Optional property for items that span 2 columns
}

/**
 * @interface ImpactTabContent
 * @description Defines the structure for the content of a single tab in the Impact Section.
 * @property {string} id - The unique identifier for the tab (e.g., "lead", "edge"). This links to the tab button.
 * @property {string} description - The main descriptive paragraph for this tab.
 * @property {ImpactStat[]} stats - An array of statistical facts to display within this tab.
 */
interface ImpactTabContent {
  id: string;
  description: string;
  stats: ImpactStat[];
}

/**
 * @constant impactTabContents
 * @description An array containing the data for each tab in the Impact Section.
 * Each object represents a tab, including its ID, a descriptive paragraph, and
 * a list of associated statistical facts.
 * @type {ImpactTabContent[]}
 */
const impactTabContents: ImpactTabContent[] = [
  {
    id: "lead",
    description: "At DU, leadership is not about titles — it's about action. Whether it's planning an event, mentoring a new member, or being President, we challenge each Brother to make a difference in any way they can. At our Chapter, leadership is a habit, not a hierarchy.",
    stats: [
      { value: "20+", description: "Presidents of Major Businesses" },
      { value: "7", description: "Nobel Prizes" },
    ],
  },
  {
    id: "edge",
    description: "College is your launchpad, and we help build momentum. Dedicated study hours and alumni networking to workshops on academic or financial literacy, we give the tools for you to grow in and out of the classroom. Brotherhood at DU means pushing each other to do better together.",
    stats: [
      { value: "3.62", description: "Chapter cGPA (24-25)" },
      { value: "20+", description: "Different specialists, majors, or minors represented" },
    ],
  },
  {
    id: "bonds",
    description: "Brotherhood at Delta Upsilon isn't when you get initiated — it begins the moment you walk in the door. From late-night conversations to international trips, the relationships built here are real, rooted, and enduring. We’re not just a fraternity, we’re a family for life.",
    stats: [
      { value: "1100+", description: "Total initiated Brothers at Toronto Chapter"},
      { value: "40+", description: "Active Brothers" },
    ],
  },
  {
    id: "good",
    description: "Every Brother is expected to serve. Not out of obligation, but out of conviction. Tutoring local students, organizing fundraisers, or cleaning up the neighbourhood, our impact is felt far beyond campus. At DU, doing good is who we are.",
    stats: [
      { value: "$100,000+", description: "Donated every year across all Chapters to Delta Upsilon's own Philanthropy (GSI)" },
      { value: "10+", description: "Average annual service hours per Brother at the Toronto Chapter" },
    ],
  },
];

/**
 * @function ImpactSection
 * @description Represents the ImpactSection component that displays the impact of Delta Upsilon.
 * It includes tabs for different impact areas and dynamically updates the content based on the selected tab.
 * This component uses a tabbed interface with an animated underline to indicate the active tab.
 * It also handles window resizing to adjust the underline position and width accordingly.
 * @returns {JSX.Element} The rendered ImpactSection component.
 */
const ImpactSection = () => {
  /**
   * @constant underlineRef
   * @description A reference to the underline element that visually indicates the active tab.
   * This is used to dynamically adjust the position and width of the underline based on the active tab.
   * @type {React.RefObject<HTMLDivElement>}
   */
  const underlineRef = useRef<HTMLDivElement>(null);

  /**
   * @hook useEffect
   * @description Sets up the tab functionality for the ImpactSection component.
   * Sets default active tab, handles tab switching, and updates the underline position and width.
   */
  useEffect(() => {
    // Select all tab buttons and contents
    const buttons = document.querySelectorAll<HTMLButtonElement>(".tab-btn");
    const contents = document.querySelectorAll<HTMLElement>(".tab-content");
    const underline = underlineRef.current;
    
    /**
     * @var {HTMLElement | null} selectedButton
     * @description Keeps track of the currently selected tab button.
     * This is used to update the underline position and width when a tab is clicked.
     */
    let selectedButton: HTMLElement | null = null;
    
    /**
     * @function updateUnderline
     * @description Updates the position and width of the underline based on the selected tab button.
     * @param {HTMLElement} button - The currently selected tab button.
     */
    const updateUnderline = (button: HTMLElement) => {
      selectedButton = button;
      if (underline) {
        underline.style.width = `${button.offsetWidth}px`;
        underline.style.left = `${button.offsetLeft}px`;
      }
    };
  
    /**
     * @function handleResize
     * @description Adjusts the underline position and width when the window is resized.
     */
    const handleResize = () => {
      if (selectedButton && underline) {
        underline.style.width = `${selectedButton.offsetWidth}px`;
        underline.style.left = `${selectedButton.offsetLeft}px`;
      }
    };
    
    /**
     * @description Adds click event listeners to each tab button.
     * When a button is clicked, it updates the active tab, hides all contents, and shows the corresponding content.
     */
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => {
          btn.classList.remove("text-blue-700", "font-semibold");
          btn.setAttribute("aria-selected", "false");
        });
  
        contents.forEach((content) => content.classList.add("hidden"));
  
        const tabId = button.dataset.tab!;
        document.getElementById(tabId)?.classList.remove("hidden");
  
        button.classList.add("text-blue-700", "font-semibold");
        button.setAttribute("aria-selected", "true");
        updateUnderline(button);
      });
    });
    
    // The resize listener.
    window.addEventListener("resize", handleResize);
    
    /**
     * @description Sets initial active tab and updates the underline position.
     * This is done after a short delay to ensure the DOM is fully rendered.
     */
    setTimeout(() => {
      const defaultTab = document.querySelector<HTMLButtonElement>(".tab-btn[data-tab='lead']");
      if (defaultTab) defaultTab.click();
    }, 0);
    
    /**
     * @returns {function} A cleanup function that removes the resize event listener.
     */
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center px-6 py-6 bg-white text-center w-full">
      {/* Section title and description */}
      <h2 className="text-3xl font-bold pb-4 text-[color:var(--color-secondary)]">The DU Difference.</h2>
      <p className="text-gray-600 max-w-2xl mb-8">
        Delta Upsilon&apos;s principles have shaped thoughtful leaders, prominent scholars, and driven students. Our impact is built on real actions that leave a lasting mark on campus and beyond.
      </p>

      {/* Tab navigation with underline */}
      <div className="relative w-full border-b border-gray-300 mb-8">
        <div className="flex justify-center space-x-6" role="tablist">
          <button className="tab-btn pb-2 font-medium text-gray-600 hover:text-blue-700 transition" data-tab="lead" role="tab" aria-selected="false">
            Lead With Purpose
          </button>
          <button className="tab-btn pb-2 font-medium text-gray-600 hover:text-blue-700 transition" data-tab="edge" role="tab" aria-selected="false">
            Sharpen Your Edge
          </button>
          <button className="tab-btn pb-2 font-medium text-gray-600 hover:text-blue-700 transition" data-tab="bonds" role="tab" aria-selected="false">
            Forge Lifelong Bonds
          </button>
          <button className="tab-btn pb-2 font-medium text-gray-600 hover:text-blue-700 transition" data-tab="good" role="tab" aria-selected="false">
            Be a Force for Good
          </button>
        </div>
        <div ref={underlineRef} className="tab-underline absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out"></div>
      </div>

      {/* Tab content sections */}
      <div className="w-full">
        {/* Tab content for each section */}
        <div className="w-full">
          {/* Map through content and display. */}
          {impactTabContents.map((tab) => (
            <div key={tab.id} className={`tab-content ${tab.id === 'lead' ? '' : 'hidden'}`} id={tab.id}>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3 w-full max-w-4xl mx-auto">
                <div className="bg-gray-900 text-white p-3 rounded-lg shadow-md col-span-2">
                  <p className="text-lg">{tab.description}</p>
                </div>
                {tab.stats.map((stat, statIndex) => (
                  <div
                    key={statIndex} // Using index as key
                    className={`bg-gray-900 text-white p-3 rounded-lg shadow-md ${stat.isFullWidth ? 'col-span-2' : ''}`}
                  >
                    <h3 className="text-3xl font-bold">{stat.value}</h3>
                    <p className="text-lg">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * @exports ImpactSection
 * @description Exports the ImpactSection component.
 */
export default ImpactSection;