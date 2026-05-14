import Hero from "@/components/landing/hero";
import HowItWorks from "@/components/landing/how-it-works";
import Disciplines from "@/components/landing/disciplines";
import OwnerSection from "@/components/landing/owner-section";
import Testimonials from "@/components/landing/testimonials";
import FinalCTA from "@/components/landing/final-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Disciplines />
      <OwnerSection />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
