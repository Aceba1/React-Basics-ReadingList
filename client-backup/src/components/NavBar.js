import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

function NavBarFunc() {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const { theme: themeName, light, dark } = useContext(ThemeContext);
  const theme = themeName === 'light' ? light : dark;

  return (
    <nav style={{background: theme.ui, color: theme.syntax}}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuth ? 'Logged in' : 'Logged out'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default NavBarFunc

