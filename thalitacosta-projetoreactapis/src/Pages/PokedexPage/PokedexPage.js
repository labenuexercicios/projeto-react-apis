import { useContext } from "react";
import { Container, Title, CardsContainer } from "./Styled"
import { GlobalContext } from "../../Context/GlobalContext";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { BASE_URL } from "../../Constants/Url";
import Header from "../../Components/Header/Header";

function PokedexPage() {

  const context = useContext(GlobalContext);
  const {removeFromPokedex, pokedex} = context;

  /* console.log(pokedex) */
    return (
    <>
      <Header/>
      <Container>
          <Title>Meus Pokémons</Title>
          <CardsContainer>
          {pokedex.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemonUrl={`${BASE_URL}/${pokemon.name}`}
            removeFromPokedex={removeFromPokedex}
          />
        ))}
          </CardsContainer>
        </Container>
    </>)
  }
  
export default PokedexPage;