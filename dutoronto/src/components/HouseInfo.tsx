"use client";
import { useState } from "react";

const houseInfo = [
  {
    title: "The House",
    content:
      "Secluded in the Annex just north of the university campus, lies 182 St. George, home of the Toronto Chapter of Delta Upsilon. Built in the Worker Cottage style, the house stands out from the Richardsonian-Victorian style that pervades the Annex with its symmetrical stone façade and Greek pillars. The house was completed in 1911, just as construction on the nearby Casa Loma was underway, at a time when the Annex housed Toronto’s antique Anglophone aristocracy.",
  },
  {
    title: "Location",
    content:
      "Located in the heart of the Annex, the fraternity house is just steps away from the University of Toronto campus, offering unparalleled convenience for students. The neighborhood is known for its vibrant culture, diverse dining options, and proximity to public transportation, making it an ideal setting for university life.",
  },
  {
    title: "Join the Delta Upsilon Community",
    content:
      "Delta Upsilon at the University of Toronto is committed to building better men through its core principles of friendship, character development, cultural diffusion, and the advancement of justice. Living at 182 St. George Street provides members with the opportunity to immerse themselves in a supportive community that values personal growth and collective success.",
  },
//   {
//     title: "📚 Library",
//     content:
//       "A quiet, dedicated library space ensures you have a productive environment to study, research, or reflect — just steps from where you live.",
//   },
//   {
//     title: "📺 TV Rooms",
//     content:
//       "Spacious and comfortable TV lounges are perfect for watching sports, movie nights, or relaxing with brothers after a long day.",
//   },
];

export default function FratHouseSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-3 md:mr-0 md:mt-4 md:ml-5 p-3 md:p-6 border-2 border-double border-secondary">
      <h2 className="text-xl md:text-4xl 2xl:text-5xl font-[family-name:var(--font-Roboto)] font-bold text-primary mb-6">
        182 St. George St
      </h2>

      {houseInfo.map((section, index) => (
        <div key={index} className="pb-4">
          <button
            onClick={() => toggle(index)}
            className="w-full md:ml-8 text-left text-lg md:text-xl xl:text-3xl font-bold text-textColor hover:text-secondary transition"
          >
            {section.title}
          </button>
          {openIndex === index && (
            <p className="animate-fade-fast mt-2 md:ml-8 text-gray-700 text-base md:text-lg">{section.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}
