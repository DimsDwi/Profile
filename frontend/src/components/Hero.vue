<template>
  <section
    id="hero"
    class="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-24 bg-gradient-to-br from-blue-50 via-white to-purple-100"
    v-scroll-animate
    data-animate="fade-up"
  >
    <!-- TEXT -->
    <div
      class="md:w-1/2 text-center md:text-left space-y-6 z-10"
      v-scroll-animate
      data-animate="fade-left"
      data-delay="100"
    >
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Halo, Saya <span class="text-blue-600">Dimas</span>
      </h1>
      <p class="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
        Mahasiswa Teknik Informatika yang passionate di bidang web development dan UI/UX design.
        Saya suka membangun solusi digital yang <span class="font-semibold text-gray-800">elegan</span> dan <span class="font-semibold text-gray-800">efisien</span>.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6">
        <a
          href="#kontak"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg flex items-center gap-2"
        >
          <i class="fas fa-envelope"></i> Hubungi Saya
        </a>
        <a
          href="#proyek"
          class="text-blue-600 font-medium hover:underline flex items-center gap-1"
        >
          <span>Lihat Proyek</span> →
        </a>
      </div>
    </div>

    <!-- IMAGE -->
    <div
      class="md:w-1/2 flex justify-center mb-10 md:mb-0 relative"
      v-scroll-animate
      data-animate="fade-right"
      data-delay="300"
    >
      <!-- BACKGLOW -->
      <div
        class="absolute w-80 h-80 md:w-96 md:h-96 bg-gradient-to-tr from-purple-400 via-blue-400 to-transparent rounded-full blur-3xl opacity-30"
      ></div>

      <!-- PHOTO -->
      <img
        src="/images/dimas.jpeg"
        alt="Foto Dimas"
        class="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover shadow-2xl ring-4 ring-white transition-transform duration-500 hover:scale-105 z-10"
      />
    </div>
  </section>
</template>
