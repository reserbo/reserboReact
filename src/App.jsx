import { useState } from 'react'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header.jsx'
import MainFilters from './components/MainFilters/MainFilters.jsx'
import Carrousel from './components/Carrousel/Carrousel.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main>
        <MainFilters/>
        <Carrousel carrouselTitle = "Destacados" actionCallText = "Ve la lista completa"/>
      </main>
    </>
  )
}

export default App
