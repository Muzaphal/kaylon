"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaArrowRight, 
  FaSearch, 
  FaFilter, 
  FaStar,
  FaCheckCircle,
  FaPaintBrush,
  FaHome,
  FaBuilding,
  FaIndustry
} from "react-icons/fa";

const categories = [
  { id: "all", name: "All Products", icon: FaPaintBrush },
  { id: "interior", name: "Interior Paints", icon: FaHome },
  { id: "exterior", name: "Exterior Paints", icon: FaBuilding },
  { id: "industrial", name: "Industrial Coatings", icon: FaIndustry },
  { id: "primers", name: "Primers", icon: FaCheckCircle },
  { id: "specialty", name: "Specialty Finishes", icon: FaStar },
];

const allProducts = [
  {
    id: 1,
    name: "Premium Interior Emulsion",
    category: "interior",
    description: "Luxury finish for interior walls with excellent coverage and washability",
    image: "/products/interior.png",
    price: "UGX 260,000",
    rating: 4.8,
    reviews: 124,
    features: ["Low VOC", "Washable", "Anti-fungal", "Excellent coverage"],
  },
  {
    id: 2,
    name: "Weather Guard Exterior",
    category: "exterior",
    description: "All-weather protection with UV resistance and color retention",
    image: "/products/weather-guard.png",
    price: "UGX 270,000",
    rating: 4.9,
    reviews: 98,
    features: ["UV Resistant", "Weather Proof", "Breathable", "Anti-cracking"],
  },
  {
    id: 3,
    name: "Industrial Epoxy Coating",
    category: "industrial",
    description: "Heavy-duty protection for industrial floors with chemical resistance",
    image: "/products/epoxy.jpg",
    price: "UGX 350,000",
    rating: 4.7,
    reviews: 56,
    features: ["Chemical Resistant", "Heavy Duty", "Anti-slip", "Durable"],
  },
  {
    id: 4,
    name: "Water Based Undercoat",
    category: "primers",
    description: "Premium primer for superior adhesion and surface preparation",
    image: "/products/jery-topcoat.png",
    price: "UGX 60,000",
    rating: 4.6,
    reviews: 87,
    features: ["Water Based", "Quick Drying", "Excellent Adhesion", "Smooth Finish"],
  },
  {
    id: 5,
    name: "Texture Paste",
    category: "specialty",
    description: "Advanced protection against wall",
    image: "/products/texture-paste black.png",
    price: "UGX 265,000",
    rating: 4.8,
    reviews: 43,
    features: ["Anti-mold", "Anti-mildew", "Long lasting", "Safe for walls"],
  },
  {
    id: 6,
    name: "Eco-Friendly Emulsion",
    category: "interior",
    description: "Low VOC, environmentally friendly paint with natural ingredients",
    image: "/products/eco.png",
    price: "UGX 75,000",
    rating: 4.9,
    reviews: 112,
    features: ["Zero VOC", "Natural Ingredients", "Eco-friendly", "Safe for kids"],
  },
  {
    id: 7,
    name: "High TopCoat Gloss Enamel",
    category: "exterior",
    description: "Superior glossy finish for doors, windows, and metal surfaces",
    image: "/products/black-topcoat.png",
    price: "UGX 70,000",
    rating: 4.5,
    reviews: 67,
    features: ["High Gloss", "Durable", "Weather Resistant", "Easy Application"],
  },
  {
    id: 8,
    name: "Concrete Floor Coating",
    category: "industrial",
    description: "Industrial-grade coating for walls floors and surfaces",
    image: "/products/silk.png",
    price: "UGX 350,000",
    rating: 4.7,
    reviews: 34,
    features: ["Heavy Duty", "Chemical Resistant", "Anti-slip", "Durable Finish"],
  },
  {
    id: 9,
    name: "Metallic Finish Paint",
    category: "specialty",
    description: "Luxurious metallic finish for accent walls and decorative projects",
    image: "/products/metallic.webp",
    price: "UGX 450,000",
    rating: 4.4,
    reviews: 28,
    features: ["Metallic Effect", "Premium Finish", "Decorative", "Rich Color"],
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"popular" | "price-low" | "price-high">("popular");

  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter((product) => {
      const matchesCategory = activeCategory === "all" || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sortBy === "price-low") {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseFloat(b.price.replace(/[^0-9]/g, ''));
        return priceA - priceB;
      });
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseFloat(b.price.replace(/[^0-9]/g, ''));
        return priceB - priceA;
      });
    } else if (sortBy === "popular") {
      filtered.sort((a, b) => b.reviews - a.reviews);
    }

    return filtered;
  }, [activeCategory, searchTerm, sortBy]);

  return (
    <>
      {/* Hero Section with Banner Image & Glassmorphism */}
      <section className="relative min-h-[60vh] pt-32 pb-16 flex items-center overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900" />
          <Image
            src="/banners/hero-5.png"
            alt="KayLon Products"
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
                  Product Catalog
                </span>
                <span className="inline-block bg-blue-500/30 backdrop-blur-sm px-4 sm:px-5 py-2 rounded-full text-sm font-medium text-white border border-white/20">
                  Premium Quality
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight text-white whitespace-nowrap">
                Premium Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Paints</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl">
                Discover our complete range of professional painting solutions
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
                <Link
                  href="#products"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-500/25 text-sm sm:text-base"
                >
                  Browse Products <FaArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all border border-white/20 hover:scale-105 text-sm sm:text-base"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent z-[1]" />
      </section>

      {/* Products Section with Glassmorphism */}
      <section className="section-padding bg-gray-50" id="products">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
          >
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-sm uppercase tracking-wider bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
              Our Collection
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Products</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-4 px-4">
              Find the perfect paint for your next project
            </p>
          </motion.div>

          {/* Filters - Glassmorphism */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <FaSearch size={14} />
              </span>
              <input
                type="text"
                placeholder="Search products by name or description..."
                className="w-full pl-11 sm:pl-12 pr-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-800 placeholder-gray-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Sort */}
            <div className="flex gap-2">
              <select
                className="px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-800"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Tabs - Glassmorphism */}
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/30 backdrop-blur-sm"
                      : "bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 border border-white/50"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="flex items-center justify-center sm:w-4 sm:h-4">
                    <Icon size={14} />
                  </span>
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Products Grid - Glassmorphism Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group backdrop-blur-xl bg-white/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/50"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 border border-white/20">
                    {product.rating} ★
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">{product.description}</p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="text-[10px] sm:text-xs bg-blue-50/80 backdrop-blur-sm text-blue-700 px-2 py-1 rounded-full border border-white/30">
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 3 && (
                      <span className="text-[10px] sm:text-xs bg-gray-100/80 backdrop-blur-sm text-gray-600 px-2 py-1 rounded-full border border-white/30">
                        +{product.features.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-base sm:text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        {product.price}
                      </span>
                      <p className="text-[10px] sm:text-xs text-gray-500">{product.reviews} reviews</p>
                    </div>
                    <Link
                      href={`/products/${product.id}`}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-medium flex items-center gap-1.5 sm:gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105 text-xs sm:text-sm"
                    >
                      View Details <span className="sm:w-3.5 sm:h-3.5 inline-flex items-center"><FaArrowRight size={12} /></span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 sm:py-16"
            >
              <div className="text-4xl sm:text-6xl mb-4">🔍</div>
              <p className="text-gray-500 text-base sm:text-lg">No products found matching your criteria</p>
              <button
                className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:underline"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}