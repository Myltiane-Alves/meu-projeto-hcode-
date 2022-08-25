import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MobileMenu from './components/Navbar/MobileMenu'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <MobileMenu/>
    </>
  )
}

export default App
