import React from 'react';
import NavBarFunc from './components/NavBarFunc'
import ThemeContextProvider from './contexts/ThemeContext';
function App() {
  return (
    <div className="App">
      <NavBarFunc />
        <ThemeContextProvider>
        </ThemeContextProvider>
    </div>
  );
}

export default App;
