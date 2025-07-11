/**
 * @file Contains FAQ section component for the Delta Upsilon Toronto website.
 * It displays a list of frequently asked questions and their answers in an accordion style.
 */

"use client"; // This file uses React hooks, so it must be a client component

import { useState } from "react";

/**
 * @interface FAQ
 * @description Represents a single FAQ item with a question and answer.
 * @property {string} question - The question being asked.
 * @property {string} answer - The answer to the question.
 */
interface FAQ {
  question: string;
  answer: string;
}

/**
 * @constant faqs
 * @description An array of FAQ items that will be displayed in the FAQ section.
 * Each item contains a question and its corresponding answer.
 * @type {FAQ[]}
 */
const faqs: FAQ[] = [
  {
  question: "How Can I Join Delta Upsilon?",
  answer: "You can join Delta Upsilon by attending our recruitment events, where you’ll get to know our brothers and learn more about our values. You can also reach out to our Recruitment Chair directly, we’re always excited to connect with potential new members.",

  },
  {
  question: "What is Rush?",
  answer:
    '"Rush", or our main recruitment period, occurs during August/September and December/January and it is when you receive an invitation, but we recruit all year round for prospective members. Follow us on social media to check for dates and events!',
  },
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
    question: "Is there a financial cost to join?",
    answer:
      "Yes. Like all other organizations, DU does have 'Dues' which cover Chapter activities, national fees, and house maintenance.",
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
      "Positively. Our Chapter requires members to maintain a minimum cGPA and we offer support to those who need it. Many of our Brothers are in competitive programs.",
  },
  {
    question: "Is hazing allowed?",
    answer:
      "No. We are a Non-Hazing fraternity and hazing is strictly prohibited. We promote a safe and respectful environment.",
  },
  {
    question: "How can I learn more or get involved?",
    answer:
      "Come to a recruitment event, reach out to our recruitment chair, or fill out the rush form in our Instagram, @dutoronto, bio.",
  },
];

/**
 * @function FaqItem
 * @description Represents a single FAQ item component that displays a question and answer in an accordion style.
 * It uses React hooks to manage the open/closed state of the answer panel.
 * @param {FAQ} props - The FAQ item containing a question and answer.
 * @param {string} props.question - The question to display.
 * @param {string} props.answer - The answer to display.
 * @returns {JSX.Element} The rendered FAQ item component.
 */
const FaqItem = ({ question, answer }: FAQ) => {
  /**
   * @property {boolean} isOpen - State to track whether the answer panel is open or closed.
   * @property {function} setIsOpen - Function to update the isOpen state.
   */
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      id="faq"
      className={`scroll-mt-50 mb-6 w-full self-start rounded-sm border border-gray-200 bg-white shadow-sm transition-colors duration-200 ${
        isOpen ? "bg-blue-50" : "hover:bg-blue-50"
      }`}
    >
      {/* Button to toggle answer visibility */}
      <button
        onClick={() => setIsOpen(o => !o)}
        aria-expanded={isOpen}
        className="w-full p-4 items-center cursor-pointer focus:outline-none min-h-22 text-center">
        <span className="text-lg text-gray-900 text-center">
          {question}
        </span>

      </button>

      {/* Answer and animates visibility */}
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

/**
 * @function FAQSection
 * @description Represents the FAQ section component that displays a grid of FAQ items.
 * It maps over the faqs array and renders each FaqItem component.
 * @returns {JSX.Element} The rendered FAQ section component.
 */
const FAQSection = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-8 text-center text-3xl font-extrabold uppercase tracking-wide text-gray-900">
        Frequently Asked Questions
      </h2>

      {/* Grid container for the FAQ items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-start">
        {faqs.map((faq) => (
          <FaqItem key={faq.question} {...faq} />
        ))}
      </div>
    </section>
  )
}

/**
 * @exports FAQSection
 * @description Exports the FAQSection component.
 */
export default FAQSection;