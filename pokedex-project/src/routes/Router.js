import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailsPage } from '../pages/Details/Details';
import { Pokedex } from '../pages/Pokedex/Pokedex';
import { HomePage } from '../pages/Home/Home';

export default function Router (props) {

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage states={props.states}/>}/>
            <Route path="/pokedex" element={<Pokedex states={props.states}/>}/>
            <Route path="/details" element={<DetailsPage states = {props.states}/>}/>
        </Routes>
        </BrowserRouter>
    )
}