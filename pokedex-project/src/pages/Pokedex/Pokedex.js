import React from "react";
import { CardsContainer } from "../MainStyle";
import { PageStyle } from "../MainStyle";
import { DexHeader } from '../../components/Header/Headers';
import { generateCard } from "../../components/PokeCard";
import { useNavigate } from "react-router-dom";

export const Pokedex = (props) => {

    const navigate= useNavigate()
    
    console.log(props.pokedex)

    return (
        <>
        <DexHeader/>
        <PageStyle>
        <CardsContainer>
        {generateCard(props.pokedex, props.pokedex, props.setPokedex, navigate)}
            </CardsContainer>
        </PageStyle>
        </>
    )
}