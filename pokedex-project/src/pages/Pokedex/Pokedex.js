import React from "react";
import { PokedexStyle } from "./styledPokedex";
import { DexHeader } from '../../components/Header/Headers';

export const Pokedex = (props) => {
    return (
        <>
        <DexHeader/>
        <PokedexStyle>
        <div className="pokedex">
        AddUsuario
        </div>
        </PokedexStyle>
        </>
    )
}