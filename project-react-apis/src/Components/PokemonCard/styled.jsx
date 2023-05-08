import styled from "styled-components";

export const Container = styled.div`
  padding: 1em;
  width: 27em;  
  height: 14em;
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 2em;
  color: #ffffff;
  
  @media screen and (max-width: 1500px) {
    padding-left: 1.1em;
    width: 27em;  
    height: 13em;
    margin: 2em 0.1em 1.1 0.1em;
  }

  @media screen and (max-device-width : 480px) {
      width: 21em;  
      height: 11em;
      margin: 0em 0.1em 1 0.1em;
      padding: 0.8em;
    }

`

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;

  @media screen and (max-device-width : 480px) {
     font-size: 0.9rem
    }
`;

export const PokemonName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;

  @media screen and (max-device-width : 480px) {
     font-size: 1.6rem
    }
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;

  @media screen and (max-device-width : 480px) {
     font-size: 1.6rem;
     max-width: 100px;
     height: 1.6rem;
    }
`;

export const TypesContainer = styled.div`
  margin-bottom: 52px;

  @media screen and (max-device-width : 480px) {
    margin-bottom: 2.5rem;
    }
`;
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (max-device-width : 480px) {
      height: 100%;
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
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;

  &:hover{
    transform: scale(1.05);
    border: solid 1px yellow;
  }

  @media screen and (max-device-width : 480px) {
    width: 13vh;
    height: 4vh;
    font-size: 0.9rem
    }
`;

export const DeleteButton = styled.button`
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
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: white;

  &:hover{
    transform: scale(1.05);
    border: solid 1px yellow;
  }

  @media screen and (max-device-width : 480px) {
    width: 13vh;
    height: 4vh;
    font-size: 0.9rem
  }
`;

export const Pokemon = styled.img`
width: 193px;
height: 193px;
position: absolute;
top: -60px;
right: 0;
z-index: 2;

@media screen and (max-device-width : 480px) {
    width: 20vh;
    height: 20vh;
}
`
export const Detalhes = styled.a`
  color: white;

  &:hover{
    text-decoration: underline;
    color: white;
  }

  @media screen and (max-device-width : 480px) {
    font-size: 0.9rem
  }
`



