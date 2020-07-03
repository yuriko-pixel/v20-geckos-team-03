import { getData } from "../components/contentful";

export const incrementInCart = (id, qty = 1) => ({
  type: "increment",
  payload: {
    id,
    qty,
  },
});

export const decrementInCart = (id) => ({
  type: "decrement",
  payload: id,
});

export const fetchItems = () => async (dispatch) => {
  const response = await getData();
  dispatch({ type: "FETCH_ITEMS", payload: response });
};

export const addItemFromProductPage = (id, qty) => ({
  type: "ADD_ITEM",
  payload: {
    id,
    qty,
  },
});
