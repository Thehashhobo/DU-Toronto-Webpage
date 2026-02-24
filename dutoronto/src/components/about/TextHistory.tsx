"use client";
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
    <div className="flex flex-col w-full max-w-4xl mx-auto px-6 my-8 items-center">
      <button
        className="btn-outline-dark"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
      >
        {expanded ? hideButtonText : buttonText}
      </button>

      {/* Always mounted — transition max-height + opacity + margin so it slides open smoothly */}
      <div
        className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="relative bg-white border border-gray-200 shadow-md p-6 md:p-8 text-[#1a1a2e] w-full">
          {/* Historian credit tooltip */}
          <div className="absolute top-3 right-4">
            <span
              className="text-lg font-bold text-[#0F52BA] cursor-pointer select-none"
              onClick={() => setShowTooltip((prev) => !prev)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              tabIndex={0}
              aria-label="Historian credit"
            >
              ?
            </span>
            <div
              className={`absolute right-0 mt-2 w-72 bg-[#0c1a2e] text-white border border-[#edc058]/30 shadow-xl p-4 text-sm z-20 transition-opacity duration-200 ${
                showTooltip ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              This section is made possible thanks to the dedicated research and effort of{" "}
              <strong className="text-[#edc058]">Nikita Kullojka</strong>, our Chapter Historian,
              whose commitment has brought these histories to light.
            </div>
          </div>

          <div className="font-[family-name:var(--font-Cabin)] text-base leading-relaxed text-gray-700">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextHistory;
