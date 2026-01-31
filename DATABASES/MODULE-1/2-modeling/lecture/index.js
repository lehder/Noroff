import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "games_db",
});

connection.query("SELECT * FROM customers", (error, data) => {
  if (error) {
    console.log("an error happened");
    return;
  }
  console.table(data);
  connection.end();
});