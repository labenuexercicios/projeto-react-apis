import { Link as ReactLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
    padding: 0 32px;
    width: 100vw;
    height: 24vh;
    background-color: #ffffff;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    font-weight:700;

    .null{
        width:150px
    }
`

export const Logo = styled.img`
    height: 16vh;
`
export const Button = styled.button`
    background-color: #33A4F5;
    height: 3rem;
    width: 11.5rem;
    color: white;
    border: 0;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;

    :hover{
        background-color: #33A478;
    }
`
export const ButtonExcluir = styled.button`
    background-color: #FF6262;
    height: 3rem;
    width: 11rem;
    color: white;
    border: 0;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 400;

    :hover{
        background-color: #33A478;
        background-color: rgba(255, 98, 98, 0.8);

    }
`
export const Link = styled(ReactLink)`

    font-weight: 700;
    color:black;

    :hover{
                color: rgba(0, 0, 0, 0.7);

    }
`
