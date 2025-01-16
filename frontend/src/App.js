import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch data from the backend
    fetch("http://localhost:3001")
      .then((response) => response.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div>
      <h1>Hello World from React!</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
