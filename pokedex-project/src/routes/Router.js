import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailsPage } from '../pages/Details/Details';
import { Pokedex } from '../pages/Pokedex/Pokedex';
import { HomePage } from '../pages/Home/Home';

export default function Router (props) {

    const [pokemons, pokedex, setPokedex, details, setDetails, path, setPath] = props.states

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage states={props.states}/>}/>
            <Route path="/pokedex" element={<Pokedex states={props.states}/>}/>
            <Route path="/details" 
            element={<DetailsPage 
            details={details}
            setDetails={setDetails}
            setPokedex={setPokedex}
            pokedex={pokedex}
            />}/>
        </Routes>
        </BrowserRouter>
    )
}