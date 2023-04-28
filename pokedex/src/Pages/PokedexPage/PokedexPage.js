import { CardsContainer, Title } from "./pokedexStyle"
import Header from "../../Components/Header/Header"
import PokemonCard from "C:/Users/Dev.Garr/Desktop/Labenu/projeto-react/projeto-react-apis/pokedex/src/Components/PokemonCard/PokemonCard.js";
import pokemons from "C:/Users/Dev.Garr/Desktop/Labenu/projeto-react/projeto-react-apis/pokedex/src/pokemon/pokemon.json";
import { getColors } from "C:/Users/Dev.Garr/Desktop/Labenu/projeto-react/projeto-react-apis/pokedex/src/utils/ReturnCardColor.js";

export default function PokedexPage (props){
   console.log(props)
   const {pokelist} = props
   return (
   <div>
        
           <Header></Header>
           <Title>Todos Pokémons</Title>
            <CardsContainer>
             {pokemons.map((pokemon) => {
             return <PokemonCard
             cardColor={getColors(pokemon.type[0])}
             key={pokemon.id}
             pokemon={pokemon}
             />
             })}
            </CardsContainer>
        
   </div>
   )
}