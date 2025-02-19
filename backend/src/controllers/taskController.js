const db = require("../config/db");

// Obtener todas las tareas
exports.getTasks = async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM tasks");
    res.json(results);
  } catch (err) {
    console.error("? Error obteniendo tareas:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Obtener una tarea por ID
exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await db.query("SELECT * FROM tasks WHERE id = ?", [id]);

    if (results.length === 0) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    res.json(results[0]);
  } catch (err) {
    console.error("? Error obteniendo la tarea:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Crear una nueva tarea
exports.createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const [result] = await db.query(
      "INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)",
      [title, description, status || "pendiente"]
    );

    res.status(201).json({ id: result.insertId, title, description, status: status || "pendiente" });
  } catch (err) {
    console.error("? Error creando tarea:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Actualizar una tarea
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const [result] = await db.query(
      "UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?",
      [title, description, status, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    res.json({ message: "Tarea actualizada" });
  } catch (err) {
    console.error("? Error actualizando tarea:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Eliminar una tarea
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query("DELETE FROM tasks WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    res.json({ message: "Tarea eliminada" });
  } catch (err) {
    console.error("? Error eliminando tarea:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
