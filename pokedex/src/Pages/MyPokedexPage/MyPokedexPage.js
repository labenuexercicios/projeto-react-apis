import { useContext } from "react"
import { GlobalContext } from "../../Contexts/GlobalContext"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import { StyledMyPokedex } from "./StyledMyPokedexPage"
import { PopUp } from "../../Components/PopUp/PopUp"




export const MyPokedexPage = () => {


    const { capturados, capturar, gotcha, colorToPass } = useContext(GlobalContext)

    return (
        <StyledMyPokedex>
                        {gotcha && colorToPass === "#FF6262" && <PopUp texto={"Oh, No!"} descricao={"O Pokémon foi removido da sua Pokedéx"}/>}
            {capturados.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} name={pokemon.name} id={pokemon.id} sprite={pokemon.sprites.other["official-artwork"].front_default} types={pokemon.types} capturar={capturar} bgColor={"#FF6262"} textoBotao={"Excluir"}/>))}
        </StyledMyPokedex>
    )
}