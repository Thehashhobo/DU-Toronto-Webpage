import { FacebookFilled, TwitterCircleFilled, InstagramFilled, YoutubeFilled } from '@ant-design/icons';
import Link from "next/link";
import F1 from "../../public/images/F2.jpg";
export default function Footer() {
    return (
      <footer>
        <div
          className="relative flex flex-col md:flex-row justify-between items-start p-8 text-white"
          style={{
            backgroundImage: `url(${F1.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Blur and opacity overlay */}
          <div className="absolute inset-0 bg-black/35 backdrop-blur-xs z-0" />
          
          {/* Footer content */}
          <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start">
            {/* Footer Links */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg md:text-4xl font-[family-name:var(--font-Cabin)]  text-primary font-bold uppercase mb-4">
                Delta Upsilon Toronto</h3>
            <img
            src="/images/L3.png"
            alt="Delta Upsilon Coat of Arms"
            className="md:flex-1 h-42 md:h-42 my-2 md:mt-5"
            style={{ objectFit: "contain" }}
          />
            </div>

            <div className="mb-6 md:mb-0">
              <h3 className="text-lg text-primary md:text-3xl font-bold uppercase mb-4">Links</h3>
              <ul className="list-disc ml-1 space-y-1">
                <li>
                  <Link href="/" className="text-primary hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-primary hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/membership" className="text-primary hover:underline">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="/alumni" className="text-primary hover:underline">
                    Alumni
                  </Link>
                </li>
                <li>
                  <Link href="/house" className="text-primary hover:underline">
                    House
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-primary hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Footer Social */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg text-primary md:text-3xl font-bold uppercase mb-4">Contacts</h3>
              <div className="flex flex-col gap-3 space-x-4">
              <a
              href="/contacts"
              className="btn"
              >
              Contact Us
              </a>

              <div className="flex space-x-4">
                <a href="#" target="_blank" className="text-white text-2xl hover:text-secondary">
                  <FacebookFilled />
                </a>
                <a href="#" target="_blank" className="text-white text-2xl hover:text-secondary">
                  <TwitterCircleFilled />
                </a>
                <a href="#" target="_blank" className="text-white text-2xl hover:text-secondary">
                  <InstagramFilled />
                </a>
                <a href="#" target="_blank" className="text-white text-2xl hover:text-secondary">
                  <YoutubeFilled />
                </a>
              </div>

              </div>
            </div>

            {/* Footer Info */}
            <div>
              <h3 className="text-lg text-primary md:text-3xl font-bold uppercase mb-4">General Inquiries</h3>
              <p className="text-primary mb-2">
                <strong>Location:</strong> 182 St George St, Toronto, ON
              </p>
              {/* <p className="mb-2">
                <strong>Hours:</strong> Mon - Fri: 10 AM - 6 PM
              </p> */}
              <p className="text-primary mb-2">
                <strong>Phone:</strong> +1 778-989-8588
              </p>
              <p>
                <strong className='text-primary'>Email:</strong>{" "}
                <a href="mailto:oceanwave.vip@gmail.com" className="text-primary hover:underline">
                Email Delta Upsilon 
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col md:flex-row justify-center items-center px-2 bg-gray-200 text-white py-4">
          {/* Company Name */}
          <p className="text-sm text-black pr-2">
            © {new Date().getFullYear()} Delta Upsilon Toronto - Fraternity | All rights reserved | 
          </p>
  
          {/* Designer/Builder Credit */}
          <p className="text-sm mt-2 md:mt-0 text-black">
            Designed and built by <a href="https://thehashhobo.github.io/Personal-Website/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Jerry W</a> and {" "}
            <a href="https://thehashhobo.github.io/Personal-Website/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">micheal</a>
          </p>
        </div>
      </footer>
    );
  }