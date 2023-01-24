import { BrowserRouter, Routes, Route } from "react-router-dom"
import Desktop1 from "../pages/desktop1"
import PokedexPage from "../pages/desktop2";
import Detalhes from "../pages/desktop3";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Desktop1 />} />

                <Route path="/pokedex/:showButton" element={<PokedexPage />}
                />

                <Route path="/details/:showButton" element={<Detalhes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
