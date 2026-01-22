'use client';

import { CheckCircle, Clock, TrendingDown, Headphones, Package, Users } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesProps {
  config?: {
    default_features?: Feature[];
  };
}

export default function WhyChooseUsSection(props: FeaturesProps) {
  const features = props.config?.default_features || [];

  const iconMap: any = {
    CheckCircle: <CheckCircle className="w-12 h-12" />,
    Clock: <Clock className="w-12 h-12" />,
    TrendingDown: <TrendingDown className="w-12 h-12" />,
    Headphones: <Headphones className="w-12 h-12" />,
    Package: <Package className="w-12 h-12" />,
    Users: <Users className="w-12 h-12" />,
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature: Feature, index: number) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-primary mb-4">
                {iconMap[feature.icon] || <CheckCircle className="w-12 h-12" />}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
