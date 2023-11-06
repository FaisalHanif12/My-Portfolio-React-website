import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/about.png'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import Faisal4 from '../assets/projects/Faisal4.jpg'
const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home"  >  
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
             <img src={Faisal4}  style={{width: 200, height : 250, marginTop : -95, marginLeft : 30 , marginBottom : 70 , borderRadius : 40 ,}}/>
             
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Muhammad Faisal Hanif </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 , marginTop : 15 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home