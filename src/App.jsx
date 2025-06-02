import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Us from './components/Us/Us.jsx';
import Billboard from './components/Billboard/Billboard.jsx';
import Directory from './components/Directory/Directory.jsx';
import Event from './components/Event/Event.jsx';
import Place from './components/Place/Place.jsx';
import Error from './components/Error/Error.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Layout/>}>
            <Route index element = {<Home/>}/>
            <Route path = "/nosotros" element = {<Us/>}/>
            <Route path = "/cartelera" element = {<Billboard/>}/>
            <Route path = "/directorio" element = {<Directory/>}/>
            <Route path = "/evento/:id" element = {<Event/>}/>
            <Route path = "/lugar/:id" element = {<Place/>}/>
            <Route path = "/*" element = {<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
