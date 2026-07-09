import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}