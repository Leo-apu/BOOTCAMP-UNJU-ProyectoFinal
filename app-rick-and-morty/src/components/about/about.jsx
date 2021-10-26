import React, { useEffect } from "react";
import { useState } from "react";
import { Row,Col,Container,Button,Card } from "react-bootstrap";
import abf from "../about/about.module.css";

const About =(props)=> {

    useEffect(()=>{
        props.isHome(false);
    },[])
    return (
        
            <section className={abf.au}>
                <Container fluid>
                    <div className={abf.cardAbout}>
                    <Row className={abf.cont}>
                            <div className="col-md-4 p-1 d-flex">
                                <img src={"/img/CoMperfil.jpg"} width="500" className={abf.im}  alt="..."></img>
                            </div>
                            <Card className="col-md-8 " border="danger" style={{ color:"black" ,backgroundColor:"greenyellow"}}>
                                <Card.Header className="fw-bolder fs-5">CREADOR DE LA APP</Card.Header>
                                <Card.Body>
                                <Card.Title>ESTUDIANTE</Card.Title>
                                <Card.Subtitle>
                                    <p class="fw-bold text-dark">CRISTIAN ORLANDO MICHEL</p>
                                    <p class="fw-bold text-dark">Analista Prog. Universitario</p>
                                </Card.Subtitle>
                                <Card.Text>
                                    <small class="text-muted"> Contacto: cristianmichel33@gmail.com </small>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Row>  

                            <Row className={abf.cont}>
                            <div className="col-md-4 p-1 d-flex">
                                <img src="/img/LvCperfil.jpg" width="500" className={abf.im}  alt="..."></img>
                            </div>
                            <Card className="col-md-8" border="danger" style={{ color:"black" ,backgroundColor:"greenyellow"}}>
                                <Card.Header className="fw-bolder fs-5">CREADOR DE LA APP</Card.Header>
                                <Card.Body>
                                <Card.Title>ESTUDIANTE</Card.Title>
                                <Card.Subtitle>
                                    <p class="fw-bold text-dark">LEANDRO VICTORINO CRUZ </p>
                                    <p class="fw-bold text-dark">Analista Prog. Universitario</p>
                                </Card.Subtitle>
                                <Card.Text>
                                    <small class="text-muted"> Contacto: leovcruz0304@gmail.com </small>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Row> 

                    </div>
                            

                            

                </Container>
            </section>
    );
}

export default About ;
