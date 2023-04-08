import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import logo from '../../public/images/logo.svg';

const poppins = Poppins({
    subsets: ['latin'],
    weight: '700',
    variable: '--font-poppins',
});

function Header() {
    return (
        <header
            className={`grid grid-cols-3 items-center px-20 py-5 bg-white ${poppins.variable} font-sans text-black`}
        >
            <div className="justify-self-start">
                {false && (
                    <Link href={'/'}>
                        <span className="text-2xl">{'< '}</span>
                        <span className="text-2xl underline">
                            {'Todos Pokémon'}
                        </span>
                    </Link>
                )}
            </div>
            <div className="justify-self-center">
                <Image src={logo} alt="logo" />
            </div>
            <div className="justify-self-end">
                {true ? (
                    <Link href={'/pokedex'}>
                        <div className="bg-button-blue px-28 py-5 rounded-md text-white text-2xl">
                            Pokédex
                        </div>
                    </Link>
                ) : (
                    <button className="bg-button-red px-20 py-5 rounded-md text-white text-2xl">
                        Excluir da Pokédex
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;
