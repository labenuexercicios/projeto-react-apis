import { Box, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goHome, goToDetails, goToPokedex } from "../routes/cordinator";
import image from "../assets/image.png";

function Header() {
  const navigate = useNavigate();
  return (
    <Flex justifyContent="space-around">
      <button
        onClick={() => {
          goToPokedex(navigate, "pokedex");
        }}
      >
        ir para pokedex
      </button>
      <Image src={image} alt="" />

      <button
        onClick={() => {
          goToDetails(navigate, "details");
        }}
      >
        ir para detalhes
      </button>
      <button
        onClick={() => {
          goHome(navigate);
        }}
      >
        ir para home
      </button>
    </Flex>
  );
}

export default Header;
