"use client";
import React, { useState, useEffect } from "react";
import Logo from "../../public/images/Logo.webp"
import Link from "next/link";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 60);
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);


  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  // helper to reduce code duplication
  function getNavLinkClass(isScrolled: boolean) {
  return `
    block font-[family-name:var(--font-Cabin)] font-bold text-xl py-2 px-3 rounded-sm md:p-0 transition-colors duration-300
    ${isScrolled ? "text-gray-900 hover:text-primary" : " text-primary hover:text-white"}
  `;
  }

  return (
    <nav className={`
        fixed w-full z-20 top-0 left-0 transition-all duration-300
        ${isScrolled ? "bg-[var(--background)] shadow-md" : "bg-transparent"}
      `}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center md:gap-4 mx-auto p-3 md:py-1 px-8">
        {/* Nav links 1 */}
        <div
          className={`
            order-2 md:order-1
            ${isMenuOpen ? "block" : "hidden"}
            md:flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 font-medium md:p-0 px-4
          `}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li>
              <a
                href="/"
                className={getNavLinkClass(isScrolled)}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={getNavLinkClass(isScrolled)}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="/membership"
                className={getNavLinkClass(isScrolled)}
              >
                MEMBERSHIP
              </a>
            </li>
          </ul>
        </div>
        {/* Logo + Hamburger */}
        <div className="flex justify-between items-center md:pl-4 md:justify-center order-1 md:order-2">
          <a href="/" className="flex items-center justify-center space-x-3">
            <img
              src={Logo.src}
              className="h-18"
              alt="Flowbite Logo"
              
            />
          </a>
          {/* Hamburger menu (mobile only) */}
          <button
            onClick={() => { handleToggleMenu(); setScrolled(true); }}
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
            md:flex flex-col md:justify-end md:flex-row md:space-x-8 mt-0 font-medium md:p-0 px-4
          `}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li>
              <a
                href="/alumni"
                className={getNavLinkClass(isScrolled)}
              >
                ALUMNI
              </a>
            </li>
            <li>
              <a
                href="/house"
                className={getNavLinkClass(isScrolled)}
              >
                HOUSE
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={getNavLinkClass(isScrolled)}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}