import React from "react";
import {Nav, Navbar} from 'react-bootstrap'


const LogoutLinks = () => {
  return(
    <Navbar collapseOnSelect sticky="top" bg="light" variant="light" expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav"> 
        <Nav className="justify-content-end">
          <Nav.Link href='/login'> Connexion </Nav.Link>
          <Nav.Link href='/register'> Inscription</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default LogoutLinks;