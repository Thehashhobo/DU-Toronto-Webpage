// components/MemberGridWithModal.tsx
'use client';

import { useState } from 'react';
import MemberCard from './MemberCard';

interface Member {
  name: string;
  description: string;
  image: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

export default function MemberGridWithModal({ members }: { members: Member[] }) {
  const [selected, setSelected] = useState<Member | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
        {members.map((member, idx) => (
          <MemberCard
            key={member.name + idx}
            {...member}
            onClick={() => setSelected(member)}
          />
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-xl"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
            <p>{selected.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
