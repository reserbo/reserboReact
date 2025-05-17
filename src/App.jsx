import { useState } from 'react'
import reactLogo from './assets/img/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header.jsx'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    </>
  )
}

export default App
