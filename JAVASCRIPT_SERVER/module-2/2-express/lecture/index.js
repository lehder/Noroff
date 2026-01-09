import express from "express";
import cors from "cors";
const blogs = [
  {
    title: "First blog post",
    content: "This is the first blog i have ever written",
  },
  {
    title: "Second blog post",
    content: "This is the second time i have written a blog post",
  },
  {
    title: "Insanely good at blogging now",
    content: "Third time's the charm",
  },
];

const app = express();
// Deals with cors for us, so we dont have to set the headers
app.use(cors());
// automatically parses json in requests for us(as long as the request has Content-Type: application/json)
app.use(express.json());

app.get("/", (req, res) => {
  res.json(blogs);
});

app.post("/", (req, res) => {
  console.log(req.body);
  blogs.push(req.body);
  res.json({ message: "Blog recieved" });
});

app.listen(3000, () => {
  console.log("Server running on port:3000");
});