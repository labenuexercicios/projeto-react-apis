import styled from "styled-components";


export const CardsContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
justify-items: center;
;
`;

export const Container = styled.div`
  padding: 16px;
  width: 440px;
  background-color: ${(props)=> props.color};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 50px;
  color: #ffffff;
`
export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`
export const PokemonName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`

export const TypesContainer = styled.div`
  margin-bottom: 52px;
`

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`
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
  font-family: 'Poppins';
  font-style: normal;
  font-size: 18px;
  font-weight: 400;
`
export const Button = styled.button`
color: white;
text-decoration-line: underline;
background: none;
border: none;
font-size: 18px;
font-family: 'Poppins';
font-style: normal;
cursor: pointer;
font-weight: 700;
`
export const Pokemon = styled.img`
  width: 193px;
  height: 193px;
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 2;
`;

export const Pokebola = styled.img`
  position: absolute;
  bottom: 0px;
  width: 290px;
  left: 220px;
  top: -40px;
`;