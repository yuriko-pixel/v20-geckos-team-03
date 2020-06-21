
export const incrementInCart = id => (
  {
    type: 'increment',
    payload: id
  }
);

export const decrementInCart = id => (
  {
    type: 'decrement',
    payload: id
  }
)
