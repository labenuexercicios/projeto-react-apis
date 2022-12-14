import { DetailCard } from "../../components/DetailCard/DetailCard";
import { Header } from "../../components/Header/Header";
import { Container,  MainContainer, Title } from "./style";

export const DetailPage = () => {
  return (
    <Container>
      <Header/>
      <MainContainer>
        <Title>Detalhes</Title>
        <DetailCard/>
      </MainContainer>
    </Container>
  );
};