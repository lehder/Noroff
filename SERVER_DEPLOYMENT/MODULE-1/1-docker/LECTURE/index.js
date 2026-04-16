import express from "express";

const app = expres();

app.get("/", (req, res) => {
    res.send("<h1>Hello from container!</h1>");
});

app.listen(3000, () => {
  console.log("Server started on port: 3000");
});
