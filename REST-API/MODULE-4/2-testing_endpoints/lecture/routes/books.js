const { Router } = require("express");
const { Book } = require("../models/index");
const router = Router();

async function examplePromise() {}
function exampleNotPromise() {}

const obj = {
  status: "pending" || "fulfilled" || "rejected",
};

router.get("/", async (req, res) => {
  const books = await Book.findAll({ limit: 10 });
  res.json({ books: books });
});

router.post("/", async (req, res) => {
  const { title } = req.body;
  if (!title) {
   return res.status(400).json({ status: "fail" });
  }
  const book = await Book.create({ title: title });
  res.status(201).json({
    status: "success",
    data: book,
  });
});

module.exports = router;