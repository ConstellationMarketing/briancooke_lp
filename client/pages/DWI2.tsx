import { Header } from "@/components/landing/Header";
import { Hero2 } from "@/components/landing/Hero2";
import { Badges } from "@/components/landing/Badges";
import { Commitment } from "@/components/landing/Commitment";
import { DWI_FAQ } from "@/components/landing/DWI_FAQ";
import { Testimonials } from "@/components/landing/Testimonials";
import { AboutBrian } from "@/components/landing/AboutBrian";
import { Recognized } from "@/components/landing/Recognized";
import { ServingAreas } from "@/components/landing/ServingAreas";
import { Consultation } from "@/components/landing/Consultation";
import { Footer } from "@/components/landing/Footer";

export default function DWI2() {
  return (
    <div className="w-full">
      <Header />
      <Hero2 />
      <Badges />
      <Commitment
        arrestChallengeText="Challenging the Stop and Arrest"
        introText="DWI cases involve complex laws, scientific testing, and procedural rules. Work with an experienced St. Louis DWI attorney who will:"
      />
      <AboutBrian />
      <Testimonials />
      <DWI_FAQ />
      <ServingAreas />
      <Recognized />
      <Consultation formName="consultation-dwi2" />
      <Footer />
    </div>
  );
}
