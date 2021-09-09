import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export const Menu = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="fixed-top"
    >
      <Container>
        <Navbar.Brand href="/" className="logo">
          <span>C</span>opy<span>C</span>ode
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/bgcolor">BG-Color</Nav.Link>
            <Nav.Link to="/boxshadow">Box-Shadow</Nav.Link>
            <Nav.Link to="/contactus">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
