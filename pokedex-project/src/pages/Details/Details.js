import React from "react";
import { DexHeader } from '../../components/Header/Headers';
import { DetailsStyle } from "./styledDetails";

export const DetailsPage = (props) => {
    return (
        <>
        <DexHeader/>
        <DetailsStyle>
        <div className ="details-page" id = {props.page === 2 ? "visible" : "invisible"}>
           A 
           </div>
        </DetailsStyle>
        </>
    )
}