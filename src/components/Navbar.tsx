import React, { useState } from "react";
import { Pizza, ShoppingCart, Menu as MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Pizza className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">
              La Bella Pizza
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-gray-600 hover:text-red-600">
              Menú
            </a>
            <a href="#about" className="text-gray-600 hover:text-red-600">
              Nosotros
            </a>
            <a href="#contact" className="text-gray-600 hover:text-red-600">
              Contacto
            </a>
            <button className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">
              <ShoppingCart className="h-5 w-5 mr-2" />
              <span>Ordenar</span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a
              href="#menu"
              className="block px-3 py-2 text-gray-600 hover:text-red-600"
            >
              Menú
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-600 hover:text-red-600"
            >
              Nosotros
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-600 hover:text-red-600"
            >
              Contacto
            </a>
            <button className="flex items-center w-full bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">
              <ShoppingCart className="h-5 w-5 mr-2" />
              <span>Ordenar</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
