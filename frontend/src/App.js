import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DinosaurList from './DinosaurList';
import AddDinosaur from './AddDinosaur';  // Import the new component

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <h1 style={styles.header}>Jurassic Park Simulator</h1>
        {/* Navigation links */}
        <nav>
          <Link to="/" style={styles.navLink}>Dinosaur List</Link>
          <Link to="/add-dinosaur" style={styles.navLink}>Add Dinosaur</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<DinosaurList />} />
          <Route path="/add-dinosaur" element={<AddDinosaur />} />
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
    fontSize: '3rem',
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
