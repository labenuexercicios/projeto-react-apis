import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 160px;
  background-color: white;
  display: flex;
  position: relative;
`;

export const Logo = styled.img`
  width: 307px;
  height: 113px;
  margin: auto auto;
`;

export const ButtonPokedex = styled.button`
  width: 226px;
  height: 57px;
  position: absolute;
  right: 40px;
  top: 51px;
  background-color: #33a4f5;
  color: white;
  border-radius: 10px;
  border: none;
  font-size: 16px;
`;

export const ButtonExcluirPokedex = styled.button`
  width: 226px;
  height: 57px;
  position: absolute;
  right: 40px;
  top: 51px;
  background-color: #ff6262;
  color: white;
  border-radius: 10px;
  border: none;
  font-size: 16px;
`;

export const SpanBack = styled.span`
  position: absolute;
  left: 100px;
  top: 62px;
  font-size: 24px;
`;
