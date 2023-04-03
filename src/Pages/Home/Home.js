import { useContext } from "react";
import Header from "../../components/Header/Header.js";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import { Container, Flex } from "@chakra-ui/react";
import { Selection } from "./Home.styled";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

export const HomePage = () => {
  const context = useContext(GlobalContext);
  const { pokelist, addToPokedex, pokedex } = context;

  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) =>
            pokemonInList.data?.name === pokemonInPokedex.data?.name
        )
    );

  return (
    <>
      <Header />
      <Container>
        <Selection>
          <div>Todos Pokémons</div>
        </Selection>
        <Flex
          gap={"16px"}
          justifyContent={"center"}
          wrap={"wrap"}
          bg={"#5e5e5e"}
        >
          {filteredPokelist().map((pokemon) => (
            <PokemonCard
              key={pokemon.url}
              url={pokemon.url}
              addToPokedex={addToPokedex}
            />
          ))}
        </Flex>
      </Container>
    </>
  );
};

export default HomePage;
