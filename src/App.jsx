import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import Cart from './components/Cart'
import Protected from './components/Protected'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>React-Context-Api</h1>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', paddingTop: '1rem' }}>
        <Home />
        <Profile />
        <Cart />
        <Protected>
          <Dashboard />
        </Protected>
      </div>
    </>
  )
}

export default App
