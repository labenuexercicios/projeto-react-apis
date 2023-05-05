import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  width: 340px;
  height: 190px;
  background-color: ${(props) => props.color[0]};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 50px;
  color:black;
  
`;

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
  color: black;
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
`;

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`;

export const Pokemon = styled.img`
position: absolute;
width: 220px;
left: 153px;
top: -85px;
`

export const Containerimg = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
