import React from 'react';
import { History, Users, Target, Building2, Lightbulb } from 'lucide-react';

const experiencePoints = [
  {
    icon: History,
    title: "Más de 20 Años en el Sector",
    description: "Con más de 20 años de experiencia en vaciados de pisos y locales en Cornellà de Llobregat y alrededores, somos una empresa de referencia para quienes buscan un servicio de confianza."
  },
  {
    icon: Users,
    title: "Clientes Satisfechos en Toda la Región",
    description: "Nuestra trayectoria se basa en la satisfacción de nuestros clientes, desde particulares hasta negocios y entidades locales."
  },
  {
    icon: Target,
    title: "Especialización en Situaciones Complejas",
    description: "A lo largo de los años, hemos desarrollado una especialización en situaciones de vaciado complejas, como inmuebles afectados por acumulación o propiedades en mal estado."
  },
  {
    icon: Building2,
    title: "Colaboración con Entidades Locales",
    description: "Colaboramos con puntos limpios y organizaciones de reciclaje en Cornellà de Llobregat y alrededores para garantizar una gestión adecuada de todos los objetos retirados."
  },
  {
    icon: Lightbulb,
    title: "Innovación y Adaptabilidad",
    description: "Nos mantenemos al día con las últimas técnicas y herramientas en el sector del vaciado, aplicando las mejores prácticas en cada trabajo."
  }
];

export const Experience = () => {
  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Nuestra Experiencia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiencePoints.map((point, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <point.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};