import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  min-height: 200px;
  min-width: 350px;
  background-color: black;
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 50px;
  color: #ffffff;
  z-index: 0;
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
  top: 85px;
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
  top: 85px;
  right: 0vh;
  left: 27vh;
  color: white;
  background: red;
  z-index: 2;
  `;
  
export const PokemonNumber = styled.p`
font-family: "Inter", sans-serif;
font-size: 20px;
font-weight: 600;
text-align: left;

`;
export const PokemonName = styled.h1`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
 
`;

export const Pokeball = styled.img`
  position: absolute;
  margin-left: 20vh;
  width: 15vw;
  height: 25vh;
  top: 5vh;
 
`;

export const Pokemon = styled.img`
width: 193px;
height: 193px;
position: absolute;
bottom: 35px;
left: 25vh;
z-index: 1;
`


export const PokemonType = styled.img`
  max-width: 100px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const TypesContainer = styled.div`
  
`;