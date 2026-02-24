import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/membership", label: "Membership" },
  { href: "/alumni", label: "Alumni" },
  { href: "/house", label: "House" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c1a2e] text-white">
      {/* Gold accent bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#edc058] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src="/images/Logo.webp"
            width={1536}
            height={678}
            alt="Delta Upsilon Toronto"
            className="h-10 w-auto mb-4 brightness-0 invert"
          />
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Building Better Men Since 1899.
            Canada&apos;s oldest non-secret fraternity, rooted in justice,
            character, friendship, and culture.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="eyebrow text-[#edc058] mb-5">Navigate</h4>
          <ul className="space-y-2">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-gray-300 hover:text-[#edc058] text-sm transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="eyebrow text-[#edc058] mb-5">Connect</h4>
          <div className="flex gap-3 mb-5">
            <a
              href="https://www.facebook.com/DUToronto/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-gray-300 hover:text-[#edc058] hover:border-[#edc058] transition-colors duration-200 text-lg"
              aria-label="Facebook"
            >
              <FacebookFilled />
            </a>
            <a
              href="https://www.instagram.com/dutoronto/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-gray-300 hover:text-[#edc058] hover:border-[#edc058] transition-colors duration-200 text-lg"
              aria-label="Instagram"
            >
              <InstagramFilled />
            </a>
          </div>
          <Link href="/contact" className="btn-primary text-xs px-4 py-2">
            Contact Us
          </Link>
        </div>

        {/* General Inquiries */}
        <div>
          <h4 className="eyebrow text-[#edc058] mb-5">General Inquiries</h4>
          <address className="not-italic space-y-2 text-sm text-gray-300">
            <p>182 St George St<br />Toronto, ON M5R 2N3</p>
            <p>
              <a href="footer-tel" className="hover:text-[#edc058] transition-colors">
                +1 (647) 971-1776
              </a>
            </p>
            <p>
              <a
                href="mailto:dutorontochapter@gmail.com"
                className="hover:text-[#edc058] transition-colors"
              >
                dutorontochapter@gmail.com
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Delta Upsilon Toronto — All rights reserved.</p>
          <p>
            Designed &amp; built by Brothers{" "}
            <Link href="https://www.jerrywjn.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#edc058] transition-colors">Jerry W</Link>
            ,{" "}
            <Link href="https://mikhskaz.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#edc058] transition-colors">Mikhail S</Link>
            {" "}&amp;{" "}
            <Link href="https://www.linkedin.com/in/devyanshsharma/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#edc058] transition-colors">Devyansh S</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
