import React from "react";

const pizzas = [
  {
    name: "Margherita",
    description: "Salsa de tomate, mozzarella fresca y albahaca",
    price: "$12.99",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80",
  },
  {
    name: "Pepperoni",
    description: "Salsa de tomate, mozzarella y pepperoni",
    price: "$14.99",
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80",
  },
  {
    name: "Quattro Formaggi",
    description: "Mozzarella, gorgonzola, parmesano y fontina",
    price: "$15.99",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80",
  },
  {
    name: "Prosciutto e Rucola",
    description: "Mozzarella, jamón serrano y rúcula fresca",
    price: "$16.99",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestro Menú
          </h2>
          <p className="text-xl text-gray-600">
            Descubre nuestras deliciosas pizzas artesanales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pizzas.map((pizza, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={pizza.image}
                alt={pizza.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {pizza.name}
                </h3>
                <p className="text-gray-600 mb-4">{pizza.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-red-600">
                    {pizza.price}
                  </span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
