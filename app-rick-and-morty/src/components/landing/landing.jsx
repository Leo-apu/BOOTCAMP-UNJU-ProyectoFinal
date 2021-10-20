import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Row } from "react-bootstrap";
import "./landing.css";

export default class Landing extends React.Component{
    render(){
        return(
           <Container fluid>
               <Row className="d-flex text-white">
                   <h2>Esta pagina web fue diseñana con el objetivo<br/>
                       de mostrar atraves una aplicacion creada en <br/>
                       React que no permite mostar los personaje de<br/>
                       la Seria Rick and Morty , Buscando por nombre<br/>
                       y tambien filtrando a eleccion los tipos de <br/>
                       Personajes que existen en la serie.</h2>
               </Row>
               <Row className="d-flex align-content-around">
                    <Button>ABOUT</Button>
                    <Button>HOME</Button>
                    <Button>CONTACT</Button>
               </Row>
           </Container>
        );
    }
} 