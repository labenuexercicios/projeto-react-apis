import { Flex } from "@chakra-ui/react"
import { wrap } from "framer-motion"
import { useState } from "react"
import Card3, { Card } from "./Card3"
import Card2 from "./Card2"
import { CardStyle, DeixarRoll } from "./Style"


export const PokemonCard2 = (props) =>{


    console.log(props.pokemons)
    const {pokemons2} =props 

    console.log(pokemons2)
    return(
         <div gap={10}>
            {pokemons2.map((pokemon, index) =>{
                return(
                    <Card3 pokemons2 = {pokemons2} key={index} pokemon = {pokemon} pokemonsEscolhidos= {props.pokemonsEscolhidos} setPokemonsEscolhidos = {props.setPokemonsEscolhidos}/>
                )
            })}
        </div>

    )
}