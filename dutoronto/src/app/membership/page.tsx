"use client";
import H1 from "../../../public/images/H1.webp"
import {InstagramFilled, LinkedinFilled } from '@ant-design/icons';

import { useEffect, useRef, useState } from "react";

const quickFacts = [
  { label: "Chartered", value: "December 4, 1899" },
  { label: "Motto", value: 'Δικαια Υποθηκη - "Justice Our Foundation"' },
  { label: "Nickname", value: "GOAT, Delta Upsilon members are Goats baaaah" },
  { label: "Colors", value: "Old Gold & Sapphire Blue" },
  { label: "Mascot", value: "Mallard Duck" },
  { label: "Headquarters", value: "8705 Founders Road, Indianapolis, IN, USA" },
  { label: "Mission", value: "Building Better Men" },
  { label: "Prime Minister's of Canada", value: "1" },
];

const faqs = [
  {
    question: "What is Delta Upsilon?",
    answer: "Delta Upsilon is a non-secret, non-hazing international fraternity focused on building better men through shared values and brotherhood.",
  },
  {
    question: "Is membership open to all students?",
    answer: "Yes! We value diversity and welcome all students who align with our mission and values.",
  },
  {
    question: "What makes DU different from other fraternities?",
    answer: "We are the only international fraternity to be non-secret since our founding in 1834. Our mission and Four Founding Principles guide all our decisions.",
  },
  {
    question: "How do I join?",
    answer: "You can reach out during our recruitment period, attend events, and connect with current brothers to learn more.",
  },
];

const FAQSection = () => {
  const [featuredIndex, setFeaturedIndex] = useState<number | null>(null);

  const featuredFaq = featuredIndex !== null ? faqs[featuredIndex] : null;

  return (
    <section className="w-full px-4 py-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[color:var(--color-primary)] uppercase">
        Frequently Asked Questions
      </h2>

      {/* Featured FAQ (spans full width above grid) */}
      {featuredFaq && (
  <div
    className="mb-10 bg-blue-50 border border-blue-200 shadow-md rounded-xl px-6 py-6 transition-all duration-500 ease-out animate-fade-in-up"
    key={featuredIndex} // ensures re-animation on change
  >
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-2xl md:text-3xl font-bold text-blue-800 max-w-4xl">
        {featuredFaq.question}
      </h3>
      <button
        className="text-sm text-blue-600 hover:underline"
        onClick={() => setFeaturedIndex(null)}
      >
        Close
      </button>
    </div>
    <p className="text-base md:text-lg text-gray-700 max-w-4xl">
      {featuredFaq.answer}
    </p>
  </div>
)}

      {/* Grid of FAQs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => setFeaturedIndex(index)}
            className="cursor-pointer border border-gray-200 rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 px-4 py-5 transition-all duration-300"
          >
            <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const QuickFactsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(quickFacts.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          quickFacts.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }, index * 150); // stagger delay
          });

          observer.disconnect(); // only run once
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-white py-12 flex justify-center items-center">
      <div ref={ref} className="max-w-4xl w-full px-4">
        <h2 className="text-left text-3xl md:text-4xl font-bold text-[color:var(--color-primary)] uppercase mb-8">
          Quick Facts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16 text-gray-800 text-left">
          {quickFacts.map(({ label, value }, index) => (
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
    <div className="flex flex-col items-center px-6 py-12 bg-gray text-center w-full">
      <h2 className="text-3xl font-bold mb-2 text-[color:var(--color-secondary)]">The DU Difference.</h2>
      <p className="text-gray-600 max-w-2xl mb-8">
        Delta Upsilon's principles have shaped thoughtful leaders, prominent scholars, and driven students. Our impact is built on real actions that leave a lasting mark on campus and beyond.
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

  const [featured, setFeatured] = useState<null | number>(null);

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

      <FAQSection/>

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
          src="/images/Coat of Arms.webp"
          alt="Delta Upsilon Coat of Arms"
          className="md:flex-1 h-42 md:h-58 my-2 md:mt-5"
          style={{ objectFit: "contain" }}
        />
      </section>

      <QuickFactsSection/>

      <ImpactSection/>
        
      <hr className="w-full h-[1.5px] bg-secondary"/> 
      {/* <Reviews/> */}

    </main>
  );
}