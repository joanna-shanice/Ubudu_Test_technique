import React from "react";
import { connect } from 'react-redux'
import {Nav, Navbar} from 'react-bootstrap'
import { signOut } from '../../Store/Action/authAction'

const RegisterLinks = (props) => {
  return (
    <Navbar fluid collapseOnSelect sticky="top" bg="light" variant="light">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav"> 
         <Nav className="mr-auto">
            <Nav.Link href='/'> QCM </Nav.Link>
            <Nav.Link href='/historique'> Historique </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href='/login' onSelect={props.signOut}> Déconnexion </Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </Navbar>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

const stylesheet = {
  backgroundColor: '#8F98AF'
}

export default connect(null, mapDispatchToProps)(RegisterLinks);
