import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function ContactSuccessPage() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container-custom text-center">
        <div className="max-w-md mx-auto bg-white p-12 rounded-2xl shadow-xl">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle size={60} color="#22c55e" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Message Sent!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for contacting KayLon Paints. Our team will get back to you within 24 hours.
          </p>
          <Link
            href="/"
            className="inline-block bg-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}