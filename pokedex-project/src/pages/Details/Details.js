import React from "react";
import { DetailCard } from './DetailCard'
import { DetailsHeader } from '../../components/Header/Headers';
import { PageStyle } from "../MainStyle";

export const DetailsPage = (props) => {

    const pokeDetails = localStorage.getItem("Detail");
    const newDetails = [JSON.parse(pokeDetails)];

    return (
        <>
        <DetailsHeader states={props.states}/>
        <PageStyle>
        <div className ="details-page">
           <span id="title">Detalhes</span>
           {DetailCard(newDetails)}
            </div>
        </PageStyle>
        </>
    )
}