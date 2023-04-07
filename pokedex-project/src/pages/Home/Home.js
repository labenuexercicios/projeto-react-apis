import React, { useEffect } from "react";
import { HomeHeader } from '../../components/Header/Headers';
import { CardsContainer } from '../MainStyle'
import { generateCard } from "../../components/PokeCard";
import { PageStyle } from "../MainStyle";
import { useNavigate } from 'react-router-dom';

export const HomePage = (props) => {

    const navigate = useNavigate()
    return (
        <>
            <HomeHeader />
            <PageStyle>
                <CardsContainer>
                    {generateCard(props.pokemons, props.pokedex, props.setPokedex, navigate)}
                </CardsContainer>
            </PageStyle>
        </>
    )
}     
