import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Somto");
  const [age, setAge] = useState(23);

  return (
    <div className="App">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      {/* Display Data */}
      <div className="input-display">
        <p>Display Name: {name} </p>
        <p>Display Age: {age}</p>
      </div>

      {/* Collect User Inputs */}
      <div className="inputs">
        {/* Input name */}
        <div className="field">
          <label className="label">Name: </label>
          <input
            className="input"
            type="text"
            placeholder="William"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Input age */}
        <div className="field">
          <label className="label">Age: </label>
          <input
            className="input"
            type="number"
            placeholder="38"
            value={age}
            onChange={(e) => setAge(+e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
