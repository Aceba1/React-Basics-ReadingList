import React from 'react';

import NavBar from './components/NavBar';
import BookList from './components/BookList'
import NewBookForm from './components/BookForm'

import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
