import { combineReducers, createStore } from 'redux'
import productStateReducer from './productStateReducer'
import cartReducer from "./cartStateReducer";

let rootReducer  = combineReducers({
    productState: productStateReducer,
    cartState: cartReducer,
})

let store = createStore(rootReducer )

export default store