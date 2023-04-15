import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailsPage } from '../pages/Details/Details';
import { Pokedex } from '../pages/Pokedex/Pokedex';
import { HomePage } from '../pages/Home/Home';


export default function Router (props) {

    const [pokemons, setPokemons, pokedex, setPokedex, details, setDetails] = props.states

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={
            <HomePage
            pokemons={pokemons}
            setPokemons={setPokemons}
            pokedex={pokedex}
            setPokedex={setPokedex}
            setDetails={setDetails}/>
            }/>
        
            <Route path="/pokedex" element={
            <Pokedex
            pokedex={pokedex}
            setPokedex={setPokedex}
            details={details}
            setDetails={setDetails}/>
            }/>

            <Route path="/details" element={
            <DetailsPage
            details={details}
            setDetails={setDetails}
            pokedex={pokedex}/>
            }/>

        </Routes>
        </BrowserRouter>
    )

}