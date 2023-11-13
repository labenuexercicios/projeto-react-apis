import styled from "styled-components";

export const BarraProgressoContainer = styled.div`
  height: 8px;
  width: 100%;
  background-color: #fff;
  border-radius: 40px;
`;

export const LinhaProgresso = styled.div`
  height: 100%;
  width: ${props => `${props.progress}%`};
  background-color: ${props => props.backgroundColor};
  border-radius: 40px;
`;
