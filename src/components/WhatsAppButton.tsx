'use client';

import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '';
  const message = 'Hi%2C%20I%20am%20interested%20in%20your%20products.%20Please%20share%20details.';

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-40"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setIsOpen(false)}>
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Chat on WhatsApp</h3>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-4">
              Click below to start a conversation on WhatsApp
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Start Chat
            </a>
          </div>
        </div>
      )}
    </>
  );
}
