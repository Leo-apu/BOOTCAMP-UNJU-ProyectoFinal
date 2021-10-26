import React, { useState , useEffect} from "react";
import {useParams} from 'react-router-dom';
import {Form,Row,Container,Card,ListGroup,ListGroupItem,Col} from 'react-bootstrap';
import crca from './card.module.css';
import {Link} from "react-router-dom";

export default function Character (props){
    
    const parametro = useParams();
    const [char,setChar] = useState({});
    const [e,setE] = useState(false);
    useEffect(() =>{
        console.log(typeof parametro.id);
        if (typeof parametro.id === "string") {
        

        fetch("https://rickandmortyapi.com/api/character/" + parseInt(parametro.id))
            .then((response) => response.json())
            .then((response) => {setChar(response)
                console.log(response)})
            
            
        }
        console.log(char);
    },[parametro])

    useEffect(()=>{
        props.isHome(false);
    },[])
    


        return (    
            <section className={crca.fonca}>
            <div className={crca.gamca}></div>
            <Container className="" >
                <Row className="">
                    <Container className="">
                        <Card className={crca.fnca} >
                
                            <Card.Body>
                                <Card.Title className={crca.titulca}>{char.name}</Card.Title>
                                <Card.Img className={crca.fotca} variant="top" src={char.image}  />
                                <Card.Text className={crca.tex}>Estado: {char.status}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className={crca.lisg}>Genero: {char.gender}</ListGroupItem>
                                <ListGroupItem className={crca.lisg}>Creado: {char.created}</ListGroupItem>
                                <ListGroupItem className={crca.lisg}>Tipo: {char.type}</ListGroupItem>
                                <ListGroupItem className={crca.lisg}>Origen: {char.origin && char.origin.name}</ListGroupItem>
                                <ListGroupItem className={crca.lisg}>Localizacion: {char.location && char.location.name}</ListGroupItem>
                                
                            </ListGroup>
                        </Card>
                        <div className={crca.bu}>
                            <Link to="/home">
                                <button className={crca.bu1}>Return to home</button>
                            </Link>
                        </div>
                    </Container>
                
                </Row>
           </Container>
           </section>
        )
}