import "./Login.css"
import { connect } from 'react-redux'
import React, { Component } from "react"
import { Redirect } from 'react-router-dom'
import { SignIn } from '../../Store/Action/authAction'
import { Button, Form } from 'react-bootstrap'


class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0
    }


    render () {

        const { authError, auth } = this.props

        if (auth.logIn === true) {
            return <Redirect to='/'/>
        }

        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label> Email</Form.Label>
                        <Form.Control
                            autoFocus
                            value={this.state.idrh}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password">
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
        signIn: (credentials) => dispatch(SignIn(credentials))
    }
}

const maptStateToprops = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.auth
    }
}

export default connect(maptStateToprops, mapDispatchToPropos)(Login)