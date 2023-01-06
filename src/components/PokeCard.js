import {
    PokeCardBackground,
    PokeCardImageBackground,
    PokeCardId,
    PokeCardImage,
    PokeCardName,
    PokeCardType1,
    PokeCardType2,
    PokeDetailsButton,
    PokeCatchButton,
    PokeReleaseButton,
    PokeDetailsBackground,
    PokeDetailsImage,
    PokeDetailsName,
    PokeDetailsId,
    PokeDetailsSpriteFront,
    PokeDetailsSpriteBack,
    PokeDetailsStatsBackground,
    PokeDetailsBaseStats,
    PokeDetailsMovesBackground,
    PokeDetailsBaseText,
    PokeDetailsMove1,
    PokeDetailsMove2,
    PokeDetailsMove3,
    PokeDetailsMove4,
} from "./styled-components";
import PokeBall from "../images/card/pokeball.png"
import { PokemonContext } from "../contexts/PokeListContext";
import { useContext } from "react";
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
import { useNavigate } from "react-router-dom";
import { theme } from "../themes/themes";
import { useState } from "react";
import { Flex, Progress } from "@chakra-ui/react";

export const FreePokeCards = () => {

    const context = useContext(PokemonContext)
    const {
        pokeList, setPokeList,
        caughtPokemons, setCaughtPokemons,
        pokeForDetails, setPokeForDetails
    } = context
    console.log(pokeList)
    let navigate = useNavigate()

    const goToPokemonDetails = (e) => {
        setPokeForDetails(pokeList[e.target.id - 1])
        console.log(pokeForDetails)
        navigate('../details')
    }

    const catchPokemon = (e) => {
        setCaughtPokemons([...caughtPokemons, pokeList[e.target.id - 1]])
        console.log(caughtPokemons)
    }

    let freePokemons = pokeList.filter((pokemon) => !caughtPokemons.includes(pokemon))
    console.log(freePokemons)
    return (
        freePokemons.map((pokemon) => {
            if (pokemon.types.length === 1) {
                return <PokeCardBackground key={pokemon.id}>
                    <PokeCardId>{pokemon.id}</PokeCardId>
                    <PokeCardName>{(pokemon.name).replace(`${pokemon.name[0]}`, `${pokemon.name[0].toUpperCase()}`)}</PokeCardName>
                    <PokeCardImage src={pokemon.sprites.other["official-artwork"].front_default} />
                    <PokeCardType1 src={pokemon.types[0].type.name}></PokeCardType1>
                    <PokeDetailsButton onClick={goToPokemonDetails} id={pokemon.id}>Detalhes</PokeDetailsButton>
                    <PokeCatchButton onClick={catchPokemon} id={pokemon.id}>Capturar!</PokeCatchButton>
                </PokeCardBackground>
            }
            else {
                return <PokeCardBackground key={pokemon.id}>
                    <PokeCardId>{pokemon.id}</PokeCardId>
                    <PokeCardName>{(pokemon.name).replace(`${pokemon.name[0]}`, `${pokemon.name[0].toUpperCase()}`)}</PokeCardName>
                    <PokeCardImage src={pokemon.sprites.other["official-artwork"].front_default} />
                    <PokeCardType1 src={pokemon.types[0].type.name}></PokeCardType1>
                    <PokeCardType2 src={pokemon.types[1].type.name}></PokeCardType2>
                    <PokeDetailsButton onClick={goToPokemonDetails} id={pokemon.id}>Detalhes</PokeDetailsButton>
                    <PokeCatchButton onClick={catchPokemon} id={pokemon.id}>Capturar!</PokeCatchButton>
                </PokeCardBackground>
            }
        }

        )
    )
}

