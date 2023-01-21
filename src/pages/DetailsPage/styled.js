import styled from "styled-components";

export const Content = styled.div`
  padding: 25px;
`;
export const Detail = styled.span`
  padding: 15px;
  font-size: 48px;
  color: #ffffff;
`;
export const DetailsContent = styled.div`
  width: 1500px;
  height: 660px;
  background-color: green;
  border-radius: 37px;
  padding: 26px 44px;
  display: flex;
  margin: 56px auto;
  background-color: ${(props) => props.color};
`;

export const SpriteContent = styled.div`
  width: 282px;
  height: 282px;
  border-radius: 8px;
  background-color: #ffffff;
`;
export const Sprites = styled.div`
  display: flex;
  row-gap: 44px;
  width: 285px;
  flex-wrap: wrap;
`;

export const Stats = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 343px;
  height: 100%;
  flex-wrap: wrap;
  border-radius: 12px;
  margin-left: 35px;
`;

export const RightContent = styled.div`
  width: 30%;
  height: 100%;
  margin-left: 68px;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-size: 48px;
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

export const Moves = styled.div`
  width: 292px;
  height: 453px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-top: 35px;
  padding: 18px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  overflow-y: auto;
`;

export const Move = styled.div`
  width: fit-content;
  height: 40px;
  padding: 10px;
  border-radius: 12px;
  background-color: #ececec;
  font-size: 14px;
  text-transform: capitalize;
`;
