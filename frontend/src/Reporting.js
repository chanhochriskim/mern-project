import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Reporting() {
  // States for dropdown selection and filtered data
  const [dinosaurs, setDinosaurs] = useState([]);
  const [selectedCage, setSelectedCage] = useState('');
  const [filteredDinosaurs, setFilteredDinosaurs] = useState([]);

  // Fetch all dinosaurs to populate the dropdown list
  useEffect(() => {
    axios
      .get('http://localhost:5001/dinosaurs')
      .then((response) => {
        setDinosaurs(response.data);  // Store dinosaurs data for dropdown
      })
      .catch((error) => {
        console.error('Error fetching dinosaurs:', error);
      });
  }, []);

  // Handle the cage selection change in dropdown
  const handleCageChange = (e) => {
    setSelectedCage(e.target.value); // Update the selected cage
  };

  // Handle report generation (fetch filtered dinosaurs based on selected cage)
  const handleReportClick = () => {
    if (!selectedCage) {
      alert('Please select a cage.');
      return;
    }

    // Sanitize the selectedCage input
    const sanitizedCage = selectedCage.trim(); // Remove leading/trailing spaces

    // Ensure the cage name is valid
    if (!sanitizedCage || sanitizedCage.length < 1) {
      alert('Invalid cage name!');
      return;
    }

    // Fetch the filtered dinosaurs based on the selected cage
    axios
      .get(`http://localhost:5001/dinosaurs/report/${selectedCage}`)
      .then((response) => {
        setFilteredDinosaurs(response.data);  // Store filtered data
      })
      .catch((error) => {
        console.error('Error fetching filtered dinosaurs:', error);
      });
  };

  return (
    <div>
        <header>
        <nav>
          <Link to="/" style={styles.navLink}>Dinosaur List</Link>
        </nav>
        </header>
      <h2>Dinosaur Report</h2>

      {/* Dropdown for selecting cage */}
      <div>
        <label>
          Select a Cage:
          <select value={selectedCage} onChange={handleCageChange}>
            <option value="">-- Select Cage --</option>
            {dinosaurs
              .map((dino) => dino.cage)
              .filter((value, index, self) => self.indexOf(value) === index) // Remove duplicates
              .map((cage, index) => (
                <option key={index} value={cage}>
                  {cage}
                </option>
              ))}
          </select>
        </label>
      </div>

      {/* Button to generate report */}
      <button onClick={handleReportClick}>Generate Report</button>

      {/* Display the filtered dinosaurs based on selected cage */}
      {filteredDinosaurs.length > 0 && (
        <div>
          <h3>Dinosaurs in Cage {selectedCage}:</h3>
          <ul>
            {filteredDinosaurs.map((dino) => (
              <li key={dino._id}>
                {dino.dino_name} - {dino.diet} - {dino.creator}
              </li>
            ))}
          </ul>
        </div>
      )}
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

export default Reporting;
