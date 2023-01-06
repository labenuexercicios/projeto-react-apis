import { Flex } from "@chakra-ui/react"
import {
    Header, Logo, PokeDexButton,
    PokeSection, PageTitle, PokeCardsList
} from "../components/styled-components" //componentes geral da página
import { FreePokeCards } from "../components/PokeCard" //componente que guarda as pokecards
import logo from "../images/pokemon-logo.png" //logo do pokemon
import { PokemonContext } from "../contexts/PokeListContext" //contexto pro estado global
import { useContext, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import bug from "../images/types/bug-type.png"
import dark from "../images/types/dark-type.png"
import dragon from "../images/types/dragon-type.png"
import electric from "../images/types/electric-type.png"
import fairy from "../images/types/fairy-type.png"
import fighting from "../images/types/fighting-type.png"
import fire from "../images/types/fire-type.png"
import flying from "../images/types/flying-type.png"
import ghost from "../images/types/bug-type.png"
import grass from "../images/types/grass-type.png"
import ground from "../images/types/ground-type.png"
import ice from "../images/types/ice-type.png"
import normal from "../images/types/normal-type.png"
import poison from "../images/types/poison-type.png"
import psychic from "../images/types/psychic-type.png"
import rock from "../images/types/rock-type.png"
import steel from "../images/types/steel-type.png"
import water from "../images/types/water-type.png"

export const Home = () => {
    // Espaço para estados e contextos
    const context = useContext(PokemonContext)
    const {
        pokeList, setPokeList,
        caughtPokemons, setCaughtPokemons,
        pokeForDetail, setPokeForDetail } = context

    console.log(pokeList[0].types)

    // Funções para os botões de capturar e ver detalhes

    const navigate = useNavigate()

    return (
        <Flex bg='grey' direction='column' w='1440px' h='2455px'>
            <Header>
                <Logo src={logo} alt="PokemonLogo" />
                <PokeDexButton onClick={() => navigate("../pokedex")}>PokéDex</PokeDexButton>
            </Header>
            <PageTitle>Todos os Pokémons</PageTitle>
            <PokeCardsList>
                <FreePokeCards />
            </PokeCardsList>
        </Flex>
    )
}