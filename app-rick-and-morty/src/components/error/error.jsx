import React from "react";
import { Container,Row ,Button} from "react-bootstrap";
import { Link } from "react-router-dom"; 
import "./error.css";

export default class Error extends React.Component{
    render(){
        return(
            <Row className="bg">
                <div className="gam-top"></div>
            <div class="space"></div>
            <div class="wrapper">
                <div class="img-wrapper">
                    <span>44</span>
                </div>
                <p>UNIVERSO DESCONOCIDO - Error de direccionamiento de pagina. <br/> Elige otro universo.</p>
                <div className="botn mb-5">
                        <Link to="/about">
                            <Button className="botn1">ABOUT</Button>
                        </Link>
                        <Link to="/home">
                            <Button className="botn1">HOME</Button>
                        </Link>
                    </div>
            </div>
            <div className="gam"></div>
            </Row>
        );
    }
}