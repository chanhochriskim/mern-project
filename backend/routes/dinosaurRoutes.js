const express = require('express');
const Dinosaur = require('../models/Dinosaur');
const router = express.Router();

// GET all dinosaurs from the database
router.get('/', async (req, res) => {
  try {
    const dinosaurs = await Dinosaur.find();
    res.json(dinosaurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST -- Add a new dinosaur by creating a new instance of Dinosaur model & save to database.
router.post('/', async (req, res) => {
  const dinosaur = new Dinosaur({
    dino_name: req.body.dino_name,
    diet: req.body.diet,
    creator: req.body.creator,
    cage: req.body.cage
  });

  try {
    const newDinosaur = await dinosaur.save();
    res.status(201).json(newDinosaur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
