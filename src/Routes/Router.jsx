import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Details from "../components/Details/Details";
import Pokedex from "../components/Pokedex/Pokedex";
import NotFound from "../components/NotFound/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}
        />
        <Route path="/pokedex" element={<Pokedex />}
        />
        <Route path="/details/:name" element={ <Details />}
        />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
