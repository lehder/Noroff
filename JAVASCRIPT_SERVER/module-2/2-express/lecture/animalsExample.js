import express from "express";
const app = express();
const animals = ["first", "second", "third"];

app.get("/animals", (req, res) => {
  console.log(req.query);
  res.json({ message: "success" });
});
app.get("/animals/:id", (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.json({ message: animals[req.params.id] });
});

app.listen(3000, () => {
  console.log("Server running on port: 3000");
});