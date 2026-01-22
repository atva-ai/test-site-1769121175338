'use client';

import websiteConfig from '@/config/website.json';
import HeaderSection from '@/components/sections/HeaderSection';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeaderSection {...websiteConfig.sections.find(s => s.key === 'header')?.props} />
      <HeroSection {...websiteConfig.sections.find(s => s.key === 'hero')?.props} />
      <AboutSection {...websiteConfig.sections.find(s => s.key === 'about')?.props} />
      <WhyChooseUsSection {...websiteConfig.sections.find(s => s.key === 'why_choose_us')?.props} />
      <ContactSection {...websiteConfig.sections.find(s => s.key === 'contact')?.props} />
      <FooterSection {...websiteConfig.sections.find(s => s.key === 'footer')?.props} />
      <WhatsAppButton />
    </main>
  );
}
