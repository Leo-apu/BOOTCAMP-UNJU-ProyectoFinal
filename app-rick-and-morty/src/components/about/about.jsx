import React from "react";
import { useState } from "react";
import { Row,Col,Container,Button,Card } from "react-bootstrap";
import "../about/about.css";

const About =(props)=> {
    return (
        
            <section className="au">
                <Container className="d-block container-fluid">
                <Row className="wrapperr justify-content-center align-content-center">
                    <Col className="col my-5 d-flex">
                            <Row className="container align-content-center">
                            <div className="col-md-4 bg-info">
                                <img src="..." className="img-fluid rounded-start" alt="..."></img>
                            </div>
                            <Card className="col-md-8 rounded-end" border="danger" style={{ color:"black" ,backgroundColor:"greenyellow"}}>
                                <Card.Header>DESARROLLADOR</Card.Header>
                                <Card.Body>
                                <Card.Title>INFORMACION</Card.Title>
                                <Card.Text>
                                    <p class="fw-bold text-dark">CRISTIAN MICHEL - BOOTCAMP-REACT</p>
                                </Card.Text>
                                <Card.Text>
                                    <small class="text-muted"> Contacto: MIKE47K@gmail.com </small>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Row>  

                            <Row className="container align-content-center my-3">
                            <div className="col-md-4 bg-info">
                                <img src="..." className="img-fluid rounded-start" alt="..."></img>
                            </div>
                            <Card className="col-md-8 rounded-end" border="danger" style={{ color:"black" ,backgroundColor:"greenyellow"}}>
                                <Card.Header>DESARROLLADOR</Card.Header>
                                <Card.Body>
                                <Card.Title>INFORMACION</Card.Title>
                                <Card.Text>
                                    <p class="fw-bold text-dark">LEANDRO CRUZ - BOOTCAMP-REACT</p>
                                </Card.Text>
                                <Card.Text>
                                    <small class="text-muted"> Contacto: LEOCRUZ@gmail.com </small>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Row> 

                            
                    </Col>                            
                </Row>
                </Container>
            </section>
    );
}

export default About ;
