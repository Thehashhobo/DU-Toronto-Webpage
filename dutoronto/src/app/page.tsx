import H1 from "../../public/images/H1.webp";
import F1 from "../../public/images/private/F2.webp";
import WhyDu from "@/components/WhyDu";
import AnimatedCard from "@/components/AnimatedCard";
import michael from "../../public/exec/michael.webp"
import micah from "../../public/exec/micah.webp"
import adam from "../../public/exec/adam.webp";
import alex from "../../public/exec/alex.webp"
// import arav from "../../public/exec/arav.webp"
import avery from "../../public/exec/avery.webp"
import david from "../../public/exec/david.webp"
import ian from "../../public/exec/ian.webp"

import a1 from "../../public/images/about.webp";
import a2 from "../../public/images/pin.webp";
import a3 from "../../public/images/alumni.webp";
import Image from "next/image";

import { Metadata } from "next";
import React, { Suspense } from "react";

const MemberGridWithModal = React.lazy(() => import("../components/MemberGridWithModal"));

export const metadata: Metadata = {
  title: "Delta Upsilon Toronto — World's Oldest Non-Secret Fraternity",
  description: "Delta Upsilon Toronto Chapter - Building Better Men Since 1899. Discover brotherhood, leadership, and lifelong connections.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Delta Upsilon Toronto - Building Better Men Since 1899",
    description: "Join Canada's oldest non-secret fraternity at University of Toronto. Discover brotherhood, leadership and our historic chapter house at 182 St George St.",
    url: "/",
    images: [
      {
        url: "/images/Coat of Arms.webp",
        width: 300,
        height: 351,
        alt: "Delta Upsilon Toronto Chapter Coat of Arms",
      },
    ],
  },
};

