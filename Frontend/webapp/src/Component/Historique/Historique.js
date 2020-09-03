
import { connect } from 'react-redux'
import React, { Component } from 'react'
import HistoriqueList from './HistoriqueList'
import { getParticipation } from '../../Store/Action/authAction'


class Dashboard extends Component {


    componentDidMount() {
        this.props.dispatch(getParticipation({id: this.props.auth.user._id}))
    }
   
    render() {

       

        return (
            <div style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 40
              }}>
                  <h1> Historique des parties effectuées </h1>
                <HistoriqueList participations={this.props.auth.user.participation}/>
            </div>
            
        )
    }
}

const mapStateToprops = (state) => {
    console.log(state.auth)
    return {
        auth: state.auth,
    }
}



export default connect(mapStateToprops)(Dashboard)