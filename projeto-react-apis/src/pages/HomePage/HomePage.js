import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { Container, MainContainer, Title, DivColumn } from "./style";

export const HomePage = ({ pokemons }) => {
  return (
    <Container>
      <Header />
      <MainContainer>
        <Title>Todos Pokémons</Title>
        <DivColumn>
        {pokemons.map((item) => {
          return <Card key={item.name} url={item.url} />;
        })}
        </DivColumn>
      </MainContainer>
    </Container>
  );
};
