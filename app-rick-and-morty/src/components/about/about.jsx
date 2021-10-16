import React from "react";
import { useState } from "react";
import { Form,Row,Col,Container,Button,Card } from "react-bootstrap";
import "../about/about.css";

export function validation (input) {
    let errors = {}
    if(!input.email){
        errors.email = "Email is required"
    } else if(!/\S+@\S+\.\S+/.test(input.email)){
        errors.email = "Email must be a email"
    }
    if(!input.asunto){
        errors.asunto = "Asunto is required"
    } else if(Object.keys(input.asunto).length<10){
        errors.asunto = "Asunto debe escribir mas de 10 caracteres"
    }
    if(!input.mensaje){
        errors.mensaje = "Mensaje is required"
    } else if(Object.keys(input.mensaje).length>256){
        errors.mensaje = "debe escribir menos de 256 caracteres"
    }
    return errors;
}
const About =(props)=> {
    const [state, setState] = useState({
        email: '',
        asunto: '',
        mensaje:''
    });

    const [fails, setFails] = useState({
        email: "",
        asunto: "",
        mensaje:""
    });

    function onSubmitForm(e){
            e.preventDefault();
            alert(`el correo es ${state.email} y el asunto es ${state.asunto}`)
    }

    function onHandleChange(e){
            setState({
                ...state,
                [e.target.name]: e.target.value
            })
            setFails(
                validation({
                    ...state, 
                    [e.target.name]: e.target.value
                    })
                )
}
    return (
        <body className="au vh-100 " >
            <Container >
                <Row className="vh-100 justify-content-center align-content-center">
                    <Col className="col-md-7 my-5 ">
                    
                        
                            <Row className="container align-content-center">
                            <div className="col-md-4 bg-info">
                                <img src="..." className="img-fluid rounded-start" alt="..."></img>
                            </div>
                            <Card className="col-md-8 rounded-end" border="danger" style={{ color:"black" ,backgroundColor:"greenyellow"}}>
                                <Card.Header>DESARROLLADOR</Card.Header>
                                <Card.Body>
                                <Card.Title>INFORMACION</Card.Title>
                                <Card.Text>
                                    <p class="fw-bold text-dark">CRISTIAN MICHEL - BOOTCAMP-REACT</p>
                                </Card.Text>
                                <Card.Text>
                                    <small class="text-muted"> Contacto: MIKE47K@gmail.com </small>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Row>  

                            <Row className="container align-content-center my-3">
                            <div className="col-md-4 bg-info">
                                <img src="..." className="img-fluid rounded-start" alt="..."></img>
                            </div>
                            <Card className="col-md-8 rounded-end" border="danger" style={{ color:"black" ,backgroundColor:"greenyellow"}}>
                                <Card.Header>DESARROLLADOR</Card.Header>
                                <Card.Body>
                                <Card.Title>INFORMACION</Card.Title>
                                <Card.Text>
                                    <p class="fw-bold text-dark">LEANDRO CRUZ - BOOTCAMP-REACT</p>
                                </Card.Text>
                                <Card.Text>
                                    <small class="text-muted"> Contacto: LEOCRUZ@gmail.com </small>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Row> 
                    </Col>
                    
                    <Col className="col-md-5 my-5 ">
                        
                        <Col className="bg-warning bg-opacity-50 rounded-3">
                        <div class="container mt-3 ">
                        <Form onSubmit={(e) => onSubmitForm(e)} >
                            <h5 className="text-center text-light">FORMULARIO DE CONTACTO</h5>
                            <div className="d-grid">
                                <label class="col-sm-2 col-form-label text-light "> EMAIL </label>
                                <input
                                    type="text"
                                    class="form-control p-3"
                                    name='email'
                                    placeholder="Ingrese su Email : aaaa@gmail.com"
                                    value={state.email}
                                    onChange={(e) => onHandleChange(e)}
                                /> 
                                {fails.email ?
                                    <div class="alert alert-danger" role="alert">
                                    <p style={{color: 'red'}}> {fails.email}</p> 
                                    </div>
                                    : <p></p>
                                }
                            </div> 
                            <div>
                                <label class="col-sm-2 col-form-label text-light "> ASUNTO </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name='asunto'
                                    placeholder="Ingrese Asunto : minimo 10 caracteres"
                                    value={state.asunto}
                                    onChange={(e) => onHandleChange(e)}
                                /> 
                                {fails.asunto && 
                                <div class="alert alert-danger" role="alert">
                                <p style={{color: 'red'}}> {fails.asunto} </p>
                                </div>
                                }
                            </div> 
                            <div>
                                <label class="col-sm-2 col-form-label mt-2 text-light "> MENSAJE </label>
                                <textarea
                                    type="text"
                                    class="form-control p-3 mb-2"
                                    name='mensaje'
                                    placeholder="Ingrese su Mensaje : Maximo de 256 palabras"
                                    value={state.mensaje}
                                    onChange={(e) => onHandleChange(e)}
                                /> 
                                {fails.mensaje && 
                                <div class="alert alert-danger" role="alert">
                                <p style={{color: 'red'}}> {fails.mensaje} </p>
                                </div>
                                }
                            </div>
                            <div className="d-grid">
                                <Button  type="submit" className="btn btn-danger" disabled={ fails.email || fails.asunto|| fails.mensaje || state.email === "" || state.asunto === "" || state.mensaje === ""  ? true : false  }>
                                Enviar
                                </Button>
                            </div>
                        </Form>     
                            </div>
                            </Col>
                    </Col>
                </Row>
            </Container>
        </body>
        
    );
}

export default About ;
