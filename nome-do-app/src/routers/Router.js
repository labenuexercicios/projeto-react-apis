import { BrowserRouter, Routes, Route } from "react-router-dom"
import Desktop1 from "../pages/desktop1"
import Desktop3 from "../pages/desktop3";

function Router(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Desktop1
                    pokemons={props.pokemons} setPokemons={props.setPokemons}
                    pokedex={props.pokedex} setPokedex={props.setPokedex}
                    showCart={props.showCart} setShowCart={props.setShowCart}
                />} />

                <Route path="/Desktop3" element={<Desktop3 />}
                    showCart={props.showCart} setShowCart={props.setShowCart}
                    pokedex={props.pokedex} setPokedex={props.setPokedex}
                    pokemons={props.pokemons} setPokemons={props.setPokemons}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
