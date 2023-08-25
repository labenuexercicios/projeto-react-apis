import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header/Header";
import { HomePage } from "../pages/HomePage/HomePage";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage";
import { DetailPokemon } from "../components/DetailPokemon/detailPokemon";

export default function Router({ pokemons }) {
  
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" 
        element={
            <HomePage/>
          }
        />
        ;
        <Route path="/pokedex"
          element={
            <PokedexPage/>
          }
        />
        ;
        <Route path="/detalhesPokemon/:pokemonId"
          element={
            <DetailPokemon/>
          }
        />
        ;
      </Routes>
    </BrowserRouter>
  );
}
