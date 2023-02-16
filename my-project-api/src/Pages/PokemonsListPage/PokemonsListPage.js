import { Header } from "../../Components/Header/Header"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import axios from 'axios';
import { useEffect, useState } from "react";
import { Pai } from './pokemonsListStyle'





export function PokemonsListPage() {
    const [pokemons, setPokemons] = useState([])

    const getPokemons = async () => {

        try {
            const results = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=30')
            setPokemons(results.data.results)
        } catch (error) {
            console.log(error.response);
            // pokemons.forEach((pokemon)=>{
            // setArrayEndpoints(pokemon.url)


        };
    }

    useEffect(() => {
        getPokemons();
    });


    const cardScreen = pokemons.map((pokemon) => {
        return (
            <PokemonCard />

        )
    })

    return (
    <>
        <Header />
        <Pai>
            { cardScreen }
        </Pai>
    </>
    )
}










































