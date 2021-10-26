import React, { useEffect } from "react";
import { useState } from "react";
import { Form,Row,Col,Container,Button} from "react-bootstrap";
import Cont from "../contact/contact.module.css";
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';
import Swal from 'sweetalert2-react';

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
    /*const history = useHistory();*/

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

    useEffect(()=>{
        props.isHome(false);
    },[])
    

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
/** 
    const vent1 = () => {
        Swal.fire({
            title: "Send this Message?",
            confirButtonColor: "#64C132",
            cancelButtonColor: "#ec1d24",
            cancelButtonText: 'No',
            showCancelButton: true,
            confirmButtonText:"Yes",
        }).then((result)=> {
            if (result.isConfirmed) {
                Swal.fire({
                    position:"top",
                    icon: "succes",
                    title: "Your message has been sent successfully",
                    showConfirmButton: false,
                    timer: 2000,
                });
                setTimeout(()=> {
                    history.push('/home');
                },1400);
            }
        });
    };
        const vent2 = () => {
        Swal.fire({
            title: "Exit from the contact us?",
            confirButtonColor: "#64C132",
            cancelButtonColor: "#ec1d24",
            cancelButtonText: 'No',
            showCancelButton: true,
            confirmButtonText:"Yes",
        }).then((result)=> {
            if (result.isConfirmed) {
                Swal.fire({
                    position:"top",
                    icon: "error",
                    title: "Your message was canceled",
                    showConfirmButton: false,
                    timer: 2000,
                });
                setTimeout(()=> {
                    history.push('/home');
                },1400);
            }
        });
    }; **/
    return (
        <section className={Cont.co} >
            <Container className="">
                <Row className="">
                    <Col className="">
                        <Col className={Cont.ab}>
                            <div class="container mt-5 ">
                                <Form className={Cont.fnco}>
                                    <h5 className="text-center text-black fs-1">FORMULARIO DE CONTACTO</h5>
                                    <div >
                                        <label class="col-sm-2 col-form-label text-black fs-2"> EMAIL </label>
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
                                        <label class="col-sm-2 col-form-label text-black fs-3"> ASUNTO </label>
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
                                        <label class="col-sm-2 col-form-label mt-2 text-black fs-3"> MENSAJE </label>
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
                                    <div className="d-flex justify-content-around mt-3">
                                        <Button  type="submit"  className={Cont.btn1} 
                                        disabled={ fails.email || fails.asunto|| fails.mensaje || 
                                        state.email === "" || state.asunto === "" || state.mensaje === ""  ? true : false  }>
                                        <Link className={Cont.ju} to="/home" >Enviar</Link>
                                        </Button>
                                        <Button  type="submit"  className={Cont.btn} >
                                        <Link className={Cont.ju} to="/home" >Cancel</Link>
                                        </Button>
                                    </div>
                                </Form>     
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
            
        </section>
        
    );
}

export default Contact ;