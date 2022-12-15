import Logo from "../../img/Pokémon_logo.svg.png";
import Pokedexx from "../../img/pokedex.webp";
import Pokeball from "../../img/pokebola-go.png";
import {
  LogoImg,
  HeaderDiv,
  PokedexButton,
  PokedexImg,
  BlankSpace,
  DeleteButton,
  CatchButton,
} from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { goToPokedex, goToHome } from "../../routes/Coordinator";
import { ThereIsPokemon } from "../ThereIsPokemon/ThereIsPokemon";

export const Header = ({ releasePokemon, Pokedex }) => {
  const navigate = useNavigate();
  const pathParams = useParams();

  const ThereIsPokemon = (pokemon, pokedex) => {
    console.log(pokedex);
    if (pokedex !== undefined) {
      console.log("ola");
      const aux = pokedex.filter((item) => {
        return item.name === pokemon;
      });
      if (!aux) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <HeaderDiv>
      {pathParams.variable !== "pokedex" ? (
        pathParams.variable === undefined ? (
          <BlankSpace></BlankSpace>
        ) : (
          <PokedexButton onClick={() => goToHome(navigate)}>
            <PokedexImg src={Pokeball} /> <strong>Todos Pokémons</strong>
          </PokedexButton>
        )
      ) : (
        <PokedexButton onClick={() => goToHome(navigate)}>
          <PokedexImg src={Pokeball} /> <strong>Todos Pokémons</strong>
        </PokedexButton>
      )}
      <LogoImg src={Logo} />

      {pathParams.variable === "pokedex" ? (
        <BlankSpace></BlankSpace>
      ) : pathParams.variable === undefined ? (
        <PokedexButton onClick={() => goToPokedex(navigate, "pokedex")}>
          <PokedexImg src={Pokedexx} /> <strong>Pokédex</strong>
        </PokedexButton>
      ) : <DeleteButton onClick={() => releasePokemon(pathParams.variable)}>
      Excluir
    </DeleteButton>}
    </HeaderDiv>
  );
};
