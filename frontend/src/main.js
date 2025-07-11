// src/main.js
import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import animateOnScroll from './directives/animateOnScroll'; // <-- Impor
const app = createApp(App);
import '@fortawesome/fontawesome-free/css/all.min.css';
app.directive('animate-on-scroll', animateOnScroll); // <-- Daftarkan
app.use(router);
app.mount('#app');