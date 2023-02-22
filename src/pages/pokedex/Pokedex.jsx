import Header from "../../components/header/Header";
import { ContainerStyled } from "./Style";

export default function Pokedex() {
  return (
    <ContainerStyled>
      <Header calledFor="pokedex" />
    </ContainerStyled>
  );
}
