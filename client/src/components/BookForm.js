import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

export default function NewBookForm(props) {
  const {dispatch} = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [submit, setSubmit] = useState('Add Book');

  const handleSubmit = e => {
    e.preventDefault();
    if (title === '' || author === '') {
      if (title === author)
        setSubmit('Missing Fields!');
      else if (title === '')
        setSubmit('Missing Title!');
      else
        setSubmit('Missing Author!');
    } else {
      dispatch({type: 'ADD_BOOK', book: {title, author}});
      setTitle('');
      setAuthor('');
      setSubmit('Added!');
    }
  };

  // VerifySubmitName
  const VSN = () => {
    if (submit !== 'Add Book')
      setSubmit('Add Book');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Book Title" value={title}
        onChange={e => { setTitle(e.target.value); VSN(); }} />
      <input type="text" placeholder="Author" value={author}
        onChange={e => { setAuthor(e.target.value); VSN(); }} />
      <input type="submit" value={submit} />
    </form>
  )
}
