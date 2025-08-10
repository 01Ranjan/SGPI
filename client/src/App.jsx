import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Toaster/>
    <Login/>
    </>
  )
}

export default App
