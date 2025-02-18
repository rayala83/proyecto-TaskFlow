const express = require("express");
const cors = require("cors");

require('dotenv').config();
const db = require("./config/db");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Importar rutas
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

module.exports = app;
