`
<template>
  <div class="relative h-screen">
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80"
        alt="Pizza CECEP"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black opacity-50"></div>
    </div>

    <div
      class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center"
    >
      <div class="text-white">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">CECEP Pizzeria</h1>
        <p class="text-2xl md:text-3xl mb-2">La Mejor Pizza de Cali</p>
        <p class="text-xl md:text-2xl mb-8 max-w-2xl">
          Sabores auténticos y únicos que te transportarán a Italia, con el
          toque especial de nuestra bella Cali.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <button
            class="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 flex items-center justify-center"
          >
            Pide a Domicilio
            <ArrowRight class="ml-2 h-5 w-5" />
          </button>
          <router-link
            to="/menu"
            class="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 text-center"
          >
            Ver Menú
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
</script>
`
