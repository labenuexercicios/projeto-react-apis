import Title from '@/components/Title';
import { getColorVariant } from '@/constants/typeColorVariants';
import { BASE_URL, limit } from '@/constants/api';
import axios from 'axios';
import { Montserrat, Inter } from 'next/font/google';
import Image from 'next/image';
import useGlobalContext from '@/hook/useGlobalContext';
import StatContantainer from '@/components/StatContantainer';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import LoadingScreen from '@/components/LoadingScreen';

const montserrant = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['700', '800', '900'],
});

export const getStaticPaths = async () => {
    const res = await axios.get(`${BASE_URL}/pokemon?limit=${limit}`);
    const pokemonList = res.data.results;
    const paths = pokemonList.map((pokemon, index) => {
        return {
            params: {
                pokemonId: `${String(index + 1)}`,
            },
        };
    });

    return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
    const pokemonId = context.params.pokemonId;

    const res = await axios.get(`${BASE_URL}/pokemon/${pokemonId}`);
    const { name, id, types, stats, sprites, moves } = await res.data;
    const data = {
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
            official_artwork: sprites.other['official-artwork'].front_default,
        },
        moves: moves.slice(0, 4).map((move) => move.move.name),
    };

    return {
        props: {
            pokemon: data,
        },
    };
};

function PokemonDetails({ pokemon }) {
    console.log(pokemon);
    const {
        setPageFlow,
        pokedex,
        setPokedex,
        setIsOnPokedex,
        setCurrentPokemon,
    } = useGlobalContext();
    const router = useRouter();

    useEffect(() => {
        setPageFlow(3);
        setCurrentPokemon(pokemon);
        const storedPokedex = JSON.parse(localStorage.getItem('pokedex'));
        if (storedPokedex) {
            setPokedex(storedPokedex);
        }
        storedPokedex?.some((p) => p?.id === pokemon?.id)
            ? setIsOnPokedex(true)
            : setIsOnPokedex(false);
    }, []);

    useEffect(() => {
        pokedex.length > 0
            ? localStorage.setItem('pokedex', JSON.stringify(pokedex))
            : localStorage.removeItem('pokedex');
    }, [pokedex]);

    let totalStat = 0;
    pokemon?.stats.forEach((stat) => (totalStat += stat.base_stat));

    if (router.isFallback) {
        return <LoadingScreen />;
    }

    return (
        <div
            className={`py-16 px-10 max-w-screen-2xl mx-auto ${inter.className} overflow-hidden max-h-min`}
        >
            <Title text="Detalhes" />
            <div
                className={`${getColorVariant(
                    pokemon.types[0]
                )} flex gap-16 px-12 py-8 rounded-3xl bg-pokeball_full bg-no-repeat bg-contain bg-right-top relative max-h-min mt-10`}
            >
                <div className={`flex gap-12 flex-1`}>
                    <div className="flex flex-col flex-1 gap-12">
                        <Image
                            className="bg-white rounded-xl"
                            src={pokemon.sprites.front_default}
                            width={250}
                            height={250}
                            alt={`${pokemon.name} front sprite`}
                        />
                        <Image
                            className="bg-white rounded-xl"
                            src={pokemon.sprites.back_default}
                            width={250}
                            height={250}
                            alt={`${pokemon.name} back sprite`}
                        />
                    </div>
                    <div
                        className={`bg-white rounded-xl ${inter.className} flex-1 p-5`}
                    >
                        <h3 className={`text-black font-extrabold text-2xl`}>
                            Base stats
                        </h3>
                        <ul className="mt-6">
                            {pokemon.stats.map((stat) => (
                                <StatContantainer
                                    key={stat.name}
                                    name={stat.name}
                                    value={stat.base_stat}
                                />
                            ))}
                            <li className="flex gap-3 py-3 border-y border-gray-500/20">
                                <div className="text-gray-500 text-right flex-[0_0_25%] whitespace-nowrap">
                                    Total
                                </div>
                                <div className="flex-[0_0_10%] text-right font-black">
                                    {totalStat}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col justify-between flex-1">
                    <div>
                        <p className="text-base text-white font-bold">
                            #{pokemon.id}
                        </p>
                        <h2 className="text-5xl text-white font-bold capitalize">
                            {pokemon.name}
                        </h2>
                        <div className="flex gap-4 mt-6">
                            {pokemon.types?.map((type) => {
                                return (
                                    <img
                                        key={type}
                                        src={`/images/type-icons/${type}.svg`}
                                        alt={`${type} type`}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-8 flex-1 mt-12 w-1/2">
                        <h3 className={`text-black font-extrabold text-2xl`}>
                            Moves
                        </h3>
                        <ul>
                            {pokemon.moves.map((move) => (
                                <li
                                    key={move}
                                    className={`${montserrant.className} bg-[#ececec] mt-4 rounded-xl border-dashed border-black/20 border p-3 capitalize font-normal text-sm text-black w-fit`}
                                >
                                    {move.replace(/[^a-zA-Z ]/g, ' ')}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="absolute right-4 -top-36">
                        <Image
                            src={pokemon.sprites.official_artwork}
                            width={300}
                            height={300}
                            alt={`${pokemon.name} official artwork sprite`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonDetails;
