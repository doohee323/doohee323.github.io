import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Dewey Hong</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/devops" 
              active={location.pathname === "/devops"}
            >
              DevOps
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/swe" 
              active={location.pathname === "/swe"}
            >
              SWE
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/resume" 
              active={location.pathname === "/resume"}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation; 