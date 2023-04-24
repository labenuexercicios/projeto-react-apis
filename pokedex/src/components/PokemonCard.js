import Image from 'next/image';
import { Inter, Poppins } from 'next/font/google';
import Link from 'next/link';
import { getColorVariant } from '@/constants/typeColorVariants';
import useGlobalConext from '@/hook/useGlobalContext';

const inter = Inter({
    subsets: ['latin'],
    weight: '700',
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
});

function PokemonCard({ pokemon }) {
    const { pageFlow, pokedex, setPokedex } = useGlobalConext();

    const {
        name,
        id,
        types,
        sprites: { official_artwork },
    } = pokemon;

    return (
        <div
            className={`w-full ${getColorVariant(
                types[0]
            )} bg-pokeball bg-no-repeat bg-right-top p-4 rounded-xl text-white ${
                inter.className
            } font-sans relative`}
        >
            <div className="flex justify-between mb-12">
                <div>
                    <p>#{id}</p>
                    <h3 className="capitalize mb-4">{name}</h3>
                    <div className="flex gap-3">
                        {types?.map((type) => {
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
                <div className="absolute right-4 -top-16">
                    <Image
                        loader={() => official_artwork}
                        unoptimized
                        src={official_artwork}
                        width={180}
                        height={180}
                        alt={name}
                    />
                </div>
            </div>
            <div className="w-full flex justify-between items-center">
                <Link href={`/pokemon/${id}`}>
                    <span
                        className={`${poppins.className} font-bold underline`}
                    >
                        Detalhes
                    </span>
                </Link>
                {pageFlow === 1 ? (
                    <button
                        className={`bg-white px-10 py-2 text-black ${poppins.className} font-sans font-normal rounded-xl`}
                        onClick={() => setPokedex([...pokedex, pokemon])}
                    >
                        Capturar!
                    </button>
                ) : (
                    pageFlow === 2 && (
                        <button
                            className={`bg-button-red px-10 py-2 text-white ${poppins.className} font-sans font-normal rounded-xl`}
                            onClick={() =>
                                setPokedex((prev) =>
                                    prev.filter((item) => item !== pokemon)
                                )
                            }
                        >
                            Excluir
                        </button>
                    )
                )}
            </div>
        </div>
    );
}

export default PokemonCard;
