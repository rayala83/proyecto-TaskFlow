const db = require("./db");

async function initDB() {
  try {
    const connection = await db.getConnection();
    console.log("? Conectado a MySQL");

    // Crear la tabla 'tasks' si no existe
    await connection.query(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        status ENUM('pendiente', 'en progreso', 'completada') DEFAULT 'pendiente',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("? Tabla 'tasks' creada o ya existente.");
    connection.release();
  } catch (err) {
    console.error("? Error creando la tabla:", err);
  }
}

initDB();
