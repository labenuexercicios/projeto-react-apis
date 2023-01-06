
import React, { useContext} from "react";
import Header from "../../Components/Header/Header";
import { ContainerCard, Container } from "./HomePageStyle";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../Components/contexts/GlobalContext";

export const HomePage = () => {
    const context = useContext(GlobalContext)
    const {pokelist,setPokelist,pokedex,addToPokedex} = context



  
    const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

    return (
      <>

      <Header/>
      <Container>
      <ContainerCard>
     
          {filteredPokelist().map((pokemon)=>{
              return <PokemonCard key={pokemon.url}
              pokemonUrl={pokemon.url}
              addToPokedex={addToPokedex}

              />
  
          })}
  
  
      </ContainerCard>
      </Container>

      </>
  
    )
  }












