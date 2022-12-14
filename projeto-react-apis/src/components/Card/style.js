import styled from "styled-components";
import PokeBall from "../../img/pngwing 2.png";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 395px;
  height: 172px;
  border-radius: 12px;
  padding: 25px 22px 13px 23px;
  background-image: url("${PokeBall}");
  background-size: 240px 240px;
  background-repeat: no-repeat;
  background-position: 187px -60px;
  position: absolut;
  justify-content: flex-end;
  margin: 0 20px 53px 0;
`;
export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100px;
`;
export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 240px;
`;
export const DivRowCatch = styled.div`
  display: flex;
  flex-direction: row;
  height: 240px;
  justify-content: space-between;
  align-items: center;
`;
export const TextId = styled.p`
  font-size: 12px;
  padding-top: 66px;
  color: white;
`;
export const TextPokemon = styled.p`
  font-size: 30px;
  padding-top: -5px;
  color: white;
`;
export const PokemonImg = styled.img`
  position: relative;
  width: 163px;
  top: -8px;
  right: -7px;
`;
export const DivPoison = styled.div`
  padding-top: 5px;
  display: flex;
  flex-direction: row;
`;
export const CatchButton = styled.button`
  width: 146px;
  height: 38px;
  border-radius: 8px;
  background: #ffffff;
  border: none;
  cursor: pointer;
`;
export const DeleteButton = styled.button`
  width: 146px;
  height: 38px;
  border-radius: 8px;
  background: #FF6262;
  border: none;
`;
export const Link = styled.a`
  color: white;
  cursor: pointer;
`;
