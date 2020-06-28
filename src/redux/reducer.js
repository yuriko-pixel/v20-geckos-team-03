const initState = [
  {id: 0, inCartSum: 0},
  {id: 1, inCartSum: 0},
  {id: 2, inCartSum: 0},
  {id: 3, inCartSum: 0},
  {id: 4, inCartSum: 0},
  {id: 5, inCartSum: 0}
]

const CartReducer = (state = initState, action)=> {
  switch(action.type) {
    case 'increment':
      const newData = Object.assign([], {...state});
      let item = newData.find(doughnut => {
        return doughnut.id == action.payload
      })
      item.inCartSum+=1;
      newData[action.payload] = item;
      item = Object.assign([], {...newData});
      return item;

    case 'decrement': 
      const newData1 = Object.assign([], {...state});
        let item1 = newData1.find(doughnut => {
          return doughnut.id == action.payload
        })
        item1.inCartSum+=1;
        newData1[action.payload] = item;
        item1 = Object.assign([], {...newData1});
      return item1;
    default:
      return state;
  }
}

export default CartReducer