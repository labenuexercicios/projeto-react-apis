import Image from 'next/image';
import grassIcon from '../../public/images/type-icons/grass.svg';
import { Inter, Poppins } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import TypeContainer from './TypeContainer';
import getTypeColors from '@/constants/getTypeColors';
import axios from 'axios';

const inter = Inter({
    subsets: ['latin'],
    weight: '700',
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
});

function PokemonCard({ name, url, id }) {
    const [pokemonData, setPokemonData] = useState([]);
    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${String(
        id
    )}.png`;

    const getPokemon = async () => {
        try {
            const res = await axios.get(url);
            const data = await res.data;
            setPokemonData(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPokemon();
    }, []);

    return (
        <div
            className={`w-full bg-[#729F92] bg-pokeball bg-no-repeat bg-right-top p-4 rounded-xl text-white ${inter.className} font-sans relative`}
        >
            <div className="flex justify-between mb-12">
                <div>
                    <p>#{id}</p>
                    <h3 className="capitalize">{name}</h3>
                    <div className="flex gap-3">
                        {pokemonData.types &&
                            pokemonData.types.map((item) => {
                                const typeColor = getTypeColors(item.type.name);
                                console.log(typeColor);
                                return (
                                    <TypeContainer
                                        key={item.type.name}
                                        type={item.type.name}
                                        customClass={`bg-[${typeColor}]`}
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
