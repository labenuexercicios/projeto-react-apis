import { useLocation } from "react-router-dom";
import CardDetalhes from "../../components/CardDetalhes/CardDetalhes";
import Header from "../../components/Header/Header";
import { Container, Title } from "./styles";

const PokemonDetailPage = () => {
  const { state } = useLocation();

  return (
    <>
      <Header pokemon={state} />
      <Container>
        <Title>Detalhes</Title>

        <CardDetalhes pokemon={state} />
      </Container>
    </>
  );
};

export default PokemonDetailPage;
