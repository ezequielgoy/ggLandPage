import React from 'react'
import { Col, Button, Row, Container,  Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
export default function FormCheckout() {
    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_wi92w33', 'template_m6z696c', e.target, 'Y7dIVlbJIoz7x2WzL')
    }
  return (
    <Container>
      <Row className="">
        <Col md={8} lg={6} xs={12}>
          <div className=""></div>

              <div className="">
                <Form className="" onSubmit={sendEmail}>
                    <h1>Datos de Contacto</h1>
                <Form.Group className="mb-3" controlId="nombre" name='nombre'>
                    <Form.Label className="text-center">
                      Nombre
                    </Form.Label>
                    <Form.Control type="text" placeholder="Nombre" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="surname">
                    <Form.Label className="text-center">
                      Apellido
                    </Form.Label>
                    <Form.Control type="text" placeholder="Apellido" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="edad">
                    <Form.Label className="text-center">
                      Edad
                    </Form.Label>
                    <Form.Control type="number" placeholder="Edad" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="Sexo">
                    <Form.Label className="text-center">
                      Sexo
                    </Form.Label>
                    <Form.Control type="text" placeholder="Sexo" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="altura">
                    <Form.Label className="text-center">
                      Altura
                    </Form.Label>
                    <Form.Control type="text" placeholder="Altura" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="telefono">
                    <Form.Label className="text-center">
                      Telefono De Contacto
                    </Form.Label>
                    <Form.Control type="text" placeholder="Whatsapp(+54 11 154XXXXXX)" />
                  </Form.Group>

                <Form.Group className="mb-3" controlId="fechaNacimiento">
                    <Form.Label className="text-center">
                      Fecha Nacimiento
                    </Form.Label>
                    <Form.Control type="text" placeholder="Fecha Nacimiento(Dia/Mes/Año)" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Email
                    </Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="instagram">
                    <Form.Label className="text-center">
                      Instagram
                    </Form.Label>
                    <Form.Control type="text" placeholder="Usuario Instagram" />
                  </Form.Group>
                
                  <Form.Group className="mb-3" controlId="lugarRecidencia">
                    <Form.Label className="text-center">
                      Lugar de Residencia
                    </Form.Label>
                    <Form.Control type="text" placeholder="El lugar donde recide" />
                  </Form.Group>


                <h1> Datos Alumno </h1>

                <Form.Group className="mb-3" controlId="pesoActual">
                    <Form.Label className="text-center">
                      Peso Actual
                    </Form.Label>
                    <Form.Control type="text" placeholder="Peso actual en ayunas" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="ocupacion">
                    <Form.Label className="text-center">
                      Ocupacion
                    </Form.Label>
                    <Form.Control type="text" placeholder="Ocupacion" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="problemasSalud">
                    <Form.Label className="text-center">
                    ¿Problemas de salud o contraindicaciones de algun tipo que deba tener en cuenta?
                    </Form.Label>
                    <Form.Control type="text" placeholder="Escriba su respuesta aqui" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="objetivo">
                    <Form.Label className="text-center">
                      Describa cual es su objetivo de adquirir el plan
                    </Form.Label>
                    <Form.Control type="text" placeholder="Escriba su respuesta aqui" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="comidasDiarias">
                    <Form.Label className="text-center">
                    Describir un ejemplo de 1 día entero de las comidas que haces actualmente
                    </Form.Label>
                    <Form.Control type="text" placeholder="Escriba su respuesta aqui" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="comidasDiariasCant">
                    <Form.Label className="text-center">
                        ¿Cuantas comidas por dia soles hacer?
                    </Form.Label>
                    <Form.Control type="text" placeholder="Indique Cantidad de comidas Diarias" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="intoleranciaAlimenticia">
                    <Form.Label className="text-center">
                    ¿Tenes intolerancia a algún alimento en particular?
                    </Form.Label>
                    <Form.Control type="text" placeholder="Escriba su respuesta aqui" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="entrenamientoActual">
                    <Form.Label className="text-center">
                        ¿Estas entrenando actualmente?
                    </Form.Label>
                    <Form.Control type="text" placeholder="Escriba su respuesta aqui" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="nivelEntrenamientoActual">
                    <Form.Label className="text-center">
                        ¿En que nivel de entrenamiento crees que estas actualmente?
                    </Form.Label>
                    <Form.Control type="text" placeholder="(Novato,Intermedio,Experto)" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="entrenamientoActualHorario">
                    <Form.Label className="text-center">
                        ¿En que horario entrenas habitualmente?
                    </Form.Label>
                    <Form.Control type="text" placeholder="Escriba su respuesta aqui" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="entrenamientoActual">
                    <Form.Label className="text-center">
                        ¿Estas entrenando actualmente?
                    </Form.Label>
                    <Form.Control type="text" placeholder="Escriba su respuesta aqui" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="suplementos">
                    <Form.Label className="text-center">
                    ¿Utilizaste suplementos de algún tipo? ¿Cuáles? ¿estas utilizando alguno ahora?
                    </Form.Label>
                    <Form.Control type="text" placeholder="Escriba su respuesta aqui" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="onlineCoach">
                    <Form.Label className="text-center">
                    ¿Has tenido previamente un entrenador presencial/online? En caso afirmativo,
                    ¿por qué lo dejaste?
                    </Form.Label>
                    <Form.Control type="text" placeholder="Escriba su respuesta aqui" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="infoAdiccional">
                    <Form.Label className="text-center">
                    Cualquier dato adicional que deba tener en cuenta y no estaba en este cuestionario
                    </Form.Label>
                    <Form.Control type="text" placeholder="Escriba su respuesta aqui" />
                  </Form.Group>
                  <div className="">
                    <Button variant="primary" type="submit">
                      Enviar Formulario
                    </Button>
                </div>

                </Form>
              </div>

        </Col>
      </Row>
    </Container>

  )
}
