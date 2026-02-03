/*
import libraries you need
create the "server"
use the middleware you need
make the server listen to a port
create a endpoint to show the server is running
*/

import express from "express";
import cors from "cors";
import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "games_db",
});

const app = express();
let counter = 0;
const loggedIn = true;
// Middleware example
app.use((req, res, next) => {
  counter++;
  console.log("request number: " + counter);
  if (!loggedIn) {
    res.send("Error");
    return;
  }

  next();
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Running server");
});

app.get("/customers", (req, res) => {
  connection.query("SELECT * FROM customers", (error, result) => {
    if (error) {
      res.json({ message: "error" });
      return;
    }
    res.json(result);
  });
});

app.get("/customers/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM customers WHERE id =" + id,
    (error, result) => {
      if (error) {
        res.json({ message: "error" });
        return;
      }
      res.json(result);
    },
  );
});

app.get("/products", (req, res) => {
  connection.query("SELECT * FROM products", (error, result) => {
    if (error) {
      res.json({ message: "error" });
      return;
    }
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log("server is running on: 3000");
});