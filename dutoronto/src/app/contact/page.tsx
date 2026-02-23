import ContactForm from "@/components/ContactForm";
import {InstagramFilled} from '@ant-design/icons';
import ian from "../../../public/exec/ian.webp"
import adam from "../../../public/exec/adam.webp";
import Image from "next/image";
import type { Metadata } from 'next';

export const generateMetadata = (): Metadata => ({
  title: "Contact Us",
  description: "Have questions or want to get in touch with Delta Upsilon Toronto? Reach out to our chapter leadership today.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Delta Upsilon Toronto",
    description: "Get in touch with our executive team and learn more about our chapter at the University of Toronto.",
    url: "/contact",
    images: [
      {
        url: '/images/Coat of Arms.webp', // 1200×630 JPEG <150 kB
        width: 300,
        height: 351,
        alt: 'Snow-covered Delta Upsilon house at 182 St. George St, Toronto',
      },
    ],
  },
});


export default function Contact() {
  const recruitment = {
    name: "Adam Ratanshi",
    phone: "+1 (437) 855-2773",
    email: "adamaliratanshi@gmail.com",
    instagram: "https://www.instagram.com/adamaliratanshi/",
  }

  const alumni = {
    name: "Ian Murray",
    phone: "+1 (240) 676-8460",
    email: "murrayian647@gmail.com",
    instagram: "https://www.instagram.com/ian.y.murray/",
    }   
 

  return (
    <main className="flex flex-col mt-24 md:mt-26 mb-12">
      <h1 className=" font-[family-name:var(--font-Roboto)] text-5xl xl:text-6xl font-bold mb-4 text-center bg-primary border-t-[12] border-b-[12] border-secondary py-4">Contact Us</h1>
      <section className="flex flex-col w-[95vw] md:w-[90vw] mx-auto md:flex-row gap-4 justify-start  items-start">
          <div className="flex flex-col flex-1 md:max-w-[50vw] mx-auto px-4 md:pl-16 mt-6">
              {/* Recruitment */ }
              <div className="md:ml-4 ml-0">
                  <h2 className="text-3xl xl:text-4xl font-bold mb-2 text-center">Membership Inquires</h2>
                  <p className="mb-4">
                    For questions related to membership,{" "}
                    <span className="whitespace-nowrap">please contact our Minister of Recruitment.</span>
                  </p>
                  <div className="flex flex-row lg:gap-12 gap-4 mb-6">
                    <div className="relative w-36 h-42 mb-4">
                    <Image
                      src={adam}
                      quality={100}
                      width={1024}
                      height={1536}
                      alt="Recruitment"
                      className="w-full h-full object-cover bg-gray-200 object-top"
                      sizes="250px"
                    />
                      {recruitment.instagram && (
                        <a
                          href={recruitment.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute bottom-[-25] right-[-25] bg-yellow-300 rounded-full w-12 h-12 flex items-center justify-center text-gray-800 text-2xl hover:bg-yellow-400 transition"
                        >
                          <InstagramFilled />
                        </a>
                      )}
                    </div> 
                    <div className="flex flex-col">
                      

                      <p><span className="font-semibold text-xl">Name:</span> {recruitment.name}</p>
                      <p><span className="font-semibold text-xl">Phone:</span> {recruitment.phone}</p>
                      <p><span className="font-semibold text-xl">Email:</span> {recruitment.email}</p>
                    </div>
                  </div>
         
              </div>

              {/* Alumni */ }
              <div className="md:ml-4 ml-0">
                  <h2 className="text-3xl xl:text-4xl font-bold mb-2 text-center">Alumni Inquires</h2>
                  <p className="mb-4">
                    For questions related to alumni and events,{" "}
                    <span className="whitespace-nowrap">please contact our Minister of External Relations.</span>
                  </p>
                  <div className="flex flex-row lg:gap-12 gap-4 mb-6">
                    <div className="relative w-36 h-42 mb-4">
                      <Image
                        src={ian}
                        width={2832}
                        height={4340}
                        alt="Recruitment"
                        className="w-full h-full object-cover bg-gray-200 object-top"
                      />
                      {recruitment.instagram && (
                        <a
                          href={alumni.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute bottom-[-25] right-[-25] bg-yellow-300 rounded-full w-12 h-12 flex items-center justify-center text-gray-800 text-2xl hover:bg-yellow-400 transition"
                        >
                          <InstagramFilled />
                        </a>
                      )}
                    </div> 
                    <div className="flex flex-col">
                      

                      <p><span className="font-semibold text-xl">Name:</span> {alumni.name}</p>
                      <p><span className="font-semibold text-xl">Phone:</span> {alumni.phone}</p>
                      <p><span className="font-semibold text-xl">Email:</span> {alumni.email}</p>
                    </div>
                  </div>
         
              </div>
              
              <p className="md:ml-4 ml-0">
              For all other inquires, fill the Contact form and we
              will get back to you as soon as possible.
              </p>
              
          </div>
          <div className="flex flex-1 mb-5 md:mt-10 md:max-w-[50vw] mx-auto">
          <ContactForm />
          </div>
      </section>
    </main>
  );
}