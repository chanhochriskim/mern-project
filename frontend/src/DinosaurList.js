// CRUD: Read & Delete (displays a list of dinosaurs. provides a button to delete them.)

import React, { useState, useEffect } from 'react';
// using Axios to send a GET request to my backend API 
import axios from 'axios';
import { Link } from 'react-router-dom';
import parkLogo from './assets/park_logo.jpg';

function DinosaurList() {
  const [dinosaurs, setDinosaurs] = useState([]); // useState() --> to store the fetched data (dinosaurs)
  // Fetch data from the backend (GET request)
  // useEffect() --> to fetch the list of dinosaurs from backend via API (GET Request)
  useEffect(() => {
    // axios --> makes a GET request to app engine url/dinosaurs to fetch the list of dinosaurs from backend.
    axios.get("https://ivory-oarlock-456601-r6.ue.r.appspot.com/dinosaurs")
      .then((response) => {
        setDinosaurs(response.data);  // Update state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching dinosaurs:', error);  
      });
  }, []);

  // deleting dinosaur from the list. (no need to have a separate page)
  const deleteDinosaur = (id) => {
    if (window.confirm('Click OK to delete the dinosaur.')) {
      axios  // each dinosaur has a 'delete' function (DELETE request to backend)
        .delete(`https://ivory-oarlock-456601-r6.ue.r.appspot.com/${id}`)
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
      <img src={parkLogo} alt="Park Logo" style={styles.logo} />
        <nav>
          <Link to="/" style={styles.navLink}>Dinosaur List</Link>
          <Link to="/add-dinosaur" style={styles.navLink}>Add Dinosaur</Link>
          <Link to="/update-dinosaur" style={styles.navLink}>Update Dinosaur</Link>
          <Link to="/dinosaur-report" style={styles.navLink}>Dinosaur Reporting</Link>
        </nav>
      </header>
      <h2>Dinosaurs List</h2>
      <ul>
        {dinosaurs.map((dino) => ( // using .map(), to iterate over the dinosaurs array.
          <li key={dino._id}>
            {dino.dino_name} - {dino.diet} - {dino.creator} - {dino.cage}
            <button onClick={() => deleteDinosaur(dino._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  header: {
    textAlign: 'center',
    padding: '20px',
  },
  logo: {
    width: '200px',
    height: 'auto',
  },
  navLink: {
    margin: '0 15px',
    fontSize: '1.2rem',
    textDecoration: 'none',
    color: 'black',
  },
};

export default DinosaurList;
