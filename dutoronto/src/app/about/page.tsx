import ContactForm from "@/components/ContactForm";
import H1 from "../../../public/images/H1.jpg"
import A1 from "../../../public/images/A1.jpg"
import {InstagramFilled, LinkedinFilled } from '@ant-design/icons';
import AlumniCard from "@/components/AlumniCards";
import History from "@/components/History";

export default function About() {


const animatedCards = [
  {
    name: "Lester B. Pearson",
    description:
      "14th prime minister of Canada",
    image: A1.src,
    link: "/about",
  },
  {
    name: "Become a Member",
    description:
      "We are always looking for new members who share our values strive for excellence.",
    image: H1.src,
    link: "/membership",
  },
  {
    name: "Alumni",
    description:
      "Build relatinoship and brotherly connections that will last a lifetime.",
    image: H1.src,
    link: "/alumni",
  },
  {
    name: "Our House",
    description:
      "Live in a home that is more than just a place to stay.",
    image: H1.src,
    link: "/house",
  },
];


  return (
    <main className="flex flex-col min-h-screen justify-start items-start">
      <section
        className="relative w-full h-[60vh] md:h-[100vh] bg-cover bg-center justify-start overflow-hidden"
        style={{backgroundImage: `url(${H1.src})`}}
      >
        {/* Overlay and Content */}
        <div className="font-[family-name:var(--font-Roboto)] relative z-10 flex flex-col pt-18 md:pt-1 items-center justify-center h-full text-white bg-black/60">
          {/* <p className="text-3xl text-[#ffffffd6] text-center mt-2 mb-2 ml-0.5 mr-0.5 relative -translate-y-3">
             
          </p> */}
          <h1 className="font-[family-name:var(--font-Roboto)] text-4xl uppercase text-center font-bold md:text-7xl ml-0.5 mr-0.5 relative -translate-y-3">
            Delta House
          </h1>
          <p className="font-[family-name:var(--font-Roboto)] text-primary text-2xl text-center mt-2 ml-0.5 mr-0.5 relative -translate-y-3">
            Share a Home with your Brothers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-md mt-2">
            <a href="/services" className="btn">
              Learn More
            </a>
            <a href="/contacts" className="btn">
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
          src="/images/Coat of Arms.png"
          alt="Delta Upsilon Coat of Arms"
          className="md:flex-1 h-42 md:h-58 my-2 md:mt-5"
          style={{ objectFit: "contain" }}
        />
      </section>
      
      {/* history Section */}
      <section className="overflow-x-auto w-[90%] mx-auto scrollbar-thin scrollbar-thumb-gray-400 whitespace-nowrap h-[50vh]">
        <History/>
      </section>

      {/* PROMINENT ALUMNI  */}
      <section className="flex flex-col w-[100%] mx-auto my-5">
        <h1 className=" font-[family-name:var(--font-Cabin)] text-5xl font-bold mb-4 text-center bg-primary border-t-[12] border-b-[12] border-secondary py-4">Prominent Alumni</h1>
        <h1 className="font-[family-name:var(--font-Cabin)] text-primary opacity-90 mx-auto w-[90%] md:w-[80%] text-xl md:text-2xl text-center font-bold">
          We shape men who shape the world. Delta Upsilon proudly celebrates the achievements of our brothers who have made meaningful impacts in their careers and communities.
        </h1>
         <div className="flex flex-row w-[90%] mx-auto text-[color:var(--textColor)] gap-6 overflow-x-auto md:overflow-x-visible pb-4 scrollbar-thin scrollbar-thumb-gray-400">
          {animatedCards.map((card, idx) => (
            <AlumniCard
              key={card.name + idx}
              name={card.name}
              description={card.description}
              image={card.image}
              link={card.link}
            />
          ))}
         </div>


      </section>
          
        
      <hr className="w-full h-[1.5px] bg-secondary"/> 
      {/* <Reviews/> */}

    </main>
  );
}