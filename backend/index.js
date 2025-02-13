require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});


// const express = require("express");
const cors = require("cors");
require("dotenv").config();

// const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });
