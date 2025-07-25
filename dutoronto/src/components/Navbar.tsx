"use client";
import React, { useState, useEffect } from "react";
import Logo from "../../public/images/Logo.webp"
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Fix alwaysScrolledRoutes (should be array of strings, not a single string)
const alwaysScrolledRoutes = ["/contact", "/membership", "/about"];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Always start as scrolled on page refresh
  const [isScrolled, setScrolled] = useState(true);

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

  // Helper to close menu on navigation
  function handleNavClick() {
    setIsMenuOpen(false);
  }

  // helper to reduce code duplication
  function getNavLinkClass(isScrolled: boolean) {
    return `
      font-[family-name:var(--font-Cabin)] font-bold text-xl xl:text-2xl transition-all duration-300
      ${isScrolled ? "text-gray-900" : "md:text-primary"}
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
        ${(isScrolled || isMenuOpen) ? "bg-[var(--background)] shadow-md" : "lg:bg-transparent"}
      `}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center lg:gap-4 mx-auto p-3 lg:py-1 xl:py-2 2xl:py-4 px-4 min-w-0">
        {/* Nav links 1 */}
        <div
          className={`
            order-2 lg:order-1 
            ${isMenuOpen ? " block" : " hidden"}
            lg:flex flex-col lg:flex-row mt-4 lg:mt-0 font-medium lg:p-0
          `}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-2">
            <li>
              <Link
                href="/"
                className={getNavLinkClass(isScrolled)}
                onClick={handleNavClick}
              >
                <span className={getBubbleClass(isScrolled)}>
                  HOME
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={getNavLinkClass(isScrolled)}
                onClick={handleNavClick}
              >
                <span className={getBubbleClass(isScrolled)}>
                  ABOUT
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/membership"
                className={getNavLinkClass(isScrolled)}
                onClick={handleNavClick}
              >
                <span className={getBubbleClass(isScrolled)}>
                  MEMBERSHIP
                </span>
              </Link>
            </li>
          </ul>
        </div>
        {/* Logo + Hamburger */}
        <div className="flex justify-between items-center lg:pl-4 lg:justify-center order-1 lg:order-2 flex-shrink-0">
          <Link href="/" className="flex items-center justify-center space-x-3" onClick={handleNavClick}>
            <Image
              src={Logo}
              width={1536}
              height={678}
              className="h-18 w-44"
              alt="Du Logo"
            />
          </Link>
          {/* Hamburger menu (mobile and medium only) */}
          <button
            onClick={() => { handleToggleMenu(); setScrolled(true); }}
            type="button"
            className="lg:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
            order-3 lg:order-3
            ${isMenuOpen ? "block" : "hidden"}
            lg:flex flex-col lg:justify-end lg:flex-row mt-0 font-medium lg:p-0
          `}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-2">
            <li>
              <Link
                href="/alumni"
                className={getNavLinkClass(isScrolled)}
                onClick={handleNavClick}
              >
                <span className={getBubbleClass(isScrolled)}>
                  ALUMNI
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/house"
                className={getNavLinkClass(isScrolled)}
                onClick={handleNavClick}
              >
                <span className={getBubbleClass(isScrolled)}>
                  HOUSE
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={getNavLinkClass(isScrolled)}
                onClick={handleNavClick}
              >
                <span className={getBubbleClass(isScrolled)}>
                  CONTACT
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}