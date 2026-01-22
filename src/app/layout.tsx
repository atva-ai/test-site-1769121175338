import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';

const headingFont = Poppins({ 
  subsets: ['latin'],
  variable: '--font-heading',
});

const bodyFont = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
});

// Generate SEO metadata with actual values (no placeholders)
const companyName = "Nutrigo Natura Agrotech Private Limited - Manufacturer of Indian Spices from Guwahati";
const companyIndustry = "business";
const companyCity = "";
const companyState = "";

// Clean and interpolate SEO title
let seoTitle = "Nutrigo Natura Agrotech Private Limited - Manufacturer of Indian Spices from Guwahati - Wholesaler | {industry} in {city}";
if (!seoTitle || seoTitle.includes('{')) {
  seoTitle = companyName;
}
seoTitle = seoTitle.replace(/\{[^}]+\}/g, '').replace(/\s+/g, ' ').trim() || companyName;

// Clean and interpolate SEO description
let seoDescription = "Leading Wholesaler of {industry} products in {city}, {state}. Year Established: {year_established}. GST Verified. Contact us for quality products and competitive pricing.";
if (!seoDescription || seoDescription.includes('{')) {
  const parts = [];
  if (companyIndustry) parts.push(`Leading ${companyIndustry}`);
  if (companyCity) parts.push(`in ${companyCity}`);
  if (companyState) parts.push(`, ${companyState}`);
  seoDescription = parts.length > 0 ? parts.join(' ') : 'Quality products and services';
}
seoDescription = seoDescription.replace(/\{[^}]+\}/g, '').replace(/\s+/g, ' ').trim() || 'Quality products and services';

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  keywords: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
