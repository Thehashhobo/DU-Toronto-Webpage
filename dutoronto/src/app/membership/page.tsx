"use client";
import MembershipHeader from "../../../public/images/MembershipHeader.webp";

import { useEffect, useRef, useState } from "react";

const quickFacts = [
  { label: "Chartered", value: "December 4, 1899" },
  { label: "Motto", value: 'Δικαια Υποθηκη - "Justice Our Foundation"' },
  { label: "Location", value: "182 St. George St" },
  { label: "Colors", value: "Old Gold & Sapphire Blue" },
  { label: "Mascot", value: "Mallard Duck" },
  { label: "Headquarters", value: "8705 Founders Road, Indianapolis, IN, USA" },
  { label: "Mission", value: "Building Better Men" },
  { label: "Prime Minister's of Canada", value: "1" },
];

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is Delta Upsilon?",
    answer:
      "Founded in 1834, Delta Upsilon is the sixth oldest fraternity and first non-secret fraternity. Being a Social Fraternity, DU is an international men's organization focused on its four founding principles. The Toronto chapter upholds these values.",
  },
  {
    question: "Who can join Delta Upsilon?",
    answer:
      "We welcome all undergraduate men from all Toronto universities who are looking for community, leadership development, and a better university experience.",
  },
  {
    question: "What is Rush?",
    answer:
      '"Rush", or our main recruitment period, occurs during August/September and December/January and it is when you receive an invitation, but we recruit all year round for prospective members. Follow us on social media to check for dates and events!',
  },
  {
    question: "Do I have to live in the fraternity house to join?",
    answer:
      "No. Living in the house is completely optional and subject to availability. Many of our members live off-campus or in residence, but many do choose to live in the House because of its cheaper price.",
  },
  {
    question: "Is there a financial cost to join?",
    answer:
      "Yes. Like all other organizations, DU does have 'Dues' which cover Chapter activities, national fees, and house maintenance. We have the lowest dues on campus as we strive to prevent finances from being a boundary to membership.",
  },
  {
    question: "What kind of events do you host?",
    answer:
      "We host a wide variety of events, including social mixers, formals, philanthropy fundraisers, professional development talks, professor speeches, workshops/seminars, and brotherhood retreats.",
  },
  {
    question: "What sort of time commitment is required?",
    answer:
      "Brothers typically attend weekly meetings and participate in 1-2 events per week. Generally, the more time you put in the more you'll find the experience rewarding.",
  },
  {
    question: "What are the benefits of joining?",
    answer:
      "Lifelong brotherhood, leadership opportunities, academic support, alumni networking, community involvement, and memories that last a lifetime.",
  },
  {
    question: "Does the fraternity support academics?",
    answer:
      "Most definitely. We offer mentorship for Junior Brothers who share a program with a Senior Brother alongside tutoring and weekly study sessions. We also recognize academic achievement with awards and scholarships.",
  },
  {
    question: "How will the fraternity affect my GPA?",
    answer:
      "Minimally. Our Chapter requires members to maintain a minimum cGPA and we offer support to those who need it. Many of our Brothers are in competitive programs.",
  },
  {
    question: "Is hazing allowed?",
    answer:
      "No. We are a Non-Hazing fraternity and hazing is strictly prohibited. We promote a safe and respectful environment.",
  },
  {
    question: "How can I learn more or get involved?",
    answer:
      "Come to a recruitment event, or reach out to our recruitment chair!",
  },
];

const FaqItem = ({ question, answer }: FAQ) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`mb-6 w-full self-start rounded-sm border border-gray-200 bg-white shadow-sm transition-colors duration-200 ${
        isOpen ? "bg-blue-50" : "hover:bg-blue-50"
      }`}
    >
      {/* QUESTION BUTTON ─ no text limit, but a baseline height */}
      <button
        onClick={() => setIsOpen(o => !o)}
        aria-expanded={isOpen}
        className="w-full p-4 items-center cursor-pointer focus:outline-none min-h-22 text-center">
        <span className="text-lg text-gray-900 text-center">
          {question}
        </span>

      </button>

      {/* ANSWER PANEL */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100 rounded-b-xl" : "max-h-0 opacity-0"
        }`}
      >
        <p className="p-4 pt-0 text-sm text-gray-700">{answer}</p>
      </div>
    </div>
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
    <div className="flex flex-col items-center px-6 py-12 bg-gray text-center w-full">
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

export default function Membership() { 

  return (
    <main className="flex flex-col min-h-screen justify-start items-start">
      <section
        className="relative w-full h-[50vh] md:h-[40vh] mt-24 md:mt-20 bg-cover justify-start overflow-hidden"
        style={{ backgroundImage: `url(${MembershipHeader.src})`,
                backgroundPosition: "center 10%",}}
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

      <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-8 text-center text-3xl font-extrabold uppercase tracking-wide text-gray-900">
        Frequently Asked Questions
      </h2>

      {/*
        We use `columns-*` utilities to create independent vertical flows.
        `break-inside-avoid` on each item stops them splitting across columns.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-start">
        {faqs.map((faq) => (
          <FaqItem key={faq.question} {...faq} />
        ))}
      </div>
    </section>

      <QuickFactsSection/>

      <ImpactSection/>
        
      <hr className="w-full h-[1.5px] bg-secondary"/> 
      {/* <Reviews/> */}

    </main>
  );
}