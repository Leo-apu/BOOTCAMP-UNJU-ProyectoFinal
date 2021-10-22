import React, { useState , useEffect} from "react";
import {useParams} from 'react-router-dom';
import {Form,Row,Container,Card,ListGroup,ListGroupItem,Col} from 'react-bootstrap';
import crca from './card.module.css';

export default function Character (){

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


        return (    
            <section className={crca.fonca}>
            <div className={crca.gamca}></div>
            <Container >
                <Row className="mt-1">
                    <Col className="col-4 offset-4">
                        <Card className={crca.fnca} style={{ width: '20rem' }} >
                
                            <Card.Body>
                                <Card.Title className={crca.titulca}>{char.name}</Card.Title>
                                <Card.Img className={crca.fotca} variant="top" src={char.image}  />
                                <Card.Text className={crca.tex}>Estado: {char.status}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Genero: {char.gender}</ListGroupItem>
                                <ListGroupItem>Creado: {char.created}</ListGroupItem>
                                <ListGroupItem>Tipo: {char.type}</ListGroupItem>
                                <ListGroupItem>Origen: {char.origin && char.origin.name}</ListGroupItem>
                                <ListGroupItem>Localizacion: {char.location && char.location.name}</ListGroupItem>
                                
                            </ListGroup>
                        </Card>
                        
                    </Col>
                
                </Row>
                


           </Container>
           </section>
        )
}