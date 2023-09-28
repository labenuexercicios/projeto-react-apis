import styled from "styled-components"

export const ContainerHeader = styled.header`
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;

`
export const LogoStyle = styled.img`
    width: 150px;
`

export const ButtonPokedex = styled.button`
    background-color:#06e1cc ;
    width: 8em;
    height: 3em;
    font-family: monospace;
    font-size: 16px;
    font-weight: bolder;
    border: none;
    border-radius: 20px;
    :hover{
        box-shadow: 8px 8px 15px 12px rgba(205,205,205,0.25);
        cursor: pointer;
    }
`