export default function Home() {


  const animatedCards = [
  {
    title: "About Us",
    description:
      "Learn more about our fraternity, our values, and our commitment",
    image: a1.src,
    width: 4016,
    height: 3016,
    link: "/about",
  },
  {
    title: "Become a Member",
    description:
      "We are always looking for new members who share our values strive for excellence.",
    image: a2.src,
    width: 3000,
    height: 2250,
    link: "/membership#faq",
  },
  {
    title: "Alumni",
    description:
      "Build relationship and brotherly connections that will last a lifetime.",
    image: a3.src,
    width: 2290,
    height: 2994,
    link: "/alumni",
  },
  {
    title: "Our House",
    description:
      "Live in a home that is more than just a place to stay.",
    image: H1.src,
    width: 1024,
    height: 768,
    link: "/house",
  },
];

const membersCards = [
  {
    position: "President",
    name: "Michael Atrach",
    description:
      "",
    image: michael.src,
    // linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/michaelatrach13/",
  },
  {
    position: "Vice President", 
    name: "Mikhail Skazhenyuk",
    description:
      "",
    image: micah.src,
    linkedin: "https://www.linkedin.com/in/mikhail-skazhenyuk-1b44bb271/",
    instagram: "https://www.instagram.com/mikhskaz/",
  },
  {
    position: "Minister of Recruitment",
    name: "Adam Ratanshi",
    width: 1024,
    height: 1536,
    description:
      "",
    image: adam.src,
    linkedin: "https://www.linkedin.com/in/adam-ratanshi-139482270/",
    instagram: "https://www.instagram.com/adamaliratanshi/",
  },
  {
    position: "Minister of Finance",
    name: "Alexander Mansourov",
    description:
      "Hi, I'm Alex! I’m from Vaughan and am currently studying Economics. I’ve served as VP of Administration and now proudly serve as VP of Finance for a second term at DU. What I love most about DU is that there’s always something fun happening—there’s never a dull moment. Outside of academics and fraternity commitments, you can find me at home or at the gym.",
    image: alex.src,
    linkedin: "https://www.linkedin.com/in/alexander-mansourov-170283248/",
    // instagram: "https://www.instagram.com/",
  },
  // {
  //   position: "Minister of Brotherhood Excellence",
  //   name: "Arav Kekane",
  //   description:
  //     "Dedicated to fostering a strong sense of community, connection, and personal growth within the brotherhood.",
  //   image: arav.src,
  //   linkedin: "https://www.linkedin.com/in/aravkekane/",
  //   instagram: "https://www.instagram.com/aravkekane/",
  // },
    {
    position: "Minister of Risk Management",
    name: "Avery Lomonaco",
    description:
      "",
    image: avery.src,
    // linkedin: "https://www.linkedin.com/in/",
    instagram: "https://www.instagram.com/avery.lomonaco/",
  },
  {
    position: "Minister of Administration",
    name: "David van Geilswyk",
    description:
      "Hi, I’m David. I was born and raised in Scarborough (Toronto) and I currently study Aerospace Engineering. Being a part of DU was one of the best decisions of my life and I am happy to support my brothers as VP of Administration. The best part of being here is the people you meet along the way. Outside of academics I focus on work and the gym when I’m not watching movies to pass time.",
    image: david.src,
    // linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/dvang_4/",
  },
    {
    position: "Minister of External Relations",
    name: "Ian Murray",
    description:
      "Hello! My name is Adrian, I grew up in Vaughan Ontario, and I study Molecular Biology at the University of Toronto. I am the former Delta Upsilon Social Chair, and current Minister of External Relations. My favourite DU memory would have to be the first rush event I attended where I met everyone who would end up being some of my closest friends in the future. Fun fact: I like to think I’m the best in the house at smash bros!",
    image: ian.src,
    // facebook: "https://facebook.com/",
    // linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/ian.y.murray/",
  },
];
  return (
    <>
    <main className="flex flex-col min-h-screen justify-start items-start">
      <section
        className="relative w-full h-[70vh] md:h-[100vh] bg-cover bg-center justify-start overflow-hidden"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="H1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay and Content */}
        <div className="relative z-10 flex flex-col pt-18 md:pt-1 items-center justify-center h-full text-white bg-black/60">
          <h1 className="font-[family-name:var(--font-Roboto)] text-center font-bold relative -translate-y-3">
            <span className="font-[family-name:var(--font-Germ)] block xl:text-4xl text-3xl text-[#ffffffd6] mt-2 mb-2 ml-0.5 mr-0.5 tracking-wide font-normal">
              Delta Upsilon
            </span>
            <span className="block text-4xl uppercase md:text-7xl ml-0.5 mr-0.5">
              Toronto Chapter
            </span>
          </h1>
          <p className="font-[family-name:var(--font-Cabin)] text-primary text-2xl text-center mt-2 ml-0.5 mr-0.5 relative -translate-y-3">
            Building Better Men Since 1899
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-md mt-2">
            <a href="/about" className="btn">
              Learn More
            </a>
            <a href="/contact" className="btn">
              Contact Us
            </a>
          </div>
        </div>
      

      </section>

      {/* Coat of Arms */}
      <section className="flex flex-col md:flex-row w-[90%]  mx-auto text-[color:var(--textColor)] items-center">
        <div className="flex flex-col md:flex-4 mt-5 md:mr-0 md:mb-5 md:ml-5 border-1 p-3 md:p-10 border-secondary">
          <h2 className="text-xl md:text-4xl font-[family-name:var(--font-Roboto)] font-bold text-textColor">
            Delta Upsilon is not your typical fraternity. Our non-secret heritage and our dedication to creating a modern fraternity experience help us in{' '}
            <span className="font-[family-name:var(--font-Cabin)] border-b-4 text-nowrap text-[color:var(--color-primary)]">
              Building Better Men
            </span>
          </h2>
          <p className="text-lg md:text-xl font-[family-name:var(--font-Roboto)] font-bold text-[#012d69] mt-2">
            Fraternity membership is one of the most valuable extra-curricular experiences
          </p>
        </div>
        
        <Image
          width={300}
          height={351}
          src="/images/Coat of Arms.webp"
          alt="Delta Upsilon Coat of Arms"
          className="md:flex-1 h-64 w-auto md:h-58 my-2 "
          style={{ objectFit: "contain" }}
        />
      </section>
    {/* Nav Cards */}
    <section className="w-full">
      <div className="flex flex-row w-[90%] mx-auto text-[color:var(--textColor)] gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400">
        {animatedCards.map((card, idx) => (
          <AnimatedCard
            key={card.title + idx}
            title={card.title}
            description={card.description}
            image={card.image}
            width={card.width}
            height={card.height}
            link={card.link}
          />
        ))}
      </div>
    </section>
      {/* Info Section */}
      {/* <hr className="w-full h-[1.5px] bg-[#59890c]"/>  */}
      <div className="relative w-[90%] mx-auto text-[color:var(--textColor)] border-2 shadow-xl drop-shadow-textColor border-secondary p-3 mt-3 mb-8 xl:mb-16"
            style={{
            backgroundImage: `url(${F1.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          >
          {/* Blur and opacity overlay */}
          <div className="absolute inset-0 bg-black/5  z-0" />
        <WhyDu/>
      </div>
      
      <section className="flex flex-col items-center justify-center align-middle w-[90vw] mx-auto bg-[--background] text-[color:var(--textColor)] mb-8 xl:mb-16">
          <h2 className="text-2xl text-center md:text-5xl font-[family-name:var(--font-Roboto)] font-bold text-textColor mb-14">
            <span className="font-[family-name:var(--font-Cabin)] text-primary">
              Own Your Journey {" "}
            </span>
             with those who elevate you
          </h2>
      {/* Member Section */}    
        <Suspense fallback={<div>Loading members...</div>}>
          <MemberGridWithModal members={membersCards} />
        </Suspense>
        
      </section>
      <hr className="w-full h-[1.5px] bg-secondary"/> 
      {/* <Reviews/> */}

    </main>
    </>
  );
}