import { Button, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goHome, goToDetails, goToPokedex } from "../routes/cordinator";
import image from "../assets/image.png";
import { ChevronLeftIcon } from "@chakra-ui/icons";

function Header() {
  const navigate = useNavigate();
  return (
    <Flex justifyContent="space-around" alignItems={"center"}>
      <Button
        w={"12rem"}
        h={"2.5rem"}
        bg={"white"}
        as={"u"}
        fontSize={"1.5rem"}
        onClick={() => {
          goHome(navigate);
        }}
      >
        <ChevronLeftIcon />
        Todos Pokémons
      </Button>
      <Image src={image} alt="" m={"1rem"} />
      <Button
        w={"16rem"}
        h={"4rem"}
        br={"2rem"}
        bg={"#33A4F5"}
        color={"white"}
        onClick={() => {
          goToPokedex(navigate, "pokedex");
        }}
      >
        Pokédex
      </Button>
    </Flex>
  );
}

export default Header;
