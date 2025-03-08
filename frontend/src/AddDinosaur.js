// CRUD (Create): handles adding a new dinosaur to database via POST request.

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate

function AddDinosaur() {
  const [dinoName, setDinoName] = useState('');
  const [diet, setDiet] = useState('');
  const [creator, setCreator] = useState('');
  const [cage, setCage] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDinosaur = { dino_name: dinoName, diet, creator, cage };

    // Send POST request to add dinosaur
    axios
      .post('http://localhost:5001/dinosaurs', newDinosaur)
      .then((response) => {
        alert('Dinosaur added successfully!');
        navigate('/'); // Navigate to the Dinosaur List page
      })
      .catch((error) => {
        console.error('There was an error adding the dinosaur:', error);
      });
  };

  return (
    <div>
      <header>
        {/* Navigation links */}
        <nav>
          <Link to="/" style={styles.navLink}>Dinosaur List</Link>
        </nav>
      </header>
      <h2>Add a New Dinosaur</h2>
      <form onSubmit={handleSubmit}> 
  <label>
    Dinosaur Name:
    <input
      type="text"
      value={dinoName}
      onChange={(e) => setDinoName(e.target.value)}
      required
    />
  </label>
  <br />
  <label>
    Diet:
    <select value={diet} onChange={(e) => setDiet(e.target.value)} required>
      <option value="option">Diet Choice</option>
      <option value="carnivore">Carnivore</option>
      <option value="herbivore">Herbivore</option>
    </select>
  </label>
  <br />
  <label>
    Creator:
    <input
      type="text"
      value={creator}
      onChange={(e) => setCreator(e.target.value)}
      required
    />
  </label>
  <br />
  <label>
    Cage:
    <input
      type="text"
      value={cage}
      onChange={(e) => setCage(e.target.value)}
      required
    />
  </label>
  <br />
  <button type="submit">Add Dinosaur</button> {/* Ensure this is of type submit */}
</form>

    </div>
  );
}

const styles = {
  navLink: {
    margin: '0 15px',
    fontSize: '1.2rem',
    textDecoration: 'none',
    color: 'black',
  },
};

export default AddDinosaur;
