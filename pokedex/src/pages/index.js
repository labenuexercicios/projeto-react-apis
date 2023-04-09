import PokemonCard from '@/components/PokemonCard';
import axios from 'axios';
import { Poppins } from 'next/font/google';
import { useState } from 'react';

const poppins = Poppins({
    subsets: ['latin'],
    weight: '700',
    variable: '--font-poppins',
});

export const getStaticProps = async () => {
    const BASE_URL = 'https://pokeapi.co/api/v2';
    const limit = '20';
    const res = await axios.get(`${BASE_URL}/pokemon?limit=${limit}`);
    const pokemonList = await res.data.results;

    return {
        props: { pokemonList },
    };
};

export default function Home({ pokemonList }) {
    const [pokemon, setPokemon] = useState(pokemonList);

    return (
        <div className="py-16 px-10 max-w-screen-2xl mx-auto">
            <h1
                className={`text-5xl text-white ${poppins.variable} font-sans mb-16`}
            >
                Todos Pokémon
            </h1>
            <div className="grid grid-cols-3 grid-flow-row gap-x-4 gap-y-16">
                {pokemon.map((pokemon, index) => (
                    <PokemonCard
                        key={pokemon.name}
                        name={pokemon.name}
                        url={pokemon.url}
                        id={index + 1}
                    />
                ))}
            </div>
        </div>
    );
}
