import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const AppNavbar = () => {
  return (
<Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">Users Profile</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
