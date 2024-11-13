import React from 'react';

const testimonials = [
  {
    name: "María Prat",
    role: "Propietaria",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    text: "Excelente servicio. Rápidos, eficientes y muy profesionales. Vaciaron mi piso en tiempo récord y dejaron todo impecable."
  },
  {
    name: "Carlos Rodríguez",
    role: "Gerente inmobiliaria",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    text: "Trabajamos con Cornellix regularmente para nuestros proyectos inmobiliarios. Su servicio es consistente y confiable."
  },
  {
    name: "Anna Grau",
    role: "Cliente particular",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    text: "Me ayudaron con un caso complicado de vaciado. Su equipo fue muy comprensivo y profesional en todo momento."
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};