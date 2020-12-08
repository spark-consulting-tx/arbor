import React from "react";
import {
  Carousel,
  Col,
  Container,
  Jumbotron,
  Row,
} from "react-bootstrap";

import ServiceTile from "../../components/ServiceTile";


const LandingPage = () => {
  return (
    <Container className="p-3">
    <Jumbotron>
      <h1 className="header" style={{marginBottom: "20px"}}>Arbor Roofing in Austin, Texas.</h1>
      <h4>
        Your reliable source for roof installation and repairs, wood rot repair, and
        exterior painting. 
      </h4>
      <h4>Phone: <a href="tel:5127500133">(512)750-0133</a></h4>
      <h4>Email: <a href="mailto:arborroofingatx@gmail.com">arborroofingatx@gmail.com</a></h4>
    </Jumbotron>
    <h2>Our Services</h2>

    <Container>
      <div style={{marginBottom: "20px"}}>

      <Row>
        <Col lg={3} sm={6}><ServiceTile serviceId="replacement" /></Col>
        <Col lg={3} sm={6}><ServiceTile serviceId="repair" /></Col>
        <Col lg={3} sm={6}><ServiceTile serviceId="waterDamage" /></Col>
        <Col lg={3} sm={6}><ServiceTile serviceId="painting" /></Col>
      </Row>
      </div>
    </Container>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="static/images/roof01.jpg"
          alt="Roof Work"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="static/images/roof04.jpg"
          alt="Roof Work"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="static/images/roof09.png"
          alt="Roof Work"
        />
      </Carousel.Item>
    </Carousel>
  </Container>

  );
};
export default LandingPage;
