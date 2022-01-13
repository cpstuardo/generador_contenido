import React from "react";
import "../App.css";
import logoYachay from "../yachay_logo.png";
import PiePlot from "./piePlot";
import dataPiePlot from "../data/dataPiePlot";

const ComponentToPrint = React.forwardRef((props, ref) => (
  <header className="App-header" ref={ref}>
    <h1>Título</h1>
    <PiePlot data={dataPiePlot} />
    <br />
    <img src={logoYachay} style={{ height: 40 }} alt="logo yachay" />
  </header>
));

export default ComponentToPrint;
