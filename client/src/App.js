import React from 'react';
import NavBarFunc from './components/NavBarFunc'
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';
function App() {
  return (
    <div className="App">
      <NavBarFunc />
      <AuthContextProvider>
        <ThemeContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
