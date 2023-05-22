import { Header } from '../../components/Header/Header'
import { PokemonCard } from '../../components/PokemonCard/PokemonCard'
import { useContext } from 'react'
import { GlobalContext } from './../../contexts/GlobalContext';
import { BASE_URL } from './../../components/constants/BASE_URL';
import { PokedexPageStyle, CardsSection } from './PokedexPageStyle'
import Modal from './../../components/Modal/Modal';

export function PokedexPage() {

    const context = useContext(GlobalContext)
    const { pokedex, removeFromPokedex, isModalOpen } = context

    return (

        <>
            {isModalOpen && <Modal />}
            <Header />
            <PokedexPageStyle>
                <h1>Meus Pokemóns</h1>
                <CardsSection>
                    {pokedex.map((pokemon) => (
                        <PokemonCard key={pokemon.name} pokemonUrl={`${BASE_URL}/${pokemon.name}`} removeFromPokedex={removeFromPokedex} />
                    ))}
                </CardsSection>
            </PokedexPageStyle>
        </>
    );
}
