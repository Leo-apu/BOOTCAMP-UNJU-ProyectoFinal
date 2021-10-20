import React from "react";
import { Container } from "react-bootstrap";
import "./error.css";

export default class Error extends React.Component{
    render(){
        return(
            <Container id="back">
            <div class="space"></div>
                <div class="wrapper">
                    <div class="img-wrapper">
                        <span>44</span>
                    </div>
                    <p>UNIVERSO DESCONOCIDO - Error de direccionamiento de pagina. <br/> Elige otro universo.</p>
                    <button type="button">HOME</button>
                    <button type="button">ABOUT</button>
                </div>
            </Container>
        );
    }
}