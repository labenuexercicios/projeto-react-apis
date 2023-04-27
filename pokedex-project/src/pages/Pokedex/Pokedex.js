import React from "react";
import { CardsContainer } from "../MainStyle";
import { PageStyle } from "../MainStyle";
import { DexHeader } from '../../components/Header/Headers';
import { PokeCard } from "../../components/PokeCard/PokeCard";
import { useNavigate } from "react-router-dom";

export const Pokedex = (props) => {

    const navigate= useNavigate()
    const [pokemons, pokedex] = props.states

    
    return (
        <>
        <DexHeader/>
        <PageStyle>
        <p id="top">Meus pokemons</p>
        <CardsContainer>
        <PokeCard
         states={props.states}
         array={pokedex}/>
            </CardsContainer>
        </PageStyle>
        </>
    )
}