"use client";

import Link from "next/link";
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
  FaArrowRight
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
  { icon: FaFacebook, href: "https://facebook.com", color: "hover:bg-blue-600" },
  { icon: FaTwitter, href: "https://twitter.com", color: "hover:bg-sky-500" },
  { icon: FaInstagram, href: "https://instagram.com", color: "hover:bg-pink-600" },
  { icon: FaLinkedin, href: "https://linkedin.com", color: "hover:bg-blue-700" },
  { icon: FaYoutube, href: "https://youtube.com", color: "hover:bg-red-600" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section - ON TOP */}
        <div className="py-8 border-b border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-white">Subscribe to Our Newsletter</h4>
              <p className="text-gray-300 text-sm">Get updates on new products and special offers</p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-gray-400"
              />
              <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 whitespace-nowrap text-sm">
                Subscribe <FaArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl md:text-3xl font-bold inline-block">
              <span className="text-white">Kay</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Lon</span>
            </Link>
            
            <p className="text-gray-300 leading-relaxed text-sm max-w-sm">
              The Paint of Excellence. Delivering premium quality paints for
              residential, commercial, and industrial projects.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className={`w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-gray-300 transition-all duration-300 hover:text-white ${social.color} hover:border-transparent`}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 relative">
              Our Products
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 group">
                <FaMapMarkerAlt className="text-blue-400 mt-0.5 flex-shrink-0 group-hover:text-purple-400 transition-colors" size={14} />
                <span className="text-gray-300">Katwe, Kampala, Uganda</span>
              </li>
              <li className="flex items-start gap-3 group">
                <FaPhone className="text-blue-400 mt-0.5 flex-shrink-0 group-hover:text-purple-400 transition-colors" size={14} />
                <span className="text-gray-300">+256 700 659 693</span>
              </li>
              <li className="flex items-start gap-3 group">
                <FaEnvelope className="text-blue-400 mt-0.5 flex-shrink-0 group-hover:text-purple-400 transition-colors" size={14} />
                <span className="text-gray-300 break-all text-xs">muzaphalisa69@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-blue-400 mt-0.5 flex-shrink-0 group-hover:text-purple-400 transition-colors">🕐</span>
                <span className="text-gray-300">Mon-Fri: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section - Reduced Height */}
        <div className="border-t border-white/10 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} KayLon Paints. All Rights Reserved.
            </p>
            <div className="flex gap-5 text-xs">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}