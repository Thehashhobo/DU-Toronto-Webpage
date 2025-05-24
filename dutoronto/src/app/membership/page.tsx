"use client";

import ContactForm from "@/components/ContactForm";
import H1 from "../../../public/images/H1.jpg"
import {InstagramFilled, LinkedinFilled } from '@ant-design/icons';

import { useEffect, useRef } from "react";

const ImpactSection = () => {
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLButtonElement>(".tab-btn");
    const contents = document.querySelectorAll<HTMLElement>(".tab-content");
    const underline = underlineRef.current;

    const updateUnderline = (button: HTMLElement) => {
      if (underline) {
        underline.style.width = `${button.offsetWidth}px`;
        underline.style.left = `${button.offsetLeft}px`;
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
  
    // Ensure all event listeners are attached first
    setTimeout(() => {
      const defaultTab = document.querySelector<HTMLButtonElement>(".tab-btn[data-tab='lead']");
      if (defaultTab) defaultTab.click();
    }, 0);
  }, []);

  return (
    <div className="flex flex-col items-center px-6 py-12 bg-white text-center w-full">
      <h2 className="text-3xl font-bold mb-2 text-[color:var(--color-secondary)]">The Delta Upsilon Difference.</h2>
      <p className="text-gray-600 max-w-2xl mb-8">
        We have shaped thoughtful leaders, prominent scholars, and driven students. Our impact is built on real actions that leave a lasting mark on campus and beyond.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
            <div className="bg-gray-900 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-4xl font-bold mb-2">20+</h3>
              <p className="text-lg">CEOs/Presidents of Major Businesses</p>
            </div>
            <div className="bg-gray-900 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-4xl font-bold mb-2">6</h3>
              <p className="text-lg">
                Nobel Laureates
              </p>
            </div>
            <div className="bg-gray-900 text-white p-6 rounded-xl shadow-md col-span-3">
              <p className="text-lg">At DU, leadership is not about titles — it's about action. Whether it's planning an event, mentoring a new member, or being President, we challenge each Brother to make a difference in any way they can. At our Chapter, leadership is a habit, not a hierarchy.</p>
            </div>
          </div>
        </div>

        <div className="tab-content hidden" id="edge">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
          <div className="bg-gray-900 text-white p-6 rounded-xl shadow-md col-span-3">
              <p className="text-lg">College is your launchpad, and we help build momentum. Dedicated study hours and alumni networking to workshops on academic or financial literacy, we give the tools for you to grow in and out of the classroom. Brotherhood at DU means pushing each other to do better together.</p>
            </div>
            <div className="bg-gray-900 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-4xl font-bold mb-2">3.79</h3>
              <p className="text-lg">Chapter cGPA (24-25)</p>
            </div>
            <div className="bg-gray-900 text-white p-6 rounded-xl shadow-md col-span-2">
              <h3 className="text-4xl font-bold mb-2">20+</h3>
              <p className="text-lg">
                Different specialists, majors, or minors represented
              </p>
            </div>
            
          </div>
        </div>

        <div className="tab-content hidden" id="bonds">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
            <div className="bg-gray-900 text-white p-6 rounded-xl shadow-md col-span-2">
              <h3 className="text-4xl font-bold mb-2">1100+</h3>
              <p className="text-lg">Total initiated Brothers at Delta Upsilon Toronto Chapter</p>
            </div>
            <div className="bg-gray-900 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-4xl font-bold mb-2">40+</h3>
              <p className="text-lg">
                Active Brothers
              </p>
            </div>
            <div className="bg-gray-900 text-white p-6 rounded-xl shadow-md col-span-3">
              <p className="text-lg">Brotherhood at Delta Upsilon isn't when you get initiated — it begins the moment you walk in the door. From late-night conversations to international trips, the relationships built here are real, rooted, and enduring. We’re not just a fraternity, we’re a family for life.</p>
            </div>
          </div>
        </div>

        <div className="tab-content hidden" id="good">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
          <div className="bg-gray-900 text-white p-6 rounded-xl shadow-md col-span-2">
              <p className="text-lg">Every Brother is expected to serve. Not out of obligation, but out of conviction. Turoting local students, organizing fundraisers, or cleaning up the neighbourhood, our impact is felt far beyond campus. At DU, doing good is who we are.</p>
            </div>
            <div className="bg-gray-900 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-4xl font-bold mb-2">$100,000+</h3>
              <p className="text-lg">Donated every year across all Chapters to Delta Upsilon's own Philanthropy (GSI)</p>
            </div>
            <div className="bg-gray-900 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-4xl font-bold mb-2">15+</h3>
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

export default function Membership() { 

  return (
    <main className="flex flex-col min-h-screen justify-start items-start">
      <section
        className="relative w-full h-[60vh] md:h-[100vh] bg-cover bg-center justify-start overflow-hidden"
        style={{backgroundImage: `url(${H1.src})`}}
      >
        {/* Overlay and Content */}
        <div className="font-[family-name:var(--font-Roboto)] relative z-10 flex flex-col pt-18 md:pt-1 items-center justify-center h-full text-white bg-black/60">
          {/* <p className="text-3xl text-[#ffffffd6] text-center mt-2 mb-2 ml-0.5 mr-0.5 relative -translate-y-3">
             
          </p> */}
          <h1 className="font-[family-name:var(--font-Roboto)] text-4xl uppercase text-center font-bold md:text-7xl ml-0.5 mr-0.5 relative -translate-y-3">
            Why DU?
          </h1>
          {/* <p className="font-[family-name:var(--font-Roboto)] text-primary text-2xl text-center mt-2 ml-0.5 mr-0.5 relative -translate-y-3">
            Share a Home with your Brothers
          </p> */}
        </div>
      

      </section>

      {/* Coat of Arms */}
      <section className="flex flex-col md:flex-row w-[90%] h-[56vh] md:h-[36vh] mx-auto text-[color:var(--textColor)]">
        <div className="flex flex-col md:self-center md:flex-4 mt-5 md:mr-0 md:mb-5 md:ml-5 border-1 p-3 md:p-10 border-secondary">
          <h2 className="text-xl md:text-4xl font-[family-name:var(--font-Roboto)] font-bold text-textColor">
            Delta Upsilon is not your typical fraternity. Our non-secret heritage and our dedication to creating a modern fraternity experience help us in{' '}
            <span className="font-[family-name:var(--font-Cabin)] border-b-4 text-[color:var(--color-primary)]">
              Building Better Men
            </span>
          </h2>
          <p className="text-lg md:text-xl font-[family-name:var(--font-Roboto)] font-bold text-[#012d69] mt-2">
            Fraternity membership is one of the most valuable extra-curricular experiences
          </p>
        </div>
        
        <img
          src="/images/Coat of Arms.png"
          alt="Delta Upsilon Coat of Arms"
          className="md:flex-1 h-42 md:h-58 my-2 md:mt-5"
          style={{ objectFit: "contain" }}
        />
      </section>

      <ImpactSection/>
        
      <hr className="w-full h-[1.5px] bg-secondary"/> 
      {/* <Reviews/> */}

    </main>
  );
}