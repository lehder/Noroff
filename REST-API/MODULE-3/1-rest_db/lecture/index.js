import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json(req.headers);
});
app.post("/", (req, res) => {
  console.log(req.body);

  res.json({ message: "request recieved" });
});


app.get("/token", (req, res) => {
  const token = jwt.sign(
    {
      email: "test@test.com",
      displayName: "SuperCoolUser",
      avatar: "examplge.jpg",
    },
    "SECRET",
  );
  res.json({ token });
});

function validateToken(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, "SECRET");
    req.user = user;
  } catch (e) {
    req.user = null;
  }
  next();
}
app.get("/welcome", validateToken, (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.json({ displayName: "Guest" });
  }
});

app.get("/data", validateToken, (req, res) => {
  if (req.user) {
    res.send(`<h1>Welcome ${req.user.displayName}</h1>`);
  } else {
    res.send("<h1>Welcome guest</h1>");
  }
});

// create a post request that logs "success" if the token is valid. if invalid log "FAIL"
app.post("/create", validateToken, (req, res) => {
  if (req.user) {
    console.log("success");
  } else {
    console.log("FAIL");
  }
  console.log(req.body);
  res.json({ message: "request recieved" });
});

app.listen(3000, () => {
  console.log("Port: 3000");
});