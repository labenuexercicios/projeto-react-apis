import CardsList from "../../components/cardsList/CardsList";
import Header from "../../components/header/Header";
import { ContainerStyled } from "./Style";

export default function Home() {
  return (
    <ContainerStyled>
      <Header calledFor="home" />
      <CardsList />
    </ContainerStyled>
  );
}
