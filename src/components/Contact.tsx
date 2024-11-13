import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="text-blue-600" />
                  <span>690 22 09 44</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-600" />
                  <span>info@cornellix.vercel.app</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-blue-600" />
                  <span>Carrer Pare Marchena, 9-5, 08940 Cornellà de Llobregat</span>
                </div>
              </div>
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.5476738669716!2d2.0742233!3d41.3657468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498e64d6c8921%3A0x8bf27cdfa5088b7!2sCarrer%20Pare%20Marchena%2C%209%2C%2008940%20Cornell%C3%A0%20de%20Llobregat%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1647095929247!5m2!1ses!2ses"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" rows={4}></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};