CS348 Project -- Jurassic Park Simulator 
-
DISCLAIMER *i showed on the demo video that my app runs properly on GCP / Firebase, but I purposefully omitted the mongodb passcode url for security purpose*
-

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

Clone the Project
-
- Git clone https://github.com/chanhochriskim/mern-project

Backend Setup (inside /backend)
-
- Cd backend
- Npm install
- Add the mongodb atlas URI. create a file named app.yaml (or edit it)
- Mongo_url: “mongodb atlas uri” ← I didn’t include password for security reason.
- Inside backend, deploy to GCP
    - Gcloud app deploy After deployment, backend will be hosted at the backend url 

Frontend Setup (inside /frontend)
-
Cd /frontend
Npm install
Npm install axios

Deploy Frontend to Firebase
-
Npm run build
Firebase deploy
