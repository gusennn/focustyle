import { combineReducers, createStore } from 'redux'
import productStateReducer from './productStateReducer'
import cartReducer from "./cartStateReducer";
import likeReducer from "./likeStateReducer";

let rootReducer  = combineReducers({
    productState: productStateReducer,
    cartState: cartReducer,
    likeState: likeReducer,
})

let store = createStore(rootReducer )

export default store