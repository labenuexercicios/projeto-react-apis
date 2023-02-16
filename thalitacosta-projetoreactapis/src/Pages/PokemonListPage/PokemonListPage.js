import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { Container, Title, CardsContainer} from "./Styled"
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import Header from "../../Components/Header/Header";
/* import { getColors } from "../../Utils/ReturnCardColor"; */

function PokemonListPage() {

  const context = useContext(GlobalContext);
  const {pokemonList, addToPokedex, pokedex} = context;

  const filteredPokelist = () =>
  pokemonList.filter(
    (pokemonInList) =>
      !pokedex.find(
        (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
      )
  );

    return (
      <>
        <Header/>
        <Container>
          <Title>Todos Pokémons</Title>
          <CardsContainer>
          {filteredPokelist().map((pokemon) => (
            <PokemonCard
              key={pokemon.url}
              pokemonUrl={pokemon.url}
              addToPokedex={addToPokedex}
              pokemonList={pokemonList}
            />
          ))}
          </CardsContainer>
        </Container>
      </>
    )
  }
  
  export default PokemonListPage;