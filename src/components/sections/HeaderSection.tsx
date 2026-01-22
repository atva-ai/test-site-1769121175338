'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  company_name?: string;
  logo_url?: string;
  phone?: string;
  whatsapp_number?: string;
  email?: string;
  config?: any;
}

export default function HeaderSection(props: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const companyName = props.company_name || 'Company Name';
  const navItems = props.config?.navigation_items || ['About', 'Products', 'Contact'];

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {props.logo_url ? (
              <img src={props.logo_url} alt={companyName} className="h-12" />
            ) : (
              <h1 className="text-2xl font-heading font-bold text-primary">{companyName}</h1>
            )}
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item: string) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-primary transition"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            {props.phone && (
              <a href={`tel:${props.phone}`} className="flex items-center text-primary hover:text-secondary">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">{props.phone}</span>
              </a>
            )}
            {props.whatsapp_number && (
              <a
                href={`https://wa.me/${props.whatsapp_number.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                WhatsApp
              </a>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            {navItems.map((item: string) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
