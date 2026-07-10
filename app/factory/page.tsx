"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import type { ComponentType, SVGProps } from "react";
import { 
  FaIndustry, 
  FaFlask, 
  FaShieldAlt, 
  FaCheckCircle,
  FaCogs,
  FaMicroscope,
  FaClipboardCheck,
  FaRecycle,
  FaChartLine,
  FaUsers,
  FaTrophy,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaExpand,
  FaPhone,
  FaEnvelope,
  FaArrowRight as FaArrowRightIcon,
  FaWhatsapp
} from "react-icons/fa";
import { IconType } from "react-icons";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

// Gallery images data with better descriptions
const galleryImages = [
  { id: 1, src: "/factory/gallery-1.png", alt: "Production Line", title: "Advanced Production Line" },
  { id: 2, src: "/factory/gallery-2.png", alt: "Quality Control Lab", title: "Quality Control Laboratory" },
  { id: 3, src: "/factory/gallery-3.png", alt: "Automated Mixing", title: "Automated Mixing Process" },
  { id: 4, src: "/factory/gallery-4.png", alt: "Packaging Area", title: "Packaging & Distribution" },
  { id: 5, src: "/factory/gallery-5.png", alt: "Storage Facility", title: "Storage & Warehouse" },
  { id: 6, src: "/factory/gallery-6.png", alt: "R&D Center", title: "Research & Development" },
  { id: 7, src: "/factory/gallery-7.png", alt: "Quality Testing", title: "Quality Testing Equipment" },
  { id: 8, src: "/factory/gallery-8.png", alt: "Finished Products", title: "Finished Products Display" },
];

const stats: { icon: IconComponent; label: string; value: string }[] = [
  { icon: FaIndustry, label: "Production Capacity", value: "10M+ Liters/year" },
  { icon: FaFlask, label: "R&D Team", value: "25+ Experts" },
  { icon: FaShieldAlt, label: "Quality Tests", value: "100+ Daily" },
  { icon: FaCheckCircle, label: "Certifications", value: "5+ Global" },
];

const processes: { icon: IconType; title: string; description: string }[] = [
  {
    title: "Raw Material Testing",
    description: "All incoming materials undergo rigorous quality testing",
    icon: FaMicroscope,
  },
  {
    title: "Manufacturing",
    description: "Advanced automated production with precise formulations",
    icon: FaCogs,
  },
  {
    title: "Quality Control",
    description: "Every batch tested for consistency and performance",
    icon: FaClipboardCheck,
  },
  {
    title: "Packaging & Delivery",
    description: "Eco-friendly packaging with secure distribution",
    icon: FaRecycle,
  },
];

const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 14001:2015 Environmental Management",
  "ISO 45001:2018 Safety Management",
  "Green Seal Certified",
  "LEED Compliant Products",
];

