import React from 'react';
import { Container, Navbar, Nav, Button, Card } from 'react-bootstrap';
import '../estilo.css';

function landPage() {
  return (
    <div>
      <section className="hero">
        <Container>
          <h1>Get Fit with an Online Gym Coach</h1>
          <p>
            Work with a professional trainer from the comfort of your own home.
          </p>
          <div className="d-grid gap-2 col-lg-6 mx-auto">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </div>
        </Container>
      </section>
      <section className="services">
        <Container>
          <h2>Our Services</h2>
          <div className="row">
            <div className="col-lg-4">
              <Card>
                <Card.Body>
                  <Card.Title>Personal Training</Card.Title>
                  <Card.Text>
                    Get personalized training sessions tailored to your specific
                    fitness goals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card>
                <Card.Body>
                  <Card.Title>Nutrition Coaching</Card.Title>
                  <Card.Text>
                    Learn how to eat for optimal health and fuel your workouts.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card>
                <Card.Body>
                  <Card.Title>Group Fitness</Card.Title>
                  <Card.Text>
                    Join live virtual fitness classes with other like-minded
                    individuals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </section>
      <section className="about">
        <Container>
          <h2>About Us</h2>
          <p>
            We are a team of experienced fitness professionals dedicated to
            helping you achieve your goals.
          </p>
        </Container>
      </section>
      <section className="contact">
        <Container>
          <h2>Contact Us</h2>
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                  ></textarea>
                </div>
                <div className="d-grid gap-2 col-lg-6 mx-auto">
                  <Button variant="primary" size="lg" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default landPage;