export const CaughtPokeCards = () => {

    const context = useContext(PokemonContext)
    const {
        pokeList, setPokeList,
        caughtPokemons, setCaughtPokemons,
        pokeForDetails, setPokeForDetails
    } = context
    console.log(pokeList)
    let navigate = useNavigate()

    const goToPokemonDetails = (e) => {
        setPokeForDetails(pokeList[e.target.id - 1])
        navigate('../details')
    }

    const releasePokemon = (e) => {
        let newCaughtPokemons = caughtPokemons.filter((pokemon) => pokemon.id != e.target.id)
        console.log(newCaughtPokemons)
        setCaughtPokemons(newCaughtPokemons)
        console.log(caughtPokemons)
    }
    return (
        caughtPokemons.map((pokemon) => {
            if (pokemon.types.length === 1) {
                return <PokeCardBackground key={pokemon.id}>
                    <PokeCardId>{pokemon.id}</PokeCardId>
                    <PokeCardName>{(pokemon.name).replace(`${pokemon.name[0]}`, `${pokemon.name[0].toUpperCase()}`)}</PokeCardName>
                    <PokeCardImage src={pokemon.sprites.other["official-artwork"].front_default} />
                    <PokeCardType1 src={pokemon.types[0].type.name}></PokeCardType1>
                    <PokeDetailsButton onClick={goToPokemonDetails} id={pokemon.id}>Detalhes</PokeDetailsButton>
                    <PokeReleaseButton onClick={releasePokemon} id={pokemon.id}>Soltar!</PokeReleaseButton>
                </PokeCardBackground>
            }
            else {
                return <PokeCardBackground key={pokemon.id}>
                    <PokeCardId>{pokemon.id}</PokeCardId>
                    <PokeCardName>{(pokemon.name).replace(`${pokemon.name[0]}`, `${pokemon.name[0].toUpperCase()}`)}</PokeCardName>
                    <PokeCardImage src={pokemon.sprites.other["official-artwork"].front_default} />
                    <PokeCardType1 src={pokemon.types[0].type.name}></PokeCardType1>
                    <PokeCardType2 src={pokemon.types[1].type.name}></PokeCardType2>
                    <PokeDetailsButton onClick={goToPokemonDetails} id={pokemon.id}>Detalhes</PokeDetailsButton>
                    <PokeReleaseButton onClick={releasePokemon} id={pokemon.id}>Soltar!</PokeReleaseButton>
                </PokeCardBackground>
            }
        }

        )
    )
}

export const PokeDetailsCard = () => {
    const context = useContext(PokemonContext)
    const { pokeForDetails } = context
    return (
        <PokeDetailsBackground>
            <PokeDetailsImage src={pokeForDetails.sprites.other["official-artwork"].front_default} alt={pokeForDetails.name} />
            <PokeDetailsId>#{pokeForDetails.id}</PokeDetailsId>
            <PokeDetailsName>{(pokeForDetails.name).replace(`${pokeForDetails.name[0]}`, `${pokeForDetails.name[0].toUpperCase()}`)}</PokeDetailsName>
            <PokeDetailsSpriteFront src={pokeForDetails.sprites.front_default} />
            <PokeDetailsSpriteBack src={pokeForDetails.sprites.back_default} />
            <PokeDetailsStatsBackground>
                <PokeDetailsBaseStats>
                    <PokeDetailsBaseText>Base stats</PokeDetailsBaseText>
                    {(pokeForDetails.stats[0].stat.name).toUpperCase()}: {pokeForDetails.stats[0].base_stat}<Progress value={pokeForDetails.stats[0].base_stat} mb="16px"/>
                    {(pokeForDetails.stats[1].stat.name).toUpperCase()}: {pokeForDetails.stats[1].base_stat}<Progress value={pokeForDetails.stats[1].base_stat} mb="16px"/>
                    {(pokeForDetails.stats[2].stat.name).toUpperCase()}: {pokeForDetails.stats[2].base_stat}<Progress value={pokeForDetails.stats[2].base_stat} mb="16px"/>
                    {(pokeForDetails.stats[3].stat.name).toUpperCase().replace('-', ' ')}: {pokeForDetails.stats[3].base_stat}<Progress value={pokeForDetails.stats[3].base_stat} mb="16px"/>
                    {(pokeForDetails.stats[4].stat.name).toUpperCase().replace('-', ' ')}: {pokeForDetails.stats[4].base_stat}<Progress value={pokeForDetails.stats[4].base_stat} mb="16px"/>
                    {(pokeForDetails.stats[5].stat.name).toUpperCase()}: {pokeForDetails.stats[5].base_stat}<Progress value={pokeForDetails.stats[5].base_stat} mb="16px"/>
                </PokeDetailsBaseStats>
            </PokeDetailsStatsBackground>
            <PokeDetailsMovesBackground>
                <PokeDetailsMove1>{(pokeForDetails.moves[0].move.name).replace('-', ' ')}</PokeDetailsMove1>
                <PokeDetailsMove2>{(pokeForDetails.moves[1].move.name).replace('-', ' ')}</PokeDetailsMove2>
                <PokeDetailsMove3>{(pokeForDetails.moves[2].move.name).replace('-', ' ')}</PokeDetailsMove3>
                <PokeDetailsMove4>{(pokeForDetails.moves[3].move.name).replace('-', ' ')}</PokeDetailsMove4>
            </PokeDetailsMovesBackground>
        </PokeDetailsBackground>
    )
} 