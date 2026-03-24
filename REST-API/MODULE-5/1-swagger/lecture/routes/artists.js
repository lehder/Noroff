const { Router } = require("express");
const {  Artist } = require("../models/index");
const router = Router();

// create endpoint

router.get("/", async (req, res)=>{
    const artists = await Artist.findAll({ limit: 20 });
    res.status(200).json({ 
    artists: artists,
    });
});

router.post("/", async (req, res) => {
    const { name } = req.body;
    if (!name ) {
        return res.status(400).json({ message: "Artist name is required"});
    }
    const artist = await Artist.create({ name: name });
    res.status(201).json({
        message: "Artist added",
        artist: artist,
    })
})

module.exports = router;