"use client"
import React, { useState } from "react";

interface TextHistoryProps {
  text: string;
  buttonText?: string;
  hideButtonText?: string;
}

const TextHistory: React.FC<TextHistoryProps> = ({
  text,
  buttonText = "Discover Our Rich Legacy",
  hideButtonText = "Hide",
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-8 w-[90vw] mx-auto my-8 items-center">
      <button
        className="font-poppins text-lg lg:min-w-lg min-w-xs font-bold text-black border-2 border-secondary px-6 py-2 bg-transparent transition-all duration-300 shadow-md hover:scale-105 hover:text-primary"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
      >
        {expanded ? hideButtonText : buttonText}
      </button>
      {expanded && (
        <div className="relative bg-gray-50 border border-secondary rounded-lg p-6 text-base text-textColor shadow transition-all duration-300 w-full max-w-3xl">
          {/* Question mark with tooltip */}
          <div className="absolute top-2 right-4 group">
            <span className="text-xl font-bold text-secondary cursor-pointer select-none">?</span>
            <div className="opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 absolute right-0 mt-2 w-64 bg-gray-200 border border-secondary rounded shadow-lg p-3 text-black z-20 font-bold text-xl">
              This section is made possible thanks to the dedicated research and effort of Nikita Kullojka, our Chapter Historian, whose commitment has brought these detailed histories to light.
            </div>
          </div>
          {text.split("\n").map((para, idx) =>
            para.trim() ? <p key={idx} className="mb-4">{para.trim()}</p> : null
          )}
        </div>
      )}
    </div>
  );
};

export default TextHistory;