import React from 'react';

const services = [
  {
    title: "Vaciado de pisos",
    description: "Nos especializamos en el vaciado de pisos de cualquier tamaño y condición, asegurando una gestión rápida y eficiente."
  },
  {
    title: "Vaciado de locales comerciales",
    description: "Servicio profesional y flexible para locales comerciales, oficinas o tiendas, adaptado a tus horarios y necesidades."
  },
  {
    title: "Vaciado por acumulación extrema",
    description: "Servicio especializado para casos de acumulación extrema o síndrome de Diógenes, con total confidencialidad."
  },
  {
    title: "Vaciado post fallecimiento",
    description: "Servicio sensible y profesional para situaciones post fallecimiento, con máximo respeto y discreción."
  },
  {
    title: "Reciclaje y gestión",
    description: "Gestión sostenible de residuos, asegurando el reciclaje y tratamiento adecuado de todos los materiales."
  },
  {
    title: "Limpieza profunda",
    description: "Servicio de limpieza y desinfección completa tras el vaciado, dejando el espacio en perfectas condiciones."
  },
  {
    title: "Vaciado de garajes",
    description: "Especialistas en vaciar y organizar garajes y trasteros, optimizando el espacio disponible."
  },
  {
    title: "Preparación para reformas",
    description: "Dejamos tu espacio completamente preparado para iniciar obras de reforma o rehabilitación."
  },
  {
    title: "Asesoramiento",
    description: "Ofrecemos consultoría personalizada para cada proyecto, adaptándonos a tus necesidades específicas."
  }
];

export const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Nuestros servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};