import styled from "styled-components";
import fundo from "../../assets/pokebol.png"

export const CardContainer = styled.div`
  position: relative;
  padding: 25px;
  background-color: ${(props) => props.background};
  border-radius: 37.8px;
  margin: 60px 0;
  display: grid;
  max-height: 600px;
  grid-template-columns: 20% 30% repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
  z-index: 0;
  width: 80%;
  font-family: 'Poppins', sans-serif;

  h3{
  color: black;
  font-size: 22px;
  font-weight: 300;
  font-weight: bold;
 }



`;

export const FrontImgContainer = styled.div`
  grid-area: 1/1/3/2;
  background-color: white;
  border: 2px solid #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 250px;
    width: 250px;
  }
`;
export const BackImgContainer = styled.div`
  grid-area: 3/1/5/2;
  background-color: white;
  border: 2px solid #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 250px;
    width: 250px;
  }
`;

export const StatsContainer = styled.div`
  grid-area: 1/2/5/3;
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  color: #BFD7ED;
`;
export const DataContainer = styled.div`
  grid-area: 1/3/2/4;
  color: #ffffff;
`;

export const MovesContainer = styled.div`
  grid-area: 2/3/5/4;
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;

  p {
    margin: 10px;
    width: 114px;
    height: 37px;
    background: #ececec;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;
export const PokemonName = styled.h1`
  text-transform: capitalize;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`;

export const TypesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const Pokeball = styled.figure`
  position: absolute;
  width: 50%;
  height: 580px;
  right: 0;
  top: -80px;
  display: block;
  box-sizing: content-box;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -o-background-size: 100% 100%;
  background-size: 115% 115%;
  background-image: url(${fundo});


`

export const ImgDefaultContainer = styled.div`

grid-area: 1/4/5/5;
`
  
;

export const Pokemon = styled.img`
 width: 370px;
  height: 370px;
  position: absolute;
  top: -180px;
  right: 25px;
  z-index: 2;


`
 
;

