import {combineReducers} from 'redux';
import whitesimg from '../img/white-sprinkle.png'
import oldfimg from '../img/old-fashioned.png'
import pnkfimg from '../img/pink-sprinkle.png'
import sugarlyimg from '../img/sugarly.png'
import doughballimg from '../img/chocolate-glazed.png'

const initState = [
  {id: 0, name: 'Whitesprinkle', img: whitesimg, inCartSum: 0},
  {id: 1, name: 'Oldfashioned', img: oldfimg, inCartSum: 0},
  {id: 2, name: 'Pinksprinkle', img: pnkfimg, inCartSum: 0},
  {id: 3, name: 'Sugarly', img: sugarlyimg, inCartSum: 0},
  {id: 4, name: 'Doughball', img: doughballimg, inCartSum: 0},
  {id: 5, name: 'Pinksprinkle', img: pnkfimg, inCartSum: 0}
];

const CartReducer = (state = initState, action)=> {
  switch(action.type) {
    case 'increment':
      let newData = [...state];
      let item = newData.find(doughnut => {
        return doughnut.id == action.payload
      })
      item.inCartSum++;
      newData[action.payload] = item;
      return newData;

    case 'decrement': 
      let newData1 = [...state];
      let item1 = newData1.find(doughnut => {
        return doughnut.id == action.payload
      })
      item1.inCartSum--;
      newData1[action.payload] = item1;
      return newData1;
    default: 
        return state;
  }
}

export default CartReducer;
// const rootReducer = combineReducers({
//   CartReducer
// });

// export default rootReducer;