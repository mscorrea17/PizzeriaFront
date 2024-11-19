import React from "react";
import { Clock, MapPin, Phone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nuestra Historia
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Desde 1990, La Bella Pizza ha estado sirviendo auténtica pizza
              italiana en el corazón de la ciudad. Nuestras recetas han sido
              transmitidas por generaciones, y seguimos utilizando los mejores
              ingredientes importados directamente de Italia.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-red-600 mr-3" />
                <span className="text-gray-600">
                  Lun - Dom: 12:00 PM - 10:00 PM
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-red-600 mr-3" />
                <span className="text-gray-600">
                  Calle Principal 123, Ciudad
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-red-600 mr-3" />
                <span className="text-gray-600">+1 234 567 8900</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?auto=format&fit=crop&q=80"
              alt="Nuestro restaurante"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-lg">
              <p className="text-2xl font-bold">30+</p>
              <p>Años de Experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
