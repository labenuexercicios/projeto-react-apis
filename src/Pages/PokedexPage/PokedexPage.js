import { useContext } from "react";
import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Container, PokedexMain } from "./pokedexPageStyle";
import { getColors } from "../../MudaCor/RetornaCardColor";

export default function PokedexPage({typeApi}) {

    const context = useContext(GlobalContext)
    const { pokedex, removeFromPokedex } = context

    return (
        <>
            <Header />
            <Container>Meus Pokemons</Container>

            <PokedexMain>
                {pokedex.map((pokemon) => {
                    return <PokemonCard
                    cardColor={getColors(typeApi)}
                        key={pokemon.name}
                        pokemonUrl={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`}
                        // pokemonUrl={pokemon.url}
                        // pokemon={pokemon}
                        removeFromPokedex={removeFromPokedex}
                    />
                })}

            </PokedexMain>
        </>
    )
}