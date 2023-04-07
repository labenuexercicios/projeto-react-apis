import React from "react";
import { CardsContainerStyle } from "./styledCard";
import { PokemonCard } from "./PokemonCard";


export const PokeCards = (props) => {

    console.log(props.pokemons)
    
    return (
        <CardsContainerStyle>
            <PokemonCard 
            pokemons = {props.pokemons}/>
        </CardsContainerStyle>
    )
}
