import {Navbar,Nav,NavDropdown,Form,FormControl,Button, Container,InputGroup} from 'react-bootstrap';
export default function CompNavBar(props) {
    

    return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                    Link
                </Nav.Link>
                </Nav>
                <InputGroup onChange={(s) => props.updateFilter("name",s.target.value)} className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
                    <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
            </Navbar.Collapse>
            </Navbar>
        
    )
}