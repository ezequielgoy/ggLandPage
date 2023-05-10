import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import React from 'react';
import '../estilo.css';

function Contact() {
  return (
    <Container className="contact-section">
      <h1>Contact Us</h1>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <div className="contact-info">
            <p>
              <i className="fa fa-map-marker"></i> 123 Main Street, Anytown USA
            </p>
            <p>
              <i className="fa fa-phone"></i> (123) 456-7890
            </p>
            <p>
              <i className="fa fa-envelope"></i> info@gymcoach.com
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
