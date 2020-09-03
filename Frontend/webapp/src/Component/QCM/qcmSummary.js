import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Select from 'react-select'
import { Card, Form, Button, Row, Col, Container } from 'react-bootstrap'
import { updateParticipation } from '../../Store/Action/participationAction'



class QCMSummary extends Component {

    state = {
        response: null,
        selectData: [],
        show: true
    }

    handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    handleOnClick = (e) => {
        if (this.state.response) {
            e.preventDefault()
            this.setState({
                show: false,
            })
            var score = 0
            if (this.state.value == "True")
                score = 3
            else
                score = -1


            this.props.updateParticipation({ 
                id: this.props.participation._id,
                question: this.props.question.description,
                response: this.state.response.label,
                user: this.props.auth.user._id, 
                score: score})
        }
    }

    onSelect = response => {
        this.setState({ response })
    }

    componentDidMount() {

        let data = []
        let tab = this.props.question.response
        let len = tab.length
        for (var i = 0; i < len; i ++) {
            data.push({value: tab[i].status, label:tab[i].description})
        }
        this.setState({ selectData: data})
    }

    render () {    

        return (
            <Card style={{marginTop: 60}}>
                {
                    this.props.question ?
                    <p style={{marginTop: 10}}> {this.props.question.description} </p>
                    : null
                }
                {
                    this.props.question && this.state.show ?
                    <Form.Group controlId="partition">
                        <Select 
                            options={ this.state.selectData }
                            value={this.state.response}
                            onChange={this.onSelect}
                        />
                        <Button variant="success" size="sm" onClick={this.handleOnClick} style={{marginTop: 10}}>Valider</Button>
                    </Form.Group>
                    :  <p> {this.state.response.label} </p> 
                }

            </Card>
            
        )
    }
}

const mapStateToprops = (state) => {
    console.log(state)
    return {
        auth: state.auth,
        participation: state.participation.participation
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateParticipation: (obj) => dispatch(updateParticipation(obj))
    }
}




export default connect(mapStateToprops, mapDispatchToProps)(QCMSummary)
