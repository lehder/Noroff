const { Router } = require("express");
const { Album, Artist } = require("../models/index");

const router = Router();

router.get("/", async (req, res) => {
  // #swagger.descrption = "Gets 20 albums"
  // #swagger 
  const albums = await Album.findAll({ limit: 20 });
  res.json({
    albums: albums,
  });
});

router.post("/", async (req, res) => {
  try {
    const { title, artistId } = req.body;
    if (!title || !artistId) {
      return res.status(400).json({ message: "Title required" });
    }
    const response = await Album.create({ title: title, artistId: artistId });
    res.status(201).json({
      album: response,
    });
  } catch (e) {
    res.status(500).json({ message: "internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  /*
   swagger.tags = ["Albums"]
   #swagger.parameter["body"] = {
   in: "body",
   required: true,
   schema: {
   type: "object", 
   properties: {
       title: { 
            type: "string"   
        }
        }
      }
    } 
   }
   */
  const { id } = req.params;
  const album = await Album.findByPk(id);
  res.status(200).json({ album: album });
});

module.exports = router;
