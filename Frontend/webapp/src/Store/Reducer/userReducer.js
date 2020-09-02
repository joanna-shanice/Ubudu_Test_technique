const initState = {
    authError: null,
    logIn: false,
    user: {},
    loading: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('Login failed')
            return {
                ...state,
                authError: 'Login failed',
                logIn: false
            }
        case 'LOGIN_SUCCESS':
            console.log('Login succes')
            return {
                ...state,
                authError: null,
                logIn: true,
                user: action.payload
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success')
            return  {
                ...state,
                logIn: false
            }
        case 'REGISTER_SUCCESS':
            console.log('register success')
            return {
                ...state,
                logIn: true,
                user: action.payload,
                loading: false
            }
        case 'REGISTER_LOADING':
            console.log('register loading')
            return {
                ...state,
                logIn: true,
                user: action.payload,
                loading: true
            }
        case 'REGISTER_FAILED':
            console.log('register failded')
            return {
                ...state,
                logIn: false,
                authError: action.err.message,
                loading: false
            }
        default:
            return state
    }
}

export default authReducer