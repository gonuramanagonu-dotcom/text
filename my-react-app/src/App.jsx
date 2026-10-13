import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Button Clicked Successfully!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Button Click Event</h1>

      <button onClick={handleClick}>
        Click Me
      </button>

      <h2>{message}</h2>
    </div>
  );
}

export default App;