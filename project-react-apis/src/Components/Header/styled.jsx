import styled from 'styled-components'


export const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 21.13vh;
    width: 100vw;
    background-color: white;
;
`

export const ImgLogo = styled.img`
    height: 75%;
    margin: 0 auto;

    &.pokedex {
     margin-left: 18.35vw;
    }

    &.list {
     margin-left: 39.1vw;
    }
`

export const BtnPokedex = styled.button`
    background-color: #33A4F5;
    height: 9.77vh;
    width: 37.91vh;
    color: white;
    border-radius: 8px;
    font-size: x-large;
    margin-right: 4vw;
;
`

export const Link = styled.a`
    color: #1A1A1A;
    font-weight: 700;   
    text-decoration: underline;
    margin-left: 7vw;
    font-size: x-large;
    
;
`
export const Span = styled.span`
    text-decoration: none;
`
export const BtnDel = styled.button`
    background-color:#FF6262;
    height: 9.77vh;
    width: 37.91vh;
    color: white;
    border-radius: 8px;
    font-size: x-large;
    font-weight: 100;
    margin-right: 4vw;
;
`