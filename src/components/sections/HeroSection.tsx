'use client';

import { ArrowRight, CheckCircle } from 'lucide-react';

interface HeroProps {
  company_name?: string;
  tagline?: string;
  industry?: string;
  business_type?: string;
  verification_badges?: string[];
  config?: any;
}

export default function HeroSection(props: HeroProps) {
  const companyName = props.company_name || 'Your Company';
  const tagline = props.tagline || 'Quality products for your business needs';
  const primaryCTA = props.config?.primary_cta_text || 'Get Quote';
  const secondaryCTA = props.config?.secondary_cta_text || 'View Products';

  return (
    <section className="relative bg-gradient-to-br from-primary to-blue-800 text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
            {companyName}
          </h1>
          <p className="text-xl lg:text-2xl mb-8 opacity-90">
            {tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center"
            >
              {primaryCTA}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#products"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
            >
              {secondaryCTA}
            </a>
          </div>

          {props.verification_badges && props.verification_badges.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4">
              {props.verification_badges.map((badge: string) => (
                <div
                  key={badge}
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm">{badge}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
