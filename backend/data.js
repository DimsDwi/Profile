// backend/data.js
const educationHistory = [
  {
    id: 1,
    period: "2023 - Sekarang",
    institution: "UNIVERSITA AMIKOM YOGYAKARTA",
    major: "S1 - Informatika",
  },
  {
    id: 2,
    period: "2018 - 2021",
    institution: "SMK TI BALI GLOBAL JIMBARAN",
    major: "RPL",
  },
];
const skills = [
  { name: "Vue.js", level: "Menengah" },
  { name: "PHP", level: "Mahir" },
  { name: "Tailwind CSS", level: "Mahir" },
  { name: "Node.js", level: "Menengah" },

  { name: "Express.js", level: "Menengah" },
  { name: "PostgreSQL", level: "Menengah" },
  { name: "Git & GitHub", level: "Mahir" },
  { name: "HTML5 & CSS3", level: "Mahir" },
];
const projects = [
  {
    title: "Course ONLINE",
    image: "/images/itqom.jpg",
    description: "Platform Belajar Dengan Sistem Online.",
    tech: ["PHP", "Blade", "JavaScript"],
    link: "#",
  },
];
module.exports = { educationHistory, skills, projects };
