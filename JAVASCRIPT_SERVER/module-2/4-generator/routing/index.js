const express = require("express");
const animalRouter = require("./routes/animals");
const foodRouter = require("./routes/food");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/animals", animalRouter);
app.use("/food", foodRouter);

app.listen(3000, () => {
  console.log("server running on port 3000");
});

/* app.get("/animals", (req, res) => {
  res.send("Animals endpoint");
});

app.get("/animals/:name", (req, res) => {
  res.send(req.params.name);
}); */

/* app.get("/food", (req, res) => {
  res.send("Food endpoint");
});
app.get("/food/:id", (req, res) => {
  res.send(req.params.id);
}); */
