import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function UpdateDinosaur() {
  const [dinosaurs, setDinosaurs] = useState([]);
  const [selectedDino, setSelectedDino] = useState('');
  const [diet, setDiet] = useState('');
  const [creator, setCreator] = useState('');
  const [cage, setCage] = useState('');
  const navigate = useNavigate();

  // Fetch all dinosaurs for the dropdown list
  useEffect(() => {
    axios.get('http://localhost:5001/dinosaurs')
      .then((response) => {
        setDinosaurs(response.data);  // Store dinosaur data in state
      })
      .catch((error) => {
        console.error('Error fetching dinosaurs:', error);
      });
  }, []);

  // Handle the selection of a dinosaur
  const handleDinoSelect = (e) => {
    const selected = e.target.value;
    setSelectedDino(selected);

    // Fetch the selected dinosaur's details
    if (selected) {
      axios.get(`http://localhost:5001/dinosaurs/${selected}`)
        .then((response) => {
          const dinosaur = response.data;
          setDiet(dinosaur.diet);
          setCreator(dinosaur.creator);
          setCage(dinosaur.cage);
        })
        .catch((error) => {
          console.error('Error fetching dinosaur details:', error);
        });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedDinosaur = { diet, creator, cage };

    // Send PUT request to update dinosaur
    axios
      .put(`http://localhost:5001/dinosaurs/${selectedDino}`, updatedDinosaur)
      .then((response) => {
        alert('Dinosaur updated successfully!');
        navigate('/'); // Navigate back to the Dinosaur List page after successful update
      })
      .catch((error) => {
        console.error('There was an error updating the dinosaur:', error);
      });
  };

  return (
    <div>
      <header>
        <nav>
          <Link to="/" style={styles.navLink}>Dinosaur List</Link>
        </nav>
      </header>
      <h2>Update Dinosaur</h2>

      {/* Dropdown to select dinosaur */}
      <select 
        value={selectedDino} 
        onChange={handleDinoSelect}
        required
      >
        <option value="">Select a Dinosaur</option>
        {dinosaurs.map((dino) => (
          <option key={dino._id} value={dino._id}>
            {dino.dino_name}
          </option>
        ))}
      </select>

      {/* Form to update selected dinosaur */}
      <form onSubmit={handleSubmit}>
        <label>
          Diet:
          <select value={diet} onChange={(e) => setDiet(e.target.value)} required>
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
        <button type="submit">Update Dinosaur</button>
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

export default UpdateDinosaur;