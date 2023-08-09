import styled from "styled-components";

//Estilização da div Principal
export const DivMainDetails = styled.div`
  display: flex;
  background-color: #5e5e5e;
  min-height: 100vh;
  max-width: 100vw;
  padding-top: 0px;
  padding-bottom: 5vh;
`;

//Estilização do Titulo Detalhes
export const TextoDetalhes = styled.p`
  position: absolute;
  width: 220px;
  height: 72px;
  left: 40px;
  top: 220px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  color: #ffffff;
`;

export const DivTitulo = styled.div`
  height: 192px;
`;

//Estilização da div que recebe as informações
export const DivMainCardDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2vw;
  width: 95vw;
  height: 663px;
  margin-left: 2vw;
  margin-right: 2vw;
  background: #729f92;
  border-radius: 37.8857px;
  z-index: 0;
  position: relative;
`;

//Estilização das IMGS front e back + Base Stats
export const DivMainImgs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 613px;
  margin-left: 2vw;
`;

export const DivImgAndBase = styled.div`
  display: flex;
  gap: 2vw;
  width: 60vw;
`;


//Estilização do card e dos Moves
export const DivMainInfoAndMoves = styled.div`
  width: 45vw;
  height: 613px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
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
  background: ${(props) => props.color};
  width: 99px;
  height: 31px;
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

//ESTILIZAÇÃO DAS IMAGENS
export const ImgFrontandBack = styled.img`
  height: 282px;
  width: 282px;
  left: 44px;
  top: 26px;
  border-radius: 8px;
`;

export const FrontImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 282px;
  height: 282px;
  background-color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 8px;
`;
export const BackImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 282px;
  height: 282px;
  background-color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 8px;
`;

//Estilização Pokebola e POKEMON
export const DivPokebola = styled.img`
  z-index: 1;
  position: absolute;
  right: 0vw;
`;
export const ImgPokemon = styled.img`
  z-index: 1;
  position: absolute;
  height: 270px;
  width: 270px;
  left: 70vw;
  top: -7vw;
`;

//Estilização texto DETALHES
export const DivTextoDetalhes = styled.div`
  height: 188px;
  background-color: #5e5e5e;
`;

//Estilização da progress BAR

export const DivBaseStats = styled.div`
display: flex;
flex-direction: column;
align-items: left;
padding-left: 3vw;
  width: 30vw;
  height: 613px;
  background: #ffffff;
  border-radius: 12px;
`;

export const BarraStats = styled.div`
  display: flex;
  --progress: ${(props) => props.stats};
  border-radius: 4px;
  height: 2vh;
  width: calc(var(--progress) * 1%);
  background-color: hsl(calc(var(--progress) * 0.7), 90%, 50%);
  `

export const DivBarraStats = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  left: 154px;
  gap: 1px;
  margin: 3vh;
  width: 15vw;
  `

export const DivTextoProgresso = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `

export const TextoStats = styled.p`
  border-top: 1px solid rgb(0,0,0,0.2);
  padding-top: 5px;
  display: flex;
  position: absolute;
  text-transform: capitalize;
  color: grey;
  font-size: 1.1rem;
  font-weight: 600;
  width: 25vw;
  `

export const StatsH2 = styled.p`
  position: relative;
  font-family: sans-serif;
  padding-left: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 2rem;
  font-weight: 700;
  `
export const EstiloBaseStats = styled.p`
  position: relative;
  padding-left: 20px;
  padding-top: 20px;
  font-size: 2rem;
  font-weight: 700;
`;
//ESTILIZAÇÃO MOVIMENTOS

export const DivMoves = styled.div`
  display: flex;
  gap: 1vw;
  flex-direction: column;
  width: 292px;
  height: 453px;
  background: #ffffff;
  border-radius: 8px;
  z-index: 2;
  padding: 2vw;
`;

export const DivMovesStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  width: fit-content;
  height: 37px;
  background: #ececec;
  border: 1px dashed rgba(0, 0, 0, 0.14);
  border-radius: 12px;
`;

export const MovesText = styled.p`
  width: 87px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;

export const TextMove = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  text-transform: capitalize;
`;

export const DivTotalStats = styled.div`
  display: flex;
  padding-top: 5px;
`;

export const TextoTotal = styled.div`
  display: flex;
  text-transform: capitalize;
  color: grey;
  justify-content: right;
  font-size: 1rem;
  font-weight: 560;
`;

export const TextoTotal1 = styled.div`
  display: flex;
  text-transform: capitalize;
  color: grey;
  justify-content: right;
  font-size: 1rem;
  font-weight: 700;
  padding-left: 16px;
`;
