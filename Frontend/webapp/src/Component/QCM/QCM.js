
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Card, Button, Form } from 'react-bootstrap'
import { getQuestions } from '../../Store/Action/qcmAction'
import QCMList from './qcmList'


class QCM extends Component {

   

    componentDidMount() {
        this.props.dispatch(getQuestions());
      }
   
    render() {

       

        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 60
              }}>
                <QCMList questions={this.props.questions} props={this.props.history}/>
            </div>
            
        )
    }
}

const mapStateToprops = (state) => {
    return {
        user: state.auth,
        questions: state.questions.questions,
        loading: state.questions.loading,
        error: state.questions.error,
    }
}


export default connect(mapStateToprops)(QCM)