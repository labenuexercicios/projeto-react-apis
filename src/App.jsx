import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonListPage from "./Pages/PokemonListPage/PokemonListPage";
import PokemonDetailPage from "./Pages/PokemonDetailPage/PokemonDetailPage";
import PokedexPage from "./Pages/PokedexPage/PokedexPage";
import { PokedexContext } from "./Global/GlobalState";
import Header from "./Components/Header/Header";

export default function App() {
  const [pokedex, setPokedex] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <PokedexContext.Provider
          value={{
            pokedex: pokedex,
            setPokedex: setPokedex,
          }}
        >
          <Routes>
            <Route index element={<PokemonListPage></PokemonListPage>}></Route>
            <Route
              path="/detalhes"
              element={<PokemonDetailPage></PokemonDetailPage>}
            ></Route>
            <Route
              path="/pokedex"
              element={<PokedexPage></PokedexPage>}
            ></Route>
          </Routes>
        </PokedexContext.Provider>
      </BrowserRouter>
    </div>
  );
}
