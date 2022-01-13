import React from "react";
import "../App.css";

const ComponentToPrint = React.forwardRef((props, ref) => (
  <header className="App-header" ref={ref}>
    <h1>Hola</h1>
  </header>
));

export default ComponentToPrint;
