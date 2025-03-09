CS348 Project Spring 2025, Jurassic Park Simulator (check if stage 3 is also being fulfilled)

Tech:
MongoDB with Mongoose (ODM, Database)
Express.js (backend API)
React (frontend UI)
Node.js (server-side logic)

Stage 1 requirement
-
1. Tech used: MERN Stack


Stage 2 requirement
- 
1. Database Design (just 1 schema -- dino)
  - mongoDB for database.
  - Collections: 1. Dinosaur (name, diet, creator, cage)
  - mongoose models (for schema definitions, allowing structured access to MongoDB collections.)

2. requirement 1 (CRUD, create, read, update, delete)
  - react UI to manage park.
    - allow user to add, remove, update dino + recommended dino (based on cage)
    - implement a form to input data & display data
  - Express.js (backend) API routes to handle CRUD
    - ex: POST /dinosaur, GET /dinosaur, PUT /dinosaur/:id, etc
  - Dynamic Drop-Downs (React to populate drop downs for selecting options)

3. requirement 2 (dynamic report generation)
  - where users can filter based on (cage, diet, etc)
  - fetch relevant data from backend, using Express API (ex: GET /dinosaur/report? dataRange=...&diet=..)
  - Display statistics like total dinosaur number & rate.

4. Demo (5 min)
  - CRUD operations (adding, removing, updating)
  - Report Generation (Filtering, recommending dino)
  - Dynamic data population using Mongoose for MongoDB.

Running the Jurassic Park Simulator Project
-
1. Prerequisites:
Node.js (version 14.x or above)
MongoDB Atlas account (for MongoDB cloud database)
npm (Node package manager) or yarn for dependency management
2. Setup Instructions:
Backend Setup (Express + MongoDB + Mongoose):
Clone the repository:

bash
Copy code
git clone https://github.com/chanhochriskim/jurassic-park-simulator.git
cd jurassic-park-simulator/backend
Install Backend Dependencies: In the backend folder, install the necessary dependencies:

bash
Copy code
npm install
Connect to MongoDB Atlas:

Create a MongoDB Atlas cluster if you haven’t already.
Add your MongoDB URI and credentials to the server.js file for connecting to your MongoDB database (find your MongoDB URI in the MongoDB Atlas dashboard).
The connection URL should look like:
js
Copy code
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/jurassicpark', { useNewUrlParser: true, useUnifiedTopology: true })
Start the Backend Server:

Run the backend server with:
bash
Copy code
node server.js
Test the API with Postman:

Test the GET and POST endpoints in Postman to ensure the backend is properly working.
You can send a GET request to http://localhost:5001/dinosaurs and a POST request to the same endpoint with a JSON body like:
json
Copy code
{
  "dino_name": "T-Rex",
  "diet": "carnivore",
  "creator": "Dr. John Hammond",
  "cage": "Cage 1"
}
Frontend Setup (React):
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install Frontend Dependencies: In the frontend folder, install the necessary dependencies:

bash
Copy code
npm install
Start the Frontend Server:

Run the React development server with:
bash
Copy code
npm start
This should open the project in your browser at localhost:3000.
Navigate Between Pages:

On the homepage, you’ll see the Dinosaur List along with an Add Dinosaur button in the header.
When you click Add Dinosaur, it will redirect you to a page where you can add a new dinosaur.
3. Project Features So Far:
Dinosaur List Page:

Displays the list of dinosaurs fetched from the backend database.
Allows for displaying dino_name, diet, creator, and cage.
A link to the "Add Dinosaur" page is included on the main page.
Add Dinosaur Page:

Allows users to input the following dinosaur details: dino_name, diet, creator, and cage.
The data is added to the MongoDB Atlas database through the POST API call to the backend.
Frontend-Backend Integration:

The frontend makes GET requests to fetch the list of dinosaurs and POST requests to add a new dinosaur to the database.
The new dinosaur will appear in the Dinosaur List once it’s added.
MongoDB Atlas:

MongoDB Atlas is used as the cloud database for storing dinosaur information.
You can view the data added through the MongoDB Atlas Dashboard.
