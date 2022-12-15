import { DetailCard } from "../../components/DetailCard/DetailCard";
import { Header } from "../../components/Header/Header";
import { Container, MainContainer, Title } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { OhNo } from "../../components/OhNo/OhNo";

export const DetailPage = ({ pokemons, releasePokemon, pokedex, ohNo, setOhNo }) => {
  const navigate = useNavigate();
  const pathParams = useParams();

  return (
    <>
    <Container>
      <Header releasePokemon={releasePokemon} pokedex={pokedex}/>
      <MainContainer>
        <Title>Detalhes</Title>
        {pokemons
          .filter((pokemon) => {
            return pathParams.variable === pokemon.name;
          })
          .map((pokemon) => {
            return <DetailCard key={pokemon.name} url={pokemon.url} />;
          })}
      </MainContainer>
    </Container>
    {ohNo ? <OhNo setOhNo={setOhNo}/> : null}
    </>
  );
};
