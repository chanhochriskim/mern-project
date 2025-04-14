import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Reporting() {
  const [dinosaurs, setDinosaurs] = useState([]);
  const [selectedCage, setSelectedCage] = useState('');
  const [filteredDinosaurs, setFilteredDinosaurs] = useState([]);

  useEffect(() => {
    axios
    .get('https://ivory-oarlock-456601-r6.ue.r.appspot.com/dinosaurs')
      .then((response) => {
        setDinosaurs(response.data);  // <-- storing dino data for dropdown.
      })
      .catch((error) => {
        console.error('Error fetching dinosaurs:', error);
      });
  }, []);

  // cage selection change part. 
  const handleCageChange = (e) => {
    setSelectedCage(e.target.value); // <-- updating with new cage value.
  };

  // report generation (fetch filtered dinosaurs based on selected cage)
  const handleReportClick = () => {
    if (!selectedCage) {
      alert('Please select a cage.');
      return;
    }

    // **sanitize the selectedCage input**
    const sanitizedCage = selectedCage.trim(); // remove leading/trailing spaces

    // ensuuring cage name is valid.
    if (!sanitizedCage || sanitizedCage.length < 1) {
      alert('Invalid cage name!');
      return;
    }

    // fetching the filtered dinosaurs based on the selected cage
    axios
      .get(`https://ivory-oarlock-456601-r6.ue.r.appspot.com/dinosaurs/report/${sanitizedCage}`)
      .then((response) => {
        setFilteredDinosaurs(response.data);  // <-- storing filtered data
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

      <div>
        <label>
          Select a Cage:
          <select value={selectedCage} onChange={handleCageChange}>
            <option value="">-- Select Cage --</option>
            {dinosaurs
              .map((dino) => dino.cage)
              .filter((value, index, self) => self.indexOf(value) === index) // duplicate removers (not sure if this is needed tbh)
              .map((cage, index) => (
                <option key={index} value={cage}>
                  {cage}
                </option>
              ))}
          </select>
        </label>
      </div>

      {/* button to generate new data */}
      <button onClick={handleReportClick}>Generate Report</button>

      {/* displaying the filtered dinosaurs within the cage */}
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
