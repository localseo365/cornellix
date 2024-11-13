import React from 'react';
import { Shield, Clock, Lock, Users, CheckCircle } from 'lucide-react';

const guarantees = [
  {
    icon: Clock,
    title: "Servicio profesional y rápido sde vaciado de inmuebles",
    description: "Garantizamos un servicio rápido y eficiente, completando cada trabajo en el tiempo acordado y adaptándonos a tus horarios."
  },
  {
    icon: Lock,
    title: "Confidencialidad y respeto",
    description: "Trabajamos con total discreción y respeto, ofreciendo un servicio confidencial en situaciones sensibles."
  },
  {
    icon: Shield,
    title: "Gestión responsable de residuos",
    description: "Comprometidos con el medio ambiente, aseguramos una gestión sostenible de todos los materiales retirados."
  },
  {
    icon: Users,
    title: "Personal cualificado",
    description: "Nuestro equipo está formado por profesionales experimentados y cualificados en el sector."
  },
  {
    icon: CheckCircle,
    title: "Satisfacción garantizada",
    description: "Tu satisfacción es nuestra prioridad, garantizando un trabajo limpio, rápido y completo en cada servicio."
  }
];

export const Guarantees = () => {
  return (
    <section id="garantias" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Garantías de Cornellix</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <guarantee.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{guarantee.title}</h3>
              <p className="text-gray-600">{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};