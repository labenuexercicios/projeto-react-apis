import React from "react";
import { HomeStyle } from "./styledHome";
import { PokeCard } from "../PokemonCard/Card";

export const Home = (props) => {
    
    return (
        <HomeStyle>
            A
            <PokeCard
            pokemons={props.pokemons}/>
        </HomeStyle>
    )
}