import Lester from "../../../public/images/ap1.webp"
import Collage from "../../../public/images/ap2.webp"
import Image from 'next/image'


export default function Alumni() {

  return (
    <main className="flex flex-col min-h-screen justify-start items-start">
      <section
        className="relative w-full h-[60vh] md:h-[100vh] bg-cover md:bg-position-[center_top_-4rem] justify-center overflow-hidden"
        style={{backgroundImage: `url(${Lester.src})`} }
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
        <span
          className="absolute right-4 bottom-4 z-15 text-xs md:text-sm font-[family-name:var(--font-Cabin)] italic text-white drop-shadow-md text-right"
          style={{ letterSpacing: "0.02em" }}
        >
          Lester B. Pearson, 14th Prime Minister of Canada, Delta Upsilon Toronto 1919
        </span>
      </section>

      {/* Collage Section */}
      <section className="flex flex-col md:flex-row w-[90%] mx-auto my-12 items-center">
        <div className="w-full md:w-[520px] h-[420px] flex items-center justify-center bg-white rounded-lg shadow-lg mb-6 md:mb-0 md:mr-8 overflow-hidden">
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
        <form
          action="https://YOUR_MAILCHIMP_PREFIX.usX.list-manage.com/subscribe/post?u=YOUR_U_ID&amp;id=YOUR_LIST_ID"
          method="post"
          target="_blank"
          className="flex flex-col gap-4 max-w-[90%] w-lg bg-gray-800 p-6 rounded-lg shadow-lg mx-4"
        >
          <input
            type="text"
            name="FNAME"
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="EMAIL"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="tel"
            name="PHONE"
            placeholder="Phone Number (optional)"
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded-md font-bold hover:bg-primary/90 transition"
          >
            Sign Up
          </button>
        </form>
        <div className="mb-10" />
      </section>

    </main>
  );
}