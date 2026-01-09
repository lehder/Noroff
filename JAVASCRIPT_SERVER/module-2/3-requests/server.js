import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

/*
*basically what express.json() does for us*
app.use((req, res, next) => {
  if (req.headers["content-type"] == "application/json") {
    const body = JSON.parse(req.body);
    req.body = body;
  }
  next();
}); */

const articles = {
  apple: {
    title: "Apple",
    content: "Information about apples",
  },
  cat: {
    title: "Cat",
    content: "Information about cats",
  },
  html: {
    title: "HTML",
    content: `
    <h3>HTML gives structure</h3>
    <p>to the web</p>
    `,
  },
};

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  const links = [];
  for (const key in articles) {
    links.push(key);
  }
  res.json(links);
});

app.get("/:name", (req, res) => {
  const content = articles[req.params.name];
  if (content) {
    res.json(content);
  } else {
    res.json({ title: "Not found", content: "page not found" });
  }
});

app.post("/:name", (req, res) => {
  const { name } = req.params;
  if (articles[name]) {
    res.json({ message: "Article already exists" });
  } else {
    articles[name] = req.body;
    res.json({ message: "Successfully created article" });
  }
});

app.delete("/:name", (req, res) => {
  const { name } = req.params;
  if (articles[name]) {
    delete articles[name];
    res.json({ message: "article was deleted" });
  } else {
    res.status(404).json({ message: "article not found" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
