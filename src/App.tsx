import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

import LandingPage from "./content/LandingPage";
import AboutPage from "./content/AboutPage";
import ServicePage from "./content/ServicePage";

import "./App.css"
import "./components/service-tile.css"

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">Arbor Roofing, LLC.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="About Us" id="nav-dropdown-about">
              <NavDropdown.Item href="#about/us">
                Why Choose Us
              </NavDropdown.Item>
              <NavDropdown.Item href="#about/story">Our Story</NavDropdown.Item>
              <NavDropdown.Item href="#about/reviews">
                Our Reviews
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="nav-dropdown-services">
              <NavDropdown.Item href="#services/replacement">
                Roof Replacement
              </NavDropdown.Item>
              <NavDropdown.Item href="#services/repair">
                Affordable Roof Repair
              </NavDropdown.Item>
              <NavDropdown.Item href="#services/waterDamage">
                Wood Rot from Water
              </NavDropdown.Item>
              <NavDropdown.Item href="#services/painting">
                Exterior Painting
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
          <Route path="/about/:aboutId" render={(props) => <AboutPage aboutId={props.match.params.aboutId} />} />
          <Route path="/services/:serviceId" render={(props) => <ServicePage serviceId={props.match.params.serviceId} />} />
          <Route path="/" component={LandingPage} />
      </Switch>





    </React.Fragment>
  );
};

export default App;
