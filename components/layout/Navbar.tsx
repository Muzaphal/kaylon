"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown, FaPhone } from "react-icons/fa";

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
          ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-white/20"
          : "bg-white/50 backdrop-blur-md border-b border-white/30 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-3 transition-all duration-300 hover:scale-[1.02] flex-shrink-0"
          >
            <div className="relative h-10 w-32 sm:h-12 sm:w-40 md:h-14 md:w-48">
              <Image
                src="/logo/logo.png"
                alt="KayLon Paints"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden md:inline-block text-xs font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent border-l border-gray-200/50 pl-3">
              The Paint of Excellence
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative font-medium text-gray-600 hover:text-gray-900 transition-all duration-300 group px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-sm"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-8 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* <a
              href="tel:+256700659693"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm"
            >
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                <FaPhone size={12} className="text-blue-600" />
              </span>
              <span className="hidden xl:inline">+256 700 659 693</span>
            </a> */}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-6 py-2.5 rounded-2xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 text-sm relative overflow-hidden group"
            >
              <span className="relative z-10">Book An Appointment</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden w-11 h-11 rounded-2xl border border-gray-200/50 flex items-center justify-center text-gray-700 transition-all duration-300 ${
              isScrolled ? "bg-white/80 backdrop-blur-sm" : "bg-white/90 backdrop-blur-sm"
            } hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 shadow-sm hover:shadow-md flex-shrink-0`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={18} className="text-blue-600" /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Professional Glassmorphism */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <nav className="flex flex-col gap-1">
            {links.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="font-medium text-gray-700 hover:text-blue-700 transition-all duration-300 py-3 px-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-sm flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-6 py-3.5 rounded-2xl font-semibold text-center hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 mt-2 text-sm relative overflow-hidden group"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">Book An Appointment</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </nav>
        </div>
      </motion.div>
    </header>
  );
}