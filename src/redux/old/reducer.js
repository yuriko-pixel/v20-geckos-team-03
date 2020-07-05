import {combineReducers} from 'redux';
import {useSelector} from 'react-redux'
import store from './store'

// const data = store.getState();
// console.log(data);
const CartReducer = (state = {}, action)=> {
  switch(action.type) {
    case 'increment':
      let newData = state.doughnuts;
      let item = newData.find(doughnut => {
        return doughnut.id == action.payload
      }).inCartSum++
      newData[action.payload] = item;
      item = Object.assign(...newData);
      return item;

    case 'decrement': 
    let newData1 = state.doughnuts;
    newData1.find(doughnut => {
      return doughnut.id == action.payload
    }).inCartSum--;
    
    const item1 = Object.assign({...newData1})
      return item1;
    default:
      if(state.length == 0) {
        alert();
        return initState;
      } 
      return state;
  }
}

let initState = [

]

const loadReducer = (state = [], action) => {
  switch(action.type) {
    case 'request_doughnuts':
      const loading = {
        isLoading: true,
        isFetched: false,
        doughnuts: {}
      }
      return loading
    case 'loadsuccess':
      initState = { isLoading: false, isFetched: true, doughnuts: []}
      const doughnut = [];
      action.payload.forEach(i =>
        {doughnut.push({id: i.fields.id, name: i.fields.title, img: i.fields.img.fields.file.url, inCartSum: 0})}
      )
      initState.doughnuts = doughnut;
      
      return initState;
    case 'loadfail':
      const error = {isLoading: false, isFetched: false, doughnuts: {}};
      return error;
    default: 
      return state;
  }
}

const root = (state = {}, action) => {
  const data = state.loadReducer;
  return {
    loadReducer: loadReducer(data, action),
    CartReducer: CartReducer(data, {...action})
  };
};

const rootReducer = combineReducers({
  CartReducer, loadReducer
});

export default root;