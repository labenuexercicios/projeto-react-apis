import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { Box, Flex, Image, Button } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <Box bg="white" w="100%" h="10rem">
      <Flex alignItems="center" justifyContent="center" gap="1.875rem">
        {location.pathname === "/" ? (
          <>
          <Image src={Logo} alt="Pokemon Logo" ml="17.5rem" mt="0.93rem"/>
          <Link to={"/pokedex"}>
            <Button colorScheme="blue" size="lg" fontFamily="poppins" fontWeight="43.75rem" w="17.9rem" h="4.6rem" borderRadius="0.5rem" ml="2.75rem">
              Pokédex
            </Button>
          </Link>
          </>
        ) : (
          <>
          <Flex alignItems="center" justifyContent="flex-end" gap="3.12rem">
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
          <Image src={Logo} alt="Pokemon Logo" mr="21rem" mt="0.93rem"/>
          </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
}
