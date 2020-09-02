
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
//import { getCompanie } from '../../Store/Action/Actions'


class Companies extends Component {


    componentDidMount() {
       // this.props.dispatch(getCompanie({id: this.props.match.params.id}));
      }
   
    render() {

       

        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Card style={{ width: '45rem', marginTop: 60, height: '33rem' }}>
                    <Card.Body>
                        <Card.Title> QCM </Card.Title>
                        <Card.Text>Vous trouverez dans cet article la liste des 120 meilleurs quiz de culture générale sur internet. </Card.Text>
                        <Card.Text>C’est un excellent moyen d’apprendre en s’amusant ! Pour vous, nous avons cherché les meilleures questions pour vous aider à accroître vos connaissances. </Card.Text>
                        <Card.Text>Tous les domaines (ou presque) sont traités dans ces tests de culture générale : vous trouverez dans ces quiz des questions sur l’Histoire, la géographie, la nature, la littérature, le cinéma, la musique, l’actualité, etc. </Card.Text>
                        <Card.Text>Pour vous permettre de connaître votre niveau, nous avons choisi de créer trois niveaux : débutant, intermédiaire et expert. Chacun de ces niveaux comporte 20 quiz ! Petit à petit, vous progresserez ! </Card.Text>
                        <Card.Text>Cherchez bien sur le site…vous pourrez y trouver certaines réponses.</Card.Text>
                        <Card.Text> En savoir plus sur https://www.laculturegenerale.com/60-tests-de-culture-generale1/ | La culture générale</Card.Text>
                        <Button variant="success">Commencer</Button>{' '}

                    </Card.Body>
                </Card>
            </div>
            
        )
    }
}

/*const mapStateToprops = (state) => {
    console.log(state.companies)
    return {
        companies: state.companies.companies,
        loading: state.companies.loading,
        error: state.companies.error,
    }
}

export default connect(mapStateToprops)(Companies)*/

export default Companies