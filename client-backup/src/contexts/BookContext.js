import React, { createContext, useState } from 'react'

export const BookContext = createContext();

export default function BookContextProvider(props) {
  const [books, setBooks] = useState([
    {title: 'name of the wind', id: 1},
    {title: 'the way of kings', id: 1},
    {title: 'the final empire', id: 1},
    {title: 'the hero of ages', id: 1},
  ]);
  return (
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  )
}
