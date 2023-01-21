import { BrowserRouter, Routes, Route } from "react-router-dom"
import Desktop1 from "../pages/desktop1"
import Desktop2 from "../pages/desktop2";
import Desktop3 from "../pages/desktop3";

function Router(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Desktop1
                    pokemons={props.pokemons} setPokemons={props.setPokemons}
                />} />
                <Route path="/Desktop2" element={<Desktop2 />} />
                <Route path="/Desktop3" element={<Desktop3 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
