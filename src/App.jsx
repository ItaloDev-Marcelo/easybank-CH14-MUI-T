import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/navbar'
import Home from './Pages/Home'
import { IntroPage } from './Pages/IntroPage'
import { Article } from './Pages/Article'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Home />
      <IntroPage/>
      <Article/>
    </>
  )
}

export default App
