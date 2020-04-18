import { combineReducers } from 'redux'

import Product from './MainProduct'
import Loader from './Loader'
import regist from './registStore'
import cart from './Cart'
import payment from './payment'

const rootReducer = combineReducers({
    Product,
    regist,
    cart,
    Loader,
    payment
})

export default rootReducer;