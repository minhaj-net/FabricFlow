"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Moto", href: "/#our-moto" },
  { label: "About Us", href: "/#about" },
  { label: "Features", href: "/#features" },
  { label: "Product", href: "/#product" },
  { label: "Upcoming Project", href: "/#upcoming" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
         <p>Fabric<span className="font-bold">Flow</span> </p>
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Call us — right */}
        <div className="hidden lg:flex flex-col items-end text-white">
          <span className="text-[10px] tracking-widest uppercase text-white/60">Call Us Now</span>
          <a
            href="tel:+8801710041494"
            className="text-sm font-semibold tracking-wide hover:text-white/80 transition-colors flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            +8801710041494
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-[#1a1a1a]/97 backdrop-blur-md`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white py-2.5 px-3 rounded hover:bg-white/10 transition-all text-sm font-medium tracking-wide border-b border-white/5 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+8801710041494"
            className="mt-3 text-white/80 hover:text-white py-2.5 px-3 text-sm font-medium flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            +8801710041494
          </a>
        </nav>
      </div>
    </header>
  );
}
