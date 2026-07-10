"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Factory", href: "/factory" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20"
          : "bg-white/40 backdrop-blur-md border-b border-white/30 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl sm:text-2xl md:text-3xl font-bold transition-all duration-300 hover:scale-105 flex-shrink-0"
          >
            <span className="text-gray-800">Kay</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Lon</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative font-medium text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group text-sm xl:text-base"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1 hover:scale-105 text-xs xl:text-sm flex-shrink-0"
          >
            Get Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/40 flex items-center justify-center text-gray-700 transition-all duration-300 ${
              isScrolled ? "bg-white/40 backdrop-blur-sm" : "bg-white/60 backdrop-blur-sm"
            } hover:bg-white/80 flex-shrink-0`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={16} className="sm:w-[18px] sm:h-[18px]" /> : <FaBars size={16} className="sm:w-[18px] sm:h-[18px]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Glassmorphism */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden backdrop-blur-xl bg-white/95 border-b border-white/20 shadow-xl"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl hover:bg-white/50 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-center hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 mt-1 sm:mt-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </Link>
          </nav>
        </div>
      </motion.div>
    </header>
  );
}