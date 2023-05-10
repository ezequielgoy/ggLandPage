import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import '../estilo.css';
function About() {
  return (
    <Container className="about-section">
      <h1>About Us</h1>
      <Row>
        <Col md={6}>
          <p>
            GymCoach is a fitness coaching service designed to help you reach
            your fitness goals. Our expert coaches will work with you to create
            a personalized fitness plan tailored to your needs and goals.
          </p>
          <p>
            Whether you're looking to lose weight, build muscle, or improve your
            overall fitness, our coaches have the knowledge and expertise to
            help you achieve your goals.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="/images/about-us.jpg"
            alt="About Us"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
