import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { Container, MainContainer, Title } from "./style";

export const HomePage = () => {
  return (
    <Container>
      <Header/>
      <MainContainer>
        <Title>Todos Pokémons</Title>
        <Card/>
      </MainContainer>
    </Container>
  );
};
