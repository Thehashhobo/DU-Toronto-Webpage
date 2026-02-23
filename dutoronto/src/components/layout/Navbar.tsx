"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

/** Pages where the navbar should always appear in its scrolled (solid) state */
const alwaysScrolledRoutes = ["/contact", "/membership", "/about", "/alumni", "/news"];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/membership", label: "Membership" },
  { href: "/alumni", label: "Alumni" },
  { href: "/news", label: "News" },
  { href: "/house", label: "House" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60 || alwaysScrolledRoutes.includes(pathname));
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  function handleNavClick() {
    setIsMenuOpen(false);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className={`fixed w-full z-20 top-0 left-0 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-[#f8f7f0] shadow-sm border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">

          {/* Logo */}
          <Link href="/" onClick={handleNavClick} className="flex-shrink-0">
            <Image
              src="/images/Logo.webp"
              width={1536}
              height={678}
              className={`h-10 md:h-12 w-auto transition-all duration-300 ${
                !isScrolled && !isMenuOpen ? "brightness-0 invert" : ""
              }`}
              alt="Delta Upsilon Toronto Logo"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`
                  relative px-4 py-2 font-[family-name:var(--font-Cabin)] font-bold text-sm
                  uppercase tracking-wider transition-colors duration-200
                  ${isScrolled
                    ? isActive(href)
                      ? "text-[#edc058]"
                      : "text-[#1a1a2e] hover:text-[#0F52BA]"
                    : isActive(href)
                      ? "text-[#edc058]"
                      : "text-white hover:text-[#edc058]"
                  }
                `}
              >
                {label}
                {isActive(href) && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#edc058]" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/contact" onClick={handleNavClick} className="btn-primary text-sm px-5 py-2">
              Get In Touch
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => { setIsMenuOpen(!isMenuOpen); setScrolled(true); }}
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-[#1a1a2e] hover:bg-gray-100 rounded-md transition"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              {isMenuOpen ? (
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l15 12M16 1L1 13" />
              ) : (
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#f8f7f0] border-t border-black/5 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={handleNavClick}
                  className={`
                    block px-3 py-2 font-[family-name:var(--font-Cabin)] font-bold text-sm
                    uppercase tracking-wider rounded-md transition-colors
                    ${isActive(href)
                      ? "text-[#edc058] bg-[#0c1a2e]"
                      : "text-[#1a1a2e] hover:bg-gray-100"
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={handleNavClick}
            className="btn-primary mt-4 block text-center text-sm"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
