import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button, Card } from 'react-bootstrap';
import Home from './pages/landPage';
import Services from './pages/servicesPage';
import About from './pages/aboutPage';
import Contact from './pages/contactPage';
import ImageLogo from './images/26.png';

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar-header">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={ImageLogo} className="navbar-img" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/services">
                  Services
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
