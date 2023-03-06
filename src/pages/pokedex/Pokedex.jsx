import Header from "../../components/header/Header";
import { ContainerStyled } from "./Style";
import PokedexComponent from "../../components/pokedex/Pokedex";

export default function Pokedex() {
  return (
    <ContainerStyled>
      <Header calledFor="pokedex" />
      <PokedexComponent />
    </ContainerStyled>
  );
}
