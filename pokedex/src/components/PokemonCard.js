import Image from 'next/image';
import bulbasaur from '../../public/images/bulbasaur.svg';
import grassIcon from '../../public/images/type-icons/grass.svg';
import poisonIcon from '../../public/images/type-icons/poison.svg';
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

function PokemonCard() {
    return (
        <div
            className={`w-full bg-[#729F92] bg-pokeball bg-no-repeat bg-right-top p-4 rounded-xl text-white ${inter.className} font-sans relative`}
        >
            <div className="flex justify-between mb-12">
                <div>
                    <p>#1</p>
                    <h3>Bulbasaur</h3>
                    <div className="flex gap-3">
                        <span className="flex gap-4 bg-[#AD61AE] p-2 rounded-xl">
                            <Image src={poisonIcon} alt="poison icon" /> Poison
                        </span>
                        <span className="flex gap-4 bg-[#70B873] p-2 rounded-lg">
                            <Image src={grassIcon} alt="grass icon" />
                            Grass
                        </span>
                    </div>
                </div>
                <div className="absolute right-4 -top-16">
                    <Image src={bulbasaur} alt="bulbasaur" />
                </div>
            </div>
            <div className="w-full flex justify-between items-center">
                <Link href={'/pokemon/bulbasaur'}>
                    <span className={`${poppins.className} font-bold underline`}>
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
