import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import logo from '../../public/images/logo.svg';
import useGlobalContext from '@/hook/useGlobalContext';

const poppins = Poppins({
    subsets: ['latin'],
    weight: '700',
    variable: '--font-poppins',
});

function Header() {
    const { pageFlow, isOnPokedex } = useGlobalContext();

    return (
        <header
            className={`grid grid-cols-3 items-center px-20 py-5 bg-white ${poppins.variable} font-sans text-black`}
        >
            <div className="justify-self-start">
                {pageFlow !== 1 && (
                    <Link href={'/'}>
                        <span className="flex items-center justify-center gap-2">
                            <span className="border-t-2 border-l-2 border-black w-3 h-3 -rotate-45"></span>
                            <span className="text-2xl underline">
                                Todos Pokémon
                            </span>
                        </span>
                    </Link>
                )}
            </div>
            <Link className="justify-self-center" href={'/'}>
                <Image src={logo} alt="logo" />
            </Link>
            <div className="justify-self-end">
                {pageFlow === 1 ? (
                    <Link href={'/pokedex'}>
                        <div className="bg-button-blue px-28 py-5 rounded-md text-white text-2xl">
                            Pokédex
                        </div>
                    </Link>
                ) : (
                    pageFlow === 3 &&
                    (!isOnPokedex ? (
                        <button className="bg-button-blue px-20 py-5 rounded-md text-white text-2xl">
                            Capturar
                        </button>
                    ) : (
                        <button className="bg-button-red px-20 py-5 rounded-md text-white text-2xl">
                            Excluir da Pokédex
                        </button>
                    ))
                )}
            </div>
        </header>
    );
}

export default Header;
