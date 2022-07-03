import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function NavbarComponent() {
  return (
    
        <Navbar collapseOnSelect expand="md" fixed="top" bg="success" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    PickShip
                </Navbar.Brand>
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
