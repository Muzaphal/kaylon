import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KayLon Paints | The Paint of Excellence",
  description: "Premium quality paints for homes, commercial buildings, and industrial projects.",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  // ... other metadata
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${poppins.className} overflow-x-hidden w-full max-w-[100vw]`}>
        <Navbar />
        <main className="min-h-screen w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}