export default function FactoryPage() {
  // WhatsApp configuration
  const whatsappNumber = "256700659693";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state for client-side only code
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    setCurrentIndex(galleryImages.indexOf(image));
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % galleryImages.length
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  // Keyboard navigation - Only runs on client side
  useEffect(() => {
    if (!isMounted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, isMounted]);

  return (
    <>
      {/* Hero Section with Banner Image & Glassmorphism - UNCHANGED */}
      <section className="relative min-h-[60vh] pt-32 pb-16 flex items-center overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          {/* Fallback gradient if image doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900" />
          
          <Image
            src="/banners/hero-6.png"
            alt="KayLon Factory"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
            onError={(e) => {
              // If image fails to load, hide it and show the gradient background
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-[1]" />
        </div>

        {/* Glassmorphism Content */}
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium text-white border border-white/20">
                  Manufacturing Excellence
                </span>
                <span className="inline-block bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white border border-white/20">
                  State-of-the-Art
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight text-white">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Factory</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                State-of-the-art facility delivering quality you can trust
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
                >
                  Schedule a Visit <FaArrowRightIcon size={14} />
                </a>
                <a
                  href="#gallery"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full font-semibold transition-all border border-white/20 hover:scale-105"
                >
                  View Gallery
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent z-[1]" />
      </section>

      {/* Factory Overview - Glassmorphism with Better Spacing */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-sm uppercase tracking-wider">
                Our Facility
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4">
                Cutting-Edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Manufacturing</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-4">
                Our 50,000+ sq. ft. ISO 9001:2015 certified facility features 
                advanced automated production lines and state-of-the-art equipment.
              </p>
              <p className="text-gray-600 text-base sm:text-lg mb-6">
                Every product undergoes rigorous quality control testing to ensure 
                consistency, durability, and performance excellence.
              </p>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 backdrop-blur-sm bg-white/40 p-3 rounded-xl border border-white/50"
                  >
                    <span className="flex-shrink-0 text-blue-600 w-5 h-5">
                      <FaCheckCircle />
                    </span>
                    <span className="text-gray-700 text-sm sm:text-base">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[350px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                <Image
                  src="/factory/facility.png"
                  alt="KayLon Factory"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sm:p-6 rounded-2xl shadow-xl">
                <div className="text-2xl sm:text-3xl mb-2 text-white">
                  <FaTrophy />
                </div>
                <p className="text-xl sm:text-2xl font-bold">50,000+</p>
                <p className="text-xs sm:text-sm">Sq. Ft. Facility</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Stats - Glassmorphism with Better Spacing - FIXED */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/40 rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-white/50 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="mx-auto mb-2 sm:mb-3 text-3xl sm:text-4xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 inline-block w-9 h-9 sm:w-10 sm:h-10">
                    <stat.icon />
                  </span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process - Glassmorphism with Better Spacing */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
          >
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-sm uppercase tracking-wider bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Manufacturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Process</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative backdrop-blur-xl bg-white/40 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-white/50"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 text-blue-600">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                    <process.icon />
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold mb-2 text-gray-800">{process.title}</h4>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section with Lightbox - Glassmorphism with Better Spacing */}
      <section className="py-16 md:py-20 lg:py-24 bg-white" id="gallery">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
          >
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-sm uppercase tracking-wider bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
              Behind the Scenes
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Factory <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Gallery</span>
            </h2>
            <p className="text-gray-600 mt-4">
              Click on any image to view it in full size
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: image.id * 0.05 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(image)}
                className="relative h-40 sm:h-48 md:h-56 lg:h-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer border border-white/50"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={90}
                />
                {/* Overlay with expand icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white/30 transition-colors">
                      <span className="text-white w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                        <FaExpand />
                      </span>
                    </div>
                    <span className="text-white text-xs sm:text-sm font-medium bg-black/50 px-3 sm:px-4 py-1 rounded-full">
                      Click to view
                    </span>
                  </div>
                </div>
                {/* Image title on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs sm:text-sm font-medium">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal - UNCHANGED */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors duration-300"
            >
              <span className="text-white w-7 h-7 flex items-center justify-center">
                <FaTimes />
              </span>
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-4 z-10 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {galleryImages.length}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors duration-300 hidden md:block"
            >
              <span className="text-white w-7 h-7 flex items-center justify-center">
                <FaArrowLeft />
              </span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors duration-300 hidden md:block"
            >
              <span className="text-white w-7 h-7 flex items-center justify-center">
                <FaArrowRight />
              </span>
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-7xl w-full h-[85vh]"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                quality={100}
                priority
                sizes="100vw"
              />
              
              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-white/80">{selectedImage.alt}</p>
              </div>
            </motion.div>

            {/* Mobile navigation */}
            <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-4 md:hidden">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors duration-300"
              >
                <span className="text-white w-6 h-6 flex items-center justify-center">
                  <FaArrowLeft />
                </span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors duration-300"
              >
                <span className="text-white w-6 h-6 flex items-center justify-center">
                  <FaArrowRight />
                </span>
              </button>
            </div>

            {/* Thumbnail navigation at bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex gap-2">
              {galleryImages.map((img, index) => (
                <button
                  key={img.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                    setSelectedImage(img);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section with Banner Image & Glassmorphism - UPDATED with WhatsApp */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900" />
          <Image
            src="/banners/hero-4.png"
            alt="Visit Our Factory"
            fill
            className="object-cover"
            quality={90}
            sizes="100vw"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 backdrop-blur-sm z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-[1]" />
        </div>

        {/* Glassmorphism Content */}
        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 border border-white/20 shadow-2xl text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Visit <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Our Facility</span>
              </h2>
              <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                Schedule a tour to see our manufacturing excellence in action. Experience quality firsthand.
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-500/25 text-sm sm:text-base"
                >
                  Schedule a Visit <FaArrowRightIcon size={14} />
                </a>
                {/* WhatsApp Button - Replacing Call Us Now */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500/80 backdrop-blur-sm hover:bg-green-600 text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-semibold transition-all duration-300 border border-white/30 hover:scale-105 text-sm sm:text-base flex-1 sm:flex-none"
                >
                  <FaWhatsapp size={16} /> Chat on WhatsApp
                </a>
                <a
                  href="mailto:muzaphalisa69@gmail.com"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition-all border border-white/20 hover:scale-105 text-sm sm:text-base"
                >
                  <FaEnvelope size={14} />
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}