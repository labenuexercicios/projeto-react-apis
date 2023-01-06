
import styled from "styled-components";

export const CardPokemon = styled.div `
  color: white;
  width: 420px;
  height: 180px;
  /* background: #729F92; */
  border-radius: 12px;
  padding: 20px;
  text-transform: capitalize;
  font-weight: 100;
  font-family: "Inter", sans-serif;


`
export const ButtonPokemon = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 10px;
    cursor: pointer;
    z-index: 1;
    width: 146px;
    height: 38px;
    color: black;
    font-size: 20px;
    border-style: none;
    background: white;
    border-radius: 8px;
  
`

export const ImagensCardContainer = styled.div`
  margin-left: 250px;
  margin-top: -205px;
  width: 193px;
  height: 175px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .pokeimage {
    max-width: 193px;
    z-index: 1;
  }
  .pokebola {
    position: absolute;
    top: 35px;
    right: 6px;
  }
 
  
  
`;


export const DetalhesBotão = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

   p {
    width: 74px;
    height: 24px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    color: white;
    :hover {
      cursor: pointer;
    }
  }
  button {
   
    align-items: center;
    padding: 4px 10px;
    cursor: pointer;
    z-index: 1;
    width: 146px;
    height: 38px;
    color: black;
    font-size: 20px;
    border-style: none;
    background: white;
    border-radius: 8px;
   
  }
  
`;



export const TypesContainer = styled.div`
   /* margin-bottom: 30px; */

`
export const PokemonType = styled.img`

`;


export const PokemonNumero = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;

export const PokemonNome = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  
`;


export const BotãoexcluirPokedex = styled.div`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1;
    width: 146px;
    height: 38px;
    color: white;
    font-size: 20px;
    border-style: none;
    background: white;
    border-radius: 8px;
    background-color: #FF6262;
  
  
`;