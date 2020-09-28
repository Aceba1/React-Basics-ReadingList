import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

export default function NavBar() {
  const {books} = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Faba Reading List</h1>
      <p>Currently you have {
          books.length
        } book{
          books.length===1?'':'s'
        } to get through...</p>
      
    </div>
  )
}
