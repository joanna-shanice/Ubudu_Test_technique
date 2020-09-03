import axios from 'axios'
import qs from 'querystring'

const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

export const SignIn = (credentials) => {

    const requestBody = qs.stringify({
        email: credentials.email,
        password: credentials.password
    })


    return (dispatch, getState) => {
        axios.post('http://localhost:3001/api/login', requestBody, config)
        .then(result => {
            dispatch({ type:'LOGIN_SUCCESS', payload: result.data})
        })
        .catch((err) => {
            console.log(err.message)
            dispatch({ type:'LOGIN_ERROR', err })
        })
    }
}

export const getParticipation = (obj) => {


    return (dispatch, getState) => {
        axios.get('http://localhost:3001/api/user/' + obj.id, config)
        .then(result => {
            dispatch({ type:'GET_PARTICIPATION_SUCCESS', payload: result.data})
        })
        .catch((err) => {
            dispatch({ type:'GET_PARTICIPATION_ERROR', err })
        })
    }
}


export const signOut = () => {
    return (dispatch, getState) => {   
        dispatch({ type: 'SIGNOUT_SUCCESS'})
    }
}

export const SignUp = (user) => {

    const requestBody = qs.stringify({
        name: user.name,
        nickname: user.nickname,
        password: user.password,
        email: user.email,
        number: user.number
    })

    return(dispatch, getState) => (
        axios.post('http://localhost:3001/api/register', requestBody, config)
        .then(result => {
            dispatch({ type:'REGISTER_SUCCESS', payload: result.data})
        })
        .catch((err) => {
            dispatch({ type:'REGISTER_ERROR', err })
        })
    )
}
