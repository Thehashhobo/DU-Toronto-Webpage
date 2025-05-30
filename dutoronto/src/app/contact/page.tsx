import ContactForm from "@/components/ContactForm";
import H1 from "../../../public/images/H1.jpg";
import {InstagramFilled, LinkedinFilled } from '@ant-design/icons';

export default function Contact() {


  const recruitment = {
    name: "Recruitment Name",
    phone: "111 111 1111",
    email: "test@gmail.com",
    instagram: "https://instagram.com/",
  }

  const alumni = {
    name: "ER Name",
    phone: "111 111 1111",
    email: "test@gmail.com",
    instagram: "https://instagram.com/",
    }   

  return (
    <main className="flex flex-col mt-24 md:mt-26">
      <h1 className=" font-[family-name:var(--font-Roboto)] text-5xl font-bold mb-4 text-center bg-primary border-t-[12] border-b-[12] border-secondary py-4">Contact Us</h1>
      <section className="flex flex-col md:w-[90vw] mx-auto md:flex-row gap-4 min-h-screen justify-start  items-start">
          <div className="flex flex-col flex-1 md:max-w-[50vw] mx-auto px-4 md:pl-16">
              {/* Recruitment */ }
              <div className="ml-4">
                  <h1 className="text-3xl font-bold mb-2">Membership Inquires</h1>
                  <p className="mb-6">
                      For Question related to membership, please contact our Minister of Recruitment.
                  </p>
                  <div className="flex flex-row gap-12 mb-6">
                    <div className="relative w-36 h-42 mb-4">
                      <img
                        src={H1.src}
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
              <div className="ml-6">
                  <h1 className="text-3xl font-bold mb-2">Alumni Inquires</h1>
                  <p className="mb-4">
                      For Question related to status and events, please contact us our Minister of External Relations.
                  </p>
                  <div className="flex flex-row gap-12 mb-6">
                    <div className="relative w-36 h-42 mb-4">
                      <img
                        src={H1.src}
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
                      

                      <p><span className="font-semibold text-xl">Name:</span> {alumni.name}</p>
                      <p><span className="font-semibold text-xl">Phone:</span> {alumni.phone}</p>
                      <p><span className="font-semibold text-xl">Email:</span> {alumni.email}</p>
                    </div>
                  </div>
         
              </div>
              
              <p className="ml-6">
              For all other inquires! Please fill out the Contact form and we
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