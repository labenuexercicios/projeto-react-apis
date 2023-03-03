import { useContext } from "react";
import { Box, ChakraProvider, Flex, Image } from "@chakra-ui/react";
import theme from "../theme/theme";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import { PokemonContext } from "../context/pokemonContext";
import { goToDetails, goToPokedex } from "../routes/cordinator";
import "@fontsource/content";
import wing from "../assets/wing.png";

function Home() {
  const navigate = useNavigate();
  const { pokemon } = useContext(PokemonContext);

  return (
    <ChakraProvider theme={theme} resetCSS>
      <Header />
      <Flex
        justifyContent="center"
        gap="16px"
        wrap="wrap"
        border="1px"
        borderColor="violet"
        bg="#5d5d5d"
      >
        {pokemon.map((pokemon) => (
          <Box
            border="1px"
            borderColor="red"
            color="white"
            key={pokemon.data.id}
          >
            <article>
              <div>
                <div>
                  <p>#{pokemon.data.id}</p>
                  <h1>{pokemon.data.name}</h1>
                </div>

                <Flex>{pokemon.data.types.map((type) => type.type.name)}</Flex>
              </div>
              <Box w={"28rem"} h={"12rem"}>
                <Image
                  left={"-1rem"}
                  top={"-3.75rem"}
                  w={"12rem"}
                  h={"12rem"}
                  zIndex={"1"}
                  src={pokemon.data.sprites.other.dream_world.front_default}
                  alt="image pokemon"
                />
                <Image
                  left={"-0.625rem"}
                  top={"1.25rem"}
                  m={"1.5rem"}
                  src={wing}
                  alt="background image"
                />
              </Box>
            </article>
            <div>
              <a
                onClick={() => {
                  goToDetails(navigate, "details");
                }}
              >
                Detalhes
              </a>
              <button
                onClick={() => {
                  goToPokedex(navigate, "pokedex");
                }}
              >
                Capturar
              </button>
            </div>
          </Box>
        ))}
      </Flex>
    </ChakraProvider>
  );
}

export default Home;
