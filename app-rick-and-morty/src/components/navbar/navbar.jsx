import {Navbar,Nav,NavDropdown,Form,FormControl,Button, Container,InputGroup} from 'react-bootstrap';
import {NavLink,Link,useHistory, useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Style from './navbar.module.css';

export default function CompNavBar(props) {
    
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(false);
    const onClickHome = () => setShowResults(true)

    useEffect(()=>{
        console.log(props.search);
        setShowResults(props.search);
        return ()=>{
            setShowResults(props.search);
        }
    },[props])

 
    return(
            <Navbar className={Style.fond} expand="lg">
            <Link className={Style.bran} onClick={onClick} to="/"><Navbar.Brand> <img src="https://res.cloudinary.com/dkfzj9tmk/image/upload/v1677166689/backend-project/Rick-And-Morty-Logo-Transparent-File_arpmel.png" className={Style.ic} alt="logo-rm"></img> </Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">

                <Nav
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                    {showResults?(<Form.Control type="text" onChange={(s) => props.getName(s.target.value)} placeholder="example: Rick" />):null}
                <Link className={Style.acc} to="/home"><Nav>Home</Nav></Link>
                <Link className={Style.acc} to="/about"><Nav>About</Nav></Link>
                </Nav>
                
                
            </Navbar.Collapse>
            </Navbar>
        
    )
}