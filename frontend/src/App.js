// Role in CRUD: Routes the user to different views within CRUD operations. 

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// importing the features im 6 feet from the from the edge and im livingggggg HOLD ME DOWN
import DinosaurList from './DinosaurList';
import AddDinosaur from './AddDinosaur'; 
import UpdateDinosaur from './UpdateDinosaur';  
import Reporting from './Reporting';  

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <h1 style={styles.header}>Jurassic Park Simulator</h1>
        <Routes>
          <Route exact path="/" element={<DinosaurList />} />
          <Route path="/add-dinosaur" element={<AddDinosaur />} />
          <Route path="/update-dinosaur" element={<UpdateDinosaur />} />
          <Route path="/dinosaur-report" element={<Reporting />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: '4rem',
    marginBottom: '20px',
  },
  navLink: {
    margin: '0 15px',
    fontSize: '1.2rem',
    textDecoration: 'none',
    color: 'black',
  },
};

export default App;
