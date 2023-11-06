import React, { useState, useEffect  } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../components/Resume.css"
import { AiOutlineDownload } from "react-icons/ai";

import Particle from '../components/Particle'
import pdf from "../assets/Resume/Faisal-Resume.pdf"
import Res from "../assets/Resume/Res.PNG"
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink = `https://app.luminpdf.com/viewer/65420cb0afc52b3dc5c8cbc2`


const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>

 
     <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
         
        </Row>

  
      </Container>

      <img
  src={Res}
  alt="Faisal"
  style={{
    marginTop: "0px",
    width: "100%",       // Initially, set the width to 100%
    maxWidth: "500px",   // Set the maximum width to 500px
    height: "auto",      // Maintain the aspect ratio
  }}
/>


    </div>
  )
}

export default Resume