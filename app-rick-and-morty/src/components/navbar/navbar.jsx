import {Navbar,Nav,NavDropdown,Form,FormControl,Button, Container,InputGroup} from 'react-bootstrap';
import {NavLink,Link,useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';

export default function CompNavBar(props) {
    
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(false);
    const onClickHome = () => setShowResults(true)

    return(
            <Navbar bg="light" expand="lg">
            <Link onClick={onClick} to="/landingPage"><Navbar.Brand> Rick and Morty </Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                    <Link onClick={onClickHome} to="/home"><Nav>Home</Nav></Link>
                <Link onClick={onClick} to="/about"><Nav>About</Nav></Link>
                <Link onClick={onClick} to="/contacto"><Nav>Contacto</Nav></Link>
                </Nav>
                <Nav>
                    {showResults?(<Form.Control type="text" onChange={(s) => props.getName(s.target.value)} placeholder="example: Rick" />):null}
               
                </Nav>
                
            </Navbar.Collapse>
            </Navbar>
        
    )
}