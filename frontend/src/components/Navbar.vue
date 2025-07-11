<template>
  <header class="bg-white shadow-md sticky top-0 z-50 animate-fade-in transition duration-300">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div
        class="text-2xl font-extrabold text-blue-600 hover:text-blue-700 transition duration-300"
      >
        Dimas
      </div>

      <!-- Navigation Links -->
      <ul class="hidden md:flex space-x-6 font-medium">
        <li v-for="item in menu" :key="item.href">
          <a
            :href="item.href"
            class="text-gray-600 hover:text-blue-600 transition duration-300 hover:-translate-y-1 transform"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const menu = [
  { label: 'Profil', href: '#profil' },
  { label: 'Pendidikan', href: '#pendidikan' },
  { label: 'Skill', href: '#skill' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Kontak', href: '#kontak' },
]
</script>
