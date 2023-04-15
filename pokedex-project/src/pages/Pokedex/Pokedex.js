import React from "react";
import { CardsContainer } from "../MainStyle";
import { PageStyle } from "../MainStyle";
import { DexHeader } from '../../components/Header/Headers';
import { GenerateCard } from "./PokeCard";
import { useNavigate } from "react-router-dom";

export const Pokedex = (props) => {

    const navigate= useNavigate()
    
    console.log(props.pokedex)

    return (
        <>
        <DexHeader/>
        <PageStyle>
        <CardsContainer>
        {GenerateCard(props.pokedex, props.pokedex, props.setPokedex, navigate)}
            </CardsContainer>
        </PageStyle>
        </>
    )
}