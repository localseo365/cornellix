import React, { useState } from 'react';

export const CookieBanner = () => {
  const [accepted, setAccepted] = useState(false);

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando, acepta nuestra política de cookies.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setAccepted(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm"
          >
            Aceptar
          </button>
          <button
            onClick={() => setAccepted(true)}
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};