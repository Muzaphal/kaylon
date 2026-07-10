"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  FaShieldAlt,
  FaLeaf,
  FaTrophy,
  FaUsers,
  FaClock,
  FaFlask,
} from "react-icons/fa";

type Benefit = {
  icon: IconType;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: FaShieldAlt,
    title: "Superior Quality",
    description: "Premium formulations that exceed industry standards",
  },
  {
    icon: FaLeaf,
    title: "Eco-Friendly",
    description: "Low VOC and environmentally responsible products",
  },
  {
    icon: FaTrophy,
    title: "Award Winning",
    description: "Recognized for excellence in paint manufacturing",
  },
  {
    icon: FaUsers,
    title: "Customer Focused",
    description: "Dedicated support and customized solutions",
  },
  {
    icon: FaClock,
    title: "Timely Delivery",
    description: "Reliable supply chain and on-time delivery",
  },
  {
    icon: FaFlask,
    title: "Innovation",
    description: "Continuous R&D for cutting-edge paint technology",
  },
];

export default function WhyChooseUs() {
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
            Why KayLon
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4 text-gray-800"
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">KayLon</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4"
          >
            The reasons why thousands of customers trust KayLon for their painting needs
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group backdrop-blur-xl bg-white/40 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-blue-200/50"
            >
              {/* Icon Container - Glassmorphism */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500 shadow-md group-hover:shadow-lg group-hover:shadow-purple-500/25">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 group-hover:text-white transition-all duration-500">
                  <benefit.icon size={32} />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {benefit.description}
              </p>
              
              {/* Decorative line on hover */}
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 backdrop-blur-xl bg-white/40 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl border border-white/50 shadow-lg">
            <span className="text-gray-700 text-sm sm:text-base">
              Ready to experience the KayLon difference?
            </span>
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-sm sm:text-base whitespace-nowrap"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}