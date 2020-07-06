import CartReducer from "./reducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../redux/reducer";

const { createStore } = require("redux");

const store = createStore(CartReducer, applyMiddleware(thunk));
store.subscribe(function () {
  console.log(store.getState());
});

export default store;