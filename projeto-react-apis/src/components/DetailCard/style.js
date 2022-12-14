import styled from "styled-components";
import PokeBall from "../../img/pngwing 2.png";

export const ContainerCard = styled.div`
  width: 1389.14px;
  height: 663px;
  border-radius: 37.89px;
  padding: 24px 0px 26px 44px;
  display: flex;
  flex-direction: row;
  background: olive;
  background-image: url("${PokeBall}");
  background-size: 900px 900px;
  background-repeat: no-repeat;
  background-position: 620px -118px;
  align-self: center;
  position: absolut;
`;
export const Title = styled.h2`
  padding-bottom: 20px;
`;
export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 47px;
`;
export const DivImg = styled.div`
  display: flex;
  width: 282px;
  height: 282px;
  border-radius: 8px;
  background: #ffffff;
  align-items: center;
  justify-content: center;
`;
export const DivStats = styled.div`
  width: 343px;
  height: 613px;
  border-radius: 12px;
  background: #ffffff;
  margin-left: 34px;
  padding: 19px 18px 18px 19px;
`;
export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6px 0;
  align-items: center;
`;
export const DivText = styled.div`
  display: flex;
  width: 80px;
  justify-content: end;
`;
export const Value = styled.h3`
  padding: 0 10px;
`;
export const DivValue = styled.div`
  display: flex;
  width: 50px;
  align-items: center;
  justify-content: center;
`;
export const DivLine = styled.div`
  width: 306.1px;
  height: 1px;
  border: 0.25px solid #cccccc;
`;
export const DivGraphic = styled.div`
  width: 160px;
  height: 15px;
  border-radius: 6px;
  background: transparent;
`;
export const DivGraphicInterior = styled.div`
  width: 80px;
  height: 15px;
  border-radius: 6px;
  background: orange;
`;
export const TextId = styled.p`
  font-size: 16px;
  color: white;
`;
export const TextPokemon = styled.p`
  font-size: 48px;
  padding-top: -5px;
  color: white;
`;
export const PokemonImg = styled.img`
  position: relative;
  height: 270px;
  width: 270px;
  top: -150px;
  right: -25px;
`;
export const DivPoison = styled.div`
  padding-top: 5px;
  display: flex;
  flex-direction: row;
`;
export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 68px;
  justify-content: space-between;
`;
export const DivName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const DivMoves = styled.div`
  width: 292px;
  height: 453px;
  border-radius: 8px;
  padding: 19px 18px 18px 19px;
  background: white;
`;
export const Moves = styled.div`
  height: 40px;
  width: fit-content;
  background: #ececec;
  border-radius: 15px;
  border: 1px dashed #919090;
  padding: 10px;
  margin-bottom: 20px;
`;
