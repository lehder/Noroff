import express from "express";
import jwt from "jsonwebtoken";

const SECRET = "ut7TMfG7MFPXli2PHUK+0Cfv96VFe157KBJofaS4jmUHzxejwEYKivOz";
const users = [
  {
    email: "test@test.no",
    password: "test",
  },
  {
    email: "admin@admin.com",
    password: "admin",
  },
];
const app = express();

app.use(express.json());

function checkPassword(email, password) {
  for (const user of users) {
    if (user.email === email && user.password === password) {
      return true;
    }
  }
  return false;
}

app.get("/", (req, res) => {
  const authString = req.headers.authorization;

  if (!authString) {
    res.json({ message: "no token" });
    return;
  }
  // Bearer <token>
  // We grab only the "token" part by splitting the auth string
  const token = authString.split(" ")[1];

  try {
    const data = jwt.verify(token, SECRET);
    res.json(data);
  } catch (e) {
    console.log(e);
    res.json({ message: "Invalid token" });
  }
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  // CHECK IF SENT IN EMAIL AND PASSWORD EXISTS IN "USERS"
  if (checkPassword(email, password)) {
    res.status(200).json({
      message: "Correct username and password",
      token: jwt.sign({ email }, SECRET),
    });
  } else {
    res.status(401).json({ message: "invalid username or password" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port: 3000");
});