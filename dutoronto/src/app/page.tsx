import H1 from "../../public/images/H1.webp";
import F1 from "../../public/images/F2.webp";
import WhyDu from "@/components/WhyDu";
import AnimatedCard from "@/components/AnimatedCard";
import dev from "../../public/exec/dev2.webp"
import aaron from "../../public/exec/aaron.webp"
// import azaryah from "../../public/exec/azaryah.webp"
import alex from "../../public/exec/alex.webp"
import arav from "../../public/exec/arav.webp"
import tony from "../../public/exec/tony.webp"
import david from "../../public/exec/david.webp"
import adrian from "../../public/exec/adrian.webp"

import a1 from "../../public/images/about.webp";
import a2 from "../../public/images/pin.webp";
import a3 from "../../public/images/alumni.webp";



import React, { Suspense } from "react";

const MemberGridWithModal = React.lazy(() => import("../components/MemberGridWithModal"));

export default function Home() {
  const animatedCards = [
  {
    title: "About Us",
    description:
      "Learn more about our fraternity, our values, and our commitment",
    image: a1.src,
    link: "/about",
  },
  {
    title: "Become a Member",
    description:
      "We are always looking for new members who share our values strive for excellence.",
    image: a2.src,
    link: "/membership",
  },
  {
    title: "Alumni",
    description:
      "Build relatinoship and brotherly connections that will last a lifetime.",
    image: a3.src,
    link: "/alumni",
  },
  {
    title: "Our House",
    description:
      "Live in a home that is more than just a place to stay.",
    image: H1.src,
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
    description:
      "We are always looking for new members who share our values and commitment to excellence.",
    image: H1.src,
    linkedin: "https://www.linkedin.com/in/azaryah-mendes-61417a300/",
    instagram: "https://www.instagram.com/azaryah_mendes/",
  },
  {
    position: "Minister of Finance",
    name: "Alexander Mansourov",
    description:
      "Build friendships and connections that will last a lifetime.",
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
      "Live in a house that is more than just a place to stay.",
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
      "Live in a house that is more than just a place to stay.",
    image: adrian.src,
    // facebook: "https://facebook.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/adrian_cachia/",
  },
];
  return (
    <main className="flex flex-col min-h-screen justify-start items-start">
      <section
        className="relative w-full h-[60vh] md:h-[100vh] bg-cover bg-center justify-start overflow-hidden"
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
          <p className="text-3xl text-[#ffffffd6] text-center mt-2 mb-2 ml-0.5 mr-0.5 relative -translate-y-3 tracking-wide">
            Delta Upsilon 
          </p>
          <h1 className="font-[family-name:var(--font-Roboto)] text-4xl uppercase text-center font-bold md:text-7xl ml-0.5 mr-0.5 relative -translate-y-3">
            Toronto Chapter
          </h1>
          <p className="font-[family-name:var(--font-Roboto)] text-primary text-2xl text-center mt-2 ml-0.5 mr-0.5 relative -translate-y-3">
            Building Better Men Since 1899
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-md mt-2">
            <a href="/services" className="btn">
              Learn More
            </a>
            <a href="/contact" className="btn">
              Contact Us
            </a>
          </div>
        </div>
      

      </section>

      {/* Coat of Arms */}
      <section className="flex flex-col md:flex-row w-[90%] h-[56vh] md:h-[36vh] mx-auto text-[color:var(--textColor)]">
        <div className="flex flex-col md:self-center md:flex-4 mt-5 md:mr-0 md:mb-5 md:ml-5 border-1 p-3 md:p-10 border-secondary">
          <h2 className="text-xl md:text-4xl font-[family-name:var(--font-Roboto)] font-bold text-textColor">
            Delta Upsilon is not your typical fraternity. Our non-secret heritage and our dedication to creating a modern fraternity experience help us in{' '}
            <span className="font-[family-name:var(--font-Cabin)] border-b-4 text-[color:var(--color-primary)]">
              Building Better Men
            </span>
          </h2>
          <p className="text-lg md:text-xl font-[family-name:var(--font-Roboto)] font-bold text-[#012d69] mt-2">
            Fraternity membership is one of the most valuable extra-curricular experiences
          </p>
        </div>
        
        <img
          src="/images/Coat of Arms.webp"
          alt="Delta Upsilon Coat of Arms"
          className="md:flex-1 h-42 md:h-58 my-2 "
          style={{ objectFit: "contain" }}
        />
      </section>
    {/* Nav Cards */}
    <section className="w-full">
      <div className="flex flex-row w-[90%] mx-auto text-[color:var(--textColor)] gap-6 overflow-x-auto md:overflow-x-visible pb-4 scrollbar-thin scrollbar-thumb-gray-400">
        {animatedCards.map((card, idx) => (
          <AnimatedCard
            key={card.title + idx}
            title={card.title}
            description={card.description}
            image={card.image}
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
             with those who push you
          </h2>
      {/* Member Section */}    
        <Suspense fallback={<div>Loading members...</div>}>
          <MemberGridWithModal members={membersCards} />
        </Suspense>
        
      </section>
      <hr className="w-full h-[1.5px] bg-secondary"/> 
      {/* <Reviews/> */}

    </main>
  );
}