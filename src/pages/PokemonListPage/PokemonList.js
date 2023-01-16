import { Grid } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../contexts/GlobalContext";
import { ContainerPagina } from "./PokemonListStyle";

export default function PokemonList() {
    
    const context = useContext(GlobalContext);
    
    const {pokemons, pegarPokemons,setPokemons,pokedex,setPokemon} = context;

    

    const addToPokedex =(pokemon)=>{
            const pokemonFiltrar = pokemons.filter(function(item){
                return item.name !== pokemon.name
            })
            setPokemons(pokemonFiltrar)
            pokedex.push(pokemon)
            console.log(pokedex);
            console.log(pokemons);
        }


    return(
    <ContainerPagina>
        <Header/>
        <Grid templateColumns={"repeat(4, 1fr)"} gap={6} paddingLeft={"130px"} paddingTop={"60px"} paddingBottom={"25px"}>
            {
            pokemons.length>0? pokemons.map((pokemon)=>{
                return(
                    <PokemonCard
                        key={pokemon.name}
                        pokemon={pokemon}
                        addToPokedex={addToPokedex}
                    />
                )
            }):<p>Carregando</p>}
        </Grid>
    </ContainerPagina>
    )
}