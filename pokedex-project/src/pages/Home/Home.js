import React from "react";
import { HomeHeader } from '../../components/Header/Headers';
import { HomeStyle } from "./styledHome";
import { PokeCards } from "../../components/PokemonCard/Card"

export const HomePage = (props) => {
    
    return (
        <>
        <HomeHeader/>
        <HomeStyle>
            <div className="cards-container">
            <PokeCards
            pokemons={props.pokemons}/>
            </div>
        </HomeStyle>
        </>
    )
}