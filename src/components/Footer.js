import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <h5>Dewey Hong</h5>
            <p className="mb-1 text-white">Software Engineer & DevOps Specialist</p>
            <p className="text-muted">© {new Date().getFullYear()} All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <h5>Contact</h5>
            <p className="mb-1">
              <span className="text-white">doohee323@gmail.com</span>
              <span className="ms-3">
                <a href="https://github.com/doogee323" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i> GitHub
                </a>
                <a href="https://linkedin.com/in/deweyhong" className="text-white" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i> LinkedIn
                </a>
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer; 