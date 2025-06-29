'use client';
import MemberCard from './MemberCard';
import { useState } from 'react';
import Image from 'next/image';

interface Member {
  position: string;
  name: string;
  description: string;
  image: string;
  width?: number;
  height?: number;
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

export default function MemberGridWithModal({ members }: { members: Member[] }) {
  const [selected, setSelected] = useState<Member | null>(null);
  // uncomment to use modal functionality
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
        {members.map((member, idx) => (
          <MemberCard
            key={member.name + idx}
            {...member}
            onClick={() => setSelected(member)}
          />
        ))}
      </div>

      {/* member details not used rigth now */}
      {/* Uncomment to use modal functionality */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-xl max-w-lg w-full relative shadow-2xl transform transition-all">
            <button
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors z-10"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            
            {/* Member Image */}
            <div className="relative h-100 w-full overflow-hidden rounded-t-xl">
              <Image
                src={selected.image}
                alt={selected.name}
                width={selected.width || 400}
                height={selected.height || 400}
                className="w-full h-full object-cover object-[center_18%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-6 text-white">
                <h2 className="text-2xl font-bold mb-1">{selected.name}</h2>
                <p className="text-sm font-medium text-gray-200">{selected.position}</p>
              </div>
            </div>
            
            {/* Member Details */}
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">{selected.description}</p>
              
              {/* Social Media Links */}
              {(selected.facebook || selected.twitter || selected.instagram) && (
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  {selected.facebook && (
                    <a
                      href={selected.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  )}
                  {selected.twitter && (
                    <a
                      href={selected.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-sky-500 hover:bg-sky-600 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
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
