"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Water Based Undercoat",
    category: "Primers",
    description: "Premium water-based primer for superior adhesion and lasting protection",
    image: "/products/undercoat.png",
  },
  {
    id: 2,
    name: "Weather Guard Matt Emulsion",
    category: "Exterior Paints",
    description: "All-weather protection for exterior walls with UV resistance",
    image: "/products/weather-guard.png",
  },
  {
    id: 3,
    name: "Matt Waterbased Paint",
    category: "Interior Paints",
    description: "Luxury finish for interior walls with excellent coverage",
    image: "/products/interior.png",
  },
  {
    id: 4,
    name: "Vinyl Silk Paint",
    category: "Industrial",
    description: "Heavy-duty for silk protection for walls and surfaces",
    image: "/products/silk.png",
  },
];

export default function Products() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block text-gray-500 font-medium text-sm uppercase tracking-widest bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100"
          >
            Our Products
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-4"
          >
            Premium Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Paints</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Discover our extensive range of high-quality paints for every application
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-purple-200/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  quality={90}
                />
                <div className="absolute top-4 left-4 backdrop-blur-md bg-white/80 border border-white/50 px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-gray-700">
                    {product.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6 relative">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <Link
                  href={`/products/${product.id}`}
                  className="inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all duration-300 group-hover:text-purple-800"
                >
                  <span>Learn More</span>
                  <span className="inline-flex transition-transform duration-300 group-hover:translate-x-1">
                    <FaArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1 group"
          >
            <span>View All Products</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <FaArrowRight size={16} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}