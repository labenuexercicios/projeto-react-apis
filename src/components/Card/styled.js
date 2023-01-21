import styled from "styled-components";

export const CardItem = styled.div`
  display: flex;
  height: 210px;
  width: 440px;
  color: black;
  border-radius: 10px;
  font-size: 16px;
  padding: 23px 25px;
  background-color: ${(props) => props.color};
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  position: relative;
`;

export const Id = styled.span``;
export const Name = styled.span`
  font-size: 32px;
  &::first-letter {
    text-transform: uppercase;
  }
`;
export const TypeContent = styled.div`
  width: 220px;
  height: 35px;
  display: flex;
  column-gap: 5px;
`;

export const Type = styled.img`
  max-width: 100px;
  height: 32px;
  border: dotted 1px white;
  border-radius: 10px;
`;
export const DetailsContent = styled.div`
  position: absolute;
  bottom: 0px;
  width: 390px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Details = styled.a`
  text-decoration: underline;
  color: #ffffff;
  cursor: pointer;
`;
export const Capturar = styled.button`
  width: 146px;
  height: 38px;
  border-radius: 8px;
  background-color: #ffffff;
  border: none;
`;
export const Right = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const PokeImage = styled.img`
  width: 193px;
  position: absolute;
  z-index: 2;
  top: -70px;
`;
export const PokebalContent = styled.img`
  position: absolute;
  z-index: 1;
  top: -80px;
  left: -56px;
`;
