import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './context/UserContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <LanguageProvider>
          <CartProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </CartProvider>
        </LanguageProvider>
      </ThemeProvider>
    </UserProvider>
  </StrictMode>
)
