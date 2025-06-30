import { FacebookFilled, InstagramFilled } from '@ant-design/icons';
import Link from "next/link";
import Image from 'next/image';
export default function Footer() {
    return (
      <footer className="w-full bg-gray-900 text-gray-100">
        {/* Very light line above footer */}
        <div className="w-full h-[2px] bg-white/10 mb-4" />
        <div
          className="relative flex flex-col lg:flex-row justify-between p-6 xl:p-4 text-white gap-2 lg:gap-8"
        >
          {/* Footer content */}
          <div className="relative z-10 w-full flex flex-col md:flex-row justify-between item-center md:items-start md:gap-8 gap-2 lg:px-4">
            {/* Footer Links */}
            <div className="mb-6 md:mb-0 w-full md:w-auto bg-gray-900 md:hidden lg:block rounded-2xl p-4 flex flex-col items-center">
              <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-Cabin)] text-white font-bold uppercase mb-4 text-center">
                DU Toronto
              </h3>
              <Image
                src="/images/private/L2.webp"
                width={225}
                height={225}
                alt="Delta Upsilon Coat of Arms"
                className="h-50 w-auto my-2 md:mt-5 mx-auto"
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className="mb-6 md:mb-0 bg-gray-900 rounded-2xl p-4 flex flex-col items-center md:ml-[-12px] ">
              <h3 className="text-3xl text-white md:text-4xl font-bold uppercase mb-4 text-center w-full md:-ml-6">
                Links
              </h3>
              <ul className="list-disc md:ml-1 ml-8 space-y-1">
                <li>
                  <Link href="/" className="text-xl text-primary hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-xl text-primary hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/membership" className="text-xl text-primary hover:underline">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="/alumni" className="text-xl text-primary hover:underline">
                    Alumni
                  </Link>
                </li>
                <li>
                  <Link href="/house" className="text-xl text-primary hover:underline">
                    House
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-xl text-primary hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Footer Social */}
            <div className="mb-6 md:mb-0 bg-gray-900 rounded-2xl p-4 flex flex-col items-center md:ml-[-32px] ">
              <h3 className="text-3xl text-white md:text-4xl font-bold uppercase mb-4 text-center w-full md:-ml-6 ml-0">
                Contacts
              </h3>
              <div className="flex flex-col gap-3 md:space-x-4">
                <a
                  href="/contact"
                  className="btn"
                >
                  Contact Us
                </a>

                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/DUToronto/" target="_blank" className="text-white text-2xl hover:text-primary">
                    <FacebookFilled />
                  </a>
                  {/* <a href="#" target="_blank" className="text-white text-2xl hover:text-primary">
                    <TwitterCircleFilled />
                  </a> */}
                  <a href="https://www.instagram.com/dutoronto/" target="_blank" className="text-white text-2xl hover:text-primary">
                    <InstagramFilled />
                  </a>
                  {/* <a href="#" target="_blank" className="text-white text-2xl hover:text-primary">
                    <YoutubeFilled />
                  </a> */}
                </div>
              </div>
            </div>

            {/* Footer Info */}
            <div className="bg-gray-900 rounded-2xl p-4 flex flex-col items-center">
              <h3 className="text-3xl text-white md:text-4xl font-bold uppercase mb-4 text-center ">General Inquiries</h3>
              <p className="text-primary text-lg lg:text-xl mb-2 text-nowrap mx-3">
                <strong>Location:</strong> 182 St George St Toronto, ON
              </p>
              {/* <p className="mb-2">
                <strong>Hours:</strong> Mon - Fri: 10 AM - 6 PM
              </p> */}
              <p className="text-primary text-lg lg:text-xl mb-2 ">
                <strong>Phone:</strong> +1 (431) 998-3452
              </p>
              <p>
                <strong className='text-primary text-lg lg:text-xl'>Email:</strong>{" "}
                <a href="mailto:dutorontochapter@gmail.com" className="text-lg lg:text-xl text-primary hover:underline">
                  Email Delta Upsilon 
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col md:flex-row justify-center items-center px-2 bg-gray-200 text-white py-4">
          {/* Company Name */}
          <p className="text-sm text-black pr-2 text-center">
            © {new Date().getFullYear()} Delta Upsilon Toronto - Fraternity | All rights reserved.
          </p>
  
          {/* Designer/Builder Credit */}
          <p className="text-xs md:text-sm mt-2 md:mt-0 text-black">
            Designed and built by{" "}
            <Link href="https://www.jerrywjn.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
              Jerry W
            </Link>
            ,{" "}
            <Link href="https://mikhskaz.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
              Michael
            </Link>
            ,{" "}
            <Link href="https://www.linkedin.com/in/varun-spillai/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
              Varun
            </Link>
            , and{" "}
            <Link href="https://www.linkedin.com/in/devyanshsharma/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
              Devyansh
            </Link>
          </p>
        </div>
      </footer>
    );
}