import Image from 'next/image';
import { Inter, Poppins } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({
    subsets: ['latin'],
    weight: '700',
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
});

function PokemonCard({ name, id, types, imageSrc }) {
    const ColorVariants = {
        normal: 'bg-types-normal',
        fire: 'bg-types-fire',
        water: 'bg-types-water',
        electric: 'bg-types-electric',
        grass: 'bg-types-grass',
        ice: 'bg-types-ice',
        fighting: 'bg-types-fighting',
        poison: 'bg-types-poison',
        ground: 'bg-types-ground',
        flying: 'bg-types-flying',
        psychic: 'bg-types-psychic',
        bug: 'bg-types-bug',
        rock: 'bg-types-rock',
        ghost: 'bg-types-ghost',
        dragon: 'bg-types-dragon',
        dark: 'bg-types-dark',
        steel: 'bg-types-steel',
        fairy: 'bg-types-fairy',
    };

    return (
        <div
            className={`w-full ${
                ColorVariants[types[0].type.name]
            } bg-pokeball bg-no-repeat bg-right-top p-4 rounded-xl text-white ${
                inter.className
            } font-sans relative`}
        >
            <div className="flex justify-between mb-12">
                <div>
                    <p>#{id}</p>
                    <h3 className="capitalize mb-4">{name}</h3>
                    <div className="flex gap-3">
                        {types?.map(({ type }) => {
                            return (
                                <img
                                    src={`/images/type-icons/${type.name}.svg`}
                                    alt={`${type.name} type`}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="absolute right-4 -top-16">
                    <Image
                        loader={() => imageSrc}
                        unoptimized
                        src={imageSrc}
                        width={180}
                        height={180}
                        alt={name}
                    />
                </div>
            </div>
            <div className="w-full flex justify-between items-center">
                <Link href={'/pokemon/bulbasaur'}>
                    <span
                        className={`${poppins.className} font-bold underline`}
                    >
                        Detalhes
                    </span>
                </Link>
                <button
                    className={`bg-white px-10 py-2 text-black ${poppins.className} font-sans font-normal rounded-xl`}
                >
                    Capturar!
                </button>
            </div>
        </div>
    );
}

export default PokemonCard;
