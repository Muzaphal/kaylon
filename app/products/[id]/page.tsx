"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaStar, 
  FaShare,
  FaHeart,
  FaInfoCircle,
  FaShippingFast,
  FaShieldAlt,
  FaRecycle,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaTruck,
  FaClock,
  FaAward
} from "react-icons/fa";

// Complete product data - matches the products page
const productsData = [
  {
    id: 1,
    name: "Premium Interior Emulsion",
    category: "Interior Paints",
    description: "Luxury finish for interior walls with excellent coverage and washability",
    fullDescription: "Premium Interior Emulsion delivers a luxurious, durable finish for interior walls and ceilings. Its advanced formula provides excellent coverage, washability, and a smooth, professional look that transforms any room. Perfect for living rooms, bedrooms, and high-traffic areas.",
    image: "/products/interior.png",
    price: "UGX 260,000",
    rating: 4.8,
    reviews: 124,
    features: [
      "Low VOC and eco-friendly",
      "Excellent washability",
      "Anti-fungal protection",
      "Superior coverage",
      "Smooth, professional finish",
      "Easy to apply"
    ],
    specifications: {
      "Coverage": "10-12 m² per liter",
      "Drying Time": "2-4 hours",
      "Recoat Time": "2-4 hours",
      "Finish": "Silk/Matt",
      "Application": "Brush, Roller, Spray",
      "VOC Content": "< 50 g/L",
      "Washability": "Excellent",
      "Durability": "5+ years"
    },
    colors: ["White", "Ivory", "Warm Gray", "Dove Gray", "Soft Blue", "Mint Green"],
    sizes: ["1L", "4L", "10L", "20L"],
    benefits: [
      "Enhances room brightness",
      "Reduces allergens with anti-fungal properties",
      "Long-lasting color retention",
      "Easy maintenance and cleaning"
    ]
  },
  {
    id: 2,
    name: "Weather Guard Exterior",
    category: "Exterior Paints",
    description: "All-weather protection with UV resistance and color retention",
    fullDescription: "Weather Guard Exterior is a premium exterior paint formulated to withstand harsh weather conditions. It offers excellent UV protection, color retention, and a breathable finish that prevents moisture damage and cracking.",
    image: "/products/weather-guard.png",
    price: "UGX 270,000",
    rating: 4.9,
    reviews: 98,
    features: [
      "UV resistant - no fading",
      "Weather proof protection",
      "Breathable finish",
      "Anti-cracking formula",
      "Mold and mildew resistant",
      "Excellent color retention"
    ],
    specifications: {
      "Coverage": "8-10 m² per liter",
      "Drying Time": "4-6 hours",
      "Recoat Time": "4-6 hours",
      "Finish": "Matt",
      "Application": "Brush, Roller, Spray",
      "VOC Content": "< 50 g/L",
      "UV Protection": "Yes",
      "Durability": "7+ years"
    },
    colors: ["White", "Cream", "Light Gray", "Beige", "Sand", "Warm Taupe"],
    sizes: ["1L", "4L", "10L", "20L"],
    benefits: [
      "Protects against harsh weather",
      "Prevents color fading from UV rays",
      "Resists cracking and peeling",
      "Breathable finish prevents moisture buildup"
    ]
  },
  {
    id: 3,
    name: "Industrial Epoxy Coating",
    category: "Industrial Coatings",
    description: "Heavy-duty protection for industrial floors with chemical resistance",
    fullDescription: "Industrial Epoxy Coating is a high-performance, durable coating designed for heavy-duty industrial environments. It provides exceptional chemical resistance, durability, and a slip-resistant finish for maximum safety in warehouses, factories, and commercial spaces.",
    image: "/products/epoxy.jpg",
    price: "UGX 350,000",
    rating: 4.7,
    reviews: 56,
    features: [
      "Chemical resistant",
      "Heavy-duty protection",
      "Anti-slip finish",
      "Extremely durable",
      "Temperature resistant",
      "Easy to clean"
    ],
    specifications: {
      "Coverage": "6-8 m² per liter",
      "Drying Time": "24-48 hours",
      "Recoat Time": "24 hours",
      "Finish": "Semi-Gloss",
      "Application": "Roller, Trowel",
      "VOC Content": "< 100 g/L",
      "Chemical Resistance": "Excellent",
      "Durability": "10+ years"
    },
    colors: ["Light Gray", "Dark Gray", "Beige", "Green", "Red", "Blue"],
    sizes: ["4L", "10L", "20L"],
    benefits: [
      "Protects concrete floors from damage",
      "Chemical spill resistance",
      "Improves workplace safety with anti-slip",
      "Easy to maintain and clean"
    ]
  },
  {
    id: 4,
    name: "Water Based Undercoat",
    category: "Primers",
    description: "Premium primer for superior adhesion and surface preparation",
    fullDescription: "Our Water Based Undercoat is a premium quality primer designed to provide excellent adhesion, smooth finish, and lasting protection for all interior and exterior surfaces. This eco-friendly formulation is low VOC and fast-drying, perfect for professional and DIY applications.",
    image: "/products/jery-topcoat.png",
    price: "UGX 60,000",
    rating: 4.6,
    reviews: 87,
    features: [
      "Superior adhesion to all surfaces",
      "Low VOC and eco-friendly",
      "Fast drying - recoat in 2 hours",
      "Smooth, even finish",
      "Excellent coverage",
      "Water-based for easy cleanup"
    ],
    specifications: {
      "Coverage": "10-12 m² per liter",
      "Drying Time": "2-4 hours",
      "Recoat Time": "2-4 hours",
      "Finish": "Matt",
      "Application": "Brush, Roller, Spray",
      "VOC Content": "< 50 g/L",
      "Adhesion": "Excellent",
      "Durability": "5+ years"
    },
    colors: ["White", "Off-White", "Light Gray", "Antique White"],
    sizes: ["1L", "4L", "10L", "20L"],
    benefits: [
      "Prepares surfaces for topcoat application",
      "Improves paint adhesion",
      "Seals porous surfaces",
      "Provides uniform paint finish"
    ]
  },
  {
    id: 5,
    name: "Texture Paste",
    category: "Specialty Finishes",
    description: "Advanced protection against wall",
    fullDescription: "Texture Paste is a premium decorative finish that adds depth and character to interior walls. It creates unique textured patterns and provides excellent coverage while hiding imperfections. Ideal for accent walls, feature areas, and modern interior designs.",
    image: "/products/texture-paste black.png",
    price: "UGX 265,000",
    rating: 4.8,
    reviews: 43,
    features: [
      "Anti-mold protection",
      "Anti-mildew properties",
      "Long lasting durability",
      "Safe for all walls",
      "Unique textured finish",
      "Easy to apply"
    ],
    specifications: {
      "Coverage": "8-10 m² per liter",
      "Drying Time": "4-6 hours",
      "Recoat Time": "6-8 hours",
      "Finish": "Textured",
      "Application": "Trowel, Roller",
      "VOC Content": "< 50 g/L",
      "Mold Resistance": "Excellent",
      "Durability": "7+ years"
    },
    colors: ["White", "Light Gray", "Beige", "Cream", "Warm Taupe"],
    sizes: ["1L", "4L", "10L"],
    benefits: [
      "Creates unique decorative patterns",
      "Hides wall imperfections",
      "Adds texture and dimension",
      "Durable and long-lasting"
    ]
  },
  {
    id: 6,
    name: "Eco-Friendly Emulsion",
    category: "Interior Paints",
    description: "Low VOC, environmentally friendly paint with natural ingredients",
    fullDescription: "Eco-Friendly Emulsion is a premium, environmentally conscious paint formulated with natural ingredients and zero VOCs. It provides a beautiful, durable finish while being safe for children, pets, and the environment. Perfect for nurseries, bedrooms, and eco-conscious projects.",
    image: "/products/eco.png",
    price: "UGX 75,000",
    rating: 4.9,
    reviews: 112,
    features: [
      "Zero VOC formula",
      "Natural ingredients",
      "Eco-friendly and sustainable",
      "Safe for kids and pets",
      "Beautiful finish",
      "Easy to apply"
    ],
    specifications: {
      "Coverage": "10-12 m² per liter",
      "Drying Time": "2-4 hours",
      "Recoat Time": "2-4 hours",
      "Finish": "Matt",
      "Application": "Brush, Roller, Spray",
      "VOC Content": "0 g/L",
      "Natural Content": "85%+",
      "Durability": "5+ years"
    },
    colors: ["White", "Ivory", "Soft Green", "Sky Blue", "Warm Beige", "Dusty Rose"],
    sizes: ["1L", "4L", "10L"],
    benefits: [
      "Safe for indoor air quality",
      "Environmentally responsible choice",
      "Gentle on sensitive skin",
      "Perfect for eco-conscious projects"
    ]
  },
  {
    id: 7,
    name: "High TopCoat Gloss Enamel",
    category: "Exterior Paints",
    description: "Superior glossy finish for doors, windows, and metal surfaces",
    fullDescription: "High TopCoat Gloss Enamel provides a superior, high-gloss finish that enhances the appearance of doors, windows, and metal surfaces. It offers excellent durability, weather resistance, and a brilliant shine that lasts for years.",
    image: "/products/black-topcoat.png",
    price: "UGX 70,000",
    rating: 4.5,
    reviews: 67,
    features: [
      "High gloss shine",
      "Durable and long-lasting",
      "Weather resistant",
      "Easy application",
      "Excellent adhesion",
      "Self-leveling formula"
    ],
    specifications: {
      "Coverage": "8-10 m² per liter",
      "Drying Time": "4-6 hours",
      "Recoat Time": "6-8 hours",
      "Finish": "High Gloss",
      "Application": "Brush, Roller, Spray",
      "VOC Content": "< 50 g/L",
      "Weather Resistance": "Excellent",
      "Durability": "7+ years"
    },
    colors: ["Black", "White", "Dark Gray", "Navy Blue", "Forest Green", "Burgundy"],
    sizes: ["1L", "4L", "10L"],
    benefits: [
      "Brilliant high-gloss finish",
      "Protects against weather damage",
      "Easy to clean and maintain",
      "Enhances architectural details"
    ]
  },
  {
    id: 8,
    name: "Concrete Floor Coating",
    category: "Industrial Coatings",
    description: "Industrial-grade coating for walls floors and surfaces",
    fullDescription: "Concrete Floor Coating is an industrial-grade, high-performance coating designed for concrete floors and surfaces. It provides exceptional durability, chemical resistance, and a professional finish suitable for warehouses, garages, and commercial spaces.",
    image: "/products/silk.png",
    price: "UGX 350,000",
    rating: 4.7,
    reviews: 34,
    features: [
      "Heavy duty protection",
      "Chemical resistant",
      "Anti-slip finish",
      "Durable and long-lasting",
      "Easy to apply",
      "Professional finish"
    ],
    specifications: {
      "Coverage": "6-8 m² per liter",
      "Drying Time": "24-48 hours",
      "Recoat Time": "24 hours",
      "Finish": "Semi-Gloss",
      "Application": "Roller, Trowel",
      "VOC Content": "< 100 g/L",
      "Chemical Resistance": "Excellent",
      "Durability": "10+ years"
    },
    colors: ["Light Gray", "Dark Gray", "Beige", "Green", "Blue", "Red"],
    sizes: ["4L", "10L", "20L"],
    benefits: [
      "Protects concrete from damage",
      "Resists chemicals and oils",
      "Improves safety with anti-slip",
      "Easy to clean and maintain"
    ]
  },
  {
    id: 9,
    name: "Metallic Finish Paint",
    category: "Specialty Finishes",
    description: "Luxurious metallic finish for accent walls and decorative projects",
    fullDescription: "Metallic Finish Paint delivers a stunning, luxurious metallic effect that transforms ordinary walls into extraordinary features. Perfect for accent walls, feature areas, and decorative projects where a touch of glamour is desired.",
    image: "/products/metallic.webp",
    price: "UGX 450,000",
    rating: 4.4,
    reviews: 28,
    features: [
      "Metallic effect finish",
      "Premium quality",
      "Decorative and elegant",
      "Rich color depth",
      "Durable finish",
      "Easy to apply"
    ],
    specifications: {
      "Coverage": "8-10 m² per liter",
      "Drying Time": "4-6 hours",
      "Recoat Time": "6-8 hours",
      "Finish": "Metallic",
      "Application": "Brush, Roller, Spray",
      "VOC Content": "< 50 g/L",
      "Metallic Effect": "Premium",
      "Durability": "5+ years"
    },
    colors: ["Gold", "Silver", "Bronze", "Copper", "Platinum", "Rose Gold"],
    sizes: ["1L", "4L"],
    benefits: [
      "Creates stunning visual impact",
      "Adds luxury and elegance",
      "Perfect for feature walls",
      "Unique and eye-catching finish"
    ]
  }
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [isWishlist, setIsWishlist] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const productId = Number(params.id);
  const product = productsData.find(p => p.id === productId);

  // If product not found, show 404
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link 
            href="/products" 
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            View All Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Back Button */}
      <section className="pt-32 pb-8 bg-gray-50">
        <div className="container-custom">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-purple-700 transition-colors font-medium"
          >
            <FaArrowLeft size={16} />
            Back to Products
          </button>
        </div>
      </section>

      {/* Product Details */}
      <section className="pb-16 md:pb-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              {/* Rating Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <FaStar color="#facc15" />
                <span className="font-semibold">{product.rating}</span>
                <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 rounded-full">
                  {product.category}
                </span>
                <button
                  onClick={() => setIsWishlist(!isWishlist)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <FaHeart color={isWishlist ? "#ef4444" : "#9ca3af"} size={20} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <FaShare color="#9CA3AF" size={20} />
                </button>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{product.name}</h1>
              
              {/* Price with UGX */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl md:text-4xl text-purple-700 font-bold">
                  {product.price}
                </span>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">including VAT</span>
              </div>
              
              <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Key Features - Benefits */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-700 bg-green-50 p-2 rounded-lg">
                  <FaCheckCircle color="#10B981" />
                  <span>Premium Quality</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 bg-blue-50 p-2 rounded-lg">
                  <FaShippingFast color="#3B82F6" />
                  <span>Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 bg-purple-50 p-2 rounded-lg">
                  <FaShieldAlt color="#7C3AED" />
                  <span>5 Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 bg-green-50 p-2 rounded-lg">
                  <FaRecycle color="#10B981" />
                  <span>Eco-Friendly</span>
                </div>
              </div>

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Choose Color
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${
                          selectedColor === color
                            ? "bg-purple-700 text-white shadow-lg shadow-purple-500/30"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Choose Size
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${
                          selectedSize === size
                            ? "bg-purple-700 text-white shadow-lg shadow-purple-500/30"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors flex items-center justify-center text-xl"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors flex items-center justify-center text-xl"
                  >
                    +
                  </button>
                  <span className="text-sm text-gray-500 ml-2">Available in stock</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-center hover:shadow-xl hover:shadow-purple-500/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp size={20} />
                  Get Quote on WhatsApp
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-semibold text-center hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                >
                  <FaPhone size={16} />
                  Call Us
                </Link>
              </div>

              {/* Quick Contact Options */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Link
                  href="mailto:info@kaylonpaints.com"
                  className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-purple-700 transition-colors p-2 border border-gray-200 rounded-lg hover:border-purple-200"
                >
                  <FaEnvelope />
                  Email Us
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-purple-700 transition-colors p-2 border border-gray-200 rounded-lg hover:border-purple-200"
                >
                  <FaClock />
                  Quick Response
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Features & Specifications */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-purple-600"><FaInfoCircle /></span>
                Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 flex-shrink-0">
                      <FaCheckCircle />
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-purple-600"><FaInfoCircle /></span>
                Product Specifications
              </h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600">{key}</span>
                    <span className="font-medium text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-purple-600"><FaAward /></span>
              Why Choose This Product?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {product.benefits?.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Delivery Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 grid md:grid-cols-3 gap-4"
          >
            <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
              <span className="text-purple-600 text-2xl"><FaTruck /></span>
              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="text-sm text-gray-500">On orders over UGX 500,000</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
              <span className="text-purple-600 text-2xl"><FaClock /></span>
              <div>
                <p className="font-semibold">Fast Shipping</p>
                <p className="text-sm text-gray-500">2-5 business days</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
              <span className="text-purple-600 text-2xl"><FaShieldAlt /></span>
              <div>
                <p className="font-semibold">Secure Payment</p>
                <p className="text-sm text-gray-500">100% secure transactions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}