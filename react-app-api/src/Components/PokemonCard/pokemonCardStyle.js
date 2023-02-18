import styled from "styled-components";
//Estilização Div Pai dos Cards
export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2vw;
  background-color: #5e5e5e;
  row-gap: 10vh;
  padding-bottom: 15vh;
`;


//Estilização do Titulo
export const DivTitle = styled.div`
  height: 187px;
`;

export const TextTitle = styled.p`
  position: absolute;
  width: 420px;
  height: 72px;
  left: 40px;
  top: 220px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  /* identical to box height */

  color: #ffffff;
`;

//Estilização Card Principal
export const MainCard = styled.div`
  display: flex;
  width: 440px;
  height: 210px;
  border-radius: 12px;
  background: ${(props) => props.background};
  padding-left: 1.5vw;
  flex-direction: column;
`;

//Estilização - IMAGENS, NOME E ID
export const DivFirstLineCard = styled.div`
  padding-top: 23px;
  height: 13vh;
`;

export const ImgPokemon = styled.img`
  height: 193px;
  width: 193px;
  position: relative;
  z-index: 2;
  top: -140px;
  left: 215px;
`;

export const PokebolaImg = styled.img`
  position: relative;
  top: -275px;
  left: 175px;
  width: 240px;
  height: 210px;
`;

//Estilização Nome e ID
export const IdStyle = styled.p`
  width: 30px;
  height: 19px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
`;

export const Title = styled.p`
  position: relative;
  top: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: #ffffff;
  text-transform: capitalize;
`;

//Estilização Types
export const DivMainTypes = styled.div`
  display: flex;
  height: 11vh;
  gap: 7px;
`;

export const DivTypes = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  display: flex;
  padding: 5px 8px;
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
  width: 99px;
  height: 31px;
  background: ${(props) => props.color};
`;

export const ImgType = styled.img`
  height: 20px;
  width: 20px;
`;

export const Type = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  text-transform: capitalize;
`;

//Estilização Botão:Caputrar! e Details
export const ButtonCapturar = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  border-style: none;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
`;

export const DivDetailsAndButton = styled.div`
  display: flex;
  z-index: 3;
  align-items: center;
  justify-content: space-between;
  padding-right: 36px;
  padding-bottom: 25px;
`;

export const TextDetails = styled.p`
  text-transform: capitalize;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #ffffff;
`;