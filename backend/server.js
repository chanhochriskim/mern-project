const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
// importing dinosaurRoutes to use them.
const dinosaurRoutes = require('./routes/dinosaurRoutes');

// middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
// will link /dinosaurs endpoint to
app.use('/dinosaurs', dinosaurRoutes); // use routes for dinosaurs

// connecting to MongoDB atlas + the password should be replaced! Jurassicpark1324
mongoose.connect('mongodb+srv://chanhochriskim:<pwd>@jurassic-park-database.8lpe0.mongodb.net/?retryWrites=true&w=majority&appName=jurassic-park-database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(5001, () => {
  console.log('Server running on port 5001');
});
