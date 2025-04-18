const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
// importing dinosaurRoutes to use them!
const dinosaurRoutes = require('./routes/dinosaurRoutes');

const corsOptions = {
  origin: 'https://ivory-oarlock-456601-r6.web.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.get('/', (req, res) => {
  res.send('Backend is working!');
});


app.options('*', cors(corsOptions)); // Handle preflight requests
app.use(cors(corsOptions));

app.use(cors(corsOptions));
// middleware to parse JSON bodies
app.use(express.json());
// will link /dinosaurs endpoint to
app.use('/dinosaurs', dinosaurRoutes); // use routes for dinosaurs

// connecting to MongoDB atlas + the password should be replaced! Jurassicpark1324
const uri = process.env.MONGO_URI; // replace with your MongoDB connection string
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


// telling GCP to use its assigned port or 8080.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});

