import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function NavbarComponent() {
  return (
    
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    PickShip
                </Navbar.Brand>
                <Nav>
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
            </Container>
        </Navbar>
  )
}
