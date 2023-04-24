import PokemonCard from '@/components/PokemonCard';
import Title from '@/components/Title';
import { BASE_URL, limit } from '@/constants/api';
import useGlobalConext from '@/hook/useGlobalContext';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const getStaticProps = async () => {
    const res = await axios.get(`${BASE_URL}/pokemon?limit=${limit}`);
    const pokemonList = res.data.results;
    const pokemonDataList = await Promise.all(
        pokemonList.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            const { name, id, types, sprites, moves } = pokemonResponse.data;
            return {
                name,
                id,
                types: types.map((item) => item.type.name),
                sprites: {
                    official_artwork:
                        sprites.other['official-artwork'].front_default,
                },
                moves: moves.slice(0, 4).map((item) => item.move.name),
            };
        })
    );

    return {
        props: { pokemonDataList },
    };
};

export default function Home({ pokemonDataList }) {
    const { setPageFlow, pokedex } = useGlobalConext();
    useEffect(() => {
        setPageFlow(1);
    }, []);

    return (
        <div className="py-16 px-10 max-w-screen-2xl mx-auto">
            <Title text="Todos Pokémon" />
            <div className="grid grid-cols-2 grid-flow-row gap-x-4 gap-y-16 xl:grid-cols-3">
                {pokemonDataList
                    .filter((pokemon) => !pokedex.includes(pokemon))
                    .map((pokemon) => (
                        <PokemonCard key={pokemon.name} pokemon={pokemon} />
                    ))}
            </div>
        </div>
    );
}
