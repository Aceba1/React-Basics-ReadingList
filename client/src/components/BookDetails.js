import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

export default function BookDetails(props) {
  const {dispatch} = useContext(BookContext);
  return (
    <li onClick={() => dispatch({type:'REMOVE_BOOK', id:props.book.id})}>
      <div className="title">{props.book.title}</div>
      <div className="author">{props.book.author}</div>
    </li>
  )
}
