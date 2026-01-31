import mysql from "mysql2";
import express from "express";
import cors from "cors";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "games_db",
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Server running",
  });
});

app.get("/products", (req, res) => {
  connection.query("SELECT * FROM products", (error, data) => {
    if (error) {
      res.json({
        message: "Error",
      });
      return;
    }
    res.json(data);
  });
});

app.listen(3000, () => {
  console.log("Server running on port:3000");
});