`
<template>
  <nav class="fixed w-full bg-white shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <Pizza class="h-8 w-8 text-red-600" />
          <span class="ml-2 text-xl font-bold text-gray-800"
            >CECEP Pizzeria</span
          >
        </div>

        <div class="hidden md:flex items-center space-x-8">
          <router-link to="/" class="text-gray-600 hover:text-red-600"
            >Inicio</router-link
          >
          <router-link to="/menu" class="text-gray-600 hover:text-red-600"
            >Menú</router-link
          >
          <router-link to="/about" class="text-gray-600 hover:text-red-600"
            >Nosotros</router-link
          >
          <router-link to="/contact" class="text-gray-600 hover:text-red-600"
            >Contacto</router-link
          >
          <button
            class="flex items-center bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
          >
            <Phone class="h-5 w-5 mr-2" />
            <span>Domicilios</span>
          </button>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="isOpen = !isOpen" class="text-gray-600">
            <Menu v-if="!isOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <div v-if="isOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
        <router-link
          to="/"
          class="block px-3 py-2 text-gray-600 hover:text-red-600"
          >Inicio</router-link
        >
        <router-link
          to="/menu"
          class="block px-3 py-2 text-gray-600 hover:text-red-600"
          >Menú</router-link
        >
        <router-link
          to="/about"
          class="block px-3 py-2 text-gray-600 hover:text-red-600"
          >Nosotros</router-link
        >
        <router-link
          to="/contact"
          class="block px-3 py-2 text-gray-600 hover:text-red-600"
          >Contacto</router-link
        >
        <button
          class="flex items-center w-full bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
        >
          <Phone class="h-5 w-5 mr-2" />
          <span>Domicilios</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Pizza, Phone, Menu, X } from "lucide-vue-next";

const isOpen = ref(false);
</script>
`
