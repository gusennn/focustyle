import { combineReducers, createStore } from 'redux'
import productStateReducer from './productStateReducer'

let rootReducer  = combineReducers({
    productState: productStateReducer,
})

let store = createStore(rootReducer )

export default store