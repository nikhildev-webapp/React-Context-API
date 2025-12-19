import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { CartContext } from '../context/CartContext'

const PRODUCTS = [
    { name: 'Notebook', price: 99 },
    { name: 'Pen', price: 19 },
    { name: 'Mug', price: 249 }
]

const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { addItem } = useContext(CartContext);
    const style = {
        padding: '1rem',
        borderRadius: '8px',
        minWidth: '220px',
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
          <div style={{ width: '100%', marginTop: 8 }}>
            <h4>Products</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {PRODUCTS.map((p) => (
                <li key={p.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.45rem 0' }}>
                  <div>
                    <div style={{ fontWeight: 600 }}>{p.name}</div>
                    <div style={{ fontSize: '0.85rem', color: theme === 'light' ? '#666' : '#ccc' }}>₹{p.price}</div>
                  </div>
                  <div>
                    <button onClick={() => addItem(p)} style={{ padding: '0.25rem 0.6rem' }}>Add</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
    </div>
  )
}

export default Home