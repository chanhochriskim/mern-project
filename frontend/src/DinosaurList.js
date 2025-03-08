import React, { useState, useEffect } from 'react';
// using Axios to send a GET request to my backend API (which is running on localhost:5001/dinosaurs)
import axios from 'axios';
import { Link } from 'react-router-dom';

function DinosaurList() {
  const [dinosaurs, setDinosaurs] = useState([]); // useState() --> to store the fetched data (dinosaurs)
  // Fetch data from the backend (GET request)
  // useEffect() --> to send the GET request when the component mounts
  useEffect(() => {
    // axios --> makes a GET request to localhost:5001/dinosaurs to fetch the list of dinosaurs from backend.
    axios.get('http://localhost:5001/dinosaurs')
      .then((response) => {
        setDinosaurs(response.data);  // Update state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching dinosaurs:', error);  // Handle error
      });
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // deleting dinosaur from the list. (no need to have a separate page)
  const deleteDinosaur = (id) => {
    if (window.confirm('Are you sure you want to delete this dinosaur?')) {
      axios 
        .delete(`http://localhost:5001/dinosaurs/${id}`)
        .then((response) => {
          alert('Dinosaur deleted successfully!');
          // remvoing deleted dinosaur data from the list.
          setDinosaurs(dinosaurs.filter((dino) => dino._id !== id));
        })
        .catch((error) => {
          console.error('There was an error deleting the dinosaur:', error);
        });
    }
  };


  return (
    <div>
      <header>
        {/* Navigation links */}
        <nav>
          <Link to="/" style={styles.navLink}>Dinosaur List</Link>
          <Link to="/add-dinosaur" style={styles.navLink}>Add Dinosaur</Link>
          <Link to="/update-dinosaur" style={styles.navLink}>Update Dinosaur</Link>
        </nav>
      </header>
      <h2>Dinosaurs List</h2>
      <ul>
        {dinosaurs.map((dino) => (
          <li key={dino._id}>
            {dino.dino_name} - {dino.diet} - {dino.creator} - {dino.cage}
            {/* a button to delete dinosaur */}
            <button onClick={() => deleteDinosaur(dino._id)}>Delete</button>
          </li>
        ))}
      </ul>
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

export default DinosaurList;
