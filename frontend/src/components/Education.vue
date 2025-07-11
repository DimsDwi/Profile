<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
// import SectionTitle from './SectionTitle.vue'; // Aktifkan jika Anda punya
komponen ini
const educationHistory = ref([]);

const API_URL = import.meta.env.PROD ? '/api/education' :
'http://localhost:3000/api/education';
onMounted(async () => {
try {
educationHistory.value = (await axios.get(API_URL)).data;
} catch (error) {
console.error('Gagal mengambil data pendidikan:', error);
}
});
</script>

<template>
  <section id="pendidikan" class="py-20 bg-gradient-to-br from-white to-blue-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />

      <div class="relative mt-12">
        <!-- Garis tengah -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

        <div v-for="(edu, index) in educationHistory" :key="edu.id" class="mb-12 flex flex-col md:flex-row items-center w-full">
          <!-- Kiri (jika index genap) -->
          <template v-if="index % 2 === 0">
            <div class="md:w-1/2 pr-8 text-right">
              <div class="bg-white p-5 rounded-lg shadow border-l-4 border-blue-500 inline-block text-right">
                <p class="text-sm text-blue-600 font-semibold">{{ edu.period }}</p>
                <h3 class="text-xl font-bold text-gray-800">{{ edu.institution }}</h3>
                <p class="text-gray-600">{{ edu.major }}</p>
              </div>
            </div>
            <div class="w-8 h-8 bg-blue-600 rounded-full border-4 border-white z-10 shadow"></div>
            <div class="md:w-1/2"></div> <!-- Spacer kanan -->
          </template>

          <!-- Kanan (jika index ganjil) -->
          <template v-else>
            <div class="md:w-1/2"></div> <!-- Spacer kiri -->
            <div class="w-8 h-8 bg-blue-600 rounded-full border-4 border-white z-10 shadow"></div>
            <div class="md:w-1/2 pl-8 text-left">
              <div class="bg-white p-5 rounded-lg shadow border-l-4 border-blue-500 inline-block text-left">
                <p class="text-sm text-blue-600 font-semibold">{{ edu.period }}</p>
                <h3 class="text-xl font-bold text-gray-800">{{ edu.institution }}</h3>
                <p class="text-gray-600">{{ edu.major }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
