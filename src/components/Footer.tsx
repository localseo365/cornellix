import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Cornellix</h3>
            <p className="text-gray-400">
              Servicio profesional de vaciado de pisos y locales en Cornellà de Llobregat.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <p className="text-gray-400">
              Tel: 690 22 09 44<br />
              Email: info@cornellix.vercel.app<br />
              Carrer Pare Marchena, 9-5<br />
              08940 Cornellà de Llobregat, Barcelona
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Horario</h3>
            <p className="text-gray-400">
              Lunes a Viernes: 8:00 - 20:00<br />
              Sábados: 9:00 - 18:00<br />
              Servicio de urgencias 24/7
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cornellix. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};