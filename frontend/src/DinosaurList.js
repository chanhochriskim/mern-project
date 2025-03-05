import React, { useState, useEffect } from 'react';
// using Axios to send a GET request to my backend API (which is running on localhost:5001/dinosaurs)
import axios from 'axios';

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

  return (
    <div>
      <h2>Dinosaurs List</h2>
      <ul>
        {dinosaurs.map((dino) => (
          <li key={dino._id}>
            {dino.dino_name} - {dino.diet} - {dino.creator} - {dino.cage}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DinosaurList;
