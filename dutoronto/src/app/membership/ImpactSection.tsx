"use client";
import React, { useEffect, useRef } from "react";

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
    
      window.addEventListener("resize", handleResize);
    
      setTimeout(() => {
        const defaultTab = document.querySelector<HTMLButtonElement>(".tab-btn[data-tab='lead']");
        if (defaultTab) defaultTab.click();
      }, 0);
    
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return (
      <div className="flex flex-col items-center px-6 py-12 bg-white text-center w-full">
        <h2 className="text-3xl font-bold mb-2 text-[color:var(--color-secondary)]">The DU Difference.</h2>
        <p className="text-gray-600 max-w-2xl mb-8">
          Delta Upsilon&apos;s principles have shaped thoughtful leaders, prominent scholars, and driven students. Our impact is built on real actions that leave a lasting mark on campus and beyond.
        </p>
  
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
  
        <div className="w-full">
          <div className="tab-content" id="lead">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 w-full max-w-4xl mx-auto">
  
              <div className="bg-gray-900 text-white p-3 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold mb-2">20+</h3>
                <p className="text-lg">Presidents of Major Businesses</p>
              </div>
              <div className="bg-gray-900 text-white p-3 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold mb-2">7</h3>
                <p className="text-lg">
                Nobel Prizes
                </p>
              </div>
                        <div className="bg-gray-900 text-white p-3 rounded-lg shadow-md col-span-2">
                <p className="text-lg">At DU, leadership is not about titles — it&apos;s about action. Whether it&apos;s planning an event, mentoring a new member, or being President, we challenge each Brother to make a difference in any way they can. At our Chapter, leadership is a habit, not a hierarchy.</p>
              </div>
            </div>
          </div>
  
          <div className="tab-content hidden" id="edge">
            <div className="grid grid-cols-2 gap-3 w-full max-w-4xl mx-auto">
            <div className="bg-gray-900 text-white p-3 rounded-lg shadow-md col-span-2">
                <p className="text-lg">College is your launchpad, and we help build momentum. Dedicated study hours and alumni networking to workshops on academic or financial literacy, we give the tools for you to grow in and out of the classroom. Brotherhood at DU means pushing each other to do better together.</p>
              </div>
              <div className="bg-gray-900 text-white p-3 rounded-lg shadow-md">
                <h3 className="text-4xl font-bold mb-2">3.62</h3>
                <p className="text-lg">Chapter cGPA (24-25)</p>
              </div>
              <div className="bg-gray-900 text-white p-3 rounded-lg shadow-md">
                <h3 className="text-4xl font-bold mb-2">20+</h3>
                <p className="text-lg">
                  Different specialists, majors, or minors represented
                </p>
              </div>
              
            </div>
          </div>
  
          <div className="tab-content hidden" id="bonds">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-4xl mx-auto">
              <div className="bg-gray-900 text-white p-3 rounded-lg shadow-md col-span-2">
                <h3 className="text-4xl font-bold mb-2">1100+</h3>
                <p className="text-lg">Total initiated Brothers at Delta Upsilon Toronto Chapter</p>
              </div>
              <div className="bg-gray-900 text-white p-3 rounded-lg shadow-md">
                <h3 className="text-4xl font-bold mb-2">40+</h3>
                <p className="text-lg">
                  Active Brothers
                </p>
              </div>
              <div className="bg-gray-900 text-white p-3 rounded-lg shadow-md col-span-3">
                <p className="text-lg">Brotherhood at Delta Upsilon isn&apos;t when you get initiated — it begins the moment you walk in the door. From late-night conversations to international trips, the relationships built here are real, rooted, and enduring. We’re not just a fraternity, we’re a family for life.</p>
              </div>
            </div>
          </div>
  
          <div className="tab-content hidden" id="good">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 w-full max-w-4xl mx-auto">
            <div className="bg-gray-900 text-white p-3 rounded-lg shadow-md col-span-2">
                <p className="text-lg">Every Brother is expected to serve. Not out of obligation, but out of conviction. Turoting local students, organizing fundraisers, or cleaning up the neighbourhood, our impact is felt far beyond campus. At DU, doing good is who we are.</p>
              </div>
              <div className="bg-gray-900 text-white p-3 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold mb-2">$100,000+</h3>
                <p className="text-lg">Donated every year across all Chapters to Delta Upsilon&apos;s own Philanthropy (GSI)</p>
              </div>
              <div className="bg-gray-900 text-white p-3 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold mb-2">10+</h3>
                <p className="text-lg">
                Average annual service hours per Brother at the Toronto Chapter
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ImpactSection;