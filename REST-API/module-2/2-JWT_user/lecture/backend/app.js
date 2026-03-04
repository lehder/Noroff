import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import authRouter from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Server running",
  });
});

app.listen(3000, () => {
  console.log("server running on port: 3000");
});