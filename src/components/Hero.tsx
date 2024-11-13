import React from 'react';

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1617932191850-88e106fa35ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl font-bold mb-6">Servicio profesional de vaciado de pisos en Cornellà de Llobregat</h1>
          <p className="text-xl mb-8">Expertos en vaciado de pisos, locales y oficinas en Cornellà de Llobregat</p>
          <a href="wa.link/55mln7" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </section>
  );
};