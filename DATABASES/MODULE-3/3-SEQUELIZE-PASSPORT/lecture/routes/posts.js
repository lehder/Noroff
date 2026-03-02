var express = require("express");
const { Post, User } = require("../models/index.js");
var router = express.Router();

/* GET Posts page. */
router.get("/", async function (req, res, next) {
  try {
    const posts = await Post.findAll({ include: User });
    res.render("posts", { posts });
  } catch (e) {
    next(e);
  }
});

router.get("/create", (req, res) => {
  res.render("createPost");
});

router.post("/create", async (req, res, next) => {
  if (!req.user || !req.user.id) {
    res.render("createPost");
    return;
  }
  try {
    await Post.create({
      title: req.body.title,
      content: req.body.content,
      UserId: req.user.id,
    });
    res.redirect("/posts");
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;