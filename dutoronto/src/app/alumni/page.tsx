import Image from 'next/image'
import type { Metadata } from 'next';
import Lester from "../../../public/images/ap1.webp"
import Collage from "../../../public/images/ap2.webp"
import AlumniSignupForm from './AlumniSignupForm'

export const generateMetadata = (): Metadata => ({
  title: "Alumni | Delta Upsilon Toronto",
  description: "Stay connected with the Delta Upsilon Toronto alumni community. Learn how to get involved, support the chapter, and attend future events.",
  alternates: {
    canonical: "https://dutoronto.org/alumni",
  },
  openGraph: {
    title: "DU Toronto Alumni Network",
    description: "Reconnect and support the next generation of brothers through our growing alumni community.",
    url: "https://dutoronto.org/alumni",
    images: [
      {
        url: "/images/ap2.webp",
        width: 898,
        height: 1056,
        alt: "Compilation of DU toronto alumnis",
      },
    ],
  },
});

export default function Alumni() {
  return (
    <main className="flex flex-col min-h-screen justify-start items-start">
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] md:h-[100vh] bg-cover md:bg-position-[center_top_-4rem] justify-center overflow-hidden"
        style={{ backgroundImage: `url(${Lester.src})` }}
      >
        <div className="font-[family-name:var(--font-Roboto)] relative z-10 flex flex-col pt-18 md:pt-1 items-center justify-center h-full text-white bg-black/60">
          <h1 className="font-[family-name:var(--font-Roboto)] md:bottom-6 text-4xl uppercase text-center font-bold md:text-7xl ml-0.5 mr-0.5 relative -translate-y-3">
            Alumni Relations
          </h1>
          <p className="font-[family-name:var(--font-Roboto)] md:bottom-7 text-primary text-2xl text-center mt-2 ml-0.5 mr-0.5 relative -translate-y-3">
            Stay Connected with Your Brothers
          </p>
          <div className="gap-8 max-w-screen-md mt-2">
            <a href="#sign_up" className="btn">
              Sign Up
            </a>
          </div>
        </div>
        <span
          className="absolute right-4 bottom-4 z-15 text-xs md:text-sm font-[family-name:var(--font-Cabin)] italic text-white drop-shadow-md text-right"
          style={{ letterSpacing: "0.02em" }}
        >
          Lester B. Pearson, 14th Prime Minister of Canada, Delta Upsilon Toronto Chapter
        </span>
      </section>

      {/* Collage Section */}
      <section className="flex flex-col md:flex-row w-[90%] mx-auto my-16 items-center min-h-[380px]">
        <div className="w-full md:w-[420px] h-[320px] flex items-center justify-center bg-white rounded-lg shadow-lg mb-6 md:mb-0 md:mr-8 overflow-hidden">
          <Image
            src={Collage}
            priority={true}
            width={898}
            height={1056}
            alt="Delta Upsilon Prominent Alumni Collage"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-Roboto)] font-bold mb-4 text-secondary">
            Prominent Delta Upsilon Alumni
          </h2>
          <p className="text-base md:text-lg font-[family-name:var(--font-Cabin)] text-[color:var(--textColor)]">
            Delta Upsilon has a proud tradition of producing leaders and changemakers across many fields. Our alumni include Nobel laureates, prime ministers, astronauts, business pioneers, and advocates for social progress. 
            <br /><br />
            Among our most distinguished members is Lester B. Pearson, Nobel Peace Prize recipient and former Prime Minister of Canada. Other notable alumni include Charles Evans Hughes (Chief Justice of the U.S. Supreme Court), Kurt Vonnegut (acclaimed author), and Alan Bean (Apollo 12 astronaut). 
            <br /><br />
            The achievements of our alumni inspire current and future brothers to strive for excellence, leadership, and service in all their endeavors.
          </p>
        </div>
      </section>
        
      <hr className="w-full h-[1.5px] bg-secondary" id="sign_up"/> 

      {/* Mailing List Section */}
      <section className="flex flex-col items-center w-full py-14 bg-gray-900" >
        <h2 className="mt-4 text-2xl md:text-3xl xl:text-4xl font-[family-name:var(--font-Roboto)] font-bold mb-2 text-primary mx-4 text-center" >
          Stay Connected: Alumni Mailing List
        </h2>
        <p className="text-base md:text-lg font-[family-name:var(--font-Cabin)] mb-6 text-center max-w-full text-gray-100 overflow-x-auto mx-4">
          Sign up to receive updates, event invitations, and news from the Delta Upsilon Toronto Alumni community.
        </p>
        {/* Mailchimp Signup Form */}
        <AlumniSignupForm />
      </section>

    </main>
  );
}