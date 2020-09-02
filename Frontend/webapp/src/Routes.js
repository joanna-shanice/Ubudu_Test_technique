import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Register from './Component/User/Register'
import Login from './Component/User/Login'
import Dashboard from './Component/Home'


export default () =>{
  
    return (
          <Switch>

            <Route exact path='/' component={Dashboard} />
            <Route exact path='/login' component={Login} />

            <Route exact path='/register' component={Register} />

          </Switch>
    )
}


