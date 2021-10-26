import React, { useEffect } from "react";
import { Container,Row ,Button} from "react-bootstrap";
import { Link } from "react-router-dom"; 
import "./error.css";

export default function Error (props){
    useEffect(()=>{
        props.isHome(false);
    },[])
    
        return(
            <Row className="bg">
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
            </Row>
        );
    
}