// BackEnd Route to handle CRUD operations by interacting with MongoDB database.
// req.params thing --> parameterized queries (to avoid SQL injection & invalid inputs)

const express = require('express');
const Dinosaur = require('../models/Dinosaur');
const router = express.Router();

// GET all dinosaurs from the database (front page part)
router.get('/', async (req, res) => {
  try {
    const dinosaurs = await Dinosaur.find();
    res.json(dinosaurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a specific dinosaur by dino_name (for UpdateDinosaur.js part though)
router.get('/:dino_name', async (req, res) => {
  try {
    const dinosaur = await Dinosaur.findOne({ dino_name: req.params.dino_name });
    if (!dinosaur) {
      return res.status(404).json({ message: 'Dinosaur not found' });
    }
    res.json(dinosaur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST -- Create a new dinosaur. (adding part!)
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

// DELETE -- Delete a dinosaur by ID
router.delete('/:id', async (req, res) => {
  try {
    const dinosaur = await Dinosaur.findByIdAndDelete(req.params.id);
    if (!dinosaur) {
      return res.status(404).json({ message: 'Dinosaur not found' });
    }
    res.json({ message: 'Dinosaur deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT -- updates an existing dinosaur based on its ID. 
router.put('/:id', async (req, res) => {
  try {
    const dinosaur = await Dinosaur.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!dinosaur) {
      return res.status(404).json({ message: 'Dinosaur not found' });
    }
    res.json(dinosaur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// for filtering dinosaurs by cage (for report)
router.get('/report/:cage', async (req, res) => {
  const { cage } = req.params;
  
  try {
    // using sanitized and parameterized input to filter dinosaurs by cage
    const dinosaurs = await Dinosaur.find({ cage: cage });
    res.json(dinosaurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




module.exports = router;
