import PokemonCard from '@/components/PokemonCard';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: '700',
    variable: '--font-poppins',
});

export default function Home() {
    return (
        <div className="py-16 px-10 max-w-screen-2xl mx-auto">
            <h1
                className={`text-5xl text-white ${poppins.variable} font-sans mb-16`}
            >
                Todos Pokémon
            </h1>
            <div className="grid grid-cols-3 grid-flow-row gap-x-4 gap-y-16">
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
            </div>
        </div>
    );
}
