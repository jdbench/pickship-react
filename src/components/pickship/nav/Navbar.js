import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { useAuth } from '../../../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function NavbarComponent() {
    const { currentUser, logout } = useAuth();

    async function handleLogout() {
    
        try {
          await logout()
        } catch(Error) {
          console.log(Error)
        }
      };

    if (!currentUser){
        return(
            <Navbar collapseOnSelect expand="md" sticky="top" bg="success" variant="dark">
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
    } else {
            return (
                    <Navbar collapseOnSelect expand="md" sticky="top" bg="success" variant="dark">
                        <Container>
                            <Navbar.Brand as={Link} to="/">
                                PickShip
                            </Navbar.Brand>
                        <Link to='/user' className='btn btn-secondary' >
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                        <Button variant='danger' onClick={handleLogout}>Logout</Button>
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
}
