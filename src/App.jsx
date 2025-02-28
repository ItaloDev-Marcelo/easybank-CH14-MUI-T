import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/navbar'
import Home from './Pages/Home'
import { IntroPage } from './Pages/IntroPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Home />
      <IntroPage/>
    </>
  )
}

export default App
