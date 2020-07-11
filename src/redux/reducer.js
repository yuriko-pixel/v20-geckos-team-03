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
