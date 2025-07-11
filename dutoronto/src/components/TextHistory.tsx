"use client"
import React, { useState } from "react";

interface TextHistoryProps {
  text: React.ReactNode;
  buttonText?: string;
  hideButtonText?: string;
}

const TextHistory: React.FC<TextHistoryProps> = ({
  text,
  buttonText = "Discover Our Rich Legacy",
  hideButtonText = "Hide",
}) => {
  const [expanded, setExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

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
            <span
              className="text-xl font-bold text-secondary cursor-pointer select-none"
              onClick={() => setShowTooltip((prev) => !prev)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              tabIndex={0}
              aria-label="Show more info"
            >
              ?
            </span>
            <div
              className={`
                ${
                  showTooltip
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }
                transition-opacity duration-200 absolute right-0 mt-2 w-64 bg-gray-200 border border-secondary rounded shadow-lg p-3 text-black z-20 font-bold text-xl
              `}
            >
              This section is made possible thanks to the dedicated research and
              effort of Nikita Kullojka, our Chapter Historian, whose commitment
              has brought these histories to light.
            </div>
          </div>
          <div>{text}</div>
        </div>
      )}
    </div>
  );
};

export default TextHistory;