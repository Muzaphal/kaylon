"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaArrowRight, 
  FaMapMarkerAlt, 
  FaCalendar, 
  FaUsers,
  FaPhone,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const categories = ["All", "Residential", "Commercial", "Industrial", "Institutional", "Hospitality"];

const allProjects = [
  {
    id: 1,
    title: "Luxury Residential Complex",
    category: "Residential",
    location: "Kampala, UGANDA",
    description: "Complete exterior painting of a 200-unit luxury apartment complex",
    image: "/projects/residential.jpg",
    year: "2023",
    size: "200,000 sq ft",
  },
  {
    id: 2,
    title: "Corporate Office Tower",
    category: "Commercial",
    location: "Kampala, UGANDA",
    description: "Full interior and exterior painting for a 30-story corporate office",
    image: "/projects/commercial.jpg",
    year: "2023",
    size: "500,000 sq ft",
  },
  {
    id: 3,
    title: "Industrial Warehouse",
    category: "Industrial",
    location: "Mbarara, Uganda",
    description: "Heavy-duty industrial coating for a 100,000 sq ft warehouse",
    image: "/projects/industrial.jpg",
    year: "2022",
    size: "100,000 sq ft",
  },
  {
    id: 4,
    title: "5-Star Hotel & Resort",
    category: "Hospitality",
    location: "Kampala, UGANDA",
    description: "Premium finishes for a luxury hotel renovation project",
    image: "/projects/hotel.jpg",
    year: "2023",
    size: "350,000 sq ft",
  },
  {
    id: 5,
    title: "International School",
    category: "Institutional",
    location: "Entebbe, Uganda",
    description: "Safe and durable educational facility painting",
    image: "/projects/school.jpg",
    year: "2022",
    size: "150,000 sq ft",
  },
  {
    id: 6,
    title: "Beachfront Villa",
    category: "Residential",
    location: "Kampala, UGANDA",
    description: "Luxury residential villa with coastal-grade finishes",
    image: "/projects/villa.webp",
    year: "2023",
    size: "8,000 sq ft",
  },
  {
    id: 7,
    title: "Shopping Mall",
    category: "Commercial",
    location: "Kampala, UGANDA",
    description: "Complete renovation of a major shopping center",
    image: "/projects/mall.jpg",
    year: "2024",
    size: "400,000 sq ft",
  },
  {
    id: 8,
    title: "Government Building",
    category: "Institutional",
    location: "Masaka, Uganda",
    description: "Government facility with high-durability finishes",
    image: "/projects/government.jpg",
    year: "2023",
    size: "250,000 sq ft",
  },
];

export default function ProjectsPage() {
  // WhatsApp configuration
  const whatsappNumber = "256703355441";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(p => p.category === category));
    }
  };

  return (
    <>
      {/* Hero Section with Banner Image & Glassmorphism */}
      <section className="relative min-h-[60vh] pt-32 pb-16 flex items-center overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900" />
          <Image
            src="/banners/hero-5.png"
            alt="KayLon Projects"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-[1]" />
        </div>

        {/* Glassmorphism Content */}
        <div className="container-custom relative z-10 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/20 shadow-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur-sm px-4 sm:px-5 py-2 rounded-full text-sm font-medium text-white border border-white/20">
                  Portfolio
                </span>
                <span className="inline-block bg-blue-500/30 backdrop-blur-sm px-4 sm:px-5 py-2 rounded-full text-sm font-medium text-white border border-white/20">
                  Featured Work
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight text-white">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Projects</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl">
                Transforming spaces with excellence across Uganda
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-500/25 text-sm sm:text-base"
                >
                  Start Your Project <FaArrowRight size={14} />
                </Link>
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all border border-white/20 hover:scale-105 text-sm sm:text-base"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent z-[1]" />
      </section>

      {/* Projects Section with Glassmorphism */}
      <section className="section-padding bg-gray-50" id="projects">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
          >
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-sm uppercase tracking-wider bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
              Our Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-4 px-4">
              Explore our recent work and see the quality we deliver
            </p>
          </motion.div>

          {/* Category Filter - Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-8 sm:mb-10 justify-center px-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/30 backdrop-blur-sm"
                    : "bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 border border-white/50"
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid - Glassmorphism Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group backdrop-blur-xl bg-white/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/50"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 border border-white/20">
                    {project.category}
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <FaLocationDot color="rgb(37 99 235)" size={12} />
                      <span className="hidden xs:inline">{project.location}</span>
                      <span className="xs:hidden">{project.location.split(',')[0]}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendar color="rgb(37 99 235)" size={12} />
                      {project.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUsers color="rgb(37 99 235)" size={12} />
                      {project.size}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-2">{project.description}</p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:gap-3 transition-all group-hover:from-purple-600 group-hover:to-blue-600 text-sm sm:text-base"
                  >
                    View Project <span className="transition-transform"><FaArrowRight size={14} /></span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 sm:py-16"
            >
              <div className="text-4xl sm:text-6xl mb-4">🔍</div>
              <p className="text-gray-500 text-base sm:text-lg">No projects found in this category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section - Glassmorphism */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "Projects Completed", value: "500+" },
              { label: "Happy Clients", value: "1000+" },
              { label: "Cities Served", value: "50+" },
              { label: "Years Experience", value: "25+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/40 rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-lg border border-white/50 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {stat.value}
                </p>
                <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Banner Image & Glassmorphism - UPDATED with WhatsApp */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900" />
          <Image
            src="/banners/hero-4.png"
            alt="Start Your Project"
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
                Ready to Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Your Project?</span>
              </h2>
              <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                Contact us today for a free consultation and quote. Let's bring your vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-500/25 text-sm sm:text-base"
                >
                  Get Started <span className="inline-flex items-center justify-center sm:w-4 sm:h-4"><FaArrowRight size={14} /></span>
                </Link>
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