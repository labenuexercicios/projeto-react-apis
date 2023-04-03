import React from "react";
import Header from "./Components/Header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PokemonList from "./Pages/PokemonsList/PokemonList";
import Pokedex from "./Pages/Pokedex/Pokedex";
import PokemonDetail from "./Pages/PokemonDetail/PokemonDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PokemonList />} path="/" exact />
        <Route element={<Pokedex />} path="/pokedex" exact />
        <Route element={<PokemonDetail />} path="/detail/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
