import styled from "styled-components";

export const Container = styled.div`
padding: 16px;
min-width: 400px;
max-width: 440px;
background-color: ${(props) => props.color};
border-radius: 12px;
display: flex;
position: relative;
margin: 50px;
color: #ffffff;
`;

export const FotoPokemon = styled.img`
  width: 180px;
  height: 180px;
  position: absolute;
  top: -30px;
  right: 0;
  z-index: 2;
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
  font-family: Arial, Helvetica, sans-serif
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

export const ButtonDetalhes = styled.button`
  border: none;
  background: none;
  color: white;
  text-decoration: underline;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
