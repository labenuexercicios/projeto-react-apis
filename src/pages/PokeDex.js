import {
    Header, Logo, PokeHomeButton,
    PokeSection, PageTitle,
    PokeCardsSection,
    PokeCardsList
} from "../components/styled-components"
import logo from "../images/pokemon-logo.png"
import { useNavigate } from "react-router-dom"
import { Flex } from "@chakra-ui/react"
import { CaughtPokeCards } from "../components/PokeCard"

export const PokeDex = () => {
    const navigate = useNavigate()

    return (
        <Flex bg='grey' position='relative' w='1440px' h='2455px'>
        <Header>
            <Logo src={logo} alt="PokemonLogo"></Logo>
            <PokeHomeButton onClick={() => navigate("/home")}>Todos os Pokémons</PokeHomeButton>
        </Header>
            <PageTitle>PokéDex</PageTitle>
            <PokeCardsList>
                <CaughtPokeCards />
            </PokeCardsList>
        </Flex>
    )
}