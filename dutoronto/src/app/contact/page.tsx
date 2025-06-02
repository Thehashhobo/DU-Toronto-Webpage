import ContactForm from "@/components/ContactForm";
import H1 from "../../../public/images/H1.webp";
import {InstagramFilled} from '@ant-design/icons';
import adrian from "../../../public/exec/adrian.webp"
import Image from "next/image";

export default function Contact() {


  const recruitment = {
    name: "Azaryah Mendes",
    phone: "+1 (647)-274-0504",
    email: "Mendesazaryah@gmail.com",
    instagram: "https://www.instagram.com/azaryah_mendes/",
  }

  const alumni = {
    name: "Adrian Cachia",
    phone: "+1 (647) 545-7141",
    email: "adriancachia7@gmail.com",
    instagram: "https://www.instagram.com/adrian_cachia/",
    }   
 

  return (
    <main className="flex flex-col mt-24 md:mt-26 mb-12">
      <h1 className=" font-[family-name:var(--font-Roboto)] text-5xl xl:text-6xl font-bold mb-4 text-center bg-primary border-t-[12] border-b-[12] border-secondary py-4">Contact Us</h1>
      <section className="flex flex-col w-[95vw] md:w-[90vw] mx-auto md:flex-row gap-4 justify-start  items-start">
          <div className="flex flex-col flex-1 md:max-w-[50vw] mx-auto px-4 md:pl-16 mt-6">
              {/* Recruitment */ }
              <div className="md:ml-4 ml-0">
                  <h1 className="text-3xl xl:text-4xl font-bold mb-2 text-center">Membership Inquires</h1>
                  <p className="mb-6">
                      For Question related to membership, please contact our Minister of Recruitment.
                  </p>
                  <div className="flex flex-row lg:gap-12 gap-4 mb-6">
                    <div className="relative w-36 h-42 mb-4">
                      <Image
                        src={H1}
                        width={1024}
                        height={768}
                        alt="Recruitment"
                        className="w-full h-full object-cover bg-gray-200"
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
                  <h1 className="text-3xl xl:text-4xl font-bold mb-2 text-center">Alumni Inquires</h1>
                  <p className="mb-4">
                      For Question related to alumni and events, please contact our Minister of External Relations.
                  </p>
                  <div className="flex flex-row lg:gap-12 gap-4 mb-6">
                    <div className="relative w-36 h-42 mb-4">
                      <Image
                        src={adrian}
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