import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar, Container, Nav} from 'react-bootstrap';


export const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand as={Link} to="/">Aplicacion Api de la Nasa</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="me-auto">
                          <Nav.Link as={Link} to="/tech/transfer">TechTransfer</Nav.Link>
                          <Nav.Link as={Link} to="/tech/port">TechPort</Nav.Link>
                          <Nav.Link as={Link} to="/fotos/rover">Fotos de Mars Rover</Nav.Link>
                      </Nav>
                      <Nav>
                          <Nav.Link as={Link} to="/auth/login">Signin</Nav.Link>
                          <Nav.Link as={Link} to="/auth/register">Signup</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
              </Container>
            </Navbar>
        </>
    )
}
