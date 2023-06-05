import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { CardsSection } from '../../pages/PokedexPage/PokedexPageStyle'
import { HomePageStyle } from "./HomePageStyle";
import { GlobalContext } from "../../contexts/GlobalContext";
import Modal from './../../components/Modal/Modal';

export function HomePage() {

    const context = useContext(GlobalContext)
    const { addToPokedex, filteredPokelist, isModalOpen } = context

    return (
        <>
            {isModalOpen && <Modal />}
            <Header />
            <HomePageStyle>
                <h1>Todos Pokemóns</h1>
                <CardsSection>
                    {filteredPokelist().map((pokemon) => (
                        <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} />
                    ))}
                </CardsSection>



            </HomePageStyle>
        </>
    );
}
