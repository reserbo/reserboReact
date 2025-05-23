import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import MainFilters from './components/MainFilters/MainFilters.jsx';
import Carousel from './components/Carousel/Carousel.jsx';
import Footer from './components/Footer/Footer.jsx';
import articleDataBase from './articleDataBase.json'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main>
        <MainFilters/>
        <Carousel
          carouselTitle = "Destacados"
          actionCallText = "Ve la lista completa"
          actionCallLink="/eventos"
          items = {articleDataBase}
        />
      </main>
    </>
  )
}

export default App
