import Home from '../pages/Home'
import Detalhes from '../pages/Detalhes'
import Pokedex from '../pages/Pokedex'
import Error from '../pages/Error'
import EasterEgg from '../pages/EasterEgg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='pokemon/:name' element={<Detalhes />} />
        <Route path='pokedex' element={<Pokedex />} />
        <Route path='*' element={<Error />} />
        <Route path='easterEgg' element={<EasterEgg />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
