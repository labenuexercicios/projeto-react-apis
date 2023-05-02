import styled from 'styled-components'

export const Main = styled.main`
    height: 150vh;
    width: 100%;
    background-color: #5E5E5E;
    display: flex;
    justify-content: center
;
`

export const Container = styled.div`
  padding: 1em;
  width: 95%;  
  height: 50em;
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 8em 0em;
  color: #ffffff;

  
  @media screen and (max-width: 1500px) {
    padding-left: 2em;
    width: 24em;  
    height: 13em;
  }

`

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;

export const PokemonName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const TypesContainer = styled.div`
  margin-bottom: 52px;
`;
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 50em;

`;

export const Pokemon = styled.img`
width: 15em;
height: 15em;
position: absolute;
top: -7.5rem;
right: 2em;
z-index: 2;
`
export const Detalhes = styled.a`
  color: white;

  &:hover{
    text-decoration: underline;
    color: white;
  }
`



