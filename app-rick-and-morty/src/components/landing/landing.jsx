import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Row } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./landing.css";

export default function Landing(props){
        return(
            <section className="landfo">
                <div className="gam-top"></div>
                <div className="contland">
                    <h1 className="rm">Rick and Morty</h1>
                    <div className="d-flex text-black text-center ">
                        <h2>En este proyecto se nos asigno para consumir la api de <br/>
                        Rick and Morty, que es una.seria de.television de animacion <br/>
                        para adultos creada en 2013. La serie trata de las desventuras<br/> 
                        de un cientifico,Rick, y su nieto ,Morty, que pasan el tiempo entre<br/>
                         la.vida domestica y los viajes espaciales temporales e intergalacticos.</h2>
                            
                    </div>
                    <div className="botn mb-5">
                        <Link to="/about">
                            <Button className="botn1">ABOUT</Button>
                        </Link>
                        <Link to="/home">
                            <Button className="botn1" onClick={props.homeSearch()}>HOME</Button>
                        </Link>
                    </div>
                </div>
                <div className="gam"></div>
            </section>
        );
} 