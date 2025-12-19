import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import Cart from './components/Cart'

function App() {

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>React-Context-Api</h1>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', paddingTop: '1rem' }}>
        <Home />
        <Profile />
        <Cart />
      </div>
    </>
  )
}

export default App
