import { BASE_URL } from "../../Constants/url";
import { CardsContainer, Title } from "../PokedexPage/pokedexStyle"
import Header from "../../Components/Header/Header"
import PokemonCard from "C:/Users/Dev.Garr/Desktop/Labenu/projeto-react/projeto-react-apis/pokedex/src/Components/PokemonCard/PokemonCard.js";

import { getColors } from "C:/Users/Dev.Garr/Desktop/Labenu/projeto-react/projeto-react-apis/pokedex/src/utils/ReturnCardColor.js";

export default function PokemonsListPage (props){
   const {pokedex, offPokedex} = props
   return (
   <div>
        
        <Header></Header>
           <Title>Meus Pokémons</Title>
            <CardsContainer>
             {pokedex.map((pokemon) => {
             return <PokemonCard
             cardColor={getColors(pokemon.type)}
               key={pokemon.name}
               pokemonUrl={`${BASE_URL}/${pokemon.name}`}
               pokemon={pokemon}
               offPokedex={offPokedex}
             />
             })}
            </CardsContainer>
        
   </div>
   )
}


