import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.5);
  width: 100vw;
  height: 100%;
  position: fixed;
  backdrop-filter: blur(10px);
  z-index: 99;
`;

export const CardGotcha = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 451px;
  height: 222px;
  background: #ffffff;
  border-radius: 12px;
`;

export const TextoGotcha = styled.p`
  position: absolute;
  width: 219.16px;
  height: 72px;
  left: 123px;
  top: 61px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  color: #000000;
`;
export const TextoAdd = styled.p`
  position: absolute;
  width: 337px;
  height: 24px;
  left: 64px;
  top: 133px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;
