import express from "express";

// almost the same as: const server = http.createServer()
const app = express();

// parses "body" for us if the client has "Content-Type": "application/json"
app.use(express.json());

const people = [];

app.get("/", (req, res) => {
  res.json(people);
});

app.post("/", (req, res) => {
  console.log(req.body);
  people.push(req.body);
  res.json({ message: "Content recieved" });
});

const animals = [];

app.get("/animals", (req, res) => {
  res.json(animals);
});

app.post("/animals", (req, res) => {
  animals.push(req.body);
  res.json({ message: "success" });
});

app.listen(3000, () => {
  console.log("Server running on port: 3000");
});