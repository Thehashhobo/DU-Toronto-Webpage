import React from "react";
import { FacebookFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';

interface MemberCardProps {
  image: string;
  position: string;
  name: string;
  description: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  onClick?: () => void;
}


const MemberCard: React.FC<MemberCardProps> = ({
  image,
  position,
  name,
  description,
  facebook,
  instagram,
  linkedin,
  onClick
}) => {
  return (
    <div onClick={onClick ? onClick : undefined}
      className="cursor-pointer max-w-xs w-full bg-[#fafafa] border-2 border-secondary px-8 py-4 rounded-none mx-auto flex flex-col justify-between items-start shadow-lg h-full
      transform transition-transform duration-300 scale-100 hover:scale-105 hover:shadow-none">
      <div>
        <img
          src={image}
          alt={name}
          className="w-32 h-36 lg:w-36 lg:h-40 object-cover object-top bg-gray-200 mb-2 brightness-120"
        />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{position}</h3>
        <h2 className="text-1xl font-semibold text-primary mb-12 md:mb-6">{name}</h2>
        {/* <p className="text-gray-600 mb-6">{description}</p> */}
      </div>
      <div className="flex gap-4 items-end mt-auto h-12">
        {facebook && (
          <a
            href={facebook}
            onClick={onClick ? (e) => e.stopPropagation() : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-300 rounded-full w-12 h-12 flex items-center justify-center text-gray-800 text-2xl hover:bg-yellow-400 transition"
          >
            <FacebookFilled />
          </a>
        )}
        {instagram && (
          <a
            href={instagram}
            onClick={onClick ? (e) => e.stopPropagation() : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-300 rounded-full w-12 h-12 flex items-center justify-center text-gray-800 text-2xl hover:bg-yellow-400 transition"
          >
            <InstagramFilled />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            onClick={onClick ? (e) => e.stopPropagation() : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-300 rounded-full w-12 h-12 flex items-center justify-center text-gray-800 text-2xl hover:bg-yellow-400 transition"
          >
            <LinkedinFilled />
          </a>
        )}
      </div>
    </div>
  );
};

export default MemberCard;