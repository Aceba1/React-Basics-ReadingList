import React, { createContext, useReducer, useEffect } from 'react';
import bookReducer from '../reducers/bookReducer';

export const BookContext = createContext();


function BookContextProvider(props) {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const data = localStorage.getItem('books');
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
