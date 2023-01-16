import styled from "styled-components";

export const CardItem = styled.div`
  display: flex;
  height: 210px;
  width: 440px;
  background-color: white;
  color: black;
  border-radius: 10px;
  font-size: 16px;
  padding: 23px 25px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Id = styled.span``;
export const Name = styled.span`
  font-size: 32px;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Type = styled.span``;
export const Details = styled.span``;
export const Capturar = styled.button``;
