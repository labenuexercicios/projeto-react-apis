import { useNavigate } from "react-router-dom";
import {
  ButtonAllPokemons,
  ButtonDeleteFromPokedex,
  ButtonPokedex,
  ContainerStyled,
  HeaderCenter,
  HeaderLeft,
  HeaderRight,
} from "./Style";
import { goToPokedex, goToHome } from "../../router/Coordinator";

export default function Header({ calledFor }) {
  const navigate = useNavigate();
  return (
    <ContainerStyled>
      <HeaderLeft>
        {calledFor == "pokedex" || calledFor == "details" ? (
          <ButtonAllPokemons onClick={() => goToHome(navigate, 0)}>
            All pokemons
          </ButtonAllPokemons>
        ) : (
          <></>
        )}
      </HeaderLeft>
      <HeaderCenter></HeaderCenter>
      <HeaderRight>
        {calledFor == "details" ? (
          <ButtonPokedex>Delete from pokédex</ButtonPokedex>
        ) : (
          <></>
        )}
        {calledFor == "home" ? (
          <ButtonDeleteFromPokedex onClick={() => goToPokedex(navigate, 0)}>
            Pokédex
          </ButtonDeleteFromPokedex>
        ) : (
          <></>
        )}
      </HeaderRight>
    </ContainerStyled>
  );
}
