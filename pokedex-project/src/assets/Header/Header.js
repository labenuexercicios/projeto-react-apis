import React from "react";
import { HeaderStyle } from "./styledHeader";

export const Header = (props) => {
    
    const HeaderButton = () => {
        if(props.page === 0) {
            return (
                <>
                <button id="pokedex-button" onClick={() => props.setPage(1)}>
                    Pokédex
                </button>
                </>
            )
        } if(props.page === 1) {
            return (
                <>
                <button id="remove-button">
                    Excluir da Pokédex
                </button>
                </>
        ) }
    }
   
    const ReturnButton = () => {
        if(props.page > 0) {
            return (
                <p id="return" onClick={() => props.setPage(0)}>Todos os Pokémons</p>
            )
        }
    }

    return (
        <HeaderStyle>
        <ReturnButton/>
        <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="pokeLogo"/>
        <HeaderButton/>
        </HeaderStyle>
    )
}