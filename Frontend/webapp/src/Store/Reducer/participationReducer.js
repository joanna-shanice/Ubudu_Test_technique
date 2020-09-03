const initState = {
    participation: {},
    loading: false,
    error: null,
}

const qcmReducer = (state = initState, action) => {
    switch(action.type) {

        case 'CREATE_PARTICIPATION_BEGIN':
            console.log('create participation begin')
            return {
                ...state,
                loading: true,
                error: null,
                participation: {}
            }
        case 'CREATE_PARTICIPATION_SUCCESS':
            console.log('create participation success')
            return {
                ...state,
                loading: false,
                participation: action.payload,
            }
        case 'CREATE_PARTICIPATION_FAILURE':
            console.log('create participation failed')
            return {
                ...state,
                loading: false,
                error: action.err,
            }
            
        
        case 'FETCH_PARTICIPATION_BEGIN':
            console.log('get all begin')
            return {
                ...state,
                loading: true,
                error: null,
                participation: []

            }
        case 'FETCH_PARTICIPATION_SUCCESS':
            console.log('get all success')
            console.log(action.payload)
            return {
                ...state,
                loading: false,
                participation: action.payload,
            }
        case 'FETCH_PARTICIPATION_FAILURE':
            console.log('get all failed')
            return {
                ...state,
                loading: false,
                error: action.err,
            }

            case 'UPDATE_PARTICIPATION_BEGIN':
                console.log('update begin')
                return {
                    ...state,
                    loading: true,
                    error: null,
                    oneParticipation: {}
                }
            case 'UPDATE_PARTICIPATION_SUCCESS':
                console.log('update success')
                return {
                    ...state,
                    loading: false,
                    oneParticipation: action.payload,
                }
            case 'UPDATE_PARTICIPATION_FAILURE':
                console.log('updatefailed')
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