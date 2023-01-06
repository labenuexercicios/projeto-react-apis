import {
    Header, Logo, PokeHomeButton, PokeDexButton,
    PokeSection, PageTitle,
    PokeCardsSection
} from "../components/styled-components"
import logo from "../images/pokemon-logo.png"
import { useNavigate } from "react-router-dom"
import { Flex } from "@chakra-ui/react"
import BigPokeBall from "../images/card/pokeballbig.png"
import { PokeDetailsCard } from "../components/PokeCard"

export const Details = () => {
    let navigate = useNavigate()
    return (
        <Flex bg='grey' bgImage={BigPokeBall} w='1440px' h='2455px'>
            <Header>
                <Logo src={logo} alt="PokemonLogo"></Logo>
                <PokeHomeButton onClick={() => navigate("../home")}>Todos os Pokémons</PokeHomeButton>
                <PokeDexButton onClick={() => navigate("../pokedex")}>PokéDex</PokeDexButton>
            </Header>
            <PageTitle>Detalhes</PageTitle>
            <PokeDetailsCard />
        </Flex>
    )
}