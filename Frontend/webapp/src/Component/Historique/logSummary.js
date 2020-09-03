import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LogList from './logList'
import { Card, Accordion } from 'react-bootstrap'


class HistoriqueSummary extends Component {


    render () {

        return (
            <div>
                <p> Question: {this.props.log.question} </p>
                <p> Réponses: {this.props.log.response} </p>
            </div>
            
        )
    }
}



export default (HistoriqueSummary)