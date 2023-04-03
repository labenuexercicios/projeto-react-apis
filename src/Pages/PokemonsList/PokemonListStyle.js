import styled from "styled-components";

export const PokemonListContainer = styled.div`
  background-color: #5d5d5d;
  color: white;
  padding: 2vw;
  min-height: 85vh;

  .pokemons-list {
    margin-top: 4vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1vw;
  };
`;
