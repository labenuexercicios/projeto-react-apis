import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { Container, Selection } from "./PokedexPage.style";
import { BASE_URL } from "../../constants/BASE_URL";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header/Header";

function PokedexPage() {
  const context = useContext(GlobalContext);
  const { pokedex, removeFromPokedex } = context;

  return (
    <>
      <Header />
      <Container>

        <Selection>
          <div>Meus Pokémons</div>
        </Selection>

        <Flex gap={"16px"} justifyContent={"center"} wrap={"wrap"} >

          {pokedex.map((pokemon) => (
            <PokemonCard
              key={pokemon.data?.name}
              url={`${BASE_URL}/${pokemon.data?.name}`}
              removeFromPokedex={removeFromPokedex}
            />
          ))}
        </Flex>
      </Container>
    </>
  );
}

export default PokedexPage;