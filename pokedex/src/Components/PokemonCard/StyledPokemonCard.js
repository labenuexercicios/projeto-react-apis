import styled from "@emotion/styled";
import { Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react'
import { theme } from '../../theme';

const { fonts } = theme;

export const StyledCard = styled(Card)`
    border-radius: 0.7rem;
    margin-left: 2.7vw;
    margin-top: 130px;
    width: 30vw;
    height: 210px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0px 23px;
    background-color: ${props => props.color};
    position: relative;
    font-family: ${fonts.body};
    font-style: normal; 
    color: white;
`

export const StyledImg = styled.img`
    width: 13vw;
    height: 13vw;
    position: absolute;
    right: 0.7rem;
    top: -3rem;
    z-index: 2;
`

export const StyledTypes = styled.div`
    display: flex;
    margin-top: 10px;
    gap: 7px;
    z-index: 3;
`

export const StyledName = styled.h1`
    width: auto;
    height: 39px;
    left: 23px;
    top: 40px;
    font-family: ${fonts.body};
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
`

export const StyledP = styled.p`
    font-family: 'Poppins', sans-serif;
    margin-top: 25px;
    font-weight: 700;
`

export const StyledDetails = styled.p`
    font-family: 'Poppins', sans-serif;
    margin-top: 35px;
    text-decoration: underline;
    cursor: pointer;
`

export const StyledButton = styled(Button)`
    color: black;
    background-color: ${props => props.bgColor};
    width: 146px;
    height: 38px;
    align-self: end;
    margin-bottom: 13px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    margin-top: 158px;
    border: none;
    border-radius: 0.3rem;
    z-index: 2;
`

export const StyledPokebola = styled.img`
    position: absolute;
    right: 0rem;
    bottom: 0px;
    z-index: 1;
`
