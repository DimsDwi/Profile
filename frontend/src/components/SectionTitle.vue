<script setup>
defineProps({
  title: String,
  subtitle: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="mb-12 text-center animate-fade-in-up">
    <h2 class="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-gray-500 mt-2 text-sm md:text-base">
      {{ subtitle }}
    </p>
    <div class="w-24 h-1 mx-auto mt-4 rounded bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500"></div>
  </div>
</template>
