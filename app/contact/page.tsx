"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaCheckCircle,
  FaSpinner,
  FaArrowRight,
  FaWhatsapp
} from "react-icons/fa";

export default function ContactPage() {
  // WhatsApp configuration
  const whatsappNumber = "256703355441";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone",
      details: ["+256 703 355 441"],
      link: "tel:+256703355441",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: ["Kaylonpaints25@outlook.com"],
      link: "mailto:Kaylonpaints25@outlook.com",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      details: ["Katwe, Kampala, Uganda"],
      link: "https://maps.google.com",
    },
    {
      icon: FaClock,
      title: "Working Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com", color: "hover:bg-blue-600" },
    { icon: FaTwitter, href: "https://twitter.com", color: "hover:bg-sky-500" },
    { icon: FaInstagram, href: "https://instagram.com", color: "hover:bg-pink-600" },
    { icon: FaLinkedin, href: "https://linkedin.com", color: "hover:bg-blue-700" },
    { icon: FaYoutube, href: "https://youtube.com", color: "hover:bg-red-600" },
  ];

  return (
    <>
      {/* Hero Section with Banner Image */}
      <section className="relative min-h-[70vh] pt-32 pb-20 flex items-center overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banners/hero-1.png"
            alt="Contact KayLon Paints"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          {/* Additional gradient overlay for glass effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Glassmorphism Content */}
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Glass Card */}
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium text-white border border-white/20">
                  Get in Touch
                </span>
                <span className="inline-block bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white border border-white/20">
                  We're Here to Help
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight text-white">
                Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Us</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-6">
                Have questions? We're here to help. Reach out to our team today.
              </p>

              <div className="flex flex-wrap gap-4">
                {/* WhatsApp Button - Replacing Call Now */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500/80 backdrop-blur-sm hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 border border-white/30 hover:scale-105 flex-1 sm:flex-none"
                >
                  <FaWhatsapp size={18} /> Chat on WhatsApp
                </a>
                <a
                  href="mailto:Kaylonpaints25@outlook.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
                >
                  <FaEnvelope /> Email Us <FaArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent" />
      </section>

      {/* Contact Section - Glass Theme */}
      <section className="section-padding bg-gray-50 relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information - Glass Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/30 rounded-3xl p-8 md:p-10 border border-white/50 shadow-xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                We'd love to hear from you. Whether you have a question about our 
                products, need a quote, or want to discuss a project, our team is 
                ready to assist.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-14 h-14 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 shadow-md">
                      <div className="text-gray-700 group-hover:text-white transition-colors">
                        <info.icon size={24} />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-gray-800">{info.title}</p>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media - Glass */}
              <div className="mt-8 pt-8 border-t border-white/30">
                <p className="font-semibold text-gray-700 mb-4">Connect with us:</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, scale: 1.1 }}
                      className={`w-12 h-12 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 transition-all duration-300 border border-white/30 ${social.color} hover:text-white hover:border-transparent`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Glass Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/40 rounded-3xl p-8 md:p-10 border border-white/50 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50/80 backdrop-blur-sm border border-green-200 text-green-700 p-6 rounded-xl text-center"
                >
                  <div className="text-green-500 mx-auto mb-3">
                    <FaCheckCircle size={40} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className={`w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm border ${
                        errors.name ? 'border-red-500' : 'border-white/50'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-800 placeholder-gray-500`}
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={`w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm border ${
                        errors.email ? 'border-red-500' : 'border-white/50'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-800 placeholder-gray-500`}
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-800 placeholder-gray-500"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-800"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select a subject...</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="quote-request">Quote Request</option>
                      <option value="project-discussion">Project Discussion</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm border ${
                        errors.message ? 'border-red-500' : 'border-white/50'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none text-gray-800 placeholder-gray-500`}
                      placeholder="Tell us about your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin inline-flex items-center justify-center">
                          <FaSpinner size={20} />
                        </span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Glass Theme */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Find Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Here</span>
            </h2>
            <div className="backdrop-blur-xl bg-white/30 rounded-3xl overflow-hidden shadow-xl h-[400px] border border-white/50 p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.764614840272!2d32.572519273630064!3d0.29728359969979495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd4bfe82706b%3A0xbdb2c3b90b208dc7!2sKatwe%20Market!5e0!3m2!1sen!2sug!4v1783602473146!5m2!1sen!2sug"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="KayLon Paints Location"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Glass Theme */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-sm uppercase tracking-wider bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
              Quick Answers
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Questions</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4">
              Find quick answers to common questions about our products and services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "What products do you offer?",
                a: "We offer a comprehensive range of paints including interior and exterior emulsions, industrial coatings, primers, and specialty finishes.",
              },
              {
                q: "Do you provide color consultation?",
                a: "Yes, we offer free color consultation services to help you choose the perfect shades for your project.",
              },
              {
                q: "What is your delivery time?",
                a: "Delivery times vary by location, but typically range from 2-5 business days for standard orders.",
              },
              {
                q: "Do you offer bulk discounts?",
                a: "Yes, we provide special pricing and volume discounts for contractors, builders, and commercial clients.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/40 rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <h4 className="text-lg font-bold mb-2 text-gray-800">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Glass Theme - UPDATED with WhatsApp */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Banner */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banners/cta-banner.jpg"
            alt="KayLon Paints CTA"
            fill
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 backdrop-blur-sm" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to Work Together?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Let's discuss your project and find the perfect paint solution for your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {/* WhatsApp Button - Replacing Call Us Now */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500/80 backdrop-blur-sm hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 border border-white/30 hover:scale-105 flex-1 sm:flex-none"
                >
                  <FaWhatsapp size={18} /> Chat on WhatsApp
                </a>
                <a
                  href="mailto:Kaylonpaints25@outlook.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
                >
                  <FaEnvelope /> Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}