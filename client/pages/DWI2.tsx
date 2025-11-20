import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Badges } from '@/components/landing/Badges';
import { Commitment } from '@/components/landing/Commitment';
import { DWI_FAQ } from '@/components/landing/DWI_FAQ';
import { Testimonials } from '@/components/landing/Testimonials';
import { AboutBrian } from '@/components/landing/AboutBrian';
import { Recognized } from '@/components/landing/Recognized';
import { ServingAreas } from '@/components/landing/ServingAreas';
import { Consultation } from '@/components/landing/Consultation';
import { Footer } from '@/components/landing/Footer';

export default function DWI2() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Badges />
      <Commitment />
      <AboutBrian />
      <Testimonials />
      <DWI_FAQ />
      <ServingAreas />
      <Recognized />
      <Consultation />
      <Footer />
    </div>
  );
}
