import React from "react";
import { HeaderStyle, DexButton, BackButton, HomeButton } from "./styledHeader";
import {IoIosArrowBack} from 'react-icons/io'
import { goToPokedex, goToHome } from "../../routes/coordinator";
import { useNavigate } from 'react-router-dom';
import { removeMon } from "../../assets/Functions";

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
        <img id="dex-logo" src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="pokeLogo"/>
        <BackButton onClick={() => goToHome(navigate)}> <IoIosArrowBack/>Todos os pokémons</BackButton>
        </HeaderStyle>
    )

}

export const DetailsHeader = (props) => {
    
    const [pokemons, pokedex, details, setPokedex, setDetails] = props.states

    const navigate = useNavigate()
    const foundElement = pokedex.find((item) => item.name === details.name);

    const PageButton = () => {
            if(foundElement) {
                return(
                    <>
                    <DexButton onClick={() => removeMon(pokedex, details, setPokedex)}>Excluir da Pokedex</DexButton>
                    </>
                )
            } else {
                return (
                <>
                <HomeButton onClick={() => goToPokedex(navigate)}>Pokedex</HomeButton>
                </>
            )
        }
    }

    return (
        <HeaderStyle>
        <PageButton/>
        <BackButton onClick={() => goToHome(navigate)}> <IoIosArrowBack/>Todos os pokémons</BackButton>
        <img id="dex-logo" src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="pokeLogo"/>
        </HeaderStyle>
    )
}