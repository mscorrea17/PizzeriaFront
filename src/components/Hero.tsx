import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80"
          alt="Pizza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            La Auténtica Pizza Italiana
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Descubre el verdadero sabor de Italia con nuestras pizzas
            artesanales, hechas con ingredientes frescos y horneadas en horno de
            leña.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 flex items-center justify-center">
              Ordenar Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900">
              Ver Menú
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
