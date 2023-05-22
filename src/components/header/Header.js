import React from "react";
import { Link } from "react-router-dom";
import PokemonLogo from "../../assets/pokemon-logo.png";
import { Box, Flex, Image, Button } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <Box bg="white" w="100%" h="10rem">
      <Flex alignItems="center" justifyContent="space-evenly">
        {location.pathname === "/" ? (
          <>
          <Image src={PokemonLogo} alt="Pokemon Logo" ml="35rem" mt="0.9rem"/>
          <Link to={"/pokedex"}>
            <Button colorScheme="blue" size="lg" fontFamily="poppins" fontWeight="43.75rem" w="18rem" h="4.5rem" borderRadius="1rem" ml="2.8rem">
              Pokédex
            </Button>
          </Link>
          </>
        ) : (
          <>
          <Flex alignItems="center" justifyContent="space-evenly" gap="20rem">
          <Link to={"/"}>
            <Button
              colorScheme="white"
              size="md"
              color="black"
              justifyContent="flex-start"
              
              
            >
              &lt;Todos os Pokémons
            </Button>
          </Link>
          <Image src={PokemonLogo} alt="Pokemon Logo" mr="33rem" mt="0.9rem"/>
          </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
}
