import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'


export const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Aplicacion Api de la Nasa</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">La tierra</Nav.Link>
      <Nav.Link href="#pricing">DONKI</Nav.Link>
      <Nav.Link href="#pricing">Mars Rover Photos</Nav.Link>
      <Nav.Link href="#pricing">Image and Video</Nav.Link>
      <Nav.Link href="#pricing">Asteroids Neo</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Signin</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Signup
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}
