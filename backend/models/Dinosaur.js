const mongoose = require('mongoose');

// to define schema
const dinosaurSchema = new mongoose.Schema({
  dino_name: { type: String, required: true, unique: true },
  diet: { type: String, enum: ['carnivore', 'herbivore'], required: true },
  creator: { type: String, required: true },
  cage: { type: String, required: true }
});

// mongoose provides built-in methods to interact with MongoDB based on this schema.
const Dinosaur = mongoose.model('Dinosaur', dinosaurSchema);

module.exports = Dinosaur;
