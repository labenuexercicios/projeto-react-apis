import React from "react";
import { HeaderPagLista } from "../../Componentes/Header/HeaderPagLista/HeaderPagLista";
import { PokemonCard } from "../../Componentes/PokemonCard/PokemonCard";
import { PokedexListaCss } from "../PokedexLista/Style";



export const Pokedexdetalhe = (props) =>{
    const pokemons = props.pokemonsEscolhidos
    console.log(pokemons)
    console.log("pokemons escolhidos:", props.pokemonsEscolhidos)

    return(
        <PokedexListaCss>
            <PokemonCard pokemons = {pokemons} pokemonsEscolhidos= {props.pokemonsEscolhidos} setPokemonsEscolhidos = {props.setPokemonsEscolhidos} />
        </PokedexListaCss>
    )
}

export default Pokedexdetalhe;