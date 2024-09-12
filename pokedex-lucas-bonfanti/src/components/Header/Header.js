import React, { useState } from 'react';
import { Container, LogoPokemon, PokedexButton } from "./styled";
import logo from "../../assets/pokemon.png"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

    const url = window.location.pathname
    
    const [buttonHeader, setButtonHeader] = useState("Pokedex")

    const handlerbuttonHeader = () => {
        if (url === "/") {
            goToPokedex()
            setButtonHeader("Voltar")
        }
        if (url !== "/") {
            goToHome()
            setButtonHeader("Pokedex")
        }
    }
       
    const goToPokedex = () => {
        navigate("/pokedex")
    }
    const goToHome = () => {
        navigate("/")
    }
    return (
        <Container>
            <LogoPokemon src={logo} alt="logo-pokemon.jpg" onClick={() => goToHome()} />
            <PokedexButton onClick={() => handlerbuttonHeader()}>{buttonHeader}</PokedexButton>
        </Container>
    )
}

export default Header