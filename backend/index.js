// File: backend/index.js
const express = require("express");
const cors = require("cors");
const { sql } = require("@vercel/postgres");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// API: Education
app.get("/api/education", async (req, res) => {
  try {
    const { rows } = await sql`SELECT * FROM education ORDER BY period DESC;`;
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal mengambil data pendidikan" }); // ✅ Fixed
  }
});

// API: Skills
app.get("/api/skills", async (req, res) => {
  try {
    const { rows } = await sql`SELECT * FROM skills;`;
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal mengambil data skill" });
  }
});

// API: Projects
app.get("/api/projects", async (req, res) => {
  try {
    const { rows } = await sql`SELECT * FROM projects;`;
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal mengambil data proyek" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});

// Untuk Vercel
module.exports = app;
