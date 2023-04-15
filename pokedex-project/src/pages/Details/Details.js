import React, {useEffect} from "react";
import { DetailCard } from './DetailCard'
import { DetailsHeader } from '../../components/Header/Headers';
import { PageStyle } from "../MainStyle";

export const DetailsPage = (props) => {
 
    const pokeDetails = localStorage.getItem("Detail");
    const newDetails = [JSON.parse(pokeDetails)];
    console.log(newDetails)   

     
    return (
        <>
        <DetailsHeader
        details={props.details}
        pokedex={props.pokedex}/>
        <PageStyle>
        <div className ="details-page">
           <span>Detalhes</span>
           {DetailCard(newDetails)}
            </div>
        </PageStyle>
        </>
    )
}