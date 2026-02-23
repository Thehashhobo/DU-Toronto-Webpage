import React from "react";
import { InstagramFilled, LinkedinFilled, FacebookFilled } from "@ant-design/icons";
import Image from "next/image";

interface MemberCardProps {
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  position: string;
  name: string;
  description?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  onClick?: () => void;
}

const MemberCard: React.FC<MemberCardProps> = ({
  image,
  imageWidth,
  imageHeight,
  position,
  name,
  facebook,
  instagram,
  linkedin,
  onClick,
}) => {
  const hasSocials = !!(facebook || instagram || linkedin);

  return (
    <div
      onClick={onClick}
      className="group relative w-full aspect-[3/4] overflow-hidden cursor-pointer"
    >
      {/* Portrait image */}
      <Image
        src={image}
        width={imageWidth || 800}
        height={imageHeight || 1067}
        alt={name}
        sizes="280px"
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay — always present, darkens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-300" />

      {/* Name / position — slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-[#edc058] text-xs font-[family-name:var(--font-Cabin)] font-bold uppercase tracking-widest mb-0.5">
          {position}
        </p>
        <h3 className="text-white font-[family-name:var(--font-Roboto)] font-bold text-lg leading-tight">
          {name}
        </h3>
      </div>

      {/* Social icons — fade in on hover */}
      {hasSocials && (
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {instagram && (
            <a
              href={instagram}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#edc058] text-[#0c1a2e] text-base hover:bg-white transition-colors"
            >
              <InstagramFilled />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#edc058] text-[#0c1a2e] text-base hover:bg-white transition-colors"
            >
              <LinkedinFilled />
            </a>
          )}
          {facebook && (
            <a
              href={facebook}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#edc058] text-[#0c1a2e] text-base hover:bg-white transition-colors"
            >
              <FacebookFilled />
            </a>
          )}
        </div>
      )}

      {/* "Click for bio" hint */}
      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[10px] text-white/70 font-[family-name:var(--font-Cabin)] uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded">
          View Bio
        </span>
      </div>
    </div>
  );
};

export default MemberCard;
