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
      <Commitment
        attorneyType="criminal"
        introText="We understand that each criminal charge has its own set of complexities. That's why we develop focused defense strategies that are specific to the nature of the allegations. The Law Offices of Brian J. Cooke leverages years of experience to build strong, strategic defenses. Work with an experienced St. Louis criminal defense attorney who will:"
      />
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
