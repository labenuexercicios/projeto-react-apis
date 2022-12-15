import { Card } from "../../components/Card/Card";
import { Gotcha } from "../../components/Gotcha/Gotcha";
import { Header } from "../../components/Header/Header";
import { Container, MainContainer, Title, DivColumn } from "./style";

export const HomePage = ({
  pokemons,
  catchPokemon,
  releasePokemon,
  gotcha,
  setGotcha,
}) => {
  return (
    <>
      <Container>
        <Header releasePokemon={releasePokemon} />
        <MainContainer>
          <Title>Todos Pokémons</Title>
          <DivColumn>
            {pokemons.map((item) => {
              return (
                <Card
                  key={item.name}
                  url={item.url}
                  catchPokemon={catchPokemon}
                />
              );
            })}
          </DivColumn>
        </MainContainer>
      </Container>
      {gotcha ? <Gotcha setGotcha={setGotcha}/> : null}
    </>
  );
};
