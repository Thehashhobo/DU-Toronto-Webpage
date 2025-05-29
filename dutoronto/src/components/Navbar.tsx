"use client";
import React, { useState, useEffect } from "react";
import Logo from "../../public/images/Logo.webp"
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // List of routes that should always use the "scrolled" style by default
  const alwaysScrolledRoutes = ["/contact"]; 

  const [isScrolled, setScrolled] = useState(
    typeof window !== "undefined"
      ? window.scrollY > 60 || alwaysScrolledRoutes.includes(pathname)
      : alwaysScrolledRoutes.includes(pathname)
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60 || alwaysScrolledRoutes.includes(pathname));
    };

    onScroll(); // Set initial state on mount

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);


  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  // helper to reduce code duplication
  function getNavLinkClass(isScrolled: boolean) {
    return `
      font-[family-name:var(--font-Cabin)] font-bold text-xl transition-all duration-300
      ${isScrolled ? "text-gray-900" : "text-primary"}
    `;
  }

  function getBubbleClass(isScrolled: boolean) {
    return `
      inline-block rounded-full transition-all duration-300
      px-5 py-2
      ${isScrolled
        ? "hover:bg-secondary hover:text-[var(--background)]"
        : "hover:bg-primary hover:text-[var(--background)]"}
      hover:shadow-md
    `;
  }

  return (
    <nav className={`
        fixed w-full z-20 top-0 left-0 transition-all duration-300 overflow-x-auto
        ${isScrolled ? "bg-[var(--background)] shadow-md" : "bg-transparent"}
      `}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center md:gap-4 mx-auto p-3 md:py-1 px-4 min-w-0">
        {/* Nav links 1 */}
        <div
          className={`
            order-2 md:order-1
            ${isMenuOpen ? "block" : "hidden"}
            md:flex flex-col md:flex-row mt-4 md:mt-0 font-medium md:p-0
          `}
        >
          <ul className="flex flex-col md:flex-row md:space-x-2">
            <li>
              <a
                href="/"
                className={getNavLinkClass(isScrolled)}
              >
                <span className={getBubbleClass(isScrolled)}>
                  HOME
                </span>
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={getNavLinkClass(isScrolled)}
              >
                <span className={getBubbleClass(isScrolled)}>
                  ABOUT
                </span>
              </a>
            </li>
            <li>
              <a
                href="/membership"
                className={getNavLinkClass(isScrolled)}
              >
                <span className={getBubbleClass(isScrolled)}>
                  MEMBERSHIP
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/* Logo + Hamburger */}
        <div className="flex justify-between items-center md:pl-4 md:justify-center order-1 md:order-2 flex-shrink-0">
          <a href="/" className="flex items-center justify-center space-x-3">
            <img
              src={Logo.src}
              className="h-18"
              alt="Flowbite Logo"
            />
          </a>
          {/* Hamburger menu (mobile only) */}
          <button
            onClick={handleToggleMenu}
            type="button"
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {/* Nav links 2 */}
        <div
          className={`
            order-3 md:order-3
            ${isMenuOpen ? "block" : "hidden"}
            md:flex flex-col md:justify-end md:flex-row mt-0 font-medium md:p-0
          `}
        >
          <ul className="flex flex-col md:flex-row md:space-x-2">
            <li>
              <a
                href="/alumni"
                className={getNavLinkClass(isScrolled)}
              >
                <span className={getBubbleClass(isScrolled)}>
                  ALUMNI
                </span>
              </a>
            </li>
            <li>
              <a
                href="/house"
                className={getNavLinkClass(isScrolled)}
              >
                <span className={getBubbleClass(isScrolled)}>
                  HOUSE
                </span>
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={getNavLinkClass(isScrolled)}
              >
                <span className={getBubbleClass(isScrolled)}>
                  CONTACT
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}