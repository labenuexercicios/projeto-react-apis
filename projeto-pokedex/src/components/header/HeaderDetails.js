import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { Box, Flex, Image, Button, Grid } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { AddModal } from "../modal/AddModal";
import { useDisclosure } from "@chakra-ui/react";

export default function HeaderDetails(pokemon) {
  const { pokelist, pokedex, addPokemon, removePokemon } =
    useContext(GlobalContext);
  const location = useLocation();
  const {isOpen, onOpen, onClose} = useDisclosure()

  

  return (
    <Box bg="white" w="100%" h="10rem">
      <Grid templateColumns="repeat(3, 1fr)" gap={"0.375rem"} ml="1.75rem">
        <Link to={"/"}>
          <Button
            colorScheme="white"
            size="md"
            color="black"
            justifyContent="flex-start"
            position="left"
            mt="2.625rem"
            ml="12rem"
          >
            &lt;Todos os Pokémons
          </Button>
        </Link>
        <Image src={Logo} alt="Pokemon Logo" ml="5.0rem" mt="0.93rem" />
        {/* {location.pathname===`/pokemon/${pokemon.name}` || pokelist.find((item) => pokemon === item.data.id) ? (
          <Button color="white" bg="#FF6262" w="226px" h="57px" mt="30px" onClick={()=> removePokemon(pokemon, onOpen, onClose)}>
            Excluir da Pokédex
          </Button>
        ) : (
          <Button color="white" bg="#FF6262" w="226px" h="57px" mt="30px" onClick={()=>addPokemon(pokemon, onOpen ,onClose)}>
            Adicionar na Pokédex
          </Button>
        )} */}
      </Grid>
      {/* <AddModal isOpen={isOpen} onClose={onClose} pokemon={pokemon}/> */}
    </Box>
  );
}
