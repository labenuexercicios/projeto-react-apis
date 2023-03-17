import { flexbox } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Button, Heading } from "@chakra-ui/react";


export const StyledHeader = styled(Heading)`
  display: flex;
  justify-content: space-around;
  background-color: white;
  width: auto;
  height: 11vw;
  align-items: center;
`
export const StyledP = styled.p`
width: 95%;
font-style: normal;
font-weight: 700;
font-size: ${props=>props.size};
line-height: 36px;
color: #FFFFFF;
`

export const StyledBack = styled.p`
font-family: 'Poppins', sans-serif;
  width: 230px;
  height: 36px;
  font-size: 24px;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  color: #1A1A1A;
  cursor: pointer;

`

export const StyledDiv = styled.div`
   width: 230px;
  height: 36px;
  background-color: white;
`

export const StyledBackDiv = styled.div`
  display: flex;
  align-items: center;
`

export const StyledButton = styled(Button)`
display: flex;
  /* position: absolute; */
  background-color: ${props => props.color};
  color: white;
  /* margin-left: 959px ; */
  /* align-self: center; */
  border-radius: 8px;
  width: 15.3vw;
  height: 51px;
  /* padding: 4px 10px 4px 10px; */
  &:hover {
    background-color: green;
  }
`;


export const StyledImg = styled.img`
  height: 100px ;
  width: 272px;
  /* margin: 0 auto;
  align-self: center; */

`