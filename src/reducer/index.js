import {combineReducers} from 'redux'

import 
    Product
 from './MainProduct'
 import regist from './registStore'
 import cart from './Cart'

const rootReducer = combineReducers({
    Product,
    regist
    ,cart
})

export default rootReducer;