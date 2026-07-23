"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaClock,
  FaWhatsapp
} from "react-icons/fa";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Factory", href: "/factory" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const productLinks = [
  { name: "Interior Paints", href: "/products" },
  { name: "Exterior Paints", href: "/products" },
  { name: "Industrial Coatings", href: "/products" },
  { name: "Primers & Undercoats", href: "/products" },
  { name: "Specialty Finishes", href: "/products" },
];

const socialLinks = [
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook", color: "#1877f2" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter", color: "#1da1f2" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram", color: "#e4405f" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn", color: "#0a66c2" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube", color: "#ff0000" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-10 border-b border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-sm">✉</span>
                Subscribe to Our Newsletter
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                Get updates on new products and special offers
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white placeholder-gray-500"
              />
              <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 whitespace-nowrap text-sm relative overflow-hidden group">
                <span className="relative z-10">Subscribe</span>
                <FaArrowRight size={14} className="relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block transition-all duration-300 hover:scale-[1.02]">
              <div className="relative h-12 w-40 sm:h-14 sm:w-48">
                <Image
                  src="/logo/logo.png"
                  alt="KayLon Paints"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            
            <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
              The Paint of Excellence. Delivering premium quality paints for
              residential, commercial, and industrial projects.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:border-transparent shadow-lg hover:shadow-purple-500/20"
                >
                  <social.icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5 relative inline-block">
              Our Products
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 group">
                <span className="w-8 h-8 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                  <FaMapMarkerAlt size={14} className="text-blue-400 group-hover:text-white transition-colors" />
                </span>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Katwe, Kampala, Uganda</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="w-8 h-8 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                  <FaPhone size={14} className="text-blue-400 group-hover:text-white transition-colors" />
                </span>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">+256 703 355 441</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="w-8 h-8 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                  <FaWhatsapp size={14} className="text-blue-400 group-hover:text-white transition-colors" />
                </span>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors break-all text-xs">+256 703 355 441</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="w-8 h-8 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                  <FaEnvelope size={14} className="text-blue-400 group-hover:text-white transition-colors" />
                </span>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors break-all text-xs">Kaylonpaints25@outlook.com</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="w-8 h-8 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                  <FaClock size={14} className="text-blue-400 group-hover:text-white transition-colors" />
                </span>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Mon-Fri: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/10 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-xs">
              © {year} KayLon Paints. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors hover:underline decoration-blue-500 underline-offset-2">
                Privacy Policy
              </Link>
              <span className="w-px h-3 bg-gray-700" />
              <Link href="/terms" className="text-gray-500 hover:text-gray-300 transition-colors hover:underline decoration-purple-500 underline-offset-2">
                Terms of Service
              </Link>
              <span className="w-px h-3 bg-gray-700" />
              <Link href="/sitemap" className="text-gray-500 hover:text-gray-300 transition-colors hover:underline decoration-pink-500 underline-offset-2">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}