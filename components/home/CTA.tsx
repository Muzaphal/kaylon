"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  // WhatsApp number with country code (without + sign)
  const whatsappNumber = "256703355441";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900" />
        <Image
          src="/banners/hero-1.png"
          alt="Transform Your Space"
          fill
          className="object-cover"
          quality={90}
          sizes="100vw"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-[1]" />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content - Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/10 rounded-3xl p-6 sm:p-8 md:p-10 border border-white/20 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-blue-500/30 backdrop-blur-sm px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white border border-white/20">
                Limited Offer
              </span>
              <span className="inline-block bg-purple-500/30 backdrop-blur-sm px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white border border-white/20">
                Free Consultation
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
              Ready to Transform <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Your Space?</span>
            </h2>
            
            <p className="text-white/90 text-base sm:text-lg mb-6 max-w-lg">
              Get a free consultation and quote for your painting project today.
              Our experts are ready to help you choose the perfect paint.
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 text-sm sm:text-base"
              >
                Free Consultation <FaArrowRight size={14} />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500/80 backdrop-blur-sm hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition-all duration-300 border border-white/30 hover:scale-105 text-sm sm:text-base"
              >
                <FaWhatsapp size={16} /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right Content - Stats Grid with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { value: "100%", label: "Satisfaction", icon: "😊" },
                  { value: "24/7", label: "Support", icon: "🛡️" },
                  { value: "Free", label: "Consultation", icon: "📋" },
                  { value: "10+", label: "Years Warranty", icon: "🏆" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="backdrop-blur-sm bg-white/10 rounded-xl p-4 sm:p-5 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/10"
                  >
                    <div className="text-2xl sm:text-3xl mb-1">{stat.icon}</div>
                    <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-white/70 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Trust Badge */}
              <div className="mt-6 pt-6 border-t border-white/20 text-center">
                <p className="text-white/60 text-xs sm:text-sm flex items-center justify-center gap-2">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Trusted by 10,000+ customers
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}