import React, { useEffect } from "react";
import { HomeHeader } from '../../components/Header/Headers';
import { CardsContainer } from '../MainStyle'
import { GenerateCard } from "../Pokedex/PokeCard";
import { PageStyle } from "../MainStyle";
import { goToDetails } from "../../routes/coordinator";
import { useNavigate } from 'react-router-dom';

export const HomePage = (props) => {

    const navigate = useNavigate()
    const DetailsPath = () => {
        goToDetails(navigate)
    }
    
    return (
        <>
            <HomeHeader />
            <PageStyle>
                <CardsContainer>
                    {GenerateCard(props.pokemons, props.pokedex, props.setPokedex, props.setDetails)}
                </CardsContainer>
            </PageStyle>
        </>
    )
}     
