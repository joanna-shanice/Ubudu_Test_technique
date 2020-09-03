import axios from 'axios'
import qs from 'querystring'

const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

export const getParticipation = (credentials) => {

    return (dispatch) => {
        dispatch({type: 'FETCH_PARTICIPATION_BEGIN'})
        axios.get('http://localhost:3001/api/participation', config)
        .then(result => {
            dispatch({ type:'FETCH_PARTICIPATION_SUCCESS', payload: result.data})
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type:'FETCH_PARTICIPATION_ERROR', err })
        })
    }
}

export const createParticipation = (obj) => {

    const requestBody = qs.stringify({
        score: parseInt(obj.score),
        user: obj.user
    })


    return (dispatch) => {
        dispatch({type: 'CREATE_PARTICIPATION_BEGIN'})
        axios.post('http://localhost:3001/api/participation/create', requestBody, config)
        .then(result => {
            dispatch({ type:'CREATE_PARTICIPATION_SUCCESS', payload: result.data})
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type:'CREATE_PARTICIPATION_ERROR', err })
        })
    }
}

export const updateParticipation = (obj) => {

    const requestBody = qs.stringify({
        score: parseInt(obj.score),
        question: obj.question,
        response: obj.response
    })

    return (dispatch) => {
        dispatch({type: 'UPDATE_PARTICIPATION_BEGIN'})
        axios.put('http://localhost:3001/api/participation/' + obj.id, requestBody, config)
        .then(result => {
            dispatch({ type:'UPDATE_PARTICIPATION_SUCCESS', payload: result.data})
        })
        .catch((err) => {
            dispatch({ type:'UPDATE_PARTICIPATION_ERROR', err })
        })
    }
}

