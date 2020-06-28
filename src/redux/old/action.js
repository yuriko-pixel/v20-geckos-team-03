let contentful = require('contentful')

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

export const loadDoughnut = () => {
  return {
    type: 'request_doughnuts',
    payload: {
      isLoading: true
    }
  }
}

export const successinitState = (item) => {
  return {
    type: 'loadsuccess',
    payload: item
  }
}

export const failinitState = (err) => {
  return {
    type: 'loadfail',
    payload: err
  }
}

let client = contentful.createClient({
  space: process.env.REACT_APP_ID,
  accessToken: 'vxQrvgXfbVkOCxIgYfjQPlkl_Hzx6YKGm93kM-ktOuQ'
})

export const fetchDoughnut = ()=> {
  return dispatch => {
    dispatch(loadDoughnut());
    client.getEntries()
    .then(response=> {dispatch(successinitState(response.items));})
    .catch(error => {dispatch(failinitState(error))})
  }
}
