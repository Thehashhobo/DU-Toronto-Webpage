import H1 from "../../../public/images/private/about1.webp"
import A1 from "../../../public/images/A1.webp"
import A2 from "../../../public/images/private/A2.webp"
import A3 from "../../../public/images/A3.webp"
import A4 from "../../../public/images/private/A4.webp"
import A5 from "../../../public/images/private/A5.webp"
import A6 from "../../../public/images/private/A6.webp"

import B1 from "../../../public/images/B1.webp"
import ProminentAlumniSection from "@/components/ProminentAlumniSection"
import History from "@/components/History";
import Image from 'next/image'
import TextHistory from "@/components/TextHistory";
import type { Metadata } from 'next';

export const generateMetadata = (): Metadata => ({
  title: "About Us",
  description: "Learn more about the mission, history, and values at Delta Upsilon Toronto Chapter.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Delta Upsilon Toronto",
    description: "Explore our story, values, and commitment to building better men since 1899.",
    url: "/about",
    images: [
      {
        url: "/images/H1.webp",
        width: 1024,
        height: 768,
        alt: "Delta Upsilon chapter house exterior",
      },
    ],
  },
});


export default function About() {

const HistoryText = (
  <>
    Delta Upsilon was the fourth fraternity to establish itself at the <b>University of Toronto</b>, though its origins in the city are even more antique. The earliest records indicate the existence of a local fraternity named <b>Phi Alpha</b> dating back to <b>1892</b>. In its ranks were the most accomplished members of the student body and faculty, spanning from academic prize winners to captains of varsity teams. In <b>1888</b>, the <b>72 brothers</b> who composed the group contemplated the benefits of joining an international fraternity. It was thus on <b>December 15th, 1899</b>, at <b>14 Grenville Street</b> that Phi Alpha reorganized itself, now with a charter from the International Fraternity in hand, becoming the <b>Toronto Chapter of Delta Upsilon</b>. As the university commemorated the armistice of the <b>First World War</b> with the construction of <b>Soldier’s Tower</b>, the <b>Delta Upsilon Alumni association</b> would donate several of the bells in the tower’s carillon which to this day can be heard by students as they cross the campus.
    <br /><br />
    Afterwards, the Fraternity would move to <b>3 Queen’s Park</b>, current site of <b>Emmanuel College</b>, and later <b>142 Bloor Street West</b>, where a young <b>Lester B. Pearson</b> once lived in room 10, now the location of a <b>Burberry Store</b> in Toronto’s High Fashion district. Subsequently was <b>112 St. George Street</b>, at the present site of <b>Robarts Library</b>. The university was undergoing an extensive phase of expansion in response to the post-war boom, and so many of the <b>42 fraternity houses</b> that once lined the environs of <b>St. George, Huron, Sussex, and Harbord</b> were expropriated by the <b>Plateau Committee</b>. A debate ensued amongst leaders of the Greek Houses as to whether to relocate north of campus into the <b>Annex</b>, or south of <b>College Street</b>. Delta Upsilon was the first house to make the move north, and so the purchase of <b>182 St. George</b> would be subsequently evoked in <b>Supreme Court hearings</b> as the other Greek Houses disputed the acquisition of their new properties.
  </>
);

const alumniCards = [
  {
    name: "Lester B. Pearson",
    description:
      "14th Prime Minister of Canada",
    image: A1.src,
    width: 810,
    height: 1080,
    link: "",
  },
  {
    name: "James A. Garfield",
    description:
      "President of United States",
    image: A2.src,
    width: 1024,
    height: 1298,
    link: "",
  },
  {
    name: "John P. Robarts",
    description:
      "17th Premier of Ontario",
    image: A3.src,
    width: 550,
    height: 804,
    link: "",
  },
  {
    name: "John Arthur Clark",
    description:
      "Commander of the 72nd Seaforth Highlanders at the Battle of Vimy Ridge",
    image: A4.src,
    width: 620,
    height: 842,
    link: "",
  },
    {
    name: "Richard M. Ivey",
    description:
      "Philanthropist and Education Advocate, namesake of the Ivey Business School",
    image: A5.src,
    width: 620,
    height: 842,
    link: "",
  },
    {
    name: "Gabriel Macht",
    description:
      "American actor, plays Harvey Specter in  Suits",
    image: A6.src,
    width: 620,
    height: 842,
    link: "",
  },
];


  return (
    <main className="flex flex-col min-h-screen justify-start items-start">
      <section
        className="relative w-full h-[60vh] md:h-[50vh] mt-24 md:mt-20 xl:mt-22 2xl:mt-26 bg-cover brightness-125 justify-start overflow-hidden"
          style={{
          backgroundImage: `url(${H1.src})`,
          backgroundPosition: "center 30%",
           // shifts background image up
  }
      }
      >
        {/* Overlay and Content */}
        <div className="font-[family-name:var(--font-Roboto)] relative z-10 flex flex-col pt-18 md:pt-1 items-center justify-center h-full text-white bg-black/60">
          {/* <p className="text-3xl text-[#ffffffd6] text-center mt-2 mb-2 ml-0.5 mr-0.5 relative -translate-y-3">
             
          </p> */}
          <h1 className="font-[family-name:var(--font-Roboto)] text-4xl uppercase text-center font-bold md:text-7xl ml-0.5 mr-0.5 relative -translate-y-3">
            Our Chapter
          </h1>
          {/* <p className="font-[family-name:var(--font-Roboto)] text-primary text-2xl text-center mt-2 ml-0.5 mr-0.5 relative -translate-y-3">
            Share a Home with your Brothers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-md mt-2">
            <a href="/services" className="btn">
              Learn More
            </a>
            <a href="/contact" className="btn">
              Contact Us
            </a>
          </div> */}
        </div>
      </section>
      <hr className="w-[75vw] mx-auto border-0 z-14 mt-5 h-[0.8px] bg-primary"/> 

      {/* Brother Section */}
        <section className="flex flex-col md:flex-row w-[90%]  mx-auto text-[color:var(--textColor)] mb-6">
        <Image
          src={B1}
          alt="Brothers of Delta Upsilon Toronto"
          width={1920}
          height={1440}
          className="h-75 md:h-[50vh] md:w-[46vw] my-2 md:mt-5 object-contain"
          priority={true}
        />

        <div className="flex flex-col md:self-center mt-5 md:mr-0 md:mb-5 md:ml-5 border-1 p-3 md:p-10 border-secondary">
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-[family-name:var(--font-Cabin)] font-bold text-primary">
            Our Brothers
          </h2>
          <p className="text-lg md:text-xl font-[family-name:var(--font-Roboto)] text-black mt-2">
            At DU Toronto, more than 30 brothers come together not just as members of a fraternity, but as a close-knit community grounded in shared values—justice, character, friendship, and a commitment to learning. What brings us together goes beyond tradition; it&apos;s the day-to-day experiences, support, and growth we share that turn brotherhood into something truly meaningful—like family.
          </p>
        </div>
        

      </section>
          <hr className="w-[75vw] mx-auto border-0 z-14 mt-5 h-[0.8px] bg-primary"/> 
          {/* history Section */}
          <section className="overflow-x-aut flex flex-col w-[90%] mx-auto scrollbar-thin scrollbar-thumb-gray-400 whitespace-nowrap mt-4 mb-4">
            <h2 className="text-2xl md:text-4xl xl:text-5xl text-center font-[family-name:var(--font-Cabin)] font-bold text-primary mb-4">
                Our History
            </h2>
            <History/>
          </section>
                      {/* <House History/> */}
      <TextHistory
      text={HistoryText}
      buttonText="Uncover the Rich History of Our Chapter"
      hideButtonText="Hide"
      />
    <hr className="w-[75vw] mx-auto border-0 z-14 mt-5 h-[0.8px] bg-primary"/> 
    {/* PHILANTROPHY Section */}
    <section className="flex flex-col w-[90%] mx-auto mt-6">
      <h2 className="text-2xl md:text-4xl xl:text-5xl text-center font-[family-name:var(--font-Cabin)] font-bold text-primary mb-6">
        Philantrophy
      </h2>
      <h2 className="text-lg md:text-2xl xl:text-3xl text-center font-[family-name:var(--font-Cabin)] font-bold text-textColor mb-4 text-wrap">
        Philanthropy is a core part of what it means to be a Delta Upsilon. Guided by our founding principle of the Advancement of Justice, we believe in using our time, resources, and talents to uplift others. 
      </h2>
      <div className="flex flex-col md:flex-row w-[100%] mx-auto gap-4 items-stretch">
        <div className="flex flex-col md:w-[45%] w-[100%] mx-auto gap-4">
          <h2 className="text-xl md:text-3xl xl:text-4xl text-center font-[family-name:var(--font-Cabin)] font-bold text-secondary mb-4">
            Global Service Initiative
          </h2>
          <div className="bg-gray-50 border border-secondary rounded-lg p-6 mb-6 max-w-2xl mx-auto text-base text-textColor shadow h-full flex flex-col">
            <p className="mb-4 text-wrap">
              Delta Upsilon’s Global Service Initiative (GSI) offers brothers a unique opportunity to make a real impact while exploring the world. As DU’s flagship international service program, GSI sends undergraduate and alumni members to communities in need to help build schools and essential infrastructure.
            </p>
            <p className="mb-2 text-wrap">
              In 2025, DU hosted two GSI trips to Negril, Jamaica:
            </p>
            <ul className="list-disc list-inside mb-4 text-wrap">
              <li>January 4–11, 2025</li>
              <li>May 17–24, 2025</li>
            </ul>
            <p className="mb-2 text-wrap">
              During the trip, brothers will engage in hands-on construction at a local school, connect with students and community members, reflect together in evening discussions, and immerse themselves in Jamaican culture.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:w-[45%] w-[100%] mx-auto gap-4">
          <h2 className="text-xl md:text-3xl xl:text-4xl text-center font-[family-name:var(--font-Cabin)] font-bold text-secondary mb-4">
            In House Philanthropy
          </h2>
          <div className="bg-gray-50 border border-secondary rounded-lg p-6 mb-6 max-w-2xl mx-auto text-base text-textColor shadow h-full flex flex-col">
            <p className="mb-4 text-wrap">
              Du Toronto is committed to making a difference not just globally, but right here at home. In line with our values of justice and compassion, our chapter recently organized an in-house philanthropic initiative in support of mental health awareness.
            </p>
            <p className="mb-2 text-wrap">
              Through our collective efforts, we proudly raised and donated over $1,000 to Bell Let’s Talk, helping to fund men’s mental health programs and spark important conversations across Canada.
            </p>
            <p className="mb-2 text-wrap">
              It’s one of many ways our brotherhood stands for more than just tradition—we stand for impact.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* PROMINENT ALUMNI  */}
      <ProminentAlumniSection alumniCards={alumniCards} />   
        
      <hr className="w-full h-[1.5px] bg-secondary"/> 


    </main>
  );
}