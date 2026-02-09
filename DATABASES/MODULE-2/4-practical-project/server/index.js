import express from "express";
import mysql from "mysql2";
import cors from "cors";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "simple_db",
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/students", (req, res) => {
  connection.query("SELECT * FROM students", (error, result) => {
    if (error) {
      res.json({ message: "error" });
      return;
    }
    res.json(result);
  });
});

app.post("/students", (req, res) => {
  // shorthand
  // const { name, date } = req.body;
  const name = req.body.name;
  const date = req.body.date;
  console.log(name, date);

  connection.query(
    `
    INSERT INTO students(name, enrollment_date)
    VALUES ('${name}', '${date}')
    `,
    (error, result) => {
      if (error) {
        res.json({ message: "error" });
        return;
      }
      res.json({ message: "successful add" });
    },
  );
});

app.delete("/students/:id", (req, res) => {
  connection.query(
    `DELETE FROM students WHERE id=${req.params.id}`,
    (error, result) => {
      if (error) {
        res.json({ message: "error" });
        return;
      }
      res.json({ message: "Successful delete" });
    },
  );
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});