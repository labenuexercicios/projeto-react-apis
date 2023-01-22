import styled from "styled-components";

export const StyleHeader = styled.header`
    width: auto;
    height: 160px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
`

export const StyleImg = styled.img`
    width: 307px;
    height: 113px;
    grid-column: 2;
    margin-left: 100px;
`

export const StyleButton = styled.button`
    background-color: #33A4F5;
    color: white;
    width: 287px;
    height: 74px;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    grid-column: 3;
    margin-left: 200px;
`