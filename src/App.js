import "./App.css";
import ComponentToPrint from "./components/componentToPrint";
import React, { useRef, useState } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { toPng } from "html-to-image";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Container, Row, Col } from "reactstrap";

function App() {
  const [fileName, setFileName] = useState("post");
  const pngExportComponent = useRef();
  const pdfExportComponent = useRef(null);

  const exportComponentAsPDF = (e) => {
    pdfExportComponent.current.save();
  };

  const exportComponentAsPNG = () => {
    if (pngExportComponent.current === null) {
      return;
    }
    toPng(pngExportComponent.current, {
      cacheBust: true,
      canvasWidth: 1080,
      canvasHeight: 1920,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = fileName;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Container className="app-container">
        <Row
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Col className="col-exportable">
            <PDFExport
              ref={pdfExportComponent}
              paperSize="auto"
              margin={30}
              fileName={fileName}
              author="Yachay"
            >
              <ComponentToPrint ref={pngExportComponent} />
            </PDFExport>
          </Col>
          <Col className="col-options">
            <TextField
              id="outlined-search"
              label="Nombre del archivo"
              size="small"
              value={fileName}
              onChange={(e) => {
                setFileName(e.target.value);
              }}
            />
            <br />
            <br />
            <Button
              onClick={exportComponentAsPNG}
              style={{ color: "white", backgroundColor: "#CDCDCD", margin: 2 }}
            >
              Exportar PNG
            </Button>
            <Button
              onClick={exportComponentAsPDF}
              style={{ color: "white", backgroundColor: "#CDCDCD", margin: 2 }}
            >
              Exportar PDF
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
