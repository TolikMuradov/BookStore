import React, { createContext, useReducer } from 'react';
import booksData, { categories as categoriesData, banners as bannersData } from '../data';



const AppContext = createContext();

const initialState = {
    books: booksData || [], // Eğer booksData undefined ise boş bir dizi
    categories: categoriesData || [],
    banners: bannersData || [],
    favorites: [],
  };


const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
