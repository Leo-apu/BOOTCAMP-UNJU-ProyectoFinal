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
        errors.asunto = "Subject is required"
    } else if(Object.keys(input.asunto).length<10){
        errors.asunto = "Subject must be more than 10 characters"
    }
    if(!input.mensaje){
        errors.mensaje = "Message is required"
    } else if(Object.keys(input.mensaje).length>256){
        errors.mensaje = "Message must be less than 256 characters"
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
                        <Col className={Cont.ab}>
                            <div class="d-flex justify-content-center">
                                <Form className={Cont.fnco}>
                                    <h5 className="text-center text-black fs-1">CONTACT FORM</h5>
                                    <div >
                                        <label class="col-sm-2 col-form-label text-black fs-2"> EMAIL </label>
                                        <input
                                            type="text"
                                            class="form-control p-3"
                                            name='email'
                                            placeholder="Enter your Email : example@gmail.com"
                                            value={state.email}
                                            onChange={(e) => onHandleChange(e)}
                                        /> 
                                        {fails.email ?
                                            <div class="alert alert-danger p-0 m-0" role="alert">
                                            <p style={{color: 'red'}}> {fails.email}</p> 
                                            </div>
                                            : <p></p>
                                        }
                                    </div> 
                                    <div>
                                        <label class="col-sm-2 col-form-label text-black fs-3"> Subject </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name='asunto'
                                            placeholder="Enter Subject : minimum 10 characters"
                                            value={state.asunto}
                                            onChange={(e) => onHandleChange(e)}
                                        /> 
                                        {fails.asunto && 
                                        <div class="alert alert-danger p-0 m-0" role="alert">
                                        <p style={{color: 'red'}}> {fails.asunto} </p>
                                        </div>
                                        }
                                    </div> 
                                    <div>
                                        <label class="col-sm-2 col-form-label mt-2 text-black fs-3"> Message </label>
                                        <textarea
                                            type="text"
                                            class="form-control p-3 mb-2"
                                            name='mensaje'
                                            placeholder="Enter Message :  Maximum 256 characters"
                                            value={state.mensaje}
                                            onChange={(e) => onHandleChange(e)}
                                        /> 
                                        {fails.mensaje && 
                                        <div class="alert alert-danger p-0 m-0" role="alert">
                                        <p style={{color: 'red'}}> {fails.mensaje} </p>
                                        </div>
                                        }
                                    </div>
                                    <div className="d-flex justify-content-around mt-3">
                                        <Button  type="submit"  className={Cont.btn1} 
                                        disabled={ fails.email || fails.asunto|| fails.mensaje || 
                                        state.email === "" || state.asunto === "" || state.mensaje === ""  ? true : false  }>
                                        <Link className={Cont.ju} to="/home" >Send</Link>
                                        </Button>
                                        <Button  type="submit"  className={Cont.btn} >
                                        <Link className={Cont.ju} to="/home" >Cancel</Link>
                                        </Button>
                                    </div>
                                </Form>     
                            </div>
                        </Col>
                </Row>
            </Container>
            
        </section>
        
    );
}

export default Contact ;