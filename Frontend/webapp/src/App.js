import React, { Component } from 'react';
import './App.css';
import Routes from './Routes'
import RegisterLink from './Component/Layout/RegisterLink'
import LogoutLink from './Component/Layout/LogoutLink'
import { connect } from 'react-redux'


class App extends Component {
  
  render() {

    const { auth } = this.props
    
    const links = auth.logIn ? <RegisterLink name={auth.user}/> : <LogoutLink/>
    return (
        <div className="App">
          {links}
          <Routes/>
        </div>
    )
  }
}

const mapStateToprops = (state) => {
  return {
    auth: state.auth,
  }
}


export default connect(mapStateToprops)(App);
