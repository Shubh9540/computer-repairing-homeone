import React from 'react';
import { ComputerRepairTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { AboutUs } from '@/components/sections/AboutUs';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Process } from '@/components/sections/Process';
import { Pricing } from '@/components/sections/Pricing';
import { Achievement } from '@/components/sections/Achievement';
import { Testimonials } from '@/components/sections/Testimonials';
import { Faq } from '@/components/sections/Faq';
import { Brands } from '@/components/sections/Brands';
import { BookRepair } from '@/components/sections/BookRepair';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: ComputerRepairTemplateData = rawData as ComputerRepairTemplateData;
  const sectionData = templateData?.categories?.['Computer Repair']?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) {
    return <div className="text-black p-10">{commonData?.globalUI?.loadingText || 'Loading Data...'}</div>;
  }

  return (
    <main className="bg-white min-h-screen flex flex-col scroll-smooth">
      <Header data={sectionData.Header?.variants?.['Computer RepairHeader2']} />
      <Hero data={sectionData.Hero?.variants?.['Computer RepairHero2']} />
      <Services data={sectionData.Services?.variants?.['Computer RepairServices2']} />
      <AboutUs data={sectionData.AboutUs?.variants?.['Computer RepairAboutUs2']} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.['Computer RepairWhyChooseUs2']} />
      <Process data={sectionData.Process?.variants?.['Computer RepairProcess2']} />
      <Pricing data={sectionData.Pricing?.variants?.['Computer RepairPricing2']} />
      <Achievement data={sectionData.Achievement?.variants?.['Computer RepairAchievement2']} />
      <Testimonials data={sectionData.Testimonials?.variants?.['Computer RepairTestimonials2']} />
      <Faq data={sectionData.Faq?.variants?.['Computer RepairFaq2']} />
      <Brands data={sectionData.Brands?.variants?.['Computer RepairBrands2']} />
      <BookRepair data={sectionData.BookRepair?.variants?.['Computer RepairBookRepair2']} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
