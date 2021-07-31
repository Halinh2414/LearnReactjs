import React, { useReducer } from 'react';

const initialState = {
  counter: 0,
  isLoading: false
}

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT': {
      return {
        ...state, // copy all property obj
        counter: state.counter + action.payload
      } // -> new state
    }
    case 'DECREMENT': {
      return {
        ...state,
        counter: state.counter - action.payload
      }
    }
    case 'SHOW_LOADING': {
      return {
        ...state,
        isLoading: true
      } 
    }
    case 'HIDE_LOADING': {
      return {
        ...state,
        isLoading: false
      } 
    }
    default:
      return state
  }
}

function UseReducerCounter() {
  const [{ counter, isLoading }, dispatch] = useReducer(reducers, initialState)

  function increment() {
    dispatch({ type: 'SHOW_LOADING' })
    dispatch({
      type: 'INCREMENT', // required
      payload: 1 // options
    })

    setTimeout(() => {
      dispatch({ type: 'HIDE_LOADING' })
    }, 500)
  }

  function decrement() {
    dispatch({ type: 'SHOW_LOADING' })
    dispatch({
      type: 'DECREMENT', // required
      payload: 1 // options
    })

    setTimeout(() => {
      dispatch({ type: 'HIDE_LOADING' })
    }, 500)
  }

  return (
    <div>
      Clicks on time: {isLoading ? <div>...loading</div> : counter}

      <button type="button" onClick={increment}>Increment</button>
      <button type="button" onClick={decrement}>Decrement</button>
    </div>
  )
}

export default UseReducerCounter
