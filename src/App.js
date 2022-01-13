import "./App.css";
import { exportComponentAsPNG } from "react-component-export-image";
import ComponentToPrint from "./components/componentToPrint";
import React, { useRef } from "react";

function App() {
  const componentRef = useRef();

  return (
    <div className="App">
      <div className="export-container">
        <ComponentToPrint ref={componentRef} />
      </div>
      <br />
      <button onClick={() => exportComponentAsPNG(componentRef)}>
        Exportar
      </button>
    </div>
  );
}

export default App;
