import React from "react";
import { HomeStyle } from "./styledHome";
import { PokeCard } from "../PokemonCard/Card";

export const Home = (props) => {
    
    return (
        <HomeStyle>
            <div className="cards-container">
            <PokeCard
            pokemons={props.pokemons}/>
            </div>
        </HomeStyle>
    )
}