import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

export default function NavbarComponent() {
  return (
    
        <Navbar collapseOnSelect expand="md" sticky="top" bg="success" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    PickShip
                </Navbar.Brand>
            <Link to='/user' className='btn btn-secondary' style={{margin:'0 15px 0 0'}}>Profile</Link>
            <Button variant='danger'>Logout</Button>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="responsive-navbar-nav" >
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Nav.Link as={Link} to="/locations">
                            Locations
                        </Nav.Link>
                        <Nav.Link as={Link} to="/products">
                            Products
                        </Nav.Link>
                        <Nav.Link as={Link} to="/picklist">
                            Picklist
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}
