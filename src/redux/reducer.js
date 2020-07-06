const initState = {
  items: [],
  addedItems: [],
  totalPrice: 0,
};

const CartReducer = (state = initState, action) => {
  switch (action.type) {
    case "increment": {
      let selectedItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      let existedItem = state.addedItems.find(
        (item) => item.id === action.payload.id
      );

      if (existedItem) {
        selectedItem.qty += action.payload.qty;
        return {
          ...state,
          totalPrice:
            state.totalPrice + selectedItem.price * action.payload.qty,
        };
      } else {
        selectedItem.qty = action.payload.qty;
        let newTotal =
          state.totalPrice + selectedItem.price * action.payload.qty;
        return {
          ...state,
          addedItems: [...state.addedItems, selectedItem],
          totalPrice: newTotal,
        };
      }
    }

    // const newData = Object.assign([], { ...state });
    // let item = newData.find((doughnut) => {
    //   return doughnut.id == action.payload;
    // });
    // item.inCartSum += 1;
    // newData[action.payload] = item;
    // item = Object.assign([], { ...newData });
    // return item;

    // case "decrement":
    //   const newData1 = Object.assign([], { ...state });
    //   let item1 = newData1.find((doughnut) => {
    //     return doughnut.id == action.payload;
    //   });
    //   item1.inCartSum += 1;
    //   newData1[action.payload] = item;
    //   item1 = Object.assign([], { ...newData1 });
    //   return item1;

    case "FETCH_ITEMS":
      const fetchedItems = action.payload;
      return {
        ...state,
        items: fetchedItems,
      };

    default:
      return state;
  }
};

export default CartReducer;
