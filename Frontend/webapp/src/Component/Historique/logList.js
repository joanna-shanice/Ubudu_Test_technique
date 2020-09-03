import React, {Component} from 'react'
import LogSummary from './logSummary'
import { Card } from 'react-bootstrap'



class LogList extends Component {


    render() {

        return (
            <Card>
            {this.props.logs && this.props.logs.map(obj => {
                return (
                    <LogSummary key={obj._id} log={obj}/>
                )
            })

            }
        </Card>
        )
    }

}

export default LogList