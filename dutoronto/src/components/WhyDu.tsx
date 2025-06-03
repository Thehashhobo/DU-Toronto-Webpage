import React from "react";
import W1 from "../../public/svgs/W1.svg";
import W2 from "../../public/svgs/W2.svg";
import W3 from "../../public/svgs/W3.svg";
import W4 from "../../public/svgs/W4.svg";
import Image from "next/image";


const WhyDu: React.FC = () => {
  const items = [
    {
      image: W1,
      title: "Friendship",
      text: "Promotion of ",
    },
    {
      image: W2,
      title: "Character",
      text: "Development of",
    },
    {
      image: W3,
      title: "Liberal Culture",
      text: "Diffusion of",
    },
    {
      image: W4,
      title: "Justice",
      text: "Advancement of",
    },
  ];

  return (
    <section className="w-full py-10 px-6">
      <h2 className="text-4xl xl:text-5xl font-[family-name:var(--font-Germ)] font-bold text-center text-textColor mb-8">
        Delta Upsilon&apos;s Four Founding Principles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
          <Image
            src={item.image.src}
            width={120} // or any size you want
            height={120}
            alt={item.title}
            className="w-34 h-34 mb-4 rounded-full border-4 border-yellow-400 p-2 bg-secondary shadow"
          />
            <h3 className="font-[family-name:var(--font-Cabin)] text-2xl font-semibold text-gray-700 mx-5">{item.text}</h3>
            <h1 className="font-[family-name:var(--font-Cabin)] text-3xl font-bold text-black mb-2">{item.title}</h1>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyDu;