import React from "react";
import { json } from "react-router-dom";
import { HeaderPagDetalhe } from "../../Componentes/Header/HeaderPagDetalhe/HeaderPagDetalhe";
import { HeaderPagLista } from "../../Componentes/Header/HeaderPagLista/HeaderPagLista";
import { HeaderPagListaCss2 } from "../../Componentes/Header/HeaderPagLista/Style";
import { PokemonCard } from "../../Componentes/PokemonCard/PokemonCard";
import { PokemonCard2 } from "../../Componentes/PokemonCard/PokemonCard2";
import { Posicaodocard } from "../../Componentes/PokemonCard/Style";
import { PokedexListaCss } from "../PokedexLista/Style";



export const Pokedexdetalhe = (props) =>{
        // console.log(pokemons)
    console.log("pokemons escolhidos:", props.pokemonsEscolhidos)
    
    const pegaospokemons = JSON.parse(localStorage.getItem("Pokemons escolhidos"))
    console.log("Os pokemons que estao no local:", pegaospokemons)
    let pokemons2 = pegaospokemons


    return(
        <PokedexListaCss>
            <HeaderPagDetalhe navigate = {props.navigate}/>
            <HeaderPagListaCss2>
            <h1>TODOS OS POKEMONS</h1>
            </HeaderPagListaCss2> 
            <Posicaodocard>
            <PokemonCard2 detalhe = {props.detalhe} setDetalhe ={props.setDetalhe} pokemons2 = {pokemons2} pokemonsEscolhidos= {props.pokemonsEscolhidos} setPokemonsEscolhidos = {props.setPokemonsEscolhidos} />
            </Posicaodocard>
        </PokedexListaCss>
    )
}

export default Pokedexdetalhe;