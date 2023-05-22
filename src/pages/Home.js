import React, { useContext } from "react";
import Header from "../components/header/Header";
import { GlobalContext } from "../context/GlobalContext";
import { Box, Container, Flex, Grid, Heading } from "@chakra-ui/react";
import {Card} from "../components/card/Card";
import { getColors } from "../utils/ReturnCardColor";

export default function Home() {
  const { pokelist, addPokemon, removePokemon, pokedex } =
    useContext(GlobalContext);

  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.data.name === pokemonInPokedex.data.name
        )
       
    );


  return (
    <>
      <Header />
      <Box minH={"62.5rem"} bg="#5E5E5E" w={"100%"}>
        <Heading m="2.25rem" pt="0.31rem" color="white">
          Todos Pokémons
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={"0.625rem"}>
          {filteredPokelist().map((pokemon) => {
            return (
              <Card
                key={pokemon.data.id}
                pokemon={pokemon}
                image={pokemon.data.sprites.other["official-artwork"].front_default}
                name={pokemon.data.name}
                id={pokemon.data.id}
                types={pokemon.data.types[0].type.name}
                cardColor={getColors(pokemon.data.types[0].type.name)}
                addPokemon={addPokemon}
                removePokemon={removePokemon}
                pokedex={pokedex}
              />
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
