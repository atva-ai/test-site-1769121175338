'use client';

import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactProps {
  company_name?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  phone?: string;
  email?: string;
  whatsapp_number?: string;
}

export default function ContactSection(props: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-center mb-12">
          Get In Touch
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {props.phone && (
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href={`tel:${props.phone}`} className="text-gray-600 hover:text-primary">
                      {props.phone}
                    </a>
                  </div>
                </div>
              )}
              
              {props.email && (
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href={`mailto:${props.email}`} className="text-gray-600 hover:text-primary">
                      {props.email}
                    </a>
                  </div>
                </div>
              )}
              
              {props.address && (
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">
                      {props.address}
                      {props.city && <>, {props.city}</>}
                      {props.state && <>, {props.state}</>}
                      {props.pincode && <> - {props.pincode}</>}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
