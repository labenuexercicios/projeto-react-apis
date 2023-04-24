import PokemonCard from '@/components/PokemonCard';
import Title from '@/components/Title';
import useGlobalConext from '@/hook/useGlobalContext';
import { useEffect } from 'react';

function pokedex() {
    const { setPageFlow, pokedex } = useGlobalConext();
    useEffect(() => {
        setPageFlow(2);
    }, []);

    return (
        <div className="py-16 px-10 max-w-screen-2xl mx-auto">
            <Title text="Meus Pokémon" />
            <div className="grid grid-cols-2 grid-flow-row gap-x-4 gap-y-16 xl:grid-cols-3">
                {pokedex.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}

export default pokedex;
