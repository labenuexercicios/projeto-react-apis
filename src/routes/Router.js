import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import Header from "../components/Header/Header";
function Router() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/details" element={<DetailsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
