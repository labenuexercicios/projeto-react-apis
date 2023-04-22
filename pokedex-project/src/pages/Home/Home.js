import React, { useEffect } from "react";
import { HomeHeader } from '../../components/Header/Headers';
import { CardsContainer } from '../MainStyle'
import { PokeCard } from "../../components/PokeCard/PokeCard";
import { PageStyle } from "../MainStyle";

export const HomePage = (props) => {

    const [pokemons, pokedex, setDex, details, setDetails, path, setPath] = props.states  


    return (
        <>
            <HomeHeader />
            <PageStyle>
                <p id="top">Todos os pokemons</p>
                <CardsContainer>
                    <PokeCard
                    states={props.states}
                    array={pokemons}/>
                </CardsContainer>
            </PageStyle>
        </>
    )
}     
