import { getColors } from "../../util/ReturnCardColor";
import { cardTypes } from "../../util/ReturnCardType";
import Status from "../status/Status";
import {
  BackImgContainer,
  CardContainer,
  DataContainer,
  FrontImgContainer,
  ImgDefaultContainer,
  MovesContainer,
  Pokeball,
  Pokemon,
  PokemonName,
  PokemonNumber,
  PokemonType,
  StatsContainer,
  TypesContainer,
} from "./styles";

export default function CardDetalhes({ pokemon }) {
  const { name, id, moves, sprites, types, stats } = pokemon;

  return (
    <CardContainer background={getColors(types[0])}>
      <FrontImgContainer>
        <img src={sprites.frontDefault} alt={name} />
      </FrontImgContainer>
      <BackImgContainer>
        <img src={sprites.backDefault} alt={name} />
      </BackImgContainer>

      <StatsContainer>
        <h3>Stats Base:</h3>
        <Status stats={stats} />
      </StatsContainer>

      <DataContainer>
        <PokemonNumber>#{id}</PokemonNumber>
        <PokemonName>{name}</PokemonName>
        <TypesContainer>
          {types.map((type) => {
            return <PokemonType key={type} src={cardTypes(type)} alt={type} />;
          })}
        </TypesContainer>
      </DataContainer>

      <MovesContainer>
        <h2>Moves:</h2>
        {moves.map((move) => {
          return <p key={move}> {move}</p>;
        })}
      </MovesContainer>

      <ImgDefaultContainer>
      <Pokemon src={sprites.default} alt={name}/>
      </ImgDefaultContainer>

      <Pokeball />
      
    </CardContainer>
  );
}
