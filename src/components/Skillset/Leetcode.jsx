import React from "react";
import ReactMarkdown from 'react-markdown'
import { Row } from "react-bootstrap";

const Leetcode = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="yellow"></strong> 
      </h1>
      <h1 className="yellow" style={{marginBottom : 50}}>Skills</h1> 
      <h3 className="yellow" style={{marginLeft : -130}}>01.</h3>    <h4 style={{marginTop : -37 , marginLeft : 70}}> Html & CSS </h4>
      <h3 className="yellow" style={{marginLeft : -130}}>02.</h3>    <h4 style={{marginTop : -37 , marginLeft : 70}}> Javascript </h4>
      <h3 className="yellow" style={{marginLeft : -130}}>03.</h3>    <h4 style={{marginTop : -37 , marginLeft : 70}}>  Bootstrap  </h4>
      <h3 className="yellow" style={{marginLeft : -130}}>04.</h3>    <h4 style={{marginTop : -37 , marginLeft : 70}}> React Web  </h4>
      <h3 className="yellow" style={{marginLeft : -130}}>05.</h3>    <h4 style={{marginTop : -37 , marginLeft : 70}}> Git & Github  </h4>
      <h3 className="yellow" style={{marginLeft : -130}}>06.</h3>    <h4 style={{marginTop : -37 , marginLeft : 88}}>   Figma Designs </h4>
      <h3 className="yellow" style={{marginLeft : -130}}>07.</h3>    <h4 style={{marginTop : -37 , marginLeft : 70}}>   Sketch  </h4>
      <h3 className="yellow" style={{marginLeft : -130}}>08.</h3>    <h4 style={{marginTop : -37 , marginLeft : 70}}>   SQL  </h4>
      <h3 className="yellow" style={{marginLeft : -130}}>09.</h3>    <h4 style={{marginTop : -37 , marginLeft : 70}}>   Firebase  </h4>
      <h3 className="yellow" style={{marginLeft : -130}}>10.</h3>    <h4 style={{marginTop : -37 , marginLeft : 70}}>   C++  </h4>
      <h2 className="yellow" style={{marginLeft : -130}}>11.</h2>    <h4 style={{marginTop : -38 , marginLeft : 130 , marginBottom : 50}}> React Native(Spl) </h4>
      <ReactMarkdown>
    
      </ReactMarkdown>
    </Row>
  );
}

export default Leetcode;
