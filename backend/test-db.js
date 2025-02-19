const mysql = require("mysql2/promise");

async function testConnection() {
  try {
    const pool = mysql.createPool({
      host: "mysql",
      user: "root",
      password: "",
      database: "taskflow",
      port: 3306,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    const connection = await pool.getConnection();
    console.log("? Conectado a MySQL desde Node.js");
    connection.release();
    process.exit(0);
  } catch (err) {
    console.error("? Error conectando a MySQL:", err);
    process.exit(1);
  }
}

testConnection();
