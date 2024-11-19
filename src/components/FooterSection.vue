`
<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="space-y-4">
          <div class="flex items-center">
            <Pizza class="h-8 w-8 text-red-600" />
            <span class="ml-2 text-xl font-bold">CECEP Pizzeria</span>
          </div>
          <p class="text-gray-400">
            La auténtica pizza italiana con el sabor de Cali desde 2010.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="text-gray-400 hover:text-white"
                >Inicio</router-link
              >
            </li>
            <li>
              <router-link to="/menu" class="text-gray-400 hover:text-white"
                >Menú</router-link
              >
            </li>
            <li>
              <router-link to="/about" class="text-gray-400 hover:text-white"
                >Nosotros</router-link
              >
            </li>
            <li>
              <router-link to="/contact" class="text-gray-400 hover:text-white"
                >Contacto</router-link
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Horario</h3>
          <ul class="space-y-2 text-gray-400">
            <li>Lunes - Jueves: 12:00 PM - 10:00 PM</li>
            <li>Viernes - Domingo: 12:00 PM - 11:00 PM</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Síguenos</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white">
              <Instagram class="h-6 w-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <Facebook class="h-6 w-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <Twitter class="h-6 w-6" />
            </a>
          </div>
          <div class="mt-4">
            <p class="text-gray-400">Domicilios: (602) 524-5678</p>
          </div>
        </div>
      </div>

      <div
        class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
      >
        <p>
          &copy; {{ new Date().getFullYear() }} CECEP Pizzeria. Todos los
          derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Pizza, Instagram, Facebook, Twitter } from "lucide-vue-next";
</script>
`
