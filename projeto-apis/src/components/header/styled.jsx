import styled from "styled-components";

export const ContainerHeader = styled.header`
position: relative;
height:160px;
display: flex;
justify-content: space-between;
img{
  position:absolute;
  top: 50%;
  left:50%;
  transform:translate(-50%,-50%);
}
p{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;

position: absolute;
width: 287px;
height: 74px;
left: 1550px;
top: 41px;

background: #33A4F5;
border-radius: 8px;}
`;
