import React from "react";
import { Pizza, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Pizza className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold">La Bella Pizza</span>
            </div>
            <p className="text-gray-400">
              Trayendo el auténtico sabor de Italia a tu mesa desde 1990.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-gray-400 hover:text-white">
                  Menú
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Horario</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lunes - Viernes: 12:00 PM - 10:00 PM</li>
              <li>Sábado - Domingo: 12:00 PM - 11:00 PM</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} La Bella Pizza. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
