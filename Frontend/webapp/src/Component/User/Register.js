import { connect } from 'react-redux'
import './Login.css'
import React, { Component } from "react"
import { Redirect } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { SignUp } from '../../Store/Action/authAction'


class Register extends Component {

    state = {
        name: '',
        nickname: '',
        password: '',
        email: '',
        number: ''
    }

    handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signUp(this.state)
    }
    
    validateForm() {
        return this.state.name.length > 0 
                && this.state.password.length > 0
                && this.state.nickname.length > 0
                && this.state.email.length > 0
                && this.state.password.length > 0
    }


    render () {

        const { authError, auth } = this.props

        if (auth.logIn === true) {
            return <Redirect to='/'/>
        }

        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label> Nom</Form.Label>
                        <Form.Control
                            autoFocus
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="nickname" >
                        <Form.Label> Prénom </Form.Label>
                        <Form.Control
                            autoFocus
                            value={this.state.nickname}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="email" >
                        <Form.Label> Email </Form.Label>
                        <Form.Control
                            autoFocus
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="number" >
                        <Form.Label> Numéro </Form.Label>
                        <Form.Control
                            autoFocus
                            value={this.state.number}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password" >
                        <Form.Label> Mot de passe </Form.Label>
                        <Form.Control
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button
                        block
                        type="submit"
                        variant="primary"
                        disabled={!this.validateForm()}>
                        Connexion
                    </Button>
                </Form>
                <div className="red-text center">
                            { authError ? <p> {authError} </p> : null}
                </div>
            </div>
        )
    }
}

const mapDispatchToPropos = (dispatch) => {
    return {
        signUp: (user) => dispatch(SignUp(user))
    }
}

const maptStateToprops = (state) => {
    console.log(state)
    return {
        auth: state.auth,
        authError: state.auth.authError
    }
}

export default connect(maptStateToprops,mapDispatchToPropos)(Register)