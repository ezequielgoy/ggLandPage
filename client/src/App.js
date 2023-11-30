import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap';
import Services from './pages/ServicesPage';
import Resultados from './pages/ResultsPage';
import Contact from './pages/ContactPage';
import LandPage from './pages/LandPage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faWhatsapp,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import FormCheckout from './pages/FormCheckout';

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Navbar
          variant="dark"
          expand="lg"
          className="navbar-header sticky black-marble-background"
        >
          <Container className="navbar-container">
            <Navbar.Brand as={Link} to="/">
              <img
                className="navbar-img"
                src={require('./assets/logo-nav.png')}
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="navbar-btn">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="navbar-btn">
                  Mi Historia
                </Nav.Link>
                <Nav.Link as={Link} to="/resultados" className="navbar-btn">
                  Resultados
                </Nav.Link>
                <Nav.Link as={Link} to="/services" className="navbar-btn">
                  Entrenemos
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Routes>
          <Route path="/about" element={<FormCheckout />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/services" element={<Services />} />
          <Route path="/" element={<LandPage />} />
        </Routes>
      </main>
      <footer className="black-marble-background">
        <Container className="footer ">
          <Row>
            <Col>
              <div className="img-footer"></div>
            </Col>
            <Col className="social-icons">
              <a
                href="https://www.instagram.com/your-instagram-account"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2xl" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=your-phone-number"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
              </a>
              <a
                href="https://twitter.com/your-twitter-account"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="2xl" />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </BrowserRouter>
  );
}

export default App;
