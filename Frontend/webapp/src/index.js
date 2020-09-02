import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from './Store/Reducer/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css';


function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e)
    }
}

function loadFromlocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null )
            return undefined
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e)
        return undefined
    }
}

const persistedState = loadFromlocalStorage()

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk))

store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
    <Router><Provider store={store}>  <App /> </Provider></Router> , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
