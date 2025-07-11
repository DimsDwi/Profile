<script setup>
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <footer id="kontak" class="py-20 bg-gray-800 text-white">
    <div class="container mx-auto px-6 text-center">
      <!-- Judul -->
      <SectionTitle title="Hubungi Saya" />

      <!-- Deskripsi -->
      <p class="text-lg text-gray-300 mb-6">Jangan ragu untuk terhubung atau bertanya.</p>

      <!-- Tombol Email -->
      <a
        href="mailto:dimsdwi796@gmail.com"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 inline-block mb-8"
      >
        📩 Kirim Email
      </a>

      <!-- Media Sosial -->
      <div class="flex justify-center space-x-8 mb-8 text-xl">
        <a
          href="https://github.com/DimsDwi"
          target="_blank"
          class="text-gray-400 hover:text-white transition duration-300"
          aria-label="GitHub"
        >
          <i class="fab fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/dimas-dwi-9a05aa335"
          target="_blank"
          class="text-gray-400 hover:text-white transition duration-300"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </div>

      <!-- Copyright -->
      <p class="text-sm text-gray-500">
        &copy; {{ new Date().getFullYear() }} Dimas. Dibuat dengan menggunakan Vue.js & Tailwind CSS.
      </p>
    </div>
  </footer>
</template>
