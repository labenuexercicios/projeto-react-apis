import styled from "styled-components";

export const Container = styled.div`
  padding: 12px;
  min-height: 200px;
  max-height: 210px;
  min-width: 400px;
  max-width: 440px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 40px;
  color: #ffffff;
  top: 50%;
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
  top: 40px;
  right: 0vh;
  left: 35vh;
  z-index: 2;
  color: #000;


  

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
  `;

  export const ExtButton = styled.button`

display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #FF6262;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: relative;
  top: 40px;
  right: 0vh;
  left: 35vh;
  z-index: 2;
  color: #FFFFFF;;


  

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
  `;
  
export const PokemonNumber = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

`;
export const PokemonName = styled.h1`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
/* identical to box height */
 
`;

export const Pokeball = styled.img`
 position: absolute;
  top: 0;
  right: 0;
`;

export const Pokemon = styled.img`
width: 193px;
height: 193px;
position: absolute;
bottom: 60px;
left: 30vh;
z-index: 1;
`;


export const PokemonType = styled.img`
  
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const PokemonDetails = styled.p`
  font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-align: left;
margin-top: 1vh;
/* identical to box height */

text-decoration-line: underline;
`;
export const TypesContainer = styled.div`
  
`;