import { Flex } from "@chakra-ui/react"
import { wrap } from "framer-motion"
import { useState } from "react"
import Card3, { Card } from "./Card3"
import Card2 from "./Card2"
import { CardStyle, DeixarRoll, Posicaodocard } from "./Style"


export const PokemonCard2 = (props) =>{


    // console.log(props.pokemons)
    // const {setPokemonsEscolhidos,pokemonsEscolhidos,pokemons2} =props 
    // console.log(pokemonsEscolhidos)
    // console.log(props.pokemonsEscolhidos)

    // console.log(pokemons2)
    return(
         <Posicaodocard>
            {props.pokemonsEscolhidos.map((pokemon, index) =>{
                return(
                    <Card3  detalhe = {props.detalhe} setDetalhe ={props.setDetalhe} setPokemonsEstanosEscolhidos = {props.setPokemonsEstanosEscolhidos} pokemonEstanosescolhidos = {props.pokemonEstanosescolhidos} key={index} pokemon = {pokemon} pokemonsEscolhidos= {props.pokemonsEscolhidos} setPokemonsEscolhidos = {props.setPokemonsEscolhidos} pokemons = {props.pokemons} setPokemons = {props.setPokemons}/>
                )
            })}
        </Posicaodocard>

    )
}