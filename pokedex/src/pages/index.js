import PokemonCard from '@/components/PokemonCard';

export default function Home() {
    return (
        <>
            <div className="grid grid-cols-3 grid-flow-row gap-4">
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
            </div>
        </>
    );
}
