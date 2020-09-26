import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBarFunc from './components/NavBarFunc'
import NavBarClass from './components/NavBarClass'
function App() {
  return (
    <div className="App">
      <label>Class:</label>
      <NavBarClass />
      <hr/>
      <label>Func:</label>
      <NavBarFunc />
    </div>
  );
}

export default App;
