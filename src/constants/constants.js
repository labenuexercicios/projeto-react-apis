import { createGlobalStyle } from "styled-components";

export const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export const GlobalStyled = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;     
}
`;

