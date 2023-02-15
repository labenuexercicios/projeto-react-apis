import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { useContext} from "react";
import { CardsContainer } from "../PokedexPage/styles";
import { GlobalContext } from "../../contexts/GlobalContext";

function PokedexListPage() {
  
  const context= useContext(GlobalContext)
  const {pokedex}= context.managePokedex
 
    return (
      <div>
          <Header/>
          <CardsContainer>
              {pokedex.map((pokemon)=>{
                  return <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  />
              })}
               
          </CardsContainer>
        
      </div>
  );
}

export default PokedexListPage;

