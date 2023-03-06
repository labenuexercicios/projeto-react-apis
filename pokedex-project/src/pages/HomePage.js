import { useContext } from "react";
import { ChakraProvider, Flex, Image, Text, Box } from "@chakra-ui/react";
import theme from "../theme/theme";
import Header from "../components/header";
import { PokemonContext } from "../context/pokemonContext";
import "@fontsource/content";
import wing from "../assets/wing.png";
import PokemonCard from "../components/pokemonCard/pokemonCard";
import grass from "../assets/grass.png";
import fire from "../assets/fire.png";
import water from "../assets/water.png";
import bug from "../assets/bug.png";
import normal from "../assets/normal.png";
import poison from "../assets/poison.png";
import flying from "../assets/poison.png";
function Home() {
  const { pokemon } = useContext(PokemonContext);

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Text color={"white"} bg="#5d5d5d" p={"2rem"} fontSize="5xl">
        Todos os Pokémons
      </Text>
      <Flex
        justifyContent="center"
        gap="16px"
        wrap="wrap"
        bg="#5d5d5d"
        theme={theme}
      >
        {pokemon.map((pokemon) => (
          <>
            {pokemon.data.types.map((types, index) => {
              let secondeType = "";

              switch (types.type.name) {
                case "grass":
                  return (
                    <PokemonCard
                      types={types}
                      index={index}
                      pokemon={pokemon}
                      bg={"#729F92"}
                      img={grass}
                      secondeType={secondeType}
                    />
                  );
                  break;
                case "fire":
                  return (
                    <PokemonCard
                      types={types}
                      index={index}
                      pokemon={pokemon}
                      bg={"#EAAB7D"}
                      img={fire}
                      secondeType={secondeType}
                    />
                  );
                  break;
                case "bug":
                  return (
                    <PokemonCard
                      types={types}
                      index={index}
                      pokemon={pokemon}
                      bg={"#76A866"}
                      img={bug}
                      secondeType={secondeType}
                    />
                  );
                  break;
                case "water":
                  return (
                    <PokemonCard
                      types={types}
                      index={index}
                      pokemon={pokemon}
                      bg={"#71C3FF"}
                      img={water}
                      secondeType={secondeType}
                    />
                  );
                  break;
                case "normal":
                  return (
                    <PokemonCard
                      types={types}
                      index={index}
                      pokemon={pokemon}
                      bg={"#BF9762"}
                      img={normal}
                      secondeType={secondeType}
                    />
                  );
                  break;
                case "poison":
                  secondeType = { poison };
                  break;
                case "flying":
                  secondeType = { flying };
                  break;

                default:
                  break;
              }
            })}
          </>
        ))}
      </Flex>
    </ChakraProvider>
  );
}

export default Home;
