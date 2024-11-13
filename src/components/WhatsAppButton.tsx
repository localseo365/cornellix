import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/34690220944"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};