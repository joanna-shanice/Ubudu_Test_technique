import React, {Component} from 'react'
import HistorySummary from './HistoriqueSummary'
import { Card } from 'react-bootstrap'



class HistoryList extends Component {


    render() {

        return (
            <Card>
            {this.props.participations && this.props.participations.map(obj => {
                return (
                    <HistorySummary key={obj._id} participation={obj}/>
                )
            })

            }
        </Card>
        )
    }

}

export default HistoryList