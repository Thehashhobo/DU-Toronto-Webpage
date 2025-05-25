"use client";
import { useState } from "react";

const houseInfo = [
  {
    title: "The House",
    content:
      "The Delta Upsilon house at blends historic charm with modern amenities. Designed by Eden Smith in 1911, the 4 story house features timeless architecture while supporting a vibrant student lifestyle.",
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
    <div className="flex flex-col md:flex-3 md:mr-0 md:mb-5 md:ml-5 p-3 md:p-6 border-secondary">
      <h2 className="text-xl md:text-4xl 2xl:text-5xl font-[family-name:var(--font-Roboto)] font-bold text-primary mb-6">
        182 St. George St
      </h2>

      {houseInfo.map((section, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggle(index)}
            className="w-full md:ml-8 text-left text-lg md:text-xl xl:text-3xl font-bold text-textColor hover:text-primary transition"
          >
            {section.title}
          </button>
          {openIndex === index && (
            <p className="mt-2 md:ml-8 text-gray-700 text-base md:text-lg">{section.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}
