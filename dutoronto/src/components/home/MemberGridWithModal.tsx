"use client";
import MemberCard from "./MemberCard";
import { useState, useEffect } from "react";
import Image from "next/image";
import { InstagramFilled, LinkedinFilled, FacebookFilled } from "@ant-design/icons";

interface Member {
  position: string;
  name: string;
  description?: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

export default function MemberGridWithModal({ members }: { members: Member[] }) {
  const [selected, setSelected] = useState<Member | null>(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selected]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full">
        {members.map((member, idx) => (
          <MemberCard
            key={member.name + idx}
            {...member}
            onClick={() => setSelected(member)}
          />
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#f8f7f0] max-w-md w-full max-h-[90vh] relative shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full transition-colors text-lg font-bold"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ×
            </button>

            {/* Image */}
            <div className="relative h-80 w-full flex-shrink-0">
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                className="object-cover object-[center_15%]"
                sizes="(max-width: 768px) 100vw, 448px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e]/80 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <p className="text-[#edc058] text-xs font-[family-name:var(--font-Cabin)] font-bold uppercase tracking-widest mb-1">
                  {selected.position}
                </p>
                <h2 className="text-white font-[family-name:var(--font-Roboto)] font-bold text-2xl">
                  {selected.name}
                </h2>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto flex-1">
              {selected.description ? (
                <p className="text-gray-700 font-[family-name:var(--font-Cabin)] text-sm leading-relaxed mb-5">
                  {selected.description}
                </p>
              ) : (
                <p className="text-gray-400 italic text-sm mb-5">No bio available.</p>
              )}

              {/* Socials */}
              {(selected.instagram || selected.linkedin || selected.facebook) && (
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  {selected.instagram && (
                    <a
                      href={selected.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0c1a2e] hover:bg-[#edc058] text-white hover:text-[#0c1a2e] text-lg transition-colors"
                    >
                      <InstagramFilled />
                    </a>
                  )}
                  {selected.linkedin && (
                    <a
                      href={selected.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0c1a2e] hover:bg-[#edc058] text-white hover:text-[#0c1a2e] text-lg transition-colors"
                    >
                      <LinkedinFilled />
                    </a>
                  )}
                  {selected.facebook && (
                    <a
                      href={selected.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0c1a2e] hover:bg-[#edc058] text-white hover:text-[#0c1a2e] text-lg transition-colors"
                    >
                      <FacebookFilled />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
