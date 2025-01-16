const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();

const uri = "mongodb+srv://chanhochriskim:epsqj1324@chriskimproject.8lpe0.mongodb.net/?retryWrites=true&w=majority&appName=ChrisKimProject";
const client = new MongoClient(uri);

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    await client.connect();
    res.send("Successfully Connected to MongoDB Atlas!");
  } catch (err) {
    res.status(500).send("Connection failed you bum");
  }
});

app.listen(3001, () => {
  console.log("Backend running at http://localhost:3001");
});
