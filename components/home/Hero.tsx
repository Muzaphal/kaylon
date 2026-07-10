"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Import your images
import Banner1 from "@/public/banners/hero-1.png";
import Banner2 from "@/public/banners/hero-2.png";
import Banner3 from "@/public/banners/hero-3.png";

const heroSlides = [
  {
    id: 1,
    title: "Water Based Undercoat",
    subtitle: "Superior Protection & Finish",
    description:
      "Premium quality water-based undercoat for superior adhesion and lasting protection on all surfaces.",
    image: Banner1,
    ctaPrimary: "Explore Products",
    ctaSecondary: "Get Quote",
    overlay: "from-blue-950/80 to-purple-950/80",
  },
  {
    id: 2,
    title: "Weather Guard Matt Emulsion",
    subtitle: "All-Weather Protection",
    description:
      "Advanced weather-resistant formula that protects your exterior walls from harsh climate conditions.",
    image: Banner2,
    ctaPrimary: "Learn More",
    ctaSecondary: "Get Quote",
    overlay: "from-purple-950/80 to-blue-950/80",
  },
  {
    id: 3,
    title: "Manufacturing Excellence",
    subtitle: "State-of-the-Art Facility",
    description:
      "ISO-certified manufacturing with cutting-edge technology ensuring consistent quality in every batch.",
    image: Banner3,
    ctaPrimary: "Visit Factory",
    ctaSecondary: "Contact Us",
    overlay: "from-slate-950/80 to-blue-950/80",
  },
];

export default function Hero() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="h-full w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                  quality={90}
                  style={{
                    objectPosition: 'center',
                  }}
                />
              </div>

              {/* Overlay for better text visibility - Glassmorphism style */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

              {/* Content with better spacing */}
              <div className="relative h-full flex items-center">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl mx-auto sm:mx-0"
                  >
                    {/* Glassmorphism Badge */}
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="inline-block backdrop-blur-md bg-white/10 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-white/20"
                    >
                      KayLon Paints
                    </motion.span>

                    {/* Title - Responsive sizing */}
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-2 sm:mb-3"
                    >
                      {slide.title}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-200 font-medium mb-2 sm:mb-4"
                    >
                      {slide.subtitle}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-lg drop-shadow-lg"
                    >
                      {slide.description}
                    </motion.p>

                    {/* Buttons - Glassmorphism style */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="flex flex-wrap gap-3 sm:gap-4"
                    >
                      <Link
                        href="/products"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 text-sm sm:text-base"
                      >
                        {slide.ctaPrimary}
                        <FaArrowRight size={14} />
                      </Link>
                      <Link
                        href="/contact"
                        className="backdrop-blur-md bg-white/20 hover:bg-white/30 text-white border border-white/30 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                      >
                        {slide.ctaSecondary}
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative scroll indicator */}
              <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-xs sm:text-sm hidden md:flex items-center gap-2 z-10">
                <span className="w-12 sm:w-20 h-px bg-white/30" />
                <span>Scroll to explore</span>
                <span className="w-12 sm:w-20 h-px bg-white/30" />
              </div>

              {/* Mobile scroll indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/20 text-xs flex md:hidden items-center gap-2 z-10">
                <span className="w-8 h-px bg-white/20" />
                <span>Swipe</span>
                <span className="w-8 h-px bg-white/20" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination styling override */}
      <style jsx>{`
        :global(.swiper-pagination-bullet) {
          background: rgba(255,255,255,0.5) !important;
          opacity: 0.6 !important;
          width: 8px !important;
          height: 8px !important;
        }
        :global(.swiper-pagination-bullet-active) {
          background: #8B5CF6 !important;
          opacity: 1 !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
        :global(.swiper-pagination) {
          bottom: 20px !important;
        }
        @media (max-width: 640px) {
          :global(.swiper-pagination) {
            bottom: 12px !important;
          }
          :global(.swiper-pagination-bullet) {
            width: 6px !important;
            height: 6px !important;
          }
          :global(.swiper-pagination-bullet-active) {
            width: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}