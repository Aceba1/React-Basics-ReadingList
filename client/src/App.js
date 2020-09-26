import React from 'react';
import NavBar from './components/NavBar'
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <NavBar />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
