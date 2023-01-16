import styled from "styled-components";
import pokemonLogo from '../../imgs/pokemonLogo.png'

export const Head= styled.header`
    width:100%;
    height:160px;
    background-color:white;
`


export const Logo = styled.img`
    content:url(${pokemonLogo});
    position: absolute;
    width: 307px;
    height: 113px;
    left: 40vw;
    top: 21px;
`

export const ButtonPokedex = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    position: absolute;
    width: 287px;
    height: 74px;
    left: 80vw;
    top: 41px;
    background: #33A4F5;
    border-radius: 8px;
    color:white;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
`

