import { CardsContainer, Title } from "./pokedexStyle"
import Header from "../../Components/Header/Header"
import PokemonCard from "C:/Users/Dev.Garr/Desktop/Labenu/projeto-react/projeto-react-apis/pokedex/src/Components/PokemonCard/PokemonCard.js";

import { getColors } from "C:/Users/Dev.Garr/Desktop/Labenu/projeto-react/projeto-react-apis/pokedex/src/utils/ReturnCardColor.js";

export default function PokedexPage (props){
   
   const {pokelist, addPokedex, pokedex} = props

   const filterPokelist = () =>
      pokelist.filter((pokeListed) =>
         !pokedex.find(
            (pokeInPokedex) => pokeListed.name === pokeInPokedex.name)
      )
      
      return (
         <div>
        
           <Header></Header>
           <Title>Todos Pokémons</Title>
            <CardsContainer>
             {filterPokelist().map((pokemon) => {
                
                
             return <PokemonCard
             cardColor={getColors(pokemon.type)}
             key={pokemon.name}
             pokemonUrl={pokemon.url}
             
             addPokedex={addPokedex}
             />
             })}
            </CardsContainer>
        
   </div>
   )
}