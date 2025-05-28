import ContactForm from "@/components/ContactForm";
import Lester from "../../../public/images/Yousuf-Karsh-Lester-Pearson-1965-789x980.jpg"
import H2 from "../../../public/images/snow.jpg"
import {InstagramFilled, LinkedinFilled } from '@ant-design/icons';

export default function Alumni() {


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
        className="relative w-full h-[60vh] md:h-[100vh] bg-cover bg-position-[center_top_-4rem] justify-center overflow-hidden"
        style={{backgroundImage: `url(${Lester.src})`}}
      >
        {/* Overlay and Content */}
        <div className="font-[family-name:var(--font-Roboto)] relative z-10 flex flex-col pt-18 md:pt-1 items-center justify-center h-full text-white bg-black/60">
          {/* <p className="text-3xl text-[#ffffffd6] text-center mt-2 mb-2 ml-0.5 mr-0.5 relative -translate-y-3">
             
          </p> */}
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


      </section >
        <hr className="w-[75vw] mx-auto z-15 mt-6 h-[0.75px] bg-textColor"/> 
      {/* overview */}
      <section id="sign_up" className="flex flex-col md:flex-row w-[90%] h-[75vh] md:h-[75vh] mx-auto text-[color:var(--textColor)]">
        <img
          src={H2.src}
          alt="Delta Upsilon Coat of Arms"
          className="md:flex-1 h-[50vw] md:h-[25vw] my-2 md:mt-5 border-2 border-secondary shadow-lg"
          style={{ objectFit: "contain" }}
        />
        <div className="flex flex-col md:self-center md:flex-3 mt-5 md:mr-0 md:mb-5 md:ml-5 border-1 p-3 md:p-10 border-secondary">
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
      </section>

          
        
      <hr className="w-full h-[1.5px] bg-secondary"/> 
      {/* <Reviews/> */}

    </main>
  );
}