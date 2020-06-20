import CartReducer from './reducer'
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const {createStore} = require('redux');

const store = createStore(CartReducer, applyMiddleware(thunk));
console.log(store.getState());
store.subscribe(function(){console.log(store.getState())})
export default store;