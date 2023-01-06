import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";
import { ErrorPage } from "../pages/ErrorPage";
import React from 'react'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<ErrorPage/>}/>           
            <Route path="/" element={<Home/>}/>
            <Route path="/pokedex" element={<Pokedex/>}/>
            <Route path="/details/:name" element={<Details/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router