import express from "express";
import cors from "cors";
import usersRouter from "./routes/users";

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", usersRouter);

app.get("/", (req, res) => {
    res.send("Hello word!");
});

app.listen(PORT, () => {
    console.log(`Server liostening on port: ${PORT}`);
});
