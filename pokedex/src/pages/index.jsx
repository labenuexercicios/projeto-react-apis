import axios from 'axios';
import { Poppins } from 'next/font/google';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PokemonCard from '@/components/PokemonCard';
import Title from '@/components/Title';
import { BASE_URL, DEFAULT_LIMIT } from '@/constants/api';
import useGlobalContext from '@/hook/useGlobalContext';
import Pagination from '@/components/Pagination';

export const getServerSideProps = async (context) => {
  const { offset, limit } = context.query;
  const res = await axios.get(
    `${BASE_URL}/?limit=${limit ?? DEFAULT_LIMIT}&offset=${offset ?? 0}`
  );
  const pokemonList = res.data.results;
  const { next, previous } = res.data;
  const pokemonDataList = await Promise.all(
    pokemonList.map(async (pokemon) => {
      const pokemonResponse = await axios.get(pokemon.url);
      const { name, id, types, sprites, moves } = pokemonResponse.data;
      return {
        name,
        id,
        types: types.map((item) => item.type.name),
        sprites: {
          official_artwork: sprites.other['official-artwork'].front_default,
        },
        moves: moves.slice(0, 4).map((item) => item.move.name),
      };
    })
  );

  return {
    props: { pokemonDataList, next, previous },
  };
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-poppins',
});

export default function Home({ pokemonDataList, next, previous }) {
  const { setPageFlow, pokedex, setPokedex } = useGlobalContext();
  const [search, setSearch] = useState('');

  const { replace, query } = useRouter();
  const { offset, limit } = query;
  const offsetValue = offset ? Number(offset) : 0;
  const limitValue = limit ? Number(limit) : DEFAULT_LIMIT;
  const currentPage = Math.ceil(offsetValue / limitValue) + 1;
  const prevRoute = previous?.replace(BASE_URL, '');
  const nextRoute = next?.replace(BASE_URL, '');

  useEffect(() => {
    setPageFlow(1);
    const storedPokedex = JSON.parse(localStorage.getItem('pokedex'));
    if (storedPokedex) {
      setPokedex(storedPokedex);
    }
  }, []);

  useEffect(() => {
    pokedex.length > 0
      ? localStorage.setItem('pokedex', JSON.stringify(pokedex))
      : localStorage.removeItem('pokedex');
  }, [pokedex]);

  const filteredPokemonList = pokemonDataList
    .filter((pokemon) => !pokedex.some((p) => p?.name === pokemon?.name))
    .filter((pokemon) =>
      pokemon.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(
          search
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
        )
    );

  return (
    <div className="py-16 px-10 max-w-screen-2xl mx-auto">
      <div className="flex justify-between  mb-32">
        <Title text="Todos Pokémon" />
        <input
          type="search"
          className={`h-12 w-1/2 rounded-xl outline-none p-4 text-2xl ${poppins.className}`}
          placeholder="Pesquisar por nome"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      {filteredPokemonList.length > 0 ? (
        <div className="grid grid-cols-2 grid-flow-row gap-x-4 gap-y-16 xl:grid-cols-3">
          {filteredPokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center align-center mt-20">
          <p className={`text-white ${poppins.className} text-3xl`}>
            Pokémon não encontrado! Verifique sua pokedex.
          </p>
        </div>
      )}
      <Pagination
        replace={replace}
        currentPage={currentPage}
        prevRoute={prevRoute}
        nextRoute={nextRoute}
      />
    </div>
  );
}
