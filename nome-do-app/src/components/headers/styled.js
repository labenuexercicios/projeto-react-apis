import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    height: 150px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 864px){
        flex-direction: column;
        height: 300px;
        justify-content:space-around;
        align-items: center;
    }
`


export const ContainerButaoVoltar = styled.div`
    width: 15%;
    display: flex;
    justify-content: flex-end;
`

export const BotaoPokedex = styled.div`
    width: 20%;
    @media(max-width:864px){
        width: 30%;
    }
`
export const BotaoVoltar = styled.button`
    border: none;
    background-color: transparent;
    text-decoration: underline;
    text-transform: uppercase;
    width: 100%;
        @media(max-width:864px){
        width: 100%;
    }
`
export const Logo = styled.img`
    width: 90%;
`
export const BtnPokedex = styled.button`
    width: 170px;
    height: 50px;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.txtColor};
    text-transform:capitalize;
    font-size: 1rem;
    border:none;
    border-radius:8px;
    @media(max-width: 864px){
        width: 100%;
    }
`
