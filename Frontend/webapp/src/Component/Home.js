
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Card, Button, Form } from 'react-bootstrap'
import { createParticipation } from '../Store/Action/participationAction'


class Dashboard extends Component {


    onClick = (e) => {
        e.preventDefault()
        this.props.createParticipation({ user: this.props.auth.user._id, score: 0})
        this.props.history.push('/qcm')
    }
   
    render() {

       

        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Card style={{ width: '45rem', marginTop: 60, height: '27rem' }}>
                    <Card.Body>
                        <Card.Title> QCM </Card.Title>
                        <Card.Text>Vous trouverez sur cette page un quiz de culture générale. </Card.Text>
                        <Card.Text>C’est un excellent moyen d’apprendre en s’amusant ! Pour vous, nous avons cherché les meilleures questions pour vous aider à accroître vos connaissances. </Card.Text>
                        <Card.Text>Tous les domaines (ou presque) sont traités dans ces tests de culture générale : vous trouverez dans ces quiz des questions sur l’Histoire, la géographie, la nature, la littérature, le cinéma, la musique, l’actualité, etc. </Card.Text>
                        <Card.Text>Cherchez bien sur le site…vous pourrez y trouver certaines réponses.</Card.Text>
                        <Card.Text> En savoir plus sur https://www.laculturegenerale.com/60-tests-de-culture-generale1/ | La culture générale</Card.Text>
                        <Button variant="success" onClick={this.onClick}>Commencer</Button>{' '}

                    </Card.Body>
                </Card>
            </div>
            
        )
    }
}

const mapStateToprops = (state) => {
    return {
        auth: state.auth,
        participation: state.participation.participation
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createParticipation: (obj) => dispatch(createParticipation(obj))
    }
}


export default connect(mapStateToprops, mapDispatchToProps)(Dashboard)