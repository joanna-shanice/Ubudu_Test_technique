import React, {Component} from 'react'
import QCMSummary from './qcmSummary'
import {  Button} from 'react-bootstrap'



class qcmList extends Component {

    onClick = (e) => {
        e.preventDefault()
        this.props.props.push('/')
    }

    render() {
        return (
            <div>
            {this.props.questions && this.props.questions.map(obj => {
                return (
                    <QCMSummary key={obj._id} question={obj}/>
                )
            })

            }
             <Button variant="success" style={{marginTop: 20, marginBottom: 20}} onClick={this.onClick}>Terminer</Button>{' '}
        </div>
        )
    }

}

export default qcmList