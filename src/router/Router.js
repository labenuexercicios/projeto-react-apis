import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";
import Detalhes from "../pages/Detalhes/Detalhes";

import React from 'react'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pokedex" element={<Pokedex/>}/>
            <Route path="/detalhes/:id" element={<Detalhes/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router