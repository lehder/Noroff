import express from "express";
import cors from "cors";
import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "simpel_db",
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  connection.query("SELECT * FROM people", (error, result) => {
    if (error) {
      console.log(error);
      res.json({ message: "Something went wrong" });
      return;
    }
    res.json(result);
  });
});

app.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  connection.query(
    `UPDATE people 
    SET name = '${name}' 
    WHERE id = ${id};`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.json({ message: "Something went wrong" });
        return;
      }
      res.json({
        message: "Success",
      });
    },
  );
});
app.delete("/:id", (req, res) => {
  const { id } = req.params;

  connection.query(
    `DELETE FROM people 
    WHERE id = ${id};`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.json({ message: "Something went wrong" });
        return;
      }
      res.json({
        message: "Success",
      });
    },
  );
});

app.listen(3000, () => {
  console.log("Running on 3000");
});