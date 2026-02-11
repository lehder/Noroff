var express = require("express");
const { Post } = require("../models/index.js");
var router = express.Router();

/* GET Posts page. */
router.get("/", async function (req, res, next) {
  try {
    const posts = await Post.findAll();
    res.render("posts", { posts });
  } catch (e) {
    next(e);
  }
});

router.get("/create", (req, res) => {
  res.render("createPost");
});

router.post("/create", async (req, res, next) => {
  try {
    await Post.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.redirect("/posts");
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;