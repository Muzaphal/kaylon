"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaArrowLeft, 
  FaArrowRight,
  FaMapMarkerAlt,
  FaCalendar, 
  FaUsers,
  FaCheckCircle,
  FaShare,
  FaHeart,
  FaWhatsapp,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

// Project data - In a real app, this would come from a database or API
const allProjects = [
  {
    id: 1,
    title: "Luxury Residential Complex",
    category: "Residential",
    location: "Kampala, UGANDA",
    description: "Complete exterior painting of a 200-unit luxury apartment complex",
    fullDescription: "This prestigious residential complex received a complete exterior makeover using our premium Weather Guard Exterior paint. The project involved painting 200 luxury apartments with a modern, sophisticated color scheme that enhances the architectural beauty of the buildings. Our team worked diligently to ensure minimal disruption to residents while delivering exceptional quality and finish.",
    image: "/projects/residential.jpg",
    year: "2023",
    size: "200,000 sq ft",
    features: [
      "Premium Weather Guard Exterior paint used",
      "Custom color matching for architectural harmony",
      "Anti-cracking and weather-resistant formula",
      "Eco-friendly low VOC paints",
      "Professional team of 50+ painters",
      "Completed within 3 months"
    ],
    gallery: [
      "/projects/residential-1.jpg",
      "/projects/residential-2.jpg",
      "/projects/residential-3.jpg",
    ],
    client: "Green Valley Developers",
    duration: "3 months",
    scope: "Full exterior painting",
    testimonial: "The transformation is remarkable. KayLon delivered exceptional quality and professionalism throughout the project."
  },
  {
    id: 2,
    title: "Corporate Office Tower",
    category: "Commercial",
    location: "Kampala, UGANDA",
    description: "Full interior and exterior painting for a 30-story corporate office",
    fullDescription: "This 30-story corporate office tower underwent a complete interior and exterior renovation using our premium paint solutions. The project required careful coordination with the building management to maintain business operations while delivering a fresh, modern look that reflects the company's brand identity.",
    image: "/projects/commercial.jpg",
    year: "2023",
    size: "500,000 sq ft",
    features: [
      "Interior and exterior painting",
      "Corporate color scheme",
      "High-durability industrial coatings",
      "Quick-drying formula for minimal disruption",
      "Professional project management",
      "Completed within 4 months"
    ],
    gallery: [
      "/projects/commercial-1.jpg",
      "/projects/commercial-2.jpg",
      "/projects/commercial-3.jpg",
    ],
    client: "Tower Management Ltd",
    duration: "4 months",
    scope: "Full interior & exterior painting",
    testimonial: "KayLon exceeded our expectations. The quality of work and attention to detail is outstanding."
  },
  {
    id: 3,
    title: "Industrial Warehouse",
    category: "Industrial",
    location: "Mbarara, Uganda",
    description: "Heavy-duty industrial coating for a 100,000 sq ft warehouse",
    fullDescription: "This large industrial warehouse required heavy-duty coating solutions to protect against harsh conditions. Our Industrial Epoxy Coating was applied to the floors, while our Weather Guard system was used on the exterior surfaces. The result is a durable, long-lasting finish that will protect the facility for years to come.",
    image: "/projects/industrial.jpg",
    year: "2022",
    size: "100,000 sq ft",
    features: [
      "Heavy-duty industrial epoxy coating",
      "Chemical and abrasion resistant",
      "Anti-slip surface for safety",
      "Temperature and moisture resistant",
      "Durable exterior weather guard",
      "Completed within 2 months"
    ],
    gallery: [
      "/projects/industrial-1.jpg",
      "/projects/industrial-2.jpg",
      "/projects/industrial-3.jpg",
    ],
    client: "Mbarara Logistics Hub",
    duration: "2 months",
    scope: "Industrial coating & exterior painting",
    testimonial: "The industrial coating has significantly improved our warehouse operations. Highly recommended!"
  },
  {
    id: 4,
    title: "5-Star Hotel & Resort",
    category: "Hospitality",
    location: "Kampala, UGANDA",
    description: "Premium finishes for a luxury hotel renovation project",
    fullDescription: "This 5-star hotel and resort underwent a complete renovation using our premium interior and exterior finishes. Our team provided luxurious paint solutions that enhance the guest experience, with carefully selected color palettes and high-durability finishes that maintain their beauty in high-traffic areas.",
    image: "/projects/hotel.jpg",
    year: "2023",
    size: "350,000 sq ft",
    features: [
      "Luxury interior finishes",
      "Hotel-grade durable paints",
      "Anti-microbial wall coatings",
      "Elegant color palettes",
      "Exterior weather protection",
      "Completed within 5 months"
    ],
    gallery: [
      "/projects/hotel-1.jpg",
      "/projects/hotel-2.jpg",
      "/projects/hotel-3.jpg",
    ],
    client: "Kampala Luxury Hotels Group",
    duration: "5 months",
    scope: "Full hotel renovation painting",
    testimonial: "The paint quality and finish have exceeded our guests' expectations. Beautiful work!"
  },
  {
    id: 5,
    title: "International School",
    category: "Institutional",
    location: "Entebbe, Uganda",
    description: "Safe and durable educational facility painting",
    fullDescription: "This international school project required safe, durable, and environmentally friendly paint solutions. We used our Eco-Friendly Emulsion with zero VOCs and anti-microbial properties to ensure a healthy learning environment for students and staff.",
    image: "/projects/school.jpg",
    year: "2022",
    size: "150,000 sq ft",
    features: [
      "Zero VOC eco-friendly paints",
      "Anti-microbial wall coatings",
      "Safe for children and staff",
      "Durable and washable finish",
      "Bright, educational color scheme",
      "Completed within 2 months"
    ],
    gallery: [
      "/projects/school-1.jpg",
      "/projects/school-2.jpg",
      "/projects/school-3.jpg",
    ],
    client: "Entebbe International School",
    duration: "2 months",
    scope: "Full school painting",
    testimonial: "The school looks amazing! The paints are safe and the colors are beautiful."
  },
  {
    id: 6,
    title: "Beachfront Villa",
    category: "Residential",
    location: "Kampala, UGANDA",
    description: "Luxury residential villa with coastal-grade finishes",
    fullDescription: "This stunning beachfront villa required coastal-grade finishes that can withstand salt air and harsh sun exposure. Our Weather Guard system with UV protection was used to ensure the colors remain vibrant for years. The interior features our Premium Interior Emulsion with a luxurious silk finish.",
    image: "/projects/villa.webp",
    year: "2023",
    size: "8,000 sq ft",
    features: [
      "Coastal-grade UV protection",
      "Salt air resistant exterior",
      "Luxury interior silk finish",
      "Custom color matching",
      "Weather proof sealants",
      "Completed within 1.5 months"
    ],
    gallery: [
      "/projects/villa-1.jpg",
      "/projects/villa-2.jpg",
      "/projects/villa-3.jpg",
    ],
    client: "Private Client",
    duration: "1.5 months",
    scope: "Full villa painting",
    testimonial: "Our villa looks stunning. The paint has held up beautifully against the coastal elements."
  },
  {
    id: 7,
    title: "Shopping Mall",
    category: "Commercial",
    location: "Kampala, UGANDA",
    description: "Complete renovation of a major shopping center",
    fullDescription: "This major shopping mall underwent a complete renovation using our high-traffic commercial paint solutions. Our team provided durable, washable paints for high-traffic areas, and premium finishes for retail spaces, ensuring the mall looks modern and inviting to shoppers.",
    image: "/projects/mall.jpg",
    year: "2024",
    size: "400,000 sq ft",
    features: [
      "High-traffic commercial paints",
      "Washable and durable finish",
      "Modern retail color schemes",
      "Anti-stain technology",
      "Quick installation to minimize disruption",
      "Completed within 4 months"
    ],
    gallery: [
      "/projects/mall-1.jpg",
      "/projects/mall-2.jpg",
      "/projects/mall-3.jpg",
    ],
    client: "Kampala Mall Management",
    duration: "4 months",
    scope: "Full mall renovation painting",
    testimonial: "The mall has never looked better. KayLon delivered a premium finish on time and within budget."
  },
  {
    id: 8,
    title: "Government Building",
    category: "Institutional",
    location: "Masaka, Uganda",
    description: "Government facility with high-durability finishes",
    fullDescription: "This government building required high-durability, long-lasting finishes that could withstand heavy use. Our industrial-grade coatings were used throughout the facility, providing a professional appearance while ensuring the building remains protected and looking its best for years to come.",
    image: "/projects/government.jpg",
    year: "2023",
    size: "250,000 sq ft",
    features: [
      "Government-grade durability",
      "Professional appearance",
      "Industrial strength coatings",
      "Fire-retardant properties",
      "Energy-efficient reflective paints",
      "Completed within 3 months"
    ],
    gallery: [
      "/projects/government-1.jpg",
      "/projects/government-2.jpg",
      "/projects/government-3.jpg",
    ],
    client: "Masaka District Government",
    duration: "3 months",
    scope: "Full government facility painting",
    testimonial: "The quality and durability of the finish are exceptional. A job well done."
  },
];

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isWishlist, setIsWishlist] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Get the project ID from params - handle both string and array
  const id = params?.id;
  const projectId = id ? parseInt(Array.isArray(id) ? id[0] : id, 10) : null;
  
  // Find the project
  const project = projectId ? allProjects.find(p => p.id === projectId) : null;

  // Debug logging
  useEffect(() => {
    console.log("Params:", params);
    console.log("ID:", id);
    console.log("Project ID (number):", projectId);
    console.log("Found project:", project);
    console.log("All projects IDs:", allProjects.map(p => p.id));
    setIsLoading(false);
  }, [params, id, projectId, project]);

  // WhatsApp configuration
  const whatsappNumber = "256700659693";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading project...</p>
        </div>
      </div>
    );
  }

  // If project not found, show 404
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <p className="text-sm text-gray-500 mb-4">Debug: ID received was "{id}"</p>
          <Link 
            href="/projects" 
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Back Button */}
      <section className="pt-32 pb-8 bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-purple-700 transition-colors font-medium"
          >
            <FaArrowLeft size={16} />
            Back to Projects
          </button>
        </div>
      </section>

      {/* Project Details */}
      <section className="pb-16 md:pb-24 bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          {/* Main Image and Info */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-white/50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-2 mt-4">
                  {project.gallery.map((img, index) => (
                    <div
                      key={index}
                      className={`relative h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                        selectedImage === index ? 'border-purple-600' : 'border-transparent'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 rounded-full">
                  {project.category}
                </span>
                <button
                  onClick={() => setIsWishlist(!isWishlist)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <FaHeart className={isWishlist ? "text-red-500" : "text-gray-400"} size={20} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <FaShare className="text-gray-400" size={20} />
                </button>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
                {project.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-blue-600" size={16} />
                  {project.location}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendar className="text-blue-600" size={16} />
                  {project.year}
                </span>
                <span className="flex items-center gap-1">
                  <FaUsers className="text-blue-600" size={16} />
                  {project.size}
                </span>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-4 mt-6 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
                <div>
                  <p className="text-xs text-gray-500">Client</p>
                  <p className="font-semibold text-gray-800">{project.client}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Duration</p>
                  <p className="font-semibold text-gray-800">{project.duration}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Scope</p>
                  <p className="font-semibold text-gray-800">{project.scope}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Year</p>
                  <p className="font-semibold text-gray-800">{project.year}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500/80 backdrop-blur-sm hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 border border-white/30 hover:scale-105 text-sm"
                >
                  <FaWhatsapp size={18} /> Chat for Similar Project
                </a>
                <Link
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-500/25 text-sm"
                >
                  Get Quote <FaArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Features</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 hover:shadow-lg transition-all"
                >
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Testimonial */}
          {project.testimonial && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-white/50"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl text-purple-600">"</div>
                <div>
                  <p className="text-gray-700 text-lg italic">{project.testimonial}</p>
                  <p className="text-gray-600 font-semibold mt-2">— {project.client}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}