import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom'; 

function UpdateDinosaur() {
  const [dinoname, setDinoName] = useState('');
  const [diet, setDiet] = useState('');
  const [creator, setCreator] = useState('');
  const [cage, setCage] = useState('');
  const { dino_name } = useParams();  // to retrieve dinosaur ID from the URL
  const navigate = useNavigate();

  // fetch the current details of dinosaur from backend based on its id.
  useEffect(() => {
    axios
      .get(`http://localhost:5001/dinosaurs?dino_name=${dino_name}`) // Using dino_name in query
      .then((response) => {
        const dinosaur = response.data[0];  // Assuming only one dinosaur will match
        setDinoName(dinosaur.dino_name);
        setDiet(dinosaur.diet);
        setCreator(dinosaur.creator);
        setCage(dinosaur.cage);
      })
      .catch((error) => {
        console.error('Error fetching dinosaur details:', error);
      });
  }, [dino_name]); 


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const updatedDinosaur = { diet, creator, cage };
  
    // Send PUT request to update dinosaur
    axios
      .put(`http://localhost:5001/dinosaurs/${dino_name}`, updatedDinosaur) // Using dino_name
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
        {/* Navigation links */}
        <nav>
          <Link to="/" style={styles.navLink}>Dinosaur List</Link>
          <Link to="/add-dinosaur" style={styles.navLink}>Add Dinosaur</Link>
        </nav>
      </header>
      <h2>Update {dinoname}</h2>
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
