import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
      <>
          <h2>Theme: {theme}</h2>        
          <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}

export default Home