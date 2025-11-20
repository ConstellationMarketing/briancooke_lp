import { Header } from "@/components/landing/Header";
import { CriminalHero } from "@/components/landing/CriminalHero";
import { Badges } from "@/components/landing/Badges";
import { Commitment } from "@/components/landing/Commitment";
import { PracticeAreas } from "@/components/landing/PracticeAreas";
import { CaseResults } from "@/components/landing/CaseResults";
import { Testimonials } from "@/components/landing/Testimonials";
import { AboutBrian } from "@/components/landing/AboutBrian";
import { Recognized } from "@/components/landing/Recognized";
import { ServingAreas } from "@/components/landing/ServingAreas";
import { Consultation } from "@/components/landing/Consultation";
import { Footer } from "@/components/landing/Footer";

export default function Criminal1() {
  return (
    <div className="w-full">
      <Header />
      <CriminalHero />
      <Badges />
      <Commitment />
      <PracticeAreas />
      <CaseResults />
      <AboutBrian />
      <Testimonials />
      <ServingAreas />
      <Recognized />
      <Consultation />
      <Footer />
    </div>
  );
}
