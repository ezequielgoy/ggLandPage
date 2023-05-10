import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../estilo.css';

function Services() {
  return (
    <Container className="services-section">
      <h1>Our Services</h1>
      <Row>
        <Col md={4}>
          <div className="service">
            <i className="fa fa-user fa-5x"></i>
            <h2>Personal Training</h2>
            <p>
              Our expert trainers will work with you one-on-one to create a
              personalized training plan tailored to your needs and goals.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className="service">
            <i className="fa fa-users fa-5x"></i>
            <h2>Group Training</h2>
            <p>
              Our group training sessions are a fun and effective way to get in
              shape. Join a group of like-minded individuals and work towards
              your fitness goals together.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className="service">
            <i className="fa fa-calendar fa-5x"></i>
            <h2>Event Training</h2>
            <p>
              We offer specialized training programs for events such as
              marathons and triathlons. Our expert coaches will help you prepare
              physically and mentally for your next big event.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
