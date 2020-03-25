import {combineReducers} from 'redux'

import 
    Product
 from './MainProduct'
 import regist from './registStore'

const rootReducer = combineReducers({
    Product,
    regist
})

export default rootReducer;