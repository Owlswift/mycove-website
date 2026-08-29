import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import StatsBar from "@/components/StatsBar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full bg-[var(--color-page-bg)]">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <StatsBar />
      <ContactSection />
      <Footer />
    </div>
  );
}
