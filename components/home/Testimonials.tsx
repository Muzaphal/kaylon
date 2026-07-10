"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Architect",
    content: "KayLon paints have transformed our projects. The quality and finish are exceptional.",
    rating: 5,
    image: "/testimonials/person-1.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Contractor",
    content: "We've been using KayLon products for years. The durability and coverage are unmatched.",
    rating: 5,
    image: "/testimonials/person-2.jpg",
  },
  {
    id: 3,
    name: "Robert Johnson",
    role: "Homeowner",
    content: "The paint quality is amazing. Our home looks brand new after using KayLon.",
    rating: 5,
    image: "/testimonials/person-3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-sm uppercase tracking-wider bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50"
          >
            Testimonials
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4 text-gray-800"
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Customers Say</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4"
          >
            Real stories from real customers who trust KayLon
          </motion.p>
        </div>

        {/* Testimonials Grid - Glassmorphism Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group backdrop-blur-xl bg-white/40 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-blue-200/50 flex flex-col"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    color="#f59e0b"
                    size={20}
                  />
                ))}
              </div>
              
              {/* Testimonial Content */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 flex-1">
                "{testimonial.content}"
              </p>
              
              {/* User Info */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/30">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white/50 shadow-md flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              {/* Decorative quote mark */}
              <div className="absolute top-4 right-4 text-6xl text-blue-100/30 font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                "
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "4.9★", label: "Average Rating" },
            { value: "1000+", label: "Projects Done" },
          ].map((stat, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/40 rounded-xl p-4 sm:p-6 text-center border border-white/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}