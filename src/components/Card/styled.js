import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  min-height: 200px;
  max-height: 210px;
  min-width: 410px;
  max-width: 440px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 50px;
  color: #ffffff;
  @media only screen and (max-width: 600px) {
    min-width: 340px;
  max-width: 400px;
  top: 10%;
  right: 5%;
}
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
  left: 220px;
  z-index: 2;
  color: #000;


  

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;

@media only screen and (max-width: 600px) {

  left: 150px;
}
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
  left: 220px;
  z-index: 2;
  color: #FFFFFF;

  @media only screen and (max-width: 600px) {

left: 150px;
}


  

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
position: absolute;
width: 193px;
height: 193px;
bottom: 60px;
left: 210px;
z-index: 1;
@media only screen and (max-width: 800px) {
  width: 125px;
height: 125px;
left: 220px;
}
`;

export const PokemonType = styled.img`
  margin-right: 3px;
  @media only screen and (max-width: 800px) {
    margin-right: 0px;

}
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