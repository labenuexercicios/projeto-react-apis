import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 451px;
  height: 222px;
  border-radius: 12px;
  background: white;
`;
export const BlackPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgb(0, 0, 0, 0.5);
`;
