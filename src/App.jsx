import { useState } from 'react'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header.jsx'
import MainFilters from './components/MainFilters/MainFilters.jsx'
import Footer from './components/Footer/Footer.jsx'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div class = "index">
        <MainFilters/>
      </div>
    </>
  )
}

export default App
