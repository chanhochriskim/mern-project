import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Jurassic Park Simulator</h1>
      <ul style={styles.dinosaurList}>
        <li>T-Rex - carnivore - Dr. John Hammond - Cage 1</li>
        <li>Spinosaurus - carnivore - Dr. Alan Grant - Cage 2</li>
        <li>Velociraptor - carnivore - Dr. Henry Wu - Cage 3</li>
        <li>Brachiosaurus - herbivore - Dr. Ellie Sattler - Cage 4</li>
        <li>Stegosaurus - herbivore - Dr. Ian Malcolm - Cage 5</li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',  // full screen height
    textAlign: 'center',
    backgroundColor: '#f0f0f0', // optional styling
  },
  header: {
    fontSize: '3rem',  // large header
    marginBottom: '20px',
  },
  dinosaurList: {
    listStyleType: 'none',  // remove bullet points
    padding: 0,
    fontSize: '1.2rem',
  },
};

export default App;
