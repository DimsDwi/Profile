<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects');
    projects.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="proyek" class="py-20 bg-gradient-to-br from-white to-blue-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />
      <div class="grid md:grid-cols-2 gap-10 mt-10">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
        >
          <!-- Gambar Proyek -->
          <div class="overflow-hidden">
            <img
              :src="project.image"
              alt="Gambar Proyek"
              class="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>

          <!-- Konten -->
          <div class="p-6 space-y-4">
            <h3 class="text-2xl font-bold text-blue-800 group-hover:text-blue-600 transition">
              {{ project.title }}
            </h3>
            <p class="text-gray-600">{{ project.description }}</p>

            <!-- Teknologi -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="t in project.tech"
                :key="t"
                class="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
              >
                {{ t }}
              </span>
            </div>

            <!-- Link -->
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
            >
              🔗 Lihat Detail →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
