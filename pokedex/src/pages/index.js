import PokemonCard from '@/components/PokemonCard';
import axios from 'axios';
import { Poppins } from 'next/font/google';
import { useEffect, useState } from 'react';

const poppins = Poppins({
    subsets: ['latin'],
    weight: '700',
    variable: '--font-poppins',
});

export default function Home() {
    const [pokemon, setPokemon] = useState([]);

    async function fetchData() {
        const BASE_URL = 'https://pokeapi.co/api/v2';
        const limit = '250';
        try {
            const response = await axios.get(
                `${BASE_URL}/pokemon?limit=${limit}`
            );
            const pokemonList = response.data.results;
            const pokemonDataList = await Promise.all(
                pokemonList.map(async (pokemon) => {
                    const pokemonResponse = await axios.get(pokemon.url);
                    return pokemonResponse.data;
                })
            );
            setPokemon(pokemonDataList);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="py-16 px-10 max-w-screen-2xl mx-auto">
            <h1
                className={`text-5xl text-white ${poppins.variable} font-sans mb-16`}
            >
                Todos Pokémon
            </h1>
            <div className="grid grid-cols-2 grid-flow-row gap-x-4 gap-y-16 xl:grid-cols-3">
                {pokemon.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.name}
                        name={pokemon.name}
                        id={pokemon.id}
                        types={pokemon.types}
                        imageSrc={
                            pokemon.sprites.other['official-artwork']
                                .front_default
                        }
                    />
                ))}
            </div>
        </div>
    );
}
