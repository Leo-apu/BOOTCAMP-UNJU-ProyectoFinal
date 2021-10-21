import React, { useState , useEffect} from "react";
import {useParams} from 'react-router-dom';
import {Form,Row,Container,Card,ListGroup,ListGroupItem,Col} from 'react-bootstrap';


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
            
            <Container>
               
        


                <Row className="mt-4">
                        <Col className="col-4 offset-4">
                        <Card style={{ width: '18rem' }} >
                
                <Card.Body>
                    <Card.Title className="text-center">{char.name}</Card.Title>
                    <Card.Img variant="top" src={char.image}  />
                    <Card.Text>Estado: {char.status}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Genero: {char.gender}</ListGroupItem>
                    <ListGroupItem>Creado: {char.created}</ListGroupItem>
                    

                </ListGroup>
                </Card>
                        </Col>
                
                </Row>
                


           </Container>
        )
}