import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Badges } from "@/components/landing/Badges";
import { Commitment } from "@/components/landing/Commitment";
import { DWI_FAQ } from "@/components/landing/DWI_FAQ";
import { Testimonials } from "@/components/landing/Testimonials";
import { DWICaseResults } from "@/components/landing/DWICaseResults";
import { AboutBrian } from "@/components/landing/AboutBrian";
import { Recognized } from "@/components/landing/Recognized";
import { ServingAreas } from "@/components/landing/ServingAreas";
import { Consultation } from "@/components/landing/Consultation";
import { Footer } from "@/components/landing/Footer";

export default function Index() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Badges />
      <Commitment
        arrestChallengeText="Challenging the Stop and Arrest"
        introText="DWI cases involve complex laws, scientific testing, and procedural rules. Work with an experienced St. Louis DWI attorney who will:"
      />
      <AboutBrian />
      <CaseResults />
      <Testimonials />
      <DWI_FAQ />
      <ServingAreas />
      <Recognized />
      <Consultation formName="consultation-dwi" />
      <Footer />
    </div>
  );
}
