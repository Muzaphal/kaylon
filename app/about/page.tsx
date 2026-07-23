"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaCheckCircle, 
  FaUsers, 
  FaTrophy, 
  FaClock, 
  FaAward,
  FaLeaf,
  FaIndustry,
  FaLightbulb,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaWhatsapp
} from "react-icons/fa";

const milestones = [
  { year: "1998", title: "Company Founded", description: "KayLon Paints established with a vision for excellence" },
  { year: "2005", title: "ISO Certification", description: "Achieved ISO 9001:2000 quality management certification" },
  { year: "2010", title: "Factory Expansion", description: "Expanded manufacturing facility by 200% capacity" },
  { year: "2015", title: "Export Markets", description: "Began exporting to international markets" },
  { year: "2020", title: "Eco Initiative", description: "Launched eco-friendly low VOC product line" },
  { year: "2024", title: "Innovation Hub", description: "Opened new R&D and innovation center" },
];

const teamMembers = [
  {
    name: "Mr Vicent",
    role: "CEO & Founder",
    image: "/team/ceo.jpg",
    bio: "25+ years of experience in paint manufacturing",
  },
  {
    name: "Miss Sara",
    role: "Head of R&D",
    image: "/team/rd.png",
    bio: "PhD in Chemical Engineering with 15 years of research experience",
  },
  {
    name: "Mr Vicent",
    role: "Operations Director",
    image: "/team/ops.jpg",
    bio: "Expert in lean manufacturing and quality control",
  },
];

export default function AboutPage() {
  // WhatsApp configuration
  const whatsappNumber = "256700659693";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <>
      {/* Hero Section with Banner Image & Glassmorphism */}
      <section className="relative min-h-[60vh] pt-32 pb-16 flex items-center overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900" />
          <Image
            src="/banners/hero-7.png"
            alt="About KayLon"
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
                  About KayLon
                </span>
                <span className="inline-block bg-blue-500/30 backdrop-blur-sm px-4 sm:px-5 py-2 rounded-full text-sm font-medium text-white border border-white/20">
                  Since 1998
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight text-white whitespace-nowrap">
                The Paint of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Excellence</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl">
                Delivering premium quality paints since 1998
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-500/25 text-sm sm:text-base"
                >
                  Get in Touch <FaArrowRight size={14} />
                </Link>
                <Link
                  href="#story"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all border border-white/20 hover:scale-105 text-sm sm:text-base"
                >
                  Our Story
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent z-[1]" />
      </section>

      {/* Our Story Section - Glassmorphism with Better Spacing */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50" id="story">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4">
                A Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Quality</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-4">
                Founded in 1998 by visionary entrepreneur John Kaylon, KayLon Paints began 
                with a simple mission: to manufacture paints that exceed expectations in 
                quality, durability, and environmental responsibility.
              </p>
              <p className="text-gray-600 text-base sm:text-lg mb-6">
                What started as a small manufacturing operation has grown into a leading 
                paint company, serving thousands of customers across residential, commercial, 
                and industrial sectors.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="backdrop-blur-xl bg-white/40 p-4 rounded-xl border border-white/50">
                  <div
                    className="mb-2"
                    style={{
                      color: "transparent",
                      backgroundImage: "linear-gradient(90deg, #2563eb, #7c3aed)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                    }}
                  >
                    <FaUsers size={28} />
                  </div>
                  <p className="font-bold text-2xl">10,000+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
                <div className="backdrop-blur-xl bg-white/40 p-4 rounded-xl border border-white/50">
                  <div
                    className="mb-2"
                    style={{
                      color: "transparent",
                      backgroundImage: "linear-gradient(90deg, #2563eb, #7c3aed)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                    }}
                  >
                    <FaTrophy size={28} />
                  </div>
                  <p className="font-bold text-2xl">25+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="backdrop-blur-xl bg-white/40 p-4 rounded-xl border border-white/50">
                  <div
                    className="mb-2"
                    style={{
                      color: "transparent",
                      backgroundImage: "linear-gradient(90deg, #2563eb, #7c3aed)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                    }}
                  >
                    <FaAward size={28} />
                  </div>
                  <p className="font-bold text-2xl">15+</p>
                  <p className="text-sm text-gray-600">Industry Awards</p>
                </div>
                <div className="backdrop-blur-xl bg-white/40 p-4 rounded-xl border border-white/50">
                  <div
                    className="mb-2"
                    style={{
                      color: "transparent",
                      backgroundImage: "linear-gradient(90deg, #2563eb, #7c3aed)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                    }}
                  >
                    <FaIndustry size={28} />
                  </div>
                  <p className="font-bold text-2xl">50K+</p>
                  <p className="text-sm text-gray-600">Sq. Ft. Facility</p>
                </div>
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
                  src="/about/silk.png"
                  alt="KayLon Factory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sm:p-6 rounded-2xl shadow-xl">
                <p className="text-2xl sm:text-3xl font-bold">ISO 9001</p>
                <p className="text-xs sm:text-sm">Certified Quality</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Glassmorphism with Better Spacing */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
          >
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-sm uppercase tracking-wider bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
              Our Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Mission, Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/40 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-white/50"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  <FaLightbulb size={28} />
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                To provide innovative, high-quality paint solutions that enhance 
                and protect spaces while maintaining environmental responsibility 
                and customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/40 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-white/50"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  <FaAward size={28} />
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">Our Vision</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                To become the most trusted paint brand globally, known for excellence, 
                innovation, and sustainability in every product we manufacture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/40 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-white/50"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  <FaLeaf size={28} />
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">Our Values</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Quality First, Innovation, Sustainability, Customer Focus, 
                Integrity, and Excellence in everything we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline - Glassmorphism with Better Spacing */}
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
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Timeline</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-400 h-full"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-6 sm:mb-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-4 sm:pr-8 text-right" : "pl-4 sm:pl-8"}`}>
                  <div className="backdrop-blur-xl bg-white/40 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white/50">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-xl sm:text-2xl">{milestone.year}</span>
                    <h4 className="text-base sm:text-xl font-bold mt-1 text-gray-800">{milestone.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base mt-2">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-md z-10 flex-shrink-0"></div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team - Glassmorphism with Better Spacing */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
          >
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-sm uppercase tracking-wider bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Team</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-white/50"
              >
                <div className="relative h-56 sm:h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-6 text-center">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800">{member.name}</h4>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-medium">{member.role}</p>
                  <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Banner Image & Glassmorphism - Updated WhatsApp Button */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900" />
          <Image
            src="/banners/hero-7.png"
            alt="Get in Touch"
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
                Ready to Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Excellence?</span>
              </h2>
              <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust KayLon for their painting needs.
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-500/25 text-sm sm:text-base"
                >
                  Get in Touch <FaArrowRight size={14} />
                </Link>
                {/* WhatsApp Button - Replacing Call Us Now */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500/80 backdrop-blur-sm hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition-all duration-300 border border-white/30 hover:scale-105 text-sm sm:text-base"
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