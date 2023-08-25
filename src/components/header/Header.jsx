import { BackHome, Conteiner, ImageStyled } from "./styled";
import logo from "../../assets/Logo.png";
import { Button } from "@chakra-ui/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../../routes/Cordinator";
import { FiChevronLeft } from "react-icons/fi";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";


export const Header = () => {

  const context = useContext(GlobalContext)
    const { pokedex, detail,capturePokemon,deletPokemon } = context
  
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  const checkPokemon = () => {
    const found = pokedex?.find((item) => {
      return item.name=== detail?.name;
    });
    if (found) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Conteiner>
      {currentPath === "/" ? (
        <div></div>
      ) : (
        <BackHome onClick={() => goToHomePage(navigate)}>
          <FiChevronLeft />
          Todos Pokemons
        </BackHome>
      )}

      <ImageStyled src={logo} />
      {currentPath === "/" && (
        <Button
          colorScheme="blue"
          w={200}
          onClick={() => goToPokedexPage(navigate)}
        >
          Pokedex
        </Button>
      )}

      {currentPath?.includes(`detalhesPokemon`) && !checkPokemon() && (
        <Button
          colorScheme="blue"
          w={200}
          onClick={() => capturePokemon(detail)}
        >
          Capturar!
        </Button>
      )}
      {currentPath?.includes(`detalhesPokemon`) && checkPokemon() && (
        <Button
          colorScheme="red"
          w={200}
          onClick={() => deletPokemon(detail)}
        >
          Excluir!
        </Button>
      )}
      
    </Conteiner>
  );
};
