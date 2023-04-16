import PokemonCard from '@/components/PokemonCard';
import axios from 'axios';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: '700',
    variable: '--font-poppins',
});

export const getStaticProps = async () => {
    const BASE_URL = 'https://pokeapi.co/api/v2';
    const limit = '10';
    const res = await axios.get(`${BASE_URL}/pokemon?limit=${limit}`);
    const pokemonList = res.data.results;
    const pokemonDataList = await Promise.all(
        pokemonList.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            const { name, id, types, stats, sprites, moves } =
                pokemonResponse.data;
            return {
                name,
                id,
                types: types.map((type) => type.type.name),
                stats: stats.map((stat) => {
                    return {
                        name: stat.stat.name,
                        base_stat: stat.base_stat,
                    };
                }),
                sprites: {
                    back_default: sprites.back_default,
                    front_default: sprites.front_default,
                    official_artwork:
                        sprites.other['official-artwork'].front_default,
                },
                moves: moves.slice(0, 4).map((move) => move.move.name),
            };
        })
    );

    return {
        props: { pokemonDataList },
    };
};

export default function Home({ pokemonDataList }) {
    return (
        <div className="py-16 px-10 max-w-screen-2xl mx-auto">
            <h1
                className={`text-5xl text-white ${poppins.variable} font-sans mb-16`}
            >
                Todos Pokémon
            </h1>
            <div className="grid grid-cols-2 grid-flow-row gap-x-4 gap-y-16 xl:grid-cols-3">
                {pokemonDataList.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.name}
                        name={pokemon.name}
                        id={pokemon.id}
                        types={pokemon.types}
                        imageSrc={pokemon.sprites.official_artwork}
                    />
                ))}
            </div>
        </div>
    );
}
