import React from "react";
import { HeaderStyle, DexButton, BackButton, HomeButton } from "./styledHeader";
import {IoIosArrowBack} from 'react-icons/io'
import { goToPokedex, goToHome } from "../../routes/coordinator";
import { useNavigate } from 'react-router-dom';

export const HomeHeader = () => {
 
    const navigate = useNavigate()

    return (
        <HeaderStyle>
        <HomeButton onClick={() => goToPokedex(navigate)}>Pokedex</HomeButton>
        <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="pokeLogo"/>
        </HeaderStyle>
    )
}

export const DexHeader = () => {

    const navigate = useNavigate()

    return (
        <HeaderStyle>
        <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="pokeLogo"/>
        <BackButton onClick={() => goToHome(navigate)}> <IoIosArrowBack/>Todos os pokémons</BackButton>
        </HeaderStyle>
    )

}

export const DetailsHeader = () => {
 
    const navigate = useNavigate()

    return (
        <HeaderStyle>
        <DexButton>Excluir da Pokedex</DexButton>
        <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="pokeLogo"/>
        <BackButton onClick={() => goToHome(navigate)}> <IoIosArrowBack/>Todos os pokémons</BackButton>
        </HeaderStyle>
    )
}