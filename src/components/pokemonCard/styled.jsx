import { styled } from "styled-components";

export const ContainerCard = styled.div`
  padding: 16px;
  width: 30%;
  //max-width: 30%;
  height: 37vh;
  background-color: ${(props) =>props.cor};
  border-radius: 12px;  
  position: relative;
  margin: 2%;
  color: #ffffff;
`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
`;

export const PokemonName = styled.h1`
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;  
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
  display:flex;
`;
export const Pokeball = styled.img`
  position: absolute;
  width:75%;
  top: 0;
  right: 0;
`;

export const CatchButton = styled.button`
  width: 35%;
  height: 18%;
  background: #ffffff;
  border-radius: 8px;
  z-index:1;    
  position: absolute;
  bottom: 10px;
  right: 22px;
  color:black;   
  &:hover{cursor: pointer;
 // background-color:green;
  }
`;

export const DeletButton = styled.button`
display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 35%;
  height: 18%;
  background:#FF6262;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`

export const Detalhes = styled.button`
font-size:1.2rem;
  text-decoration:underline;
  cursor: pointer;
  color:  #ffffff;
  //display:flex;
`

export const Pokemon = styled.img`
width: 50%;
height: 100%;
position: absolute;
top: -60px;
right: 0;
z-index: 2;
`
