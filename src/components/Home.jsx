import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const style = {
        padding: '1rem',
        borderRadius: '8px',
        minWidth: '220px',
        minHeight: '120px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme === 'light' ? '#f9f9f9' : '#222',
        color: theme === 'light' ? '#111' : '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
    }
  return (
      <div style={style}>
          <h2>Theme: {theme}</h2>        
          <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Home