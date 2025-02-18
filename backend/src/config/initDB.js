const db = require('./db');

const createTable = `
  CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('pendiente', 'en_progreso', 'completado') DEFAULT 'pendiente',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

db.query(createTable, (err, result) => {
  if (err) {
    console.error('Error creando la tabla:', err);
    return;
  }
  console.log('? Tabla tasks creada o ya existente');
  db.end();  // ?? IMPORTANTE: Cerrar conexión
});
