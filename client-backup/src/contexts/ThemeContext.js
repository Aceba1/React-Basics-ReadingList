import React, { createContext, useState, useEffect } from 'react';

const themes = {
  dark: {
    syntax: '#ddd',
    ui: '#333',
    bg: '#555'
  },
  light: {
    syntax: '#555',
    ui: '#ddd',
    bg: '#eee'
  }
}

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return ( 
      <ThemeContext.Provider value={{theme, ...themes, toggleTheme}}>
        {props.children}
      </ThemeContext.Provider>
    )
}
