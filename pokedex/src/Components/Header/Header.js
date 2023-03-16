import { Button, Heading, Text } from "@chakra-ui/react"
import { StyledButton, StyledHeader, styledHeader, StyledImg, StyledP, StyledBack, StyledBackDiv } from "./StyledHeader"
import Logo from "../../Assets/PokemonLogo.png"
import { useNavigate, useLocation } from "react-router-dom"
import { goToMyPokedexPage, goToPokedexPage } from "../../Routes/coordinator"


export const Header = () => {
    const navigate = useNavigate()

    const location = useLocation()//Fazer renderizção condicional do header com isso aqui
    const rotaAtual = location.pathname;
    console.log(rotaAtual)

    return (
        <StyledHeader>
            <StyledBack onClick = {()=>goToPokedexPage(navigate)}>{"<"}Todos Pokemons</StyledBack>
            <StyledImg src={Logo} />
            <StyledButton onClick={() => goToMyPokedexPage(navigate)}>
                <StyledP>Pokedéx</StyledP>
            </StyledButton>
        </StyledHeader>
    )
}