import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from "../components/Detail/Detail"
import Home from "../components/Home/Home"
import Pokedex from "../components/Pokedex/Pokedex"

const Router = () => {
    
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pokedex" element={<Pokedex/>} />
        <Route path={`/detalhes/:name`} element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  )
}
  
  export default Router;