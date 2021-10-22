import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Row } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./landing.css";

export default class Landing extends React.Component{
    render(){
        return(
            <section className="landfo">
                <div className="gam-top"></div>
                <div className="contland">
                    <h1 className="rm">Rick and Morty</h1>
                    <div className="d-flex text-black text-center ">
                        <h2>Esta pagina web fue diseñada con el objetivo<br/>
                            de mostrar atraves una aplicacion creada en <br/>
                            React,  los personaje de la Sere Rick and Morty<br/>
                            Buscando por nombre y tambien filtrando a eleccion<br/>
                                los tipos de Personajes que existen en la serie.</h2>
                            
                    </div>
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
            </section>
        );
    }
} 