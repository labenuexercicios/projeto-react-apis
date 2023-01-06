import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: #5E5E5E;
    padding-top: 32px;
    width: 100%;
    min-height: 128vh;

    h1{
        font-family: 'Poppins';
        font-size: 48px;
        padding-left: 40px;
        font-weight: 700;
        color: white;
    }
`

export const Cards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    padding-top: 32px;
`