import axios from 'axios'
import qs from 'querystring'

const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

export const getQuestions = (credentials) => {


    return (dispatch) => {
        dispatch({type: 'FETCH_QUESTIONS_BEGIN'})
        axios.get('http://localhost:3001/api/questions', config)
        .then(result => {
            dispatch({ type:'FETCH_QUESTIONS_SUCCESS', payload: result.data})
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type:'FETCH_QUESTIONS_ERROR', err })
        })
    }
}

