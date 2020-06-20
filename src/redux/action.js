const handleSubmit = id => (
  {
    type: 'addtoCart',
    payload: id,
  }
);

export default {handleSubmit};