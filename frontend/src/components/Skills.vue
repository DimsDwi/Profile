<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
// import SectionTitle from './SectionTitle.vue'; // Aktifkan jika Anda punya
komponen ini
const skills = ref([]);
const API_URL = import.meta.env.PROD ? '/api/skills' :
'http://localhost:3000/api/skills';
onMounted(async () => {
try {
skills.value = (await axios.get(API_URL)).data;
} catch (error) {
console.error('Gagal mengambil data skill:', error);
}
});
</script>

<template>
  <section id="skill" class="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="group bg-white p-6 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-blue-200"
        >
          <!-- Icon/Emoji (jika ada) -->
          <div class="text-4xl mb-4">
            {{ skill.icon || '💡' }}
          </div>
          <h3 class="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition">
            {{ skill.name }}
          </h3>
          <p class="text-gray-500 mt-1 text-sm">
            {{ skill.level }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
