import H1 from "../../public/images/H1.webp";
import F1 from "../../public/images/private/F2.webp";
import WhyDu from "@/components/WhyDu";
import AnimatedCard from "@/components/AnimatedCard";
import dev from "../../public/exec/dev2.webp"
import aaron from "../../public/exec/aaron.webp"
import az from "../../public/exec/az.webp";
import alex from "../../public/exec/alex.webp"
import arav from "../../public/exec/arav.webp"
import tony from "../../public/exec/tony.webp"
import david from "../../public/exec/david.webp"
import adrian from "../../public/exec/adrian.webp"

import a1 from "../../public/images/about.webp";
import a2 from "../../public/images/pin.webp";
import a3 from "../../public/images/alumni.webp";
import Image from "next/image";
import Head from "next/head";



import React, { Suspense } from "react";

const MemberGridWithModal = React.lazy(() => import("../components/MemberGridWithModal"));

export default function Home() {
    const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Delta Upsilon – University of Toronto Chapter",
    "alternateName": "DU Toronto",
    "legalName": "Delta Upsilon Fraternity - Toronto Chapter",
    "url": "https://dutoronto.org",
    "logo": "https://dutoronto.org/images/Coat%20of%20Arms.webp",
    "description": "Delta Upsilon is a non-secret, values-based fraternity founded on the principles of justice, character, friendship, and culture. The Toronto Chapter, founded in 1898, is Canada's oldest DU chapter.",
    "foundingDate": "1899-12-15",
    "sameAs": [
      "https://www.instagram.com/dutoronto",
      "https://www.facebook.com/DUToronto/"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "182 St George Street",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "postalCode": "M5R 2N3",
      "addressCountry": "CA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-647-545-7141",  
      "email": "dutorontochapter@gmail.com", 
      "contactType": "Customer Support"
    },
    "telephone": "+1-647-545-7141",
    "email": "dutorontochapter@gmail.com",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 40
    },
    "naics": "813410", // NAICS code for Civic and Social Organizations
};

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
      "Build relatinoship and brotherly connections that will last a lifetime.",
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
    name: "Devyansh Sharma",
    description:
      "Learn more about our fraternity, our values, and our commitment",
    image: dev.src,
    linkedin: "https://www.linkedin.com/in/devyanshsharma/",
    instagram: "https://www.instagram.com/devsharma_7/",
  },
  {
    position: "Vice President", 
    name: "Aaron Feigenbaum",
    description:
      "Live in a house that is more than just a place to stay.",
    image: aaron.src,
    linkedin: "https://www.linkedin.com/in/aaron-feigenbaum-5388a8345/",
    instagram: "https://www.instagram.com/aaron.feigs/",
  },
  {
    position: "Minister of Recruitment",
    name: "Azaryah Mendes",
    width: 1024,
    height: 1536,
    description:
      "Hey, I’m Azaryah Mendes. At the time I’m writing this, I’m entering my second year at UofT in Rotman Commerce. I’m in charge of recruitment here at DU so I wanted to take the chance to speak about why I joined. When I first committed to UofT I had no intention of rushing a frat but I wanted to try new things. I ended up at a rush event where I met a group of guys that were genuine, fun, and goal-oriented. The people here push each other to be the best version of themselves. They strive to make the community and society better. That’s what made me want to join and that’s why our rush slogan is “building better men”. ",
    image: az.src,
    linkedin: "https://www.linkedin.com/in/azaryah-mendes-61417a300/",
    instagram: "https://www.instagram.com/azaryah_mendes/",
  },
  {
    position: "Minister of Finance",
    name: "Alexander Mansourov",
    description:
      "Hi, I'm Alex! I’m from Vaughan and am currently studying Economics. I’ve served as VP of Administration and now proudly serve as VP of Finance at DU. What I love most about DU is that there’s always something fun happening—there’s never a dull moment. Outside of academics and fraternity commitments, you can find me at home or at the gym.",
    image: alex.src,
    linkedin: "https://www.linkedin.com/in/alexander-mansourov-170283248/",
    instagram: "https://www.instagram.com/alexboneless/",
  },
  {
    position: "Minister of Brotherhood Excellence",
    name: "Arav Kekane",
    description:
      "Live in a house that is more than just a place to stay.",
    image: arav.src,
    linkedin: "https://www.linkedin.com/in/aravkekane/",
    instagram: "https://www.instagram.com/aravkekane/",
  },
    {
    position: "Minister of Risk Management",
    name: "Tony Yousefi",
    description:
      "My name is Ariaman and I’m from Newmarket, ON. Currently studying human biology at the University of Toronto and pursuing medical school. I joined Delta Upsilon in my first year at the UofT, drawn by its strong history and reputation on campus and nationwide. The fraternity fosters responsibility and offers great opportunities for leadership. I have since been elected as the minister of Risk Management and Associate Member Educator, and work closely with the Delta Upsilon national headquarters to ensure a positive and worthwhile experience for the members of the chapter.",
    image: tony.src,
    linkedin: "https://www.linkedin.com/in/ariaman-yousefi-976092257/",
    instagram: "https://www.instagram.com/ariaman.y/",
  },
  {
    position: "Minister of Administration",
    name: "David van Geilswyk",
    description:
      "Live in a house that is more than just a place to stay.",
    image: david.src,
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/dvang_4/",
  },
    {
    position: "Minister of External Relations",
    name: "Adrian Cachia",
    description:
      "Hello! My name is Adrian, I grew up in Vaughan Ontario, and I study Molecular Biology at the University of Toronto. I am the former Delta Upsilon Social Chair, and current Minister of External Relations. My favourite DU memory would have to be the first rush event I attended where I met everyone who would end up being some of my closest friends in the future. Fun fact: I like to think I’m the best in the house at smash bros!",
    image: adrian.src,
    // facebook: "https://facebook.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/adrian_cachia/",
  },
];
  return (
    <>
    <Head>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    </Head>
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
        <div className="font-[family-name:var(--font-Germ)] relative z-10 flex flex-col pt-18 md:pt-1 items-center justify-center h-full text-white bg-black/60">
          <p className="xl:text-4xl text-3xl text-[#ffffffd6] text-center mt-2 mb-2 ml-0.5 mr-0.5 relative -translate-y-3 tracking-wide">
            Delta Upsilon 
          </p>
          <h1 className="font-[family-name:var(--font-Roboto)] text-4xl uppercase text-center font-bold md:text-7xl ml-0.5 mr-0.5 relative -translate-y-3">
            Toronto Chapter
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