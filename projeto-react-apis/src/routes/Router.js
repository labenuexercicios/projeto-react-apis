import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { DetailPage } from "../pages/DetailPage/DetailPage";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/detail/:variable" element={<DetailPage />} />
        <Route path="/pokedex/:variable" element={<PokedexPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
