import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="content d-flex">
        <Weather />
        <small>
          <a
            href="https://github.com/SomiJo/weather-react.git"
            target="_blank"
            rel="noreferrer">
            Open_source code
          </a>{" "}
          by Somaye Jodeir
        </small>
      </div>
    </div>
  );
}

export default App;
