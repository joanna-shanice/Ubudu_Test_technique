import React, { Component } from 'react';
import './App.css';
import Routes from './Routes'
import RegisterLink from './Component/Layout/RegisterLink'
import LogoutLink from './Component/Layout/LogoutLink'
import { connect } from 'react-redux'
import Footer from './Component/Layout/Footer'


class App extends Component {
  
  render() {

    const { auth } = this.props
    
    const links = auth.logIn ? <RegisterLink name={auth.user}/> : <LogoutLink/>
    return (
        <div className="App">
          {links}
          <Routes/>
          <Footer/>
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
