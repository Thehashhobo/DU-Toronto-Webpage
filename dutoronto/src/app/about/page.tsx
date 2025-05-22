import ContactForm from "@/components/ContactForm";
import H1 from "../../../public/images/H1.jpg"
import {InstagramFilled, LinkedinFilled } from '@ant-design/icons';

export default function About() {


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
          
        
      <hr className="w-full h-[1.5px] bg-secondary"/> 
      {/* <Reviews/> */}

    </main>
  );
}