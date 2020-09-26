import React from 'react';

import NavBar from './components/NavBar';
//import BookList from './components/BookList'

import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
      </BookContextProvider>
    </div>
  );
}

export default App;
