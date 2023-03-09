import { flexbox } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Button, Heading } from "@chakra-ui/react";


export const StyledHeader = styled(Heading)`
  display: flex;
  justify-content: center;
  background-color: white;
  width: auto;
  height: 11vw;
`
export const StyledP = styled.p`
width: 106px;
height: 36px;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #FFFFFF;
`

export const StyledButton = styled(Button)`
  position: absolute;
  background-color: #33A4F5;
  color: white;
  margin-left: 959px ;
  align-self: center;
  border-radius: 8px;
  width: 15.3vw;
  height: 51px;
  padding: 4px 10px 4px 10px;
  &:hover {
    background-color: green;
  }
`;


export const StyledImg = styled.img`
  height: 100px ;
  width: 272px;
  margin: 0 auto;
  align-self: center;

`