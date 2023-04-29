import PokemonCard from '@/components/PokemonCard';
import Title from '@/components/Title';
import useGlobalContext from '@/hook/useGlobalContext';
import { useEffect } from 'react';

function pokedex() {
    const { setPageFlow, pokedex, setPokedex } = useGlobalContext();
    useEffect(() => {
        setPageFlow(2);
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

    return (
        <div className="py-16 px-10 max-w-screen-2xl mx-auto">
            <Title text="Meus Pokémon" />
            <div className="grid grid-cols-2 grid-flow-row gap-x-4 gap-y-16 xl:grid-cols-3">
                {pokedex
                    .sort((a, b) => {
                        if (a.id < b.id) return -1;
                    })
                    .map((pokemon) => (
                        <PokemonCard key={pokemon.name} pokemon={pokemon} />
                    ))}
            </div>
        </div>
    );
}

export default pokedex;
