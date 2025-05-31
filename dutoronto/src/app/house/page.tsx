import H1 from "../../../public/images/Ho1.webp"
import H2 from "../../../public/images/snow.webp"
import H3 from "../../../public/images/Pool.webp"
import H4 from "../../../public/images/Chapter.webp"
import HouseInfo from "@/components/HouseInfo";
import Lion from "../../../public/images/Lion.webp";

export default function House() {

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
          <h1 className="font-[family-name:var(--font-Roboto)] md:bottom-6 text-4xl uppercase text-center font-bold md:text-7xl ml-0.5 mr-0.5 relative -translate-y-3">
            Delta House
          </h1>
          <p className="font-[family-name:var(--font-Roboto)] md:bottom-7 text-primary text-2xl text-center mt-2 ml-0.5 mr-0.5 relative -translate-y-3">
            Share a Home With Your Brothers
          </p>
          <div className="grid grid-cols-1 max-w-screen-md mt-2">
            {/* <a href="/services" className="btn">
              Learn More
            </a> */}
            <a href="/contacts" className="btn">
              Contact Us
            </a>
          </div>
        </div>
            

      </section>
        <hr className="w-[75vw] mx-auto border-0 z-14 mt-6 h-[0.8px] bg-primary"/> 
      {/* overview */}
      <section className="flex flex-col mt-2 md:flex-row w-[90%] md:h-[70vh] lg:h-[55vh] mx-auto text-[color:var(--textColor)] 2xl:mb-2 items-center">
        <img
          src={H2.src}
          alt="Delta Upsilon hosue in snow"
          className="md:flex-1 h-[50vw] md:h-[25vw] my-2 md:mt-5 border-2 border-secondary shadow-lg"
          style={{ objectFit: "contain" }}
        />
        <HouseInfo/>
        

        
      </section>
          <hr className="w-[75vw] mx-auto border-0 z-14 mt-6 mb-24 h-[0.8px] bg-primary"/> 
      {/* details */}
      <section className="relative w-full md:h-[60vw] lg:h-[50vw] xl:h-[40vw] 2xl:h-[38vw] flex flex-col items-center justify-center text-center px-2  mb-3">
        <div className="hidden md:block z-15 absolute md:top-[-35] md:left-[45] w-[20vw] h-[70vh]">
              <img src={Lion.src} alt="Sample 1" className="w-full h-full object-cover opacity-35" />
        </div>
      {/* Background Circle */}

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="hidden md:block w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] lg:w-[50vw] lg:h-[50vw] xl:w-[40vw] xl:h-[40vw] 2xl:w-[38vw] 2xl:h-[38vw] bg-transparent md:bg-primary rounded-full absolute">
          {/* Floating Images */}
          <div className="z-15 absolute md:top-[-35] md:left-[15] xl:top-[-45] xl:left-[15] 2xl:top-[-75] 2xl:left-[15] top-2 left-15 md:w-46 md:h-46 w-22 h-22 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 scale-100 hover:scale-165 hover:shadow-none">
            <img src={H3.src} alt="Sample 1" className="w-full h-full object-cover" />
          </div>
          <div className="z-15 absolute md:top-[-45] xl:top-[-55] xl:right-[15] 2xl:top-[-80] 2xl:right-[15] right-13 top-[-7] w-26 h-26 md:w-42 md:h-42 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 scale-100 hover:scale-165 hover:shadow-none">
            <img src={H4.src} alt="Sample 2" className="w-full h-full object-cover" />
          </div>
          <div className="z-15 absolute md:bottom-[5] md:left-[500] md:w-46 md:h-46 bottom-28 left-26 w-24 h-24 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 scale-100 hover:scale-165 hover:shadow-none">
            <img src={H4.src} alt="Sample 3" className="w-full h-full object-cover" />
          </div>
          {/* <div className="absolute bottom-10 right-10 w-24 h-24 rounded-lg overflow-hidden shadow-lg">
            <img src={H4.src} alt="Sample 4" className="w-full h-full object-cover" />
          </div> */}
            
          </div>

        </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl xl:top-[-30]">
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">Delta House</p>
        <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-serif font-bold text-gray-800 mb-4 md:mx-14">
          A Home That Fosters <span className="italic">Brotherhood</span>, Growth, and Comfort
        </h1>
        <p className="text-lg text-gray-600 mb-6 md:mx-24">
          Our fraternity house isn’t just a place to live — it’s a community built to support your academic, social, and personal development. Enjoy access to an industrial-grade kitchen, dedicated study library, spacious TV rooms, in house Gym, and pool rooms for leisure and bonding. It’s more than housing — it’s home.
        </p>
        {/* <button className="px-6 py-3 border-2 border-gray-800 text-gray-800 font-semibold rounded-full hover:bg-gray-800 hover:text-white transition">
          Learn More About the House
        </button> */}
      </div>
      <div className="z-15 md:hidden flex flex-row w-[90%] mx-auto text-[color:var(--textColor)] gap-6 overflow-x-auto md:overflow-x-visible pb-4 scrollbar-thin scrollbar-thumb-gray-400">
        <img src={H4.src} alt="Sample 3" className="w-full h-full object-cover" />
        <img src={H4.src} alt="Sample 3" className="w-full h-full object-cover" />
        <img src={H4.src} alt="Sample 3" className="w-full h-full object-cover" />
      </div>
        <div className="z-15 absolute hidden md:block md:top-[-35] md:right-[45] w-[20vw] h-[70vh]">
            <img src={Lion.src} alt="Sample 1" className="w-full h-full object-cover opacity-35" />
        </div>
      </section>
          <hr className="w-[75vw] mx-auto border-0 z-14 mt-6 mb-6 h-[0.8px] bg-primary"/> 
        
      <hr className="w-full h-[1.5px] bg-secondary"/> 
      {/* <Reviews/> */}

    </main>
  );
}