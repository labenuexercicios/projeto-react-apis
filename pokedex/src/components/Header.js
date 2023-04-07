import Link from 'next/link';

function Header() {
    return (
        <header>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/pokedex'}>Pokedex</Link>
                    <Link href={'/details'}>Details</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
