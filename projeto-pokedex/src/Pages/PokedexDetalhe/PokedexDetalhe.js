import React, { useState } from "react";
import { json } from "react-router-dom";
import { HeaderPagDetalhe } from "../../Componentes/Header/HeaderPagDetalhe/HeaderPagDetalhe";
import { HeaderPagLista } from "../../Componentes/Header/HeaderPagLista/HeaderPagLista";
import { HeaderPagListaCss2 } from "../../Componentes/Header/HeaderPagLista/Style";
import { PokemonCard } from "../../Componentes/PokemonCard/PokemonCard";
import { PokemonCard2 } from "../../Componentes/PokemonCard/PokemonCard2";
import { Posicaodocard } from "../../Componentes/PokemonCard/Style";
import { PokedexListaCss } from "../PokedexLista/Style";



export const Pokedexdetalhe = (props) =>{
    // const [jatempokemonselecionado, setJatempokemonselecionado] = useState(true)
    // console.log("pokemons escolhidos:", props.pokemonsEscolhidos)
    
    // const pegaospokemons = JSON.parse(localStorage.getItem("Pokemons escolhidos"))
    // // console.log("Os pokemons que estao no local:", pegaospokemons)
    // if(props.pokemonsEscolhidos.length === 0){
    //     // console.log("to aqui")
    //     props.setPokemonsEscolhidos(pegaospokemons)
    //     setJatempokemonselecionado(true)
    // }
    let pokemons2 = "pegaospokemons"


    return(
        <PokedexListaCss>
            <HeaderPagDetalhe navigate = {props.navigate}/>
            <HeaderPagListaCss2>
            <h1>TODOS OS POKEMONS</h1>
            </HeaderPagListaCss2> 
            {props.pokemonsEscolhidos.length > 0 ? (
            <Posicaodocard>
            <PokemonCard2 setPokemonsEstanosEscolhidos = {props.setPokemonsEstanosEscolhidos} pokemonEstanosescolhidos = {props.pokemonEstanosescolhidos} detalhe = {props.detalhe} setDetalhe ={props.setDetalhe} pokemons2 = {pokemons2} pokemonsEscolhidos= {props.pokemonsEscolhidos} setPokemonsEscolhidos = {props.setPokemonsEscolhidos} pokemons = {props.pokemons} setPokemons = {props.setPokemons}/>
            </Posicaodocard>
                
            ) : (
                <h3>Eai patrão, vc n escolheu nenhum pokemon ainda :)</h3>
            )}
        </PokedexListaCss>
    )
}

export default Pokedexdetalhe;