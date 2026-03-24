const { Router } = require("express");
const { Album } = require("../models/index");

const router = Router();

router.get("/", async (req, res) => {
  const albums = await Album.findAll({ limit: 20 });
  res.json({
    albums: albums,
  });
});

router.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Title required" });
    }
    const response = await Album.create({ title: title });
    res.status(201).json({
      album: response,
    });
  } catch (e) {
    res.status(500).json({ message: "internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const album = await Album.findByPk(id);
  res.status(200).json({ album: album });
});

module.exports = router;
