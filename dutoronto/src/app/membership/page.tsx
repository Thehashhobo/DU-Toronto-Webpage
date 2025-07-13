import MembershipHeader from "../../../public/images/MembershipHeader.webp";
import QuickFactsSection from "../../components/QuickFactsSection";
import ImpactSection from "../../components/ImpactSection";
import FAQSection from "../../components/FAQSection";
import type { Metadata } from 'next';

export const generateMetadata = (): Metadata => ({
  title: "Membership",
  description: "Learn what it means to become a member of Delta Upsilon at U of T. Explore our values, recruitment process, and lifelong brotherhood.",
  alternates: {
    canonical: "/membership",
  },
  openGraph: {
    title: "Join DU Toronto",
    description: "Discover the benefits of membership in Canada’s oldest non-secret fraternity. Get involved today.",
    url: "/membership",
    images: [
      {
        url: "/images/MembershipHeader.webp",
        width: 4061,
        height: 2098,
        alt: "New member class at Delta Upsilon Toronto",
      },
    ],
  },
});


export default function Membership() { 

  return (
    <main className="flex flex-col min-h-screen justify-start items-start">
      <section
        className="relative w-full h-[50vh] md:h-[40vh] mt-24 md:mt-20 xl:mt-22 2xl:mt-26 bg-cover justify-start overflow-hidden"
        style={{ backgroundImage: `url(${MembershipHeader.src})`,
                backgroundPosition: "center 10%",}}
      >
        {/* Overlay and Content */}
        <div className="font-[family-name:var(--font-Roboto)] relative z-10 flex flex-col pt-18 md:pt-1 items-center justify-center h-full text-white bg-black/60">
          {/* <p className="text-3xl text-[#ffffffd6] text-center mt-2 mb-2 ml-0.5 mr-0.5 relative -translate-y-3">
             
          </p> */}
          <h1 className="font-[family-name:var(--font-Roboto)] text-4xl uppercase text-center font-bold md:text-7xl ml-0.5 mr-0.5 relative -translate-y-3">
            Why DU?
          </h1>
          {/* <p className="font-[family-name:var(--font-Roboto)] text-primary text-2xl text-center mt-2 ml-0.5 mr-0.5 relative -translate-y-3">
            Share a Home with your Brothers
          </p> */}
        </div>
      </section>

      <ImpactSection/>

      <FAQSection/>

      <QuickFactsSection/>
        
      <hr className="w-full h-[1.5px] bg-secondary"/> 
      {/* <Reviews/> */}

    </main>
  );
}