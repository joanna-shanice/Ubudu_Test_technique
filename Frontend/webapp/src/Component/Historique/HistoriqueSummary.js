import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LogList from './logList'
import { Card, Accordion } from 'react-bootstrap'


class HistoriqueSummary extends Component {


    render () {

        var date = new Date (this.props.participation.createdAt)
        var str = date.getDate() + '-' + parseInt(date.getMonth() + 1) + '-' + date.getFullYear()
        var time = date.getHours() + ':' + date.getMinutes()
        return (
            <div>
                    <Card >
                        <Accordion>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                QCM du {str} à  {time}
                            </Accordion.Toggle> 
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Card.Text style={{ marginTop: 10}}> Score {this.props.participation.score}</Card.Text>
                                    <Card.Text style={{ marginTop: 10}}> Début {this.props.participation.createdAt}</Card.Text>
                                    <Card.Text style={{ marginTop: 10}}> Fin {this.props.participation.updatedAt}</Card.Text>
                                    <LogList logs={this.props.participation.log}/>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Accordion>
                    </Card>
            </div>
            
        )
    }
}



export default (HistoriqueSummary)