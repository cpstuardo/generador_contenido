import "./App.css";
import ComponentToPrint from "./components/componentToPrint";
import React, { useCallback, useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { toPng } from "html-to-image";

function App() {
  const ref = useRef();
  const pdfExportComponent = useRef(null);

  const exportComponentAsPDF = (event) => {
    pdfExportComponent.current.save();
  };

  const exportComponentAsPNG = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    toPng(ref.current, {
      cacheBust: true,
      canvasWidth: 1080,
      canvasHeight: 1920,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <div className="App">
      <br />
      <div className="export-container">
        <PDFExport
          ref={pdfExportComponent}
          paperSize="auto"
          margin={30}
          fileName={"component_pdf"}
          author="Yachay"
        >
          <ComponentToPrint ref={ref} />
        </PDFExport>
      </div>
      <br />
      <button onClick={exportComponentAsPNG}>Exportar PNG</button>
      <button onClick={exportComponentAsPDF}>Exportar PDF</button>
    </div>
  );
}

export default App;
