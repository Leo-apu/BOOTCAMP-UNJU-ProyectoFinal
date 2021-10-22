import React from "react";
import { useState } from "react";
import { Form,Row,Col,Container,Button} from "react-bootstrap";
import "../contact/contact.css";

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
const Contact =(props)=> {
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
        <body className="co " >
            <Container className="container-fluid">
                <Row className="justify-content-center align-content-center">
                    <Col className="col-md-5 my-5 ">
                        <Col className="bg-warning bg-opacity-50 rounded-3">
                        <div class="container mt-3 ">
                        <Form onSubmit={(e) => onSubmitForm(e)} className="py-4">
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
            <div className="gam"></div>
        </body>
        
    );
}

export default Contact ;