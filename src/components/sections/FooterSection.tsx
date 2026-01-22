'use client';

interface FooterProps {
  company_name?: string;
  address?: string;
  city?: string;
  state?: string;
  phone?: string;
  email?: string;
  gstin?: string;
}

export default function FooterSection(props: FooterProps) {
  const companyName = props.company_name || 'Company Name';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{companyName}</h3>
            {props.address && (
              <p className="text-gray-400 mb-2">
                {props.address}
                {props.city && <>, {props.city}</>}
                {props.state && <>, {props.state}</>}
              </p>
            )}
            {props.gstin && (
              <p className="text-gray-400 text-sm">GSTIN: {props.gstin}</p>
            )}
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            {props.phone && (
              <p className="text-gray-400 mb-2">Phone: {props.phone}</p>
            )}
            {props.email && (
              <p className="text-gray-400">Email: {props.email}</p>
            )}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} {companyName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
