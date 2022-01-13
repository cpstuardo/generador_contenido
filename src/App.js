import "./App.css";
import { exportComponentAsPNG } from "react-component-export-image";
import ComponentToPrint from "./components/componentToPrint";
import React, { useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";

function App() {
  const componentRef = useRef();
  const pdfExportComponent = useRef(null);

  const exportComponentAsPDF = (event) => {
    pdfExportComponent.current.save();
  };

  return (
    <div className="App">
      <br />
      <div className="export-container">
        <PDFExport
          ref={pdfExportComponent}
          paperSize="auto"
          margin={40}
          fileName={"component_pdf"}
          author="Yachay"
        >
          <ComponentToPrint ref={componentRef} />
        </PDFExport>
      </div>
      <br />
      <button onClick={() => exportComponentAsPNG(componentRef)}>
        Exportar PNG
      </button>
      <button onClick={exportComponentAsPDF}>Exportar PDF</button>
    </div>
  );
}

export default App;
