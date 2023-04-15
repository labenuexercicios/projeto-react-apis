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

export const DetailsHeader = (props) => {
 
    const navigate = useNavigate()
    
    const PageButton = () => {
        for(let i = 0; i < props.pokedex.length; i++){
            if(props.details.name === props.pokedex[i].name) {
                return(
                    <>
                    <DexButton>Excluir da Pokedex</DexButton>
                    <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="pokeLogo"/>
                    </>
                )
            } return (
                <>
                <HomeButton onClick={() => goToPokedex(navigate)}>Pokedex</HomeButton>
                <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="pokeLogo"/>
                </>
            )
        }
    }

    return (
        <HeaderStyle>
        <PageButton/>
        <BackButton onClick={() => goToHome(navigate)}> <IoIosArrowBack/>Todos os pokémons</BackButton>
        </HeaderStyle>
    )
}