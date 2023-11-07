import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ color: "red" }}>
        <h1>Hello word</h1>
      </div>
      <div style={{ color: "green" }}>
        <h1>Hello word</h1>
      </div>
      <div style={{ color: "yellow" }}>
        <h1>Hello word</h1>
      </div>
    </>
  );
}

export default App;
