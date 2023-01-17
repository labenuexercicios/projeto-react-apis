import styled from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 160px;
        @media(max-width:706px) {
        display: flex;
        flex-direction: column;
    }
`;


export const DivLogo = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const DivButtons = styled(DivLogo)`
    width:25%;
`;


export const DivButtonVoltar = styled(DivLogo)`
    width:25%;
`

export const ImagemTitle = styled.img`
    height: 100%;
    width: auto;
`

export const StyledButton = styled.button`
    height: 74px;
    width: 287px;
    background-color:#33A4F5;
    color:white;
    font-size:1vw;
    text-transform:capitalize;
    border-radius:8px;
    padding: 4px, 10px, 4px, 10px;
    border:none;
`
