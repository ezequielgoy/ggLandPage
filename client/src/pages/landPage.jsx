import React from 'react';
import {
  Container,
  Button,
  Card,
  Row,
  Col,
  Carousel,
  Form,
} from 'react-bootstrap';

import cambios1 from '../assets/cambios/cambio1.png';
import cambios2 from '../assets/cambios/cambio2.png';
import cambios3 from '../assets/cambios/cambio3.png';
import cambios4 from '../assets/cambios/cambio4.png';

import '../estilo.css';
import EntrenemosBtn from '../component/EntrenemosBtn';

function LandPage() {
  
  function handleSubmitNewsLetter() {}
  const handleClick = () => {

  }
  return (
    <div>
      <section className="hero jumbotron-bg pt-5">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h1 className="jumbotron-title">
                get fit with an online gym coAch
              </h1>
              <p className="jumbotron-txt">
                Work with a professional trainer from the comfort of your own
                home.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xl={2}></Col>
            <Col xl={3}>
              <Button className="hero-btn">
                <div className="hero-btn-txt">Get Started</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  ></path>
                </svg>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="banner">
        <Container>
          <Row>
            <Col>
              <div className="ggbanner"></div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="history ">
        <Container className="history-bg-lp">
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </section>

      <section className='bannerEntrenemos' >
        <Container >
          <Row>
            <Col>
            <h3 className='txtBannerEntrenemos'>"No importa la genetica que tengas, no importa si intentaste antes y fallaste, no importa si alguna vez te dijeron que no podiasm no importa de donde venis sino a donde vas. Tu pasado no define tu destino, tu mentalidad si."</h3>
            </Col>

          </Row>
          <Row>
            <EntrenemosBtn/>
          </Row>
        </Container>
      </section>

      <section className="carousel black-marble-background">
        <Container className="carousel-container">
          <Row>
            <Carousel className="carousel-main">
              <Carousel.Item>
                <div className="carousel-slide">
                  <img src={cambios1} alt="cambios 1" />
                  <img src={cambios2} alt="cambios 2" />

                  <img src={cambios3} alt="Cambios 3" />
                  <img src={cambios4} alt="Cambios 4" />
                </div>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
      <section className="services black-marble-background">
        <Container>
          <Row>
            <Col md={6}>
              <Card className="service-card">
                <Card.Body>
                  <Card.Title>Personal Training</Card.Title>
                  <Card.Text>
                    Get personalized training sessions tailored to your specific
                    fitness goals.
                  </Card.Text>
                  <Button className="services-btn" onClick={handleClick}>
                    <div className="service-btn-txt"> Buy Now</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      ></path>
                    </svg>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="service-card">
                <Card.Body>
                  <Card.Title>Nutrition Coaching</Card.Title>
                  <Card.Text>
                    Learn how to eat for optimal health and fuel your workouts.
                  </Card.Text>
                  <Button className="services-btn">
                    <div className="service-btn-txt"> Buy Now</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      ></path>
                    </svg>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            </Row>
            <Row>
            <Col md={6}>
              <Card className="service-card">
                <Card.Body>
                  <Card.Title>Group Fitness</Card.Title>
                  <Card.Text>
                    Join live virtual fitness classes with other like-minded
                    individuals.
                  </Card.Text>
                  <Button className="services-btn">
                    <div className="service-btn-txt"> Buy Now</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      ></path>
                    </svg>
                  </Button>
                </Card.Body>
                
              </Card>
            </Col>
            <Col md={6}>
              <Card className="service-card">
                <Card.Body>
                  <Card.Title>Group Fitness</Card.Title>
                  <Card.Text>
                    Join live virtual fitness classes with other like-minded
                    individuals.
                  </Card.Text>
                  <Button className="services-btn">
                    <div className="service-btn-txt"> Buy Now</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      ></path>
                    </svg>
                  </Button>
                </Card.Body>
                
              </Card>
            </Col>
          </Row>
        </Container>
      </section>


      <section className="newsletter">
        <Container>
          <Row>
            <Form className="newsletter-form">
              <Row>
                <Col xl={8} md={6}></Col>
                <Col md={6} xl={2}>
                  <Form.Control
                    className="newsletter-control newsletter-input"
                    type="text"
                    placeholder="Nombre"
                  />
                </Col>
                <Col xl={8} md={6}></Col>
                <Col md={6} xl={2}>
                  <Form.Control
                    className="newsletter-control"
                    type="email"
                    placeholder="Email@ejemplo.com"
                  />
                </Col>
              </Row>
              <Row>
                <Col xl={8} md={6}></Col>
                <Col xl={2} md={6}>
                  <Button
                    type="submit"
                    onClick={handleSubmitNewsLetter}
                    className="newsletter-btn"
                  >
                    Subscribirme
                  </Button>
                </Col>
              </Row>
            </Form>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default LandPage;
