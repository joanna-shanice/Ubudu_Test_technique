const initState = {
    questions: [],
    loading: false,
    error: null,
}

const qcmReducer = (state = initState, action) => {
    switch(action.type) {
        
        case 'FETCH_QUESTIONS_BEGIN':
            console.log('get all begin')
            return {
                ...state,
                loading: true,
                error: null,
            }
        case 'FETCH_QUESTIONS_SUCCESS':
            console.log('get all success')
            return {
                ...state,
                loading: false,
                questions: action.payload,
            }
        case 'FETCH_QUESTIONS_FAILURE':
            console.log('get all failed')
            return {
                ...state,
                loading: false,
                error: action.err,
            }
        default:
            return state
    }
}

export default qcmReducer