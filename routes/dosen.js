const express = require("express");
const router = express.Router();
const Dosen = require("../models/dosen");

router.get("/", async (req, res) => {
  try {
    const dosens = await Dosen.find();

    return res.status(200).json(dosens);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const dosen = new Dosen({
      name: "asd",
    });

    const savedDosen = await dosen.save();

    return res.status(201).json(savedDosen);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

module.exports = router;
