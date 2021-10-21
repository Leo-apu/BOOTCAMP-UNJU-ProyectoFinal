import {Navbar,Nav,NavDropdown,Form,FormControl,Button, Container,InputGroup} from 'react-bootstrap';
import {NavLink,Link,useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Style from './navbar.module.css';

export default function CompNavBar(props) {
    
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(false);
    const onClickHome = () => setShowResults(true)

    return(
            <Navbar className={Style.fond} expand="lg">
            <Link className={Style.bran} onClick={onClick} to="/"><Navbar.Brand> <img src="https://www.brurya.co.il/image/cache/catalog/brands/RM-600x315w.png" className={Style.ic} alt="logo-rm"></img> </Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">

                <Nav
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                    {showResults?(<Form.Control type="text" onChange={(s) => props.getName(s.target.value)} placeholder="example: Rick" />):null}
                <Link className={Style.acc} onClick={onClickHome} to="/home"><Nav>Home</Nav></Link>
                <Link className={Style.acc} onClick={onClick} to="/about"><Nav>About</Nav></Link>
                </Nav>
                
                
            </Navbar.Collapse>
            </Navbar>
        
    )
}