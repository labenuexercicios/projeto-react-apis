import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListPage } from "../Pages/PokemonListPage/PokemonListPage";
import { DetailPage } from "../Pages/PokemonDetailPage/PokemonDetailPage";
import { PokedexPage } from "../Pages/PokedexPage/PokedexPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
