import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailsPage } from '../pages/Details/Details';
import { Pokedex } from '../pages/Pokedex/Pokedex';
import { HomePage } from '../pages/Home/Home';

export default function Router (props) {

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={
            <HomePage
            pokemons={props.pokemons}
            pokedex={props.pokedex}
            setPokedex={props.setPokedex}/>
            }/>
        
            <Route path="/pokedex" element={
            <Pokedex/>
            }/>

            <Route path="/details" element={
            <DetailsPage/>
            }/>

        </Routes>
        </BrowserRouter>
    )

}