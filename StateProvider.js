import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddleWare from 'redux-promise'
import rootReducer from './src/reducer'

const createStoreWithMidlleware =applyMiddleware(promiseMiddleWare)(createStore);

function StateProvider (props){
    return (
        <Provider store ={createStoreWithMidlleware(rootReducer)}>
            {props.children}
        </Provider>
    )
}

export default StateProvider;