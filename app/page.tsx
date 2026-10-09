import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EstateOfficeSection from "@/components/EstateOfficeSection";
import ProductShowcase from "@/components/ProductShowcase";
import Workflows from "@/components/Workflows";
import Testimonial from "@/components/Testimonial";
import HowItWorks from "@/components/HowItWorks";
import StatsBar from "@/components/StatsBar";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyBackdrop from "@/components/StickyBackdrop";
import EstateAerialBackdrop from "@/components/EstateAerialBackdrop";

export default function Home() {
  return (
    <div className="relative w-full bg-[var(--color-page-bg)]">
      <Navbar />
      <Hero />
      <EstateOfficeSection />
      <ProductShowcase />
      <Workflows />
      <Testimonial />
      <StickyBackdrop backdrop={<EstateAerialBackdrop />}>
        <HowItWorks />
        <StatsBar />
        <PricingSection />
        <ContactSection />
      </StickyBackdrop>
      <Footer />
    </div>
  );
}
