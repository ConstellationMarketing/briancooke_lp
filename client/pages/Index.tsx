import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Badges } from '@/components/landing/Badges';
import { Commitment } from '@/components/landing/Commitment';
import { DWIConsequences } from '@/components/landing/DWIConsequences';
import { DWI_FAQ } from '@/components/landing/DWI_FAQ';
import { CaseResults } from '@/components/landing/CaseResults';
import { Testimonials } from '@/components/landing/Testimonials';
import { AboutBrian } from '@/components/landing/AboutBrian';
import { Recognized } from '@/components/landing/Recognized';
import { ServingAreas } from '@/components/landing/ServingAreas';
import { Consultation } from '@/components/landing/Consultation';
import { Footer } from '@/components/landing/Footer';

export default function Index() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Badges />
      <Commitment />
      <DWIConsequences />
      <DWI_FAQ />
      <PracticeAreas />
      <CaseResults />
      <Testimonials />
      <AboutBrian />
      <Recognized />
      <ServingAreas />
      <Consultation />
      <Footer />
    </div>
  );
}
