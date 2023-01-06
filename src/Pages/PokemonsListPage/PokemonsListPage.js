import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { PokemonListMain, Container } from "./pokemonsListPageStyle"
import Header from "../../Components/Header/Header"
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import { getColors } from "../../MudaCor/RetornaCardColor"



export default function PokemonsListPage({typeApi}) {

    const context = useContext(GlobalContext)
    const { pokemons, adicionaPokedex, pokedex } = context
   

    const filteredPokelist = () =>
        pokemons.filter(
            (pokemonInList) => 
            !pokedex.find(
                (pokemonInPokedex) =>
            pokemonInList.name === pokemonInPokedex.name
            ))

   
    return (
        <>
            <Header />
            <Container>Todos Pokemons</Container>

            <PokemonListMain>


                {filteredPokelist().map((pokemon) => (
                     <PokemonCard
                        pokemonUrl={pokemon.url}
                        pokemon={pokemon}
                        key={pokemon.url}
                        adicionaPokedex={adicionaPokedex}
                        cardColor={getColors(typeApi)}
                        
                        
                    />
                ))}
            </PokemonListMain>
        </>

    )
}