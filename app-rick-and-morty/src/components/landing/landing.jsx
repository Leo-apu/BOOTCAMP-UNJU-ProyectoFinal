import Button from "@restart/ui/esm/Button";
import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./landing.css";

export default function Landing(props){


    useEffect(()=>{
        props.isHome(false);
    },[])
        return(
            <section className="landfo">
                <div className="gam-top"></div>
                <div className="contland">
                    <h1 className="rm mt-5">Rick and Morty</h1>
                    
                    <div className="botn mb-5">
                        <Link to="/about">
                            <Button className="botn1">ABOUT</Button>
                        </Link>
                        <Link to="/home">
                            <Button className="botn1" >HOME</Button>
                        </Link>
                    </div>
                </div>
                <div className="gam"></div>
            </section>
        );
} 