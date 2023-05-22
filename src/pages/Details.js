import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import HeaderDetails from "../components/header/HeaderDetails";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Progress,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Pokebola from "../assets/pokebola-bg.png";
import getImage from "../utils/ReturnPokemonType";

export default function Details() {
  const { pokelist } = useContext(GlobalContext);
  const { name } = useParams();
  const pokemon = pokelist.find(
    (pokemon) => pokemon.data.name === name.toLowerCase()
  );
  if (!pokemon) {
    return <div>Pokémon Não Encontrado!</div>;
  }

  let moveList = [];
  for (let i = 0; i < 4; i++) {
    moveList.push(pokemon.data.moves[i]);
    
  }

  

  const backgroundCard = () => {
    if (pokemon.data.types[0].type.name === "grass") return "#729F92";
    if (pokemon.data.types[0].type.name === "fire") return "#EAAB7D";
    if (pokemon.data.types[0].type.name === "water") return "#33A4F5";
    if (pokemon.data.types[0].type.name === "bug") return "#76A866";
    if (pokemon.data.types[0].type.name === "normal") return "#BF9762";
    if (pokemon.data.types[0].type.name === "electric") return "#F4D23B";
    if (pokemon.data.types[0].type.name === "ground") return "#D97745";
    if (pokemon.data.types[0].type.name === "poison") return "#AD61AE";
  };

  return (
    <>
      <HeaderDetails />
      <Box
        minH={"62.5rem"}
        bg="#5E5E5E"
        bgImage={Pokebola}
        bgSize="contain"
        bgRepeat="no-repeat"
      >
        <Heading m="2.25rem" pt="1.25rem" pb="0.313rem" color="white">
          Detalhes
        </Heading>
        <Box
          minH="41.438rem"
          bg={backgroundCard()}
          borderRadius="2.368rem"
          p="0.313rem"
          mr="0.939rem"
          ml="0.939rem"
          bgImage={Pokebola}
          bgSize="contain"
          bgRepeat="no-repeat"
          bgPos="right"
        >
          <Flex direction="column" gap="1.625rem" ml="1.625rem" mt="1.800rem">
            <Box bg="white" w="17.625rem" h="17.625rem" borderRadius="0.5rem">
              <Image
                src={
                  pokemon.data.sprites.versions["generation-v"]["black-white"]
                    .animated.front_default
                }
                boxSize="6.25rem"
                ml="5.375rem"
                mt="5.375rem"
              />
            </Box>

            <Box bg="white" w="17.625rem" h="17.625rem" borderRadius="0.5rem">
              <Image
                src={
                  pokemon.data.sprites.versions["generation-v"]["black-white"]
                    .animated.back_default
                }
                boxSize="6.25rem"
                ml="5.375rem"
                mt="5.375rem"
              />
            </Box>
          </Flex>
          <Box
            w="20.000rem"
            h="36.900rem"
            bg="white"
            ml="24.125rem"
            mt="1.5rem"
            pos="absolute"
            top="19.525rem"
            borderRadius="0.75rem"
          >
            <Heading ml="0.925rem" mb="1.25rem" mt="1.75rem" fontFamily="inter" fontWeight="700px">
              Base Stats
            </Heading>
            {pokemon.data.stats.map((status) => {
              let colorScheme = "";
              if (status.base_stat > 50) {
                colorScheme = "yellow";
              } else colorScheme = "orange";
              return (
                <>
                  <Flex gap="0.313rem" my="0.5rem">
                    <Text
                      display={"flex"}
                      justifyContent={""}
                      w="20%"
                      textTransform="capitalize"
                      ml="0.925rem"
                    >
                      {status.stat.name}
                    </Text>
                    <Text display="flex" justifyContent="center" w="10%">
                      {status.base_stat}
                    </Text>
                    <Progress
                      display="flex"
                      alignSelf={"center"}
                      value={status.base_stat}
                      colorScheme={colorScheme}
                      h="0.688rem"
                      w="60%"
                      borderRadius="0.25rem"
                    />
                  </Flex>
                </>
              );
            })}
          </Box>
          <Text
            ml="50rem"
            mt="1.5rem"
            pos="absolute"
            top="19.28rem"
            color="white"
            as="b"
            fontSize="xl"
          >
            #{pokemon.data.id}
          </Text>
          <Heading
            ml="50rem"
            mt="1.5rem"
            pos="absolute"
            top="21.125rem"
            color="white"
            as="b"
            textTransform="capitalize"
            size="3xl"
          >
            {pokemon.data.name}
          </Heading>
          <Box
            ml="50rem"
            mt="1.5rem"
            pos="absolute"
            top="26.125rem"
            w="12.5rem"
            h="4.688rem"
          >
            <Grid templateColumns="repeat(2, 1fr)" gap={"0.313rem"} alignSelf="flex-end">
              {pokemon.data.types.map((typeImage) => (
                <Image
                  src={getImage[typeImage.type.name]}
                  key={typeImage.type.name}
                  alt={pokemon.data.types[0].type.name}
                />
              ))}
            </Grid>
          </Box>
          <Box
            ml="50rem"
            mt="1.5rem"
            pos="absolute"
            top="32.000rem"
            w="16.875rem"
            h="24.375rem"
            bg="white"
            borderRadius="0.8rem"
          >
            <Heading as="h5" size="lg" ml="1.25rem" mt="0.75rem">
              Moves:
            </Heading>
            {moveList.map((move) => (
              <Box
                margin="0.625rem"
                w="fit-content"
                h="fit-content"
                borderRadius="0.75rem"
                ml="1.375rem"
                border="dotted"
                bg="#ECECEC"
                borderWidth="0.125rem"
                borderColor="gray.300"
              >
                <Text align="center" p="0.313rem">
                  {move.move.name}
                </Text>
              </Box>
            ))}
          </Box>
          <Image
            src={pokemon.data.sprites.other["official-artwork"].front_default}
            ml="75rem"
            boxSize="18.625rem"
            position="absolute"
            top="12.25rem"
          />
        </Box>
      </Box>
    </>
  );
}
