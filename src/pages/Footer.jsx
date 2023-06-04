import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white footer">
      <Container>
        <Row>
          <Col>
            <p>Email: jatin2236745@gmail.com</p>
          </Col>
          <Col>
            <p>Created By Jatin</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
