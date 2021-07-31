import { createContext, useState, useReducer } from 'react';

const initialState = {
    movie: [],
}

const reducers = (state = initialState, action ) => {
    switch (action.type){
      case 'ADD_MOVIE' : {
        return {
          ...state,
          movie: [...state.movie, action.payload]
        }
      }
      default: 
        return state
    }
  }
export const MovieContext = createContext();

export const MovieProvider = ({children}) => {
    const [{ movie }, dispatch] = useReducer(reducers, initialState);
    
    const AddMovie = (movie) => {
        const newMovie = {
            name: movie
        }
        dispatch({
            type: 'ADD_MOVIE',
            payload: newMovie
        });
    }

    const MovieValue = {
        AddMovie,
        movie
    }
    return (
        <MovieContext.Provider value={MovieValue} >
            { children }
        </MovieContext.Provider>
    )
}

