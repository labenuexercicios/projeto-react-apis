import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  min-height: 200px;
  max-height: 400px;
  min-width: 300px;
  max-width: 400px;
  background-color: black;
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 50px;
  color: #ffffff;
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
  position: relative;
  bottom: -10vh;
  right: 0vh;
  left: 27vh;
  z-index: 2;
  color: #000;
  `;
  export const ExtButton = styled.button`
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
  position: relative;
  bottom: -100px;
  right: 0vh;
  left: 35vh;
  z-index: 2;
  color: white;
  background: red;
  `;
  
export const PokemonNumber = styled.p`
font-family: "Inter", sans-serif;
font-size: 15px;
font-weight: 600;
text-align: left;
`;
export const PokemonName = styled.h1`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`;

export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  left: 30vh;
  width: 10vw;
  height: 30vh;
`;

export const Pokemon = styled.img`
width: 193px;
height: 193px;
position: absolute;
top: -1vw;
left: 25vh;
z-index: 1;
`


export const PokemonType = styled.img`
  max-width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const TypesContainer = styled.div`
  
`;