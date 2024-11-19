`
<template>
  <section class="pt-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Nuestro Menú</h2>
        <p class="text-xl text-gray-600">Descubre nuestras deliciosas pizzas</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="pizza in pizzas"
          :key="pizza.name"
          class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <img
            :src="pizza.image"
            :alt="pizza.name"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              {{ pizza.name }}
            </h3>
            <p class="text-gray-600 mb-4">{{ pizza.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-red-600">{{
                pizza.price
              }}</span>
              <button
                @click="addToCart(pizza)"
                class="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
              >
                Ordenar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const pizzas = [
  {
    name: "Valluna Especial",
    description: "Chorizo, maíz tierno, hogao y queso doble crema",
    price: "$32.900",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80",
  },
  {
    name: "Pacífica",
    description: "Camarones, palmitos y champiñones en salsa de la casa",
    price: "$38.900",
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80",
  },
  {
    name: "Caleña",
    description: "Pollo, piña, tocineta y salsa de la casa",
    price: "$34.900",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80",
  },
  {
    name: "CECEP Suprema",
    description: "Pepperoni, jamón, chorizo, pimentón y aceitunas",
    price: "$36.900",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80",
  },
  {
    name: "Tropical",
    description: "Jamón, piña, durazno y cereza",
    price: "$33.900",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80",
  },
  {
    name: "Vegetariana",
    description: "Champiñones, pimentón, cebolla, aceitunas y maíz",
    price: "$31.900",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80",
  },
];

const addToCart = (pizza: any) => {
  console.log("Added to cart:", pizza);
  // Add cart functionality here
};
</script>
